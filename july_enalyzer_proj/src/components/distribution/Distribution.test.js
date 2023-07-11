import { generateNotesAndCoins } from "./Distribution";
//unit test case 1---positive scenario
describe("notes and coins test", () => {
  test("check if number of notes and coins are correct", () => {
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

//unit test case 2--negative scenario
describe("notes and coins test",()=>{
test("check count of notes and coins are correct",()=>{
 const result2= generateNotesAndCoins(578);
 const expected2={
  notes:{
       500: 1,
  },
  bigCoins:{
    50: 1,
    20: 1,
    5:1,
    2:1,
  },
  smallCoins:{
    1: 1
  },
 };
 expect(result2).toStrictEqual(expected2);
}) 
});
