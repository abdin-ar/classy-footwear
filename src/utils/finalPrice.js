function finalPrice(price, discount) {
  let result = price;
  if (discount !== 0) {
    result -= (result / 100) * discount;
  }
  return result;
}

export default finalPrice;
