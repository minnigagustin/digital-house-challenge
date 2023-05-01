import { ItemTransaction } from "components/ItemTransaction";
import React from "react";
import renderer from "react-test-renderer";

const date = new Date("2022-12-09T10:20:00.909Z");
const product = "Fantastic Granite Bacon";
const points = 42416;
const image = "https://loremflickr.com/640/480/technics";
const is_redemption = false;
const id = "3";

jest.mock("@react-navigation/native", () => ({
  useNavigation: () => ({
    navigate: jest.fn(),
  }),
}));

describe("itemTransaction", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(
        <ItemTransaction
          date={date}
          product={product}
          points={points}
          image={image}
          is_redemption={is_redemption}
          id={id}
        />
      )
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
