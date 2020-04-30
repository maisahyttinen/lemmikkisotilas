import React from "react";
import { Flex, Heading, Text, IconButton } from "@chakra-ui/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import { Section } from "./Section";
import { Instagram } from "./Instagram";
import { HTMLContent } from "./Content";
import { markdownToHtml } from "../utils/markdown";

export const Footer = () => {
  const data = useStaticQuery(graphql`
    query FooterQuery {
      markdownRemark(frontmatter: { template: { eq: "index-page" } }) {
        frontmatter {
          footer {
            title
            description
            social {
              icon
              link
            }
          }
        }
      }
    }
  `);

  const { title, description, social } = data.markdownRemark.frontmatter.footer;

  return (
    <Section as="footer" color="backgroundGray">
      <Flex
        width={["full", "full", "2xl", "4xl"]}
        marginTop={["12", "12", "32", "20"]}
        marginBottom={["12", "12", "32", "20"]}
        paddingLeft={["5", "5", "5", "0"]}
        paddingRight={["5", "5", "5", "0"]}
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        spacing="16"
        flexWrap="wrap"
      >
        <Flex
          flex={1}
          flexDirection="column"
          marginRight={["0", "0", "4", "4"]}
          minWidth={["280px", "400px", "360px", "420px"]}
          maxWidth={["full", "500px", "600px", "800px"]}
        >
          <Heading
            as="h3"
            fontSize={["2xl", "4xl", "4xl", "3xl"]}
            fontWeight="light"
            color="brand.gray"
            textAlign={["center", "center", "center", "left"]}
            marginBottom="10"
            marginTop={["4", "6", "6", "0"]}
          >
            {title}
          </Heading>
          <Text
            as="div"
            fontWeight="light"
            fontSize={["sm", "sm", "md", "md"]}
            textAlign={["center", "center", "center", "left"]}
            letterSpacing="1px"
            marginBottom="10"
          >
            <HTMLContent content={markdownToHtml(description)} />
          </Text>
          <Flex
            flexDirection="row"
            justifyContent={["center", "center", "center", "left"]}
            alignItems="center"
            marginBottom="10"
          >
            {social.map(({ icon, link }, i) => {
              return (
                <Link key={i} to={link}>
                  <IconButton
                    rounded="full"
                    variant="outline"
                    variantColor="brandGray"
                    aria-label={icon}
                    icon={icon}
                    marginRight="4"
                  />
                </Link>
              );
            })}
          </Flex>
        </Flex>
        <Flex
          flex={1}
          marginLeft={["0", "0", "4", "4"]}
          minWidth={["280px", "400px", "360px", "420px"]}
          maxWidth={["360px", "450px", "450px", "600px"]}
        >
          <Instagram />
        </Flex>
      </Flex>
    </Section>
  );
};
