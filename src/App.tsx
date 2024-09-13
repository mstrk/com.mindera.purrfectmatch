import {SafeAreaView, StatusBar, StyleSheet} from "react-native";

import styled from "styled-components/native";
import {IconButton} from "~/components/IconButton";

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: "#fbfaff",
    ...StyleSheet.absoluteFillObject,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundStyle.backgroundColor} />
      <Root>
        <IconButton icon="unmatch" color="#E16359" elevated />
        <IconButton icon="match" color="#6BD88E" elevated />
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
