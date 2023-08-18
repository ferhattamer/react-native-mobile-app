import "react-native-gesture-handler";
import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import TabBar from "./tab-bar";
import { ThemeProvider } from "styled-components";
import Box from "../Sayfalar/Ekranlar/box";
import SearchEkrani from "./Ekranlar/search";
import HistoryEkrani from "./Ekranlar/history";
import { Sol, More } from "./ikonlar";
import FavoriteEkrani from "./Ekranlar/favorite";
import DetailEkrani from "./Ekranlar/detail";
import { SafeAreaView } from "react-native";
import theme from "./Ekranlar/tema";
import Button from "./button";
const HomeStack = createStackNavigator();
const Tab = createBottomTabNavigator();

function SearchStack() {
  return (
    <HomeStack.Navigator>
      <HomeStack.Screen
        name="Search"
        component={SearchEkrani}
        options={() => {
          return { headMode: "none", header: () => {} };
        }}
      />
      <HomeStack.Screen
        name="Detail"
        component={DetailEkrani}
        options={({ route, navigation }) => {
          return {
            title: (route.params && route.params.title) || "Detay",
            headerStyle: {
              backgroundColor: theme.colors.softRed,
              shadowColor: "transparent",
            },
            headerLeft: () => (
              <Button
                px={20}
                height="100%"
                onPress={() => navigation.navigate("Search")}
              >
                <Sol color={theme.colors.textKoyu} />
              </Button>
            ),
            headerRight: () => (
              <Button
                px={20}
                height="100%"
                onPress={() => navigation.navigate("Search")}
              >
                <More color={theme.colors.textKoyu} />
              </Button>
            ),
          };
        }}
      />
    </HomeStack.Navigator>
  );
}

function App() {
  return (
    <ThemeProvider theme={theme}>
      <NavigationContainer>
        <Tab.Navigator
          initialRouteName="Search"
          tabBar={(props) => <TabBar {...props} />}
        >
          <Tab.Screen name="History" component={HistoryEkrani} />
          <Tab.Screen
            name="Search"
            component={SearchStack}
            options={{ headerShown: false }}
          />
          <Tab.Screen name="Favorite" component={FavoriteEkrani} />
        </Tab.Navigator>
      </NavigationContainer>
    </ThemeProvider>
  );
}
export default App;
