import React from "react";
import { graphql } from "gatsby";
import { Link } from "../components/Link";
import { Heading, Divider, Stack, Flex } from "@chakra-ui/core";

import Layout from "../components/Layout";
import { Text } from "../components/Text";
import { Section } from "../components/Section";
import { Button } from "../components/Button";

export const YearsTemplate = ({ posts, years, selectedYear }) => {
  return (
    <>
      <Section color="backgroundWhite">
        <Stack
          maxWidth={["full", "full", "2xl", "2xl"]}
          width="full"
          marginTop={"20"}
          marginBottom={["12", "12", "16", "20"]}
          paddingLeft={["5", "6", "0", "0"]}
          paddingRight={["5", "6", "0", "0"]}
          flexDirection="column"
          justifyContent="space-evenly"
          alignItems="flex-start"
          spacing="10"
        >
          <Flex
            flexDirection="column"
            justifyContent="center"
            alignItems="center"
            width="full"
          >
            <Divider
              width={["10", "12", "15", "15"]}
              borderColor="brandGray"
              marginBottom="6"
            />
            <Heading
              as="h2"
              fontSize={["3xl", "3xl", "4xl", "5xl"]}
              fontWeight="light"
              color="brand.gray"
              textAlign="center"
              marginBottom="8"
            >
              Arkisto
            </Heading>
          </Flex>
          <Flex
            flexDirection="row"
            flexWrap="wrap"
            justifyContent="center"
            alignItems="center"
          >
            {years &&
              years.map((year, i) => {
                return (
                  <Link key={i} to={`/arkisto/${year}`}>
                    <Button
                      variant={year === selectedYear ? "dark" : "light"}
                      margin="1"
                    >
                      {year}
                    </Button>
                  </Link>
                );
              })}
          </Flex>
          <Stack
            flexDirection="column"
            justifyContent="center"
            alignItems="flex-start"
            spacing="10"
          >
            {posts.map(({ node }, i) => {
              const { frontmatter } = node;
              const { date, path, title } = frontmatter;
              return (
                <Link key={i} to={`/${path}`}>
                  <Text
                    fontWeight="light"
                    fontSize={["sm", "md", "md", "md"]}
                    marginBottom="4"
                  >{`${date} ${title}`}</Text>
                </Link>
              );
            })}
          </Stack>
        </Stack>
      </Section>
    </>
  );
};

const YearsPage = ({ data, pageContext }) => {
  const posts = data.allMarkdownRemark.edges;
  const { years, year } = pageContext;

  return (
    <Layout>
      <YearsTemplate posts={posts} years={years} selectedYear={year} />
    </Layout>
  );
};

export default YearsPage;

export const pageQuery = graphql`
  query PostsByYear($year: Date!) {
    allMarkdownRemark(
      filter: { fields: { year: { eq: $year } } }
      sort: { order: ASC, fields: frontmatter___date }
    ) {
      edges {
        node {
          frontmatter {
            title
            path
            date(formatString: "DD.MM.YYYY")
          }
        }
      }
    }
  }
`;
