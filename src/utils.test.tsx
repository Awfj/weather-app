import { capitalizeFirstChar, checkIfExpired } from "./utils";

it(`capitalizes first character of the given lowercased 
string of at least two characters`, () => {
  expect(capitalizeFirstChar("bus")).toBe("Bus");
});

const EXPIRATION_TIMEFRAME = 10000;
it(`checks if the given number is greater than ${EXPIRATION_TIMEFRAME}`, () => {
  expect(checkIfExpired(0, EXPIRATION_TIMEFRAME)).toBeTruthy();
  expect(
    checkIfExpired(EXPIRATION_TIMEFRAME, EXPIRATION_TIMEFRAME)
  ).toBeTruthy();
  expect(
    checkIfExpired(new Date().getTime(), EXPIRATION_TIMEFRAME)
  ).toBeFalsy();
});
