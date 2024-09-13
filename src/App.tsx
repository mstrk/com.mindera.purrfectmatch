import {SafeAreaView, StatusBar, StyleSheet} from "react-native";

import styled from "styled-components/native";
import {Typography} from "~/components/Typography";

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: "#fbfaff",
    ...StyleSheet.absoluteFillObject,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundStyle.backgroundColor} />
      <Root>
        <Typography variant="headline" text="02" color="#BFBFC0" />
        <Typography variant="title" text="Abyssinian 4" />
        <Typography variant="caption" text="Egypt" color="#BFBFC0" />
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
`;

export default App;
