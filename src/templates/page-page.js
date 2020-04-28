import React from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

import Layout from "../components/Layout";
import { Text, Heading, Divider, Stack, Box } from "@chakra-ui/core";
import { Section } from "../components/Section";
import { HTMLContent } from "../components/Content";
import Image from "gatsby-image";

export const BlogPostTemplate = ({
  date,
  header_title,
  header_description,
  title,
  excerpt,
  html,
  image,
}) => (
  <>
    <Section color="backgroundWhite">
      <Stack
        width={["full", "full", "2xl", "3xl"]}
        marginTop={"20"}
        marginBottom={["32", "32", "32", "20"]}
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
          fontSize={["3xl", "3xl", "4xl", "5xl"]}
          fontWeight="light"
          color="brand.gray"
          textAlign="center"
          marginBottom="10"
        >
          {title}
        </Heading>
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
        <Box width="full" overflow="hidden" rounded="1rem">
          <Image fluid={image.childImageSharp.fluid} />
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
  } = frontmatter;

  return (
    <Layout>
      <BlogPostTemplate
        html={html}
        date={date}
        header_title={header_title}
        header_description={header_description}
        title={title}
        excerpt={excerpt}
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
  query PageByID($id: String!) {
    markdownRemark(id: { eq: $id }) {
      id
      html
      frontmatter {
        date(formatString: "DD.MM.YYYY")
        header_title
        header_description
        title
        excerpt
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
