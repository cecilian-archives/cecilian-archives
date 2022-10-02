import Stripe from "stripe";
import { prisma } from "src/server/db/client";

export const confirmPayment = async (checkoutSession: Stripe.Event.Data.Object) => {
  console.log("Fulfilling order:", checkoutSession);
  const session = checkoutSession as any;
  const order = await prisma.salesOrder.findFirst({
    where: { id: session.metadata.orderId },
  });
  const updateResult = Boolean(order)
    ? await prisma.salesOrder.update({
        data: {
          paymentConfirmed: true,
          checkoutSession: session,
        },
        where: { id: order?.id },
      })
    : null;
  return updateResult;
};
