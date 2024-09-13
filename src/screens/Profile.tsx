import styled from "styled-components/native";
import {Typography} from "~/components/Typography";

export function ProfileScreen() {
  return (
    <Root>
      <Typography variant="headline" text="03" color="#BFBFC0" />
    </Root>
  );
}

const Root = styled.View`
  flex: 1;
  align-items: center;
  padding-vertical: 120px;
  padding-horizontal: 16px;
`;
