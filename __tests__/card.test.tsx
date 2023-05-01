import { Card } from "components/Card";
import React from "react";
import renderer from "react-test-renderer";

const points = 42416;
const month = "Diciembre";

describe("Card", () => {
  it("should render correctly", () => {
    const tree = renderer
      .create(<Card points={points} month={month} />)
      .toJSON();
    expect(tree).toMatchSnapshot();
  });
});
