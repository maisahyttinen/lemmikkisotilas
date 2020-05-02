import React from "react";
import { Text as ChakraText } from "@chakra-ui/core";

export const Text = ({ children, ...props }) => {
  return (
    <ChakraText fontWeight="light" letterSpacing="1px" {...props}>
      {children}
    </ChakraText>
  );
};
