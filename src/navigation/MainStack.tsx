import * as React from "react";
import {BottomTabBarProps, createBottomTabNavigator} from "@react-navigation/bottom-tabs";
import {Route} from "./routes";
import {Icon} from "~/components/Icon";
import {HomeScreen} from "~/screens/Home";
import {ChatScreen} from "~/screens/Chat";
import {ProfileScreen} from "~/screens/Profile";
import {StyleSheet, View, Pressable} from "react-native";

const Tab = createBottomTabNavigator();

const screenOptions = {
  headerShown: false,
  tabBarShowLabel: false,
};

function CustomTabBar({state, descriptors, navigation}: BottomTabBarProps) {
  return (
    <View style={styles.tabBar}>
      {state.routes.map((route, index) => {
        const {options} = descriptors[route.key];

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        function renderIcon() {
          const color = isFocused ? "#EC537E" : "#434141";
          if (route.name === Route.Home) {
            return <Icon name="paw" size={20} color={color} />;
          } else if (route.name === Route.Chat) {
            return <Icon name="chat" size={20} color={color} />;
          } else if (route.name === Route.Profile) {
            return <Icon name="user" size={20} color={color} />;
          }
          return null;
        }

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? {selected: true} : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}>
            {renderIcon()}
          </Pressable>
        );
      })}
    </View>
  );
}

export function MainStack() {
  return (
    // eslint-disable-next-line react/no-unstable-nested-components
    <Tab.Navigator screenOptions={screenOptions} tabBar={(props) => <CustomTabBar {...props} />}>
      <Tab.Screen name={Route.Home} component={HomeScreen} />
      <Tab.Screen name={Route.Chat} component={ChatScreen} />
      <Tab.Screen name={Route.Profile} component={ProfileScreen} />
    </Tab.Navigator>
  );
}

const styles = StyleSheet.create({
  tabBar: {
    position: "absolute",
    bottom: 32,
    width: 156,
    height: 44,
    paddingVertical: 0,
    borderRadius: 44,
    flexDirection: "row",
    alignItems: "center",
    gap: 24,
    paddingHorizontal: 24,
    backgroundColor: "#ffffff",
    alignSelf: "center",

    elevation: 10, // For Android
    shadowColor: "#BFBFC0",
    shadowOffset: {width: 0, height: 10},
    shadowOpacity: 0.3,
    shadowRadius: 16,
  },
});
