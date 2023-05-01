import { Header } from "components/Header";
import React from "react";
import renderer from "react-test-renderer";
const name = "Ruben Rodriguez";
describe("Header", () => {
  it("should render correctly", () => {
    const tree = renderer.create(<Header name={name} />).toJSON();
    expect(tree).toMatchSnapshot();
  });
});
