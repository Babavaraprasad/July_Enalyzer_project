export const denominations = [
  { name: "notes", values: [1000, 500, 200, 100, 50] },
  { name: "bigCoins", values: [20, 5, 2] },
  { name: "smallCoins", values: [10, 1] },
];

export function generateNotesAndCoins(amount) {
  const result = {};
  for (let x of denominations) {
    const { name, values } = x;
    result[name] = {};
    for (let value of values) {
      if (amount >= value) {
        const count = Math.floor(amount / value);
        result[name][value] = count;
        amount -= count * value;
      }
    }
  }
  console.log("generated notes:",result)
  return result;
}
