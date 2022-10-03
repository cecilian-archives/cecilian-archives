import type { SalesOrder, User } from "@prisma/client";
import type { OrderDetails } from "../trpc/router/salesOrders";

import Stripe from "stripe";
import { getPaymentQuantities, eventCostMap } from "./eventHelpers";

const getSingleLineItem = (name: string, unit_amount: number, quantity: number) => {
  if (!quantity) return false;
  return {
    price_data: {
      currency: "gbp",
      product_data: {
        name,
      },
      unit_amount,
    },
    quantity,
  };
};

const getLineItems = (orderDetails: OrderDetails) => {
  const { ceilidhQty, concertQty, dinnerQty, donationValue } = orderDetails;
  const { ceilidh, concert, dinner, full } = getPaymentQuantities({
    ceilidhQty,
    concertQty,
    dinnerQty,
  });
  const paymentLines = [
    { description: "Ceilidh entry", amount: eventCostMap.ceilidh, quantity: ceilidh },
    { description: "Concert ticket", amount: eventCostMap.concert, quantity: concert },
    { description: "Dinner place", amount: eventCostMap.dinner, quantity: dinner },
    {
      description: "Full weekend (ceilidh, concert and dinner)",
      amount: eventCostMap.full,
      quantity: full,
    },
    {
      description: "Donation - thank you!",
      amount: 100 * Number(donationValue),
      quantity: Number(donationValue) > 0 ? 1 : 0,
    },
  ];
  const lineItems = paymentLines
    .map((line) => {
      if (!line.quantity) return false;
      return getSingleLineItem(line.description, line.amount, line.quantity);
    })
    .filter(Boolean);
  return lineItems as Stripe.Checkout.SessionCreateParams.LineItem[];
};

type Order = SalesOrder & { user: User };

const createCheckout = async ({ order }: { order: Order }) => {
  const stripe = new Stripe(process.env.STRIPE_API_KEY as string, {} as Stripe.StripeConfig);
  const line_items = getLineItems(order.orderDetails as OrderDetails);

  const session = await stripe.checkout.sessions.create({
    customer_email: order.user.email || undefined,
    client_reference_id: order.user.id,
    metadata: {
      orderId: order.id,
    },
    line_items,
    allow_promotion_codes: true,
    mode: "payment",
    success_url: `${process.env.NEXTAUTH_URL}/dash/orders/?complete=${order.id}`,
    cancel_url: `${process.env.NEXTAUTH_URL}/dash/orders/${order.id}`,
  });

  return session;
};

export default createCheckout;
