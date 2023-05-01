import { formatDate } from "utils/index";

describe("formatDate", () => {
  it("should format date correctly", () => {
    const dateString = "2023-05-23T12:00:00.000Z";
    const expectedFormattedDate = "23 de mayo, 2023";

    const formattedDate = formatDate(dateString);

    expect(formattedDate).toEqual(expectedFormattedDate);
  });

  it("should throw an error if invalid date string is passed", () => {
    const dateString = "invalid date string";

    expect(() => formatDate(dateString)).toThrowError("Invalid Date");
  });
});
