import React from "react";
import Box from ".//Ekranlar/box";
import Input from "./Ekranlar/input";
import { Ara } from "../Sayfalar/ikonlar";
import { X } from "../Sayfalar/ikonlar";
import theme from "./Ekranlar/tema";
import Text from "./Ekranlar/text";
import { Keyboard } from "react-native";
import Button from "./Ekranlar/button";
import { useNavigation } from "@react-navigation/native";
function Search({ onChangeFocus }) {
  const [isFocus, setFocus] = React.useState(false);
  const [value, setValue] = React.useState("");
  const navigate = useNavigation();
  React.useEffect(() => {
    onChangeFocus(isFocus);
  }, [isFocus, onChangeFocus]);
  const KlavyeKapat = () => {
    setFocus(false);
    Keyboard.dismiss();
  };
  const Temizle = () => {
    setValue("");
  };
  return (
    <Box flexDirection="row" alignItems="center">
      <Box position="relative" flex={1}>
        <Input
          style={{
            shadowColor: "#000",
            shadowOpacity: 0.1,
            shadowRadius: 24,
            shadowOffset: {
              width: 0,
              height: 4,
            },
          }}
          placeholder="Türkçe Sözlük'te Ara"
          bg="white"
          height={52}
          placeholderTextColor="textOrta"
          color="textKoyu"
          pl={52}
          borderWidth={1}
          borderColor={isFocus ? "#D1D1D1" : "transparent"}
          borderRadius="normal"
          value={value}
          onFocus={() => setFocus(true)}
          onChangeText={(text) => setValue(text)}
        />
        {value.length > 0 && (
          <Button onPress={Temizle} position="absolute" right={16} top={14}>
            <X color={theme.colors.textKoyu} />
          </Button>
        )}
        <Button position="absolute" left={16} top={14}>
          <Ara color={theme.colors.textOrta} />
        </Button>
      </Box>
      {isFocus && (
        <>
          <Button
            px={30}
            height={52}
            onPress={() =>
              navigate.navigate("Detail", {
                keyword: value,
              })
            }
          >
            <Text>Ara</Text>
          </Button>
          <Button onPress={KlavyeKapat} px={15} height={52}>
            <Text>Vazgeç</Text>
          </Button>
        </>
      )}
    </Box>
  );
}
export default Search;
