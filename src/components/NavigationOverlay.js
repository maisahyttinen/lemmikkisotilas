import React from "react";
import { Flex, Heading, Text } from "@chakra-ui/core";
import useSiteMetaData from "./SiteMetadata";
import { Button } from "./Button";
import { Link } from "./Link";

export const NavigationOverlay = () => {
  const siteMetaData = useSiteMetaData();
  const { menuLinks } = siteMetaData;
  return (
    <Flex
      position="fixed"
      top="0"
      left="0"
      width="100%"
      height="100%"
      zIndex="overlay"
      backgroundColor="brandGray"
      justifyContent="center"
      alignItems="center"
      flexDirection="column"
      blockScrollOnMount={true}
    >
      <Heading fontWeight="light" color="white" marginBottom="16">
        Mitä etsit?
      </Heading>

      {menuLinks.map((link, i) => {
        if (link.variant === "button") {
          return (
            <Link key={i} to={link.to}>
              <Button variant="light" marginBottom="6">
                {link.name}
              </Button>
            </Link>
          );
        }
        return (
          <Link key={i} to={link.to}>
            <Text fontWeight="light" key={i} color="white" marginBottom="6">
              {link.name}
            </Text>
          </Link>
        );
      })}
    </Flex>
  );
};
