import { generateNotesAndCoins } from "./Distribution";

describe("notes and coins test", () => {
  test("if number of notes and coins are correct", () => {
    const result = generateNotesAndCoins(2222);
    const expected = {
      notes: {
        1000: 2,
        200: 1,
      },
      bigCoins: {
        20: 1,
        2: 1,
      },
      smallCoins: {},
    };
    expect(result).toStrictEqual(expected);
  });
});
