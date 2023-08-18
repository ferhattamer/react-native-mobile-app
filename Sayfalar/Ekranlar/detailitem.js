import React from "react";
import Box from "./box";
import Text from "./text";

export default function DetailItem({ data, children, border, ...props }) {
  const type = (data?.ozelliklerListe &&
    data.ozelliklerListe.map((_) => _.tam_adi)) || ["isim"];
  return (
    <Box position="relative" bg="white" py={20} px={28} {...props}>
      {border && (
        <Box
          position="absolute"
          left={12}
          right={12}
          top={0}
          height={1}
          bg="light"
        />
      )}

      {/* body */}
      {data ? (
        <Box>
          <Box flexDirection="row">
            <Text color="textAcik" ml={-14} mr={8}>
              {data.anlam_sira}
            </Text>
            <Text color="red">{type.join(",")}</Text>
          </Box>
          <Box mt={8}>
            <Text fontWeight="600">{data.anlam}</Text>
            {data.orneklerListe &&
              data.orneklerListe.map((ornek) => (
                <Box key={ornek.ornek_id}>
                  <Text ml={10} mt={12} color="textAcik" fontWeight="500">
                    {ornek.ornek}{" "}
                    <Text fontWeight="700">
                      {ornek.yazar_id != "0" && "-" + ornek.yazar[0].tam_adi}
                    </Text>
                  </Text>
                </Box>
              ))}
          </Box>
        </Box>
      ) : (
        children
      )}
    </Box>
  );
}
