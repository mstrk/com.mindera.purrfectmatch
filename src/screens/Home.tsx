import {useEffect, useRef, useState} from "react";
import styled from "styled-components/native";
import {Card} from "~/components/Card";
import {IconButton} from "~/components/IconButton";

async function getMatches() {
  return fetch("https://api.thecatapi.com/v1/images/search?limit=10").then((response) => response.json());
}

export function HomeScreen() {
  const stack = useRef<any[]>([]);
  const pos = useRef(0);
  const [currentMatch, setCurrentMatch] = useState<any | undefined>(undefined);

  useEffect(() => {
    getMatches().then((data) => {
      stack.current = data;
      setCurrentMatch(stack.current[0]);
    });
  }, []);

  function updateCurrentMatch() {
    // if we reached the end of the stack (out of bounds), fetch more matches and set the current position to zero
    if (pos.current === stack.current.length - 1) {
      getMatches().then((data) => {
        stack.current = data;
        pos.current = 0;
        setCurrentMatch(stack.current[0]);
      });
    } else {
      pos.current++;
      setCurrentMatch(stack.current[pos.current]);
    }
  }

  function handleUnmatch() {
    updateCurrentMatch();
  }

  function handleMatch() {
    updateCurrentMatch();
  }

  return (
    <Root>
      {currentMatch && <Card title="Abyssinian" info="4" caption="Egypt" image={currentMatch.url} />}
      <Actions>
        <IconButton icon="unmatch" color="#E16359" elevated onPress={handleUnmatch} />
        <IconButton icon="match" color="#6BD88E" elevated onPress={handleMatch} />
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
