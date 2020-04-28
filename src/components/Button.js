import React from "react";
import { Button as ChakraButton, Text } from "@chakra-ui/core";

export const Button = ({ variant, children, ...props }) => {
  const isLight = variant === "light";

  return (
    <ChakraButton
      rounded="full"
      variantColor={isLight ? "gray" : "blackAplha"}
      border={isLight ? "1px solid" : "none"}
      borderColor={isLight ? "brandGray" : "none"}
      backgroundColor={isLight ? "white" : "brandGray"}
      {...props}
    >
      <Text
        fontSize="xs"
        letterSpacing="1.8px"
        fontWeight="lighter"
        color={isLight ? "brandGray" : "white"}
        textTransform="uppercase"
        marginLeft="2"
        marginRight="2"
      >
        {children}
      </Text>
    </ChakraButton>
  );
};
