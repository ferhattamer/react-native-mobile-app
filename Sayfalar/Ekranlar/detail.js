import * as React from "react";
import SafeAreaView from "react-native-safe-area-view";
import { useFocusEffect } from "@react-navigation/native";
import { StatusBar, ScrollView } from "react-native";
import Text from "./text";
import AksiyonButton, { AksiyonButtonTitle } from "./aksiyonbutton";
import { Fav, Ses1, Parmak } from "../ikonlar";
import DetailItem from "./detailitem";

import LoaderText from "./LoaderText";
import Box from "./box";
import theme from "./tema";

function DetailEkrani({ route }) {
  const keyword = route.params.keyword;

  const [data, setData] = React.useState(null);
  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle("dark-content"), [];
    })
  );

  const getDetailData = async () => {
    const response = await fetch(
      "https://sozluk.gov.tr/gts?ara=" + keyword.toLowerCase()
    );
    const data = await response.json();
    console.log(data[0]);
    setData(data[0]);
  };
  React.useEffect(() => {
    getDetailData();
  }, []);

  return (
    <Box as={SafeAreaView} bg="softRed" flex={1}>
      <Box as={ScrollView} p={16}>
        <Box>
          <Text fontSize={32} fontWeight="bold">
            {keyword}
          </Text>
          {data?.telaffuz || data?.lisan ? (
            <Text color="textAcik" mt={6}>
              {data?.telaffuz && data?.telaffuz} {data?.lisan}
            </Text>
          ) : null}
        </Box>
        <Box flexDirection="row" mt={24}>
          <AksiyonButton disabled={!data}>
            <Ses1 width={24} height={24} color={theme.colors.textAcik} />
          </AksiyonButton>
          <AksiyonButton ml={12} disabled={!data}>
            <Fav width={24} height={24} color={theme.colors.textAcik} />
          </AksiyonButton>
          <AksiyonButton ml="auto" disabled={!data}>
            <Parmak width={24} height={24} color={theme.colors.textAcik} />
            <AksiyonButtonTitle>Türk İşaret Dili</AksiyonButtonTitle>
          </AksiyonButton>
        </Box>
        <Box mt={32}>
          {data
            ? data.anlamlarListe.map((item) => (
                <DetailItem
                  data={item}
                  key={item.anlam_sira}
                  border={item.anlam_sira != "1"}
                />
              ))
            : [1, 2, 3].map((index) => (
                <DetailItem border={index != 1} key={index}>
                  <LoaderText />
                  <LoaderText width={200} mt={10} />
                </DetailItem>
              ))}
        </Box>
      </Box>
    </Box>
  );
}
export default DetailEkrani;
