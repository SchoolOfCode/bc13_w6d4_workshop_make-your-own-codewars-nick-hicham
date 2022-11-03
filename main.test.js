import { findPyjamas } from "./main.js";
import { test, expect } from "@jest/globals";
//👉 Write your tests below here:

//test1.
test("Check if position returned is correct", () => {
  const actual = findPyjamas(["xerbso", "cosks", "ath", "ckjtae", "saamypj", "olgevs"]);
  const expected = 4;
  expect(actual).toBe(expected);
});

//test2.
test("check if a different position is correct", () => {
  const actual = findPyjamas(["cosks","xerbso", "ath", "ckjtae", "olgevs", "saamypj"]);
  const expected = 5;
  expect(actual).toBe(expected);
});

//test3.
test("check a number is returned", () => {
  const actual = findPyjamas(["cosks", "ath", "ckjtae","xerbso", "olgevs", "saamypj"]);
  const expected = "number";
  expect(typeof actual).toBe(expected);
});
