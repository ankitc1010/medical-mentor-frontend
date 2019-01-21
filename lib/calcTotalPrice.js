export default function calcTotalPrice(price) {
  const total = price + price * 0.02 * 1.19;
  return parseInt(total * 100);
}
