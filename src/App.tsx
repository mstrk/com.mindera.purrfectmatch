import {StatusBar} from "react-native";
import {enableFreeze} from "react-native-screens";
import {GestureHandlerRootView} from "react-native-gesture-handler";
import {NavigationContainer} from "@react-navigation/native";
import styled from "styled-components/native";
import {MainStack} from "~/navigation/MainStack";

// Enable react-native-screens
enableFreeze(true);

function App(): React.JSX.Element {
  return (
    <>
      <StatusBar barStyle="dark-content" backgroundColor="#fbfaff" />
      <Root>
        <NavigationContainer>
          <MainStack />
        </NavigationContainer>
      </Root>
    </>
  );
}

const Root = styled(GestureHandlerRootView)`
  flex: 1;
  background-color: #fbfaff;
`;

export default App;
