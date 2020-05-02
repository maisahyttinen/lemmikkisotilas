import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import Image from "gatsby-image";

import Layout from "../components/Layout";
import { Heading, Divider, Stack, Box } from "@chakra-ui/core";
import { Section } from "../components/Section";
import { HTMLContent } from "../components/Content";
import { Text } from "../components/Text";

export const PageTemplate = ({ date, title, subtitle, html, image }) => (
  <>
    <Section color="backgroundWhite">
      <Stack
        width={["full", "full", "2xl", "3xl"]}
        marginTop={"20"}
        marginBottom={["12", "12", "16", "20"]}
        paddingLeft={["8", "8", "0", "0"]}
        paddingRight={["8", "8", "0", "0"]}
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing="10"
      >
        <Divider width={["10", "12", "15", "15"]} borderColor="brandGray" />
        <Heading
          as="h2"
          fontSize={["3xl", "3xl", "4xl", "5xl"]}
          fontWeight="light"
          color="brand.gray"
          textAlign="center"
          marginBottom="12"
        >
          {title}
        </Heading>
        {subtitle && (
          <Heading
            as="h3"
            fontSize={["lg", "lg", "lg", "xl"]}
            fontWeight="light"
            color="brand.gray"
            textAlign="center"
            marginBottom="12"
            lineHeight="1.5"
          >
            {subtitle}
          </Heading>
        )}
        {date && (
          <Heading
            as="h3"
            fontSize={["xl", "xl", "xl", "2xl"]}
            fontWeight="light"
            color="brand.gray"
            textAlign="center"
            marginBottom="10"
          >
            {`${date} - Maisa Hyttinen`}
          </Heading>
        )}

        <Box width="full" overflow="hidden" rounded="0.5rem">
          {image && <Image fluid={image.childImageSharp.fluid} />}
        </Box>

        <Text as="div" fontWeight="light" textAlign={"left"}>
          <HTMLContent content={html} />
        </Text>
      </Stack>
    </Section>
  </>
);

const IndexPage = ({ data }) => {
  const { frontmatter, html } = data.markdownRemark;
  const {
    date,
    header_title,
    header_description,
    title,
    excerpt,
    img_path,
    subtitle,
  } = frontmatter;

  return (
    <Layout seoTitle={header_title} seoDescription={header_description}>
      <PageTemplate
        html={html}
        date={date}
        title={title}
        excerpt={excerpt}
        subtitle={subtitle}
        image={img_path}
      />
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
  query BlogPostByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        header_title
        header_description
        title
        excerpt
        subtitle
        img_path {
          childImageSharp {
            fluid(maxWidth: 1000) {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`;
