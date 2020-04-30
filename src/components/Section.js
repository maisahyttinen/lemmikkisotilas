import React from "react";
import { Flex } from "@chakra-ui/core";

export const Section = ({ color, children }) => {
  return (
    <Flex
      width="full"
      minHeight="20"
      justifyContent="center"
      alignItems="center"
      backgroundColor={color ? color : "white"}
    >
      {children}
    </Flex>
  );
};
