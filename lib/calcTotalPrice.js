export default function calcTotalPrice(price) {
  const total = price + price * 0.02 * 1.18;
  return parseFloat(total * 100).toFixed(2);
}
