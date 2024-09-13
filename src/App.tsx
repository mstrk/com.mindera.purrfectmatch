import {SafeAreaView, StatusBar, StyleSheet} from "react-native";

import styled from "styled-components/native";
import {Card} from "~/components/Card";

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: "#fbfaff",
    ...StyleSheet.absoluteFillObject,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundStyle.backgroundColor} />
      <Root>
        <Card title="Abyssinian" info="4" caption="Egypt" image="https://cdn2.thecatapi.com/images/MTc1MDkyNQ.jpg" />
      </Root>
    </SafeAreaView>
  );
}

const Root = styled.View`
  flex: 1;
  background-color: #fbfaff;
  justify-content: center;
  align-items: center;
  gap: 24px;
  padding-horizontal: 16px;
`;

export default App;
