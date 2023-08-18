import { FlatList, StatusBar, Animated, ActivityIndicator } from "react-native";
import * as React from "react";
import { Logo } from "../ikonlar";
import Search from "../search";
import Box from "./box";
import Text from "./text";
import Bg from "./bg";
import theme from "./tema";
import SafeAreaView from "react-native-safe-area-view";
import { useFocusEffect } from "@react-navigation/native";
import { CardTitle, CardSummary, CardContainer } from "./card";
import { SimpleCardContainer, SimpleCardTitle } from "./simpleCard";

const DATA = [
  {
    id: "1",
    title: "First Item 1",
    summary: "açıklama 1",
  },
  {
    id: "2",
    title: "First Item 2",
    summary: "açıklama 2",
  },
  {
    id: "3",
    title: "First Item 3",
    summary: "açıklama 3",
  },
];
function SearchEkrani({ navigation }) {
  const [isSearchFocus, setSearchFocus] = React.useState(false);
  const [fadeAnim] = React.useState(new Animated.Value(260));
  const [opaklik] = React.useState(new Animated.Value(1));
  const [homeData, setHomeData] = React.useState(null);

  const getHomeData = async () => {
    const response = await fetch("https://sozluk.gov.tr/icerik");
    const data = await response.json();
    setHomeData(data);
  };
  React.useEffect(() => {
    getHomeData();
  }, []);

  React.useEffect(() => {
    if (isSearchFocus) {
      //opaklık
      Animated.timing(opaklik, {
        useNativeDriver: false,
        toValue: 0,
        duration: 500,
      }).start();
      //yükseklik
      Animated.timing(fadeAnim, {
        useNativeDriver: false,
        toValue: 84,
        duration: 500,
      }).start();
    } else {
      //opaklik
      Animated.timing(opaklik, {
        useNativeDriver: false,
        toValue: 1,
        duration: 500,
      }).start();
      //yükseklik
      Animated.timing(fadeAnim, {
        useNativeDriver: false,
        toValue: 260,
        duration: 500,
      }).start();
    }
  });

  useFocusEffect(
    React.useCallback(() => {
      StatusBar.setBarStyle(isSearchFocus ? "dark-content" : "light-content"),
        [];
    })
  );
  return (
    <Box as={SafeAreaView} bg={isSearchFocus ? "softRed" : "red"} flex={1}>
      {/*baslık*/}
      <Box as={Animated.View} position="relative" zIndex={1} height={fadeAnim}>
        <Box mt={-45} as={Animated.View} style={{ opacity: opaklik }}>
          <Bg>
            {/* logo */}
            <Box flex={1} alignItems="center" justifyContent="center">
              <Logo width={120} color="white" />
            </Box>
          </Bg>
        </Box>

        {/*arama*/}
        <Box
          position="absolute"
          left={0}
          bottom={isSearchFocus ? 0 : -42}
          p={16}
          width="100%"
        >
          <Search onChangeFocus={(status) => setSearchFocus(status)} />
        </Box>
      </Box>
      <Box flex={1} bg="softRed" pt={isSearchFocus ? 0 : 26}>
        {isSearchFocus ? (
          <Box flex={1}>
            {
              <FlatList
                style={{ padding: 16 }}
                data={DATA}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                  <Box py={6}>
                    <SimpleCardContainer>
                      <SimpleCardTitle>{item.title}</SimpleCardTitle>
                    </SimpleCardContainer>
                  </Box>
                )}
                ListHeaderComponent={
                  <Text mb={10} color="textAcik">
                    Son Arananlar
                  </Text>
                }
              />
            }
          </Box>
        ) : (
          <Box px={16} py={40} flex={1}>
            <Box>
              <Text color={theme.colors.textAcik}>Bir Kelime</Text>
              <CardContainer
                mt={10}
                onPress={() =>
                  navigation.navigate("Detail", {
                    keyword: homeData?.kelime[0].madde,
                  })
                }
              >
                {homeData ? (
                  <>
                    <CardTitle>
                      {homeData && homeData.kelime[0].madde}
                    </CardTitle>
                    <CardSummary>
                      {homeData && homeData.kelime[0].anlam}
                    </CardSummary>
                  </>
                ) : (
                  <ActivityIndicator />
                )}
              </CardContainer>
            </Box>
            <Box mt={40}>
              <Text color={theme.colors.textAcik}>Bir deyim - Atasözü</Text>
              <CardContainer
                mt={10}
                onPress={() =>
                  navigation.navigate("Detail", {
                    keyword: homeData?.atasoz[0].madde,
                  })
                }
              >
                <CardTitle>{homeData && homeData.atasoz[0].madde}</CardTitle>
                <CardSummary>
                  {homeData && homeData.atasoz[0].anlam}
                </CardSummary>
              </CardContainer>
            </Box>

            {/*<FlatList
              data={DATA}
              renderItem={({ item }) => (
                <Box py={5}>
                  <CardContainer>
                    <CardTitle>{item.title}</CardTitle>
                    <CardSummary>{item.summary}</CardSummary>
                  </CardContainer>
                </Box>
              )}
              keyExtractor={(item) => item.id}
              />*/}
          </Box>
        )}
      </Box>
    </Box>
  );
}

export default SearchEkrani;
