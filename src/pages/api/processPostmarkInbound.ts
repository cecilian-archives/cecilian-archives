import type { NextApiRequest, NextApiResponse } from "next";
import { prisma } from "src/server/db/client";
import { ServerClient } from "postmark";
import { chunkArray } from "src/utils/chunkArray";

const postmark = new ServerClient(process.env.POSTMARK_SERVER_TOKEN || "");
const POSTMARK_BATCH_SEND_MAX = 500;
const chunkForSending = (items: any[]) => chunkArray(items, POSTMARK_BATCH_SEND_MAX);

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Invoked processPostmarkInbound function");

  if (req.method !== "POST") {
    return res.status(400).json(`Verb mismatch. You cannot ${req.method} this endpoint.`);
  }

  const { token } = req.query;
  if (token !== process.env.POSTMARK_VERIFICATION_TOKEN) {
    return res
      .status(401)
      .json("Verification failure. You are not authorized to invoke this function.");
  }

  const parsedBody = JSON.parse(req.body);
  const [localPart] = parsedBody.OriginalRecipient.split("@");
  const [listSlug, plusHash] = localPart.split("+");

  console.log(`Attempting send to list ${listSlug}`);
  const { FromFull, ReplyTo, Subject, TextBody, HtmlBody, Attachments } = parsedBody;

  const [, senderDomain] = FromFull?.Email?.split?.("@") || [];
  if (senderDomain !== process.env.POSTMARK_SENDER_DOMAIN) {
    return res
      .status(403)
      .json(
        `Verification failure. Your domain ${senderDomain} is not authorized to send to this list.`
      );
  }

  const mailingList = await prisma.mailingList.findUnique({
    where: { slug: listSlug },
    include: { subscriptions: { select: { email: true } } },
  });
  if (!mailingList) {
    return res
      .status(422)
      .json(
        `Data failure. You are attempting to send to the "${listSlug}" list, which does not exist.`
      );
  }
  if (!mailingList.subscriptions.length) {
    return res
      .status(422)
      .json(`Data failure. The "${listSlug}" list has no subscriptions. Aborting send.`);
  }

  const recipientEmails = mailingList.subscriptions.map((subscription) => {
    const emailAddress = subscription.email;
    return {
      From: FromFull.Name ? `"${FromFull.Name}" <${FromFull.Email}>` : FromFull.Email,
      To: emailAddress,
      ReplyTo,
      Subject,
      TextBody,
      HtmlBody,
      Attachments,
      MessageStream: `list-${listSlug}`,
    };
  });
  const recipientBatches = chunkForSending(recipientEmails);

  try {
    await Promise.all(recipientBatches.map((batch) => postmark.sendEmailBatch(batch)));
  } catch (err) {
    console.error(err);
    return res.status(500);
  }

  return res.status(200);
};

export default handler;
