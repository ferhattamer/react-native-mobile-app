import { Text, StatusBar } from "react-native";
import * as React from "react";
import Box from "../Ekranlar/box";
import SafeAreaView from "react-native-safe-area-view";
import { useFocusEffect } from "@react-navigation/native";
function HistoryEkrani() {
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content"), [];
    })
  );

  return (
    <Box as={SafeAreaView} flex={1}>
      <Text>Arama Geçmişi</Text>
    </Box>
  );
}
export default HistoryEkrani;
