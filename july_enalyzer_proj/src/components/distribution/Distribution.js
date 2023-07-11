export const denominations = [
    { name: 'notes', values: [1000, 500, 200, 100, 50] },
    { name: 'bigCoins', values: [20, 5, 2] },
    { name: 'smallCoins', values: [10, 1] }
];
//denominations.find((d) => d.name === "notes").values.push()

export function generateNotesAndCoins(amount) {
    const result = {};
    for (let denomination of denominations) {
      const { name, values } = denomination;
      result[name] = {};
      for (let value of values) {
        if (amount >= value) {
          const count = Math.floor(amount / value);
          result[name][value] = count;
          amount -= count * value;
        }
      }
    }
    return result;
}
  