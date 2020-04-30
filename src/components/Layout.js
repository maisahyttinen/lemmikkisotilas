import React, { useState } from "react";
import { Box, Flex } from "@chakra-ui/core";
import NavigationButton from "./NavigationButton";
import useSiteMetadata from "./SiteMetadata";
import { NavigationOverlay } from "./NavigationOverlay";
import { Footer } from "../components/Footer";
import { HelmetSeo } from "./HelmetSeo";

const TemplateWrapper = ({ children, seoTitle, seoDescription }) => {
  const { title, description } = useSiteMetadata();

  const [showNavigation, setShowNavigation] = useState(false);

  return (
    <Box width="full">
      <HelmetSeo
        title={seoTitle ? seoTitle : title}
        description={seoDescription ? seoDescription : description}
      />
      <NavigationButton
        onClick={() => setShowNavigation(!showNavigation)}
        isNavigatioShown={showNavigation}
      />
      <Flex flex="1" flexDirection="column">
        {children}
      </Flex>
      <Footer />
      {showNavigation && <NavigationOverlay />}
    </Box>
  );
};

export default TemplateWrapper;
