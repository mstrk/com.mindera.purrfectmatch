import styled from "styled-components/native";
import {Card} from "~/components/Card";
import {IconButton} from "~/components/IconButton";

export function HomeScreen() {
  return (
    <Root>
      <Card title="Abyssinian" info="4" caption="Egypt" image="https://cdn2.thecatapi.com/images/MTc1MDkyNQ.jpg" />
      <Actions>
        <IconButton icon="unmatch" color="#E16359" elevated />
        <IconButton icon="match" color="#6BD88E" elevated />
      </Actions>
    </Root>
  );
}

const Root = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-horizontal: 16px;
`;

const Actions = styled.View`
  flex-direction: row;
  margin-top: 58px;
  gap: 48px;
`;
