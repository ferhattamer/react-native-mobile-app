import React from "react";
import Box from "./box";
import Text from "./text";
import theme from "./tema";
import Button from "./button";

export function CardContainer({ children, ...props }) {
  return (
    <Button py={16} px={12} bg="white" borderRadius="normal" {...props}>
      <Box flex={1} borderLeftWidth={3} borderLeftColor="light" pl={12}>
        {children}
      </Box>
    </Button>
  );
}
export function CardTitle({ children }) {
  return (
    <Text fontSize={18} fontWeight="bold">
      {children}
    </Text>
  );
}
export function CardSummary({ children }) {
  return (
    <Text color={theme.colors.textOrta} fontSize={14} mt={8}>
      {children}
    </Text>
  );
}
