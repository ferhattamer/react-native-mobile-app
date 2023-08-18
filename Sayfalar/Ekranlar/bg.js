import * as React from "react";
import { ImageBackground } from "react-native";

import Box from "./box";

import bg from "../resim/kirmizi.jpg";

function Bg({ children, ...props /*kapsayıcısına birşeyler eklemek için*/ }) {
  return (
    <Box
      as={ImageBackground}
      source={bg}
      style={{ width: "100%", height: "100%" }}
      {...props}
    >
      {children}
    </Box>
  );
}
export default Bg;
