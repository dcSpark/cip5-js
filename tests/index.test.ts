import Cip5 from "../index";

test("Asset prefix is properly set", () => {
  expect(Cip5.hashes.asset).toEqual("asset");
});
