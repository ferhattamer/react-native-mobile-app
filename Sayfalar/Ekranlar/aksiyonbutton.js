import React from "react";
import Button from "../button";
import Text from "./text";

function AksiyonButton({ children, ...props }) {
  return (
    <Button
      style={{
        shadowColor: "#000",
        shadowOpacity: 0.16,
        shadowRadius: 4,
        shadowOffset: {
          width: 0,
          height: 1,
        },
      }}
      minWidth="aksiyonButton"
      height="aksiyonButton"
      borderRadius="full"
      bg="white"
      px={8}
      {...props}
    >
      {children}
    </Button>
  );
}
export function AksiyonButtonTitle({ children, ...props }) {
  return (
    <Text color="textAcik" ml={8} mr={8} fontWeight="bold" {...props}>
      {children}
    </Text>
  );
}

export default AksiyonButton;
