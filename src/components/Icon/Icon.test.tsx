import {render} from "@testing-library/react-native";
import {Icon} from "./Icon";

describe("Icon Component", () => {
  it("renders correctly with default props", () => {
    const {toJSON} = render(<Icon name="match" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders correctly with custom size and color", () => {
    const {toJSON} = render(<Icon name="unmatch" size={48} color="#FF0000" />);
    expect(toJSON()).toMatchSnapshot();
  });

  it("renders the correct icon based on the name prop", () => {
    const testID = "paw-icon";
    const {getByTestId} = render(<Icon name="paw" testID={testID} />);
    const svgElement = getByTestId(testID);
    expect(svgElement).toBeTruthy();
  });

  it("applies the correct size to the SVG element", () => {
    const testID = "chat-icon";
    const {getByTestId} = render(<Icon name="chat" size={64} testID={testID} />);
    const svgElement = getByTestId(testID);
    expect(svgElement.props.width).toBe(64);
    expect(svgElement.props.height).toBe(64);
  });
});
