export default function calcTotalPrice(price) {
  const total = price + price * 0.0175;
  return parseFloat(total * 100, 2);
}
