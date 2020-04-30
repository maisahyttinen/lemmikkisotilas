import React from "react";
import { IconButton } from "@chakra-ui/core";

const NavigationButton = ({ onClick, isNavigatioShown }) => {
  return (
    <IconButton
      position="fixed"
      top={[5, 5, 5, 10]}
      size="lg"
      right={[5, 5, 5, 10]}
      zIndex="popover"
      backgroundColor="brandGray"
      color="white"
      aria-label="Menu"
      icon={isNavigatioShown ? "close" : "menu"}
      rounded="full"
      onClick={onClick}
    >
      testing
    </IconButton>
  );
};

export default NavigationButton;
