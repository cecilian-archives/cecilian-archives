const ticketTypes = ["ceilidh", "concert", "dinner", "full"] as const;

interface CostInputs {
  ceilidhQty?: number;
  concertQty?: number;
  dinnerQty?: number;
}

export const eventCostMap = {
  ceilidh: 1500,
  concert: 1200,
  dinner: 4000,
  full: 6000,
};

export const getPaymentQuantities = ({ ceilidhQty, concertQty, dinnerQty }: CostInputs) => {
  const ceilidhQtyNorm = !ceilidhQty || ceilidhQty < 0 ? 0 : ceilidhQty;
  const concertQtyNorm = !concertQty || concertQty < 0 ? 0 : concertQty;
  const dinnerQtyNorm = !dinnerQty || dinnerQty < 0 ? 0 : dinnerQty;
  const lowestQty = Math.min(ceilidhQtyNorm, concertQtyNorm, dinnerQtyNorm);
  const adjustedQuantities = {
    ceilidh: ceilidhQtyNorm - lowestQty,
    concert: concertQtyNorm - lowestQty,
    dinner: dinnerQtyNorm - lowestQty,
    full: lowestQty,
  };
  return adjustedQuantities;
};

export const getTotalCost = ({ ceilidhQty, concertQty, dinnerQty }: CostInputs) => {
  const adjustedQuantities = getPaymentQuantities({ ceilidhQty, concertQty, dinnerQty });
  const individualCosts = ticketTypes.map(
    (eventName) => eventCostMap[eventName] * adjustedQuantities[eventName]
  );
  return individualCosts.reduce((acc, cost) => acc + cost, 0);
};

export const numberiseInputs = ({
  ceilidhQtyVal,
  concertQtyVal,
  dinnerQtyVal,
  donationVal,
}: {
  [key: string]: string;
}) => {
  const ceilidhQty = (ceilidhQtyVal && parseInt(ceilidhQtyVal)) || 0;
  const concertQty = (concertQtyVal && parseInt(concertQtyVal)) || 0;
  const dinnerQty = (dinnerQtyVal && parseInt(dinnerQtyVal)) || 0;
  const donationValue = (donationVal && parseFloat(donationVal)) || 0;
  return { ceilidhQty, concertQty, dinnerQty, donationValue };
};
