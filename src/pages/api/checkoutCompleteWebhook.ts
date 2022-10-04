import type { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import { confirmPayment } from "src/server/checkout/confirmPayment";

const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {} as Stripe.StripeConfig);

export const config = {
  api: {
    bodyParser: false,
  },
};

const handler = async (req: NextApiRequest, res: NextApiResponse) => {
  console.log("Invoked checkoutCompleteWebhook function");

  if (req.method !== "POST") {
    return res.status(400).json(`Verb mismatch. You cannot ${req.method} this endpoint.`);
  }

  const payload = req.body;
  const signature = req.headers["stripe-signature"] as string;
  let stripeEvent;

  console.log(payload, signature);

  try {
    stripeEvent = stripe.webhooks.constructEvent(
      payload,
      signature,
      process.env.STRIPE_ENDPOINT_SECRET as string
    );
  } catch (err: any) {
    return res.status(400).json({ message: `Webhook Error: ${err.message}` });
  }

  try {
    // Handle the checkout.session.completed event
    if (stripeEvent.type === "checkout.session.completed") {
      const session = stripeEvent.data.object;
      await confirmPayment(session);
    }
    return res.status(200).send("checkoutCompleteWebhook function success");
  } catch (err) {
    console.error(err);
    return res.status(500).send("Could not complete webhook successfully");
  }
};

export default handler;
