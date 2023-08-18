import React from "react";
import Button from "./button";
import FontAwesome from "react-native-vector-icons/FontAwesome";
import Fontisto from "react-native-vector-icons/Fontisto";
import Box from "./Ekranlar/box";
import { Ara } from "../Sayfalar/ikonlar";

function TabBar({ state, descriptors, navigation }) {
  return (
    <Box
      pb="20"
      bg="white"
      flexDirection="row"
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.1,
        shadowRadius: 20,
      }}
    >
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            // The `merge: true` option makes sure that the params inside the tab screen are preserved
            navigation.navigate({ name: route.name, merge: true });
          }
        };

        return label === "Search" ? (
          <Box key={label} p={15} bg="white" mt={-15} borderRadius="full">
            <Button size={56} bg="red" borderRadius="full" onPress={onPress}>
              <Ara stroke="white" />
            </Button>
          </Box>
        ) : (
          <Button
            key={label}
            pt={6}
            flexDirection="column"
            height={56}
            flex={1}
            onPress={onPress}
          >
            {label === "History" && <FontAwesome size={25} name="history" />}
            {label === "Favorite" && <Fontisto size={25} name="favorite" />}
            <Box
              size={4}
              bg={isFocused ? "red" : "white"}
              borderRadius="full"
              mt={6}
            />
          </Button>
        );
      })}
    </Box>
  );
}

export default TabBar;
