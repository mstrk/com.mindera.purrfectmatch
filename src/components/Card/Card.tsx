import styled from "styled-components/native";
import {Typography} from "~/components/Typography";

export type Props = {
  title: string;
  info: string;
  caption: string;
  image: string;
};

export function Card(props: Props) {
  const {title, info, image, caption} = props;

  const elevationStyle = {
    elevation: 10, // For Android
    shadowColor: "#BFBFC0",
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 16,
  };

  return (
    <Root style={elevationStyle}>
      <Image source={{uri: image}} />
      <InfoContainer>
        <Info>
          <Row>
            <Typography variant="title" text={title} />
            <Typography variant="title" text={info} />
          </Row>
          <Typography variant="caption" text={caption} color="#BFBFC0" />
        </Info>
      </InfoContainer>
    </Root>
  );
}

const Root = styled.View`
  width: 100%;
  height: 446px;
  background-color: #ffffff;
  border-radius: 16px;
`;

const Image = styled.Image`
  height: 100%;
  border-radius: 16px;
`;

const InfoContainer = styled.View`
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  padding-horizontal: 16px;
`;

const Info = styled.View`
  background-color: #ffffff;
  padding-vertical: 8px;
  padding-horizontal: 16px;
  border-top-left-radius: 16px;
  border-top-right-radius: 16px;
`;

const Row = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;
