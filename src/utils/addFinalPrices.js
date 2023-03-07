import finalPrice from "./finalPrice";

export default function addFinalPrices(data) {
  data.forEach((item) => {
    item.finalPrice =
      item.discount === 0 ? item.price : finalPrice(item.price, item.discount);
  });
  return data;
}
