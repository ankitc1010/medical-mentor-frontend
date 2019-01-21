export default function calcTotalPrice(price) {
  const total = price + price * 0.0225;
  return parseFloat(total * 100).toFixed(2);
}
