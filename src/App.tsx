import {SafeAreaView, StatusBar, StyleSheet} from "react-native";

import styled from "styled-components/native";
import {Icon} from "~/components/Icon";

function App(): React.JSX.Element {
  const backgroundStyle = {
    backgroundColor: "#fbfaff",
    ...StyleSheet.absoluteFillObject,
  };

  return (
    <SafeAreaView style={backgroundStyle}>
      <StatusBar barStyle="dark-content" backgroundColor={backgroundStyle.backgroundColor} />
      <Root>
        <Icon name="unmatch" color="#E16359" />
        <Icon name="match" color="#6BD88E" />
        <Icon name="paw" color="#EC537E" />
        <Icon name="chat" />
        <Icon name="user" />
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
