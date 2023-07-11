import { DistributionModel } from "./Distribution";

const distributionModel = DistributionModel.create();

describe('notes and coins test', () => {
    test('if no of notes and coins are correct', () => {
      const result= distributionModel.getNotesAndCoins(2222);
      expect(result).toStrictEqual({1000:1, 200:1, 20:1, 2:1});

    });
});



