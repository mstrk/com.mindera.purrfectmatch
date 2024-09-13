import React from "react";
import {render} from "@testing-library/react-native";
import {Typography} from "./Typography";

describe("Typography Component", () => {
  it("renders headline variant correctly", () => {
    const text = "Headline Text";
    const {getByText} = render(<Typography variant="headline" text={text} />);
    const element = getByText(text);
    expect(element).toBeTruthy();
    expect(element.props.style.fontFamily).toBe("Nunito Sans");
    expect(element.props.style.fontSize).toBe(126);
    expect(element.props.style.fontWeight).toBe("700");
    expect(element.props.style.color).toBe("#434141");
  });

  it("renders title variant correctly", () => {
    const text = "Title Text";
    const {getByText} = render(<Typography variant="title" text={text} />);
    const element = getByText(text);
    expect(element).toBeTruthy();
    expect(element.props.style.fontFamily).toBe("Nunito Sans");
    expect(element.props.style.fontSize).toBe(16);
    expect(element.props.style.fontWeight).toBe("700");
    expect(element.props.style.color).toBe("#434141");
  });

  it("renders caption variant correctly", () => {
    const text = "Caption Text";
    const {getByText} = render(<Typography variant="caption" text={text} />);
    const element = getByText(text);
    expect(element).toBeTruthy();
    expect(element.props.style.fontFamily).toBe("Nunito Sans");
    expect(element.props.style.fontSize).toBe(8);
    expect(element.props.style.fontWeight).toBe("700");
    expect(element.props.style.color).toBe("#434141");
  });

  it("applies custom color correctly", () => {
    const text = "Custom Color Text";
    const customColor = "#FF5733";
    const {getByText} = render(<Typography variant="title" text={text} color={customColor} />);
    const element = getByText(text);
    expect(element).toBeTruthy();
    expect(element.props.style.color).toBe(customColor);
  });
});
