import {type TextProps} from "react-native";
import styled from "styled-components/native";

export interface Props extends TextProps {
  variant: "headline" | "title" | "caption";
  text: string;
  color?: string;
}

export function Typography(props: Props) {
  const {variant, text, color = "#434141", ...rest} = props;

  switch (variant) {
    case "headline":
      return (
        <Headline color={color} {...rest}>
          {text}
        </Headline>
      );
    case "title":
      return (
        <Title color={color} {...rest}>
          {text}
        </Title>
      );
    case "caption":
      return (
        <Caption color={color} {...rest}>
          {text}
        </Caption>
      );
    default:
      return null;
  }
}

type FontProps = {
  color?: string;
  bold?: boolean;
  italic?: boolean;
};

const Headline = styled.Text<FontProps>`
  color: ${({color}) => color};
  font-family: Nunito Sans;
  font-size: 126px;
  font-style: normal;
  font-weight: 700;
  line-height: 171.86px;
`;

const Title = styled.Text<FontProps>`
  color: ${({color}) => color};
  font-family: Nunito Sans;
  font-size: 16px;
  font-weight: 700;
  line-height: 20px;
`;

const Caption = styled.Text<FontProps>`
  color: ${({color}) => color};
  font-family: Nunito Sans;
  font-size: 8px;
  font-weight: 700;
  line-height: 10px;
`;
