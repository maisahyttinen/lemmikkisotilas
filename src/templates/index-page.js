import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/Layout";
import { Box, Flex, Text, Heading, Stack, Divider } from "@chakra-ui/core";
import { Section } from "../components/Section";
import { Button } from "../components/Button";
import { HTMLContent } from "../components/Content";
import { markdownToHtml } from "../utils/markdown";
import { SpotlightSection } from "../components/SpotlightSection";
import { Link } from "../components/Link";

export const IndexPageTemplate = ({ main, intro, spotlight }) => (
  <>
    <Section color="backgroundWhite">
      <Flex
        width={["xs", "sm", "md", "5xl"]}
        marginTop={["16", "26", "32", "20"]}
        marginBottom={["12", "12", "32", "26"]}
        flexDirection="row"
        justifyContent="space-evenly"
        alignItems="center"
        flexWrap="wrap"
      >
        <Box
          width="full"
          height="full"
          maxWidth={["3xs", "3xs", "2xs", "xs"]}
          rounded="full"
          overflow="hidden"
        >
          <Image fluid={main.image.childImageSharp.fluid} alt="" />
        </Box>
        <Stack
          flexDirection="column"
          justifyContent="center"
          alignItems={["center", "center", "center", "flex-start"]}
          maxWidth={["full", "full", "md", "md"]}
          marginTop={["6", "6", "6", "0"]}
          padding={[3, 3, 3, 3]}
          spacing={[5, 5, 8, 8]}
        >
          <Heading
            fontSize={["3xl", "4xl", "5xl", "5xl"]}
            fontWeight="light"
            color="brand.gray"
            textAlign={["center", "center", "center", "left"]}
            as="h1"
          >
            {main.title}
          </Heading>
          <Text
            fontSize={["md", "xl", "xl", "xl"]}
            fontWeight="light"
            textAlign={["center", "center", "center", "left"]}
            as="h2"
          >
            {main.description}
          </Text>
          <Flex>
            {main.buttons &&
              main.buttons.map((button, i) => {
                return (
                  <Link key={i} to={button.url}>
                    <Button variant="dark" margin={3}>
                      {button.title}
                    </Button>
                  </Link>
                );
              })}
          </Flex>
        </Stack>
      </Flex>
    </Section>
    <Section color="backgroundGray">
      <Stack
        width={["full", "full", "2xl", "3xl"]}
        marginTop={["12", "12", "32", "20"]}
        marginBottom={["12", "12", "32", "20"]}
        paddingLeft={["5", "6", "0", "0"]}
        paddingRight={["5", "6", "0", "0"]}
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing="10"
      >
        <Divider width={["10", "12", "15", "15"]} borderColor="brandGray" />
        <Heading
          as="h2"
          fontSize={["3xl", "3xl", "4xl", "4xl"]}
          fontWeight="light"
          color="brand.gray"
          textAlign={["center", "center", "center", "left"]}
          marginBottom="10"
        >
          {intro.title}
        </Heading>
        <Text
          as="div"
          fontWeight="light"
          textAlign={"center"}
          fontSize={["md", "md", "lg", "xl"]}
          lineHeight={["lg", "lg", "xl", "2xl"]}
        >
          <HTMLContent content={markdownToHtml(intro.description)} />
        </Text>
        <Flex flexWrap="wrap" justifyContent="center">
          {intro.buttons &&
            intro.buttons.map((button, i) => {
              return (
                <Link key={i} to={button.url}>
                  <Button key={i} variant="dark" margin={3}>
                    {button.title}
                  </Button>
                </Link>
              );
            })}
        </Flex>
      </Stack>
    </Section>
    <SpotlightSection {...spotlight} />
  </>
);

const IndexPage = ({ data }) => {
  const { frontmatter } = data.markdownRemark;
  const { main, intro, spotlight } = frontmatter;

  return (
    <Layout
      seoTitle={frontmatter.header_title}
      seoDescription={frontmatter.header_description}
    >
      <IndexPageTemplate main={main} intro={intro} spotlight={spotlight} />
    </Layout>
  );
};

IndexPage.propTypes = {
  data: PropTypes.shape({
    markdownRemark: PropTypes.shape({
      frontmatter: PropTypes.object,
    }),
  }),
};

export default IndexPage;

export const pageQuery = graphql`
  query MyQuery {
    markdownRemark(frontmatter: { template: { eq: "index-page" } }) {
      frontmatter {
        template
        header_title
        header_description
        main {
          description
          title
          image {
            childImageSharp {
              fluid(maxWidth: 500) {
                ...GatsbyImageSharpFluid
              }
            }
          }
          buttons {
            title
            url
          }
        }
        intro {
          description
          title
          buttons {
            title
            url
          }
        }
        spotlight {
          description
          footer
          title
          buttons {
            title
            url
          }
        }
        footer {
          title
          description
        }
      }
    }
  }
`;
