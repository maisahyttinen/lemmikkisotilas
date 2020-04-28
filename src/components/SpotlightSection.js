import React from "react";
import { Stack, Divider, Flex, Heading, Box, Text } from "@chakra-ui/core";
import { useStaticQuery, graphql, Link } from "gatsby";
import Image from "gatsby-image";
import { Button } from "./Button";
import { Section } from "./Section";

const TextSide = ({ title, excerpt, path, post_button_label }) => {
  return (
    <Flex
      flex="1"
      minWidth={["full", "full", "full", "380px"]}
      maxWidth={["full", "full", "full", "380px"]}
      flexDirection="column"
      alignItems="flex-start"
      justifyContent="space-evenly"
      marginRight={[0, 0, 5, 5]}
      marginLeft={[0, 0, 5, 5]}
    >
      <Flex
        width="full"
        justifyContent={["center", "center", "flex-start", "flex-start"]}
      >
        <Divider
          width={["10", "12", "15", "15"]}
          borderColor="brandGray"
          marginBottom="10"
          textAlign="center"
        />
      </Flex>
      <Heading
        as="h3"
        fontSize={["2xl", "3xl", "4xl", "3xl"]}
        fontWeight="light"
        color="brand.gray"
        textAlign={["center", "center", "center", "left"]}
        marginBottom="6"
        marginTop={["2", "4", "6", "0"]}
      >
        {title}
      </Heading>
      <Text
        fontWeight="light"
        textAlign={["center", "center", "center", "left"]}
        marginBottom="6"
        letterSpacing="1px"
      >
        {excerpt}
      </Text>
      <Flex
        width="full"
        justifyContent={["center", "center", "center", "flex-start"]}
      >
        <Link to={`/${path}`}>
          <Button variant="light">{post_button_label}</Button>
        </Link>
      </Flex>
    </Flex>
  );
};

const ImageSide = ({ image }) => {
  return (
    <Flex
      flex="1"
      minWidth={["full", "full", "full", "400px"]}
      maxWidth={["full", "full", "full", "400px"]}
      height="auto"
      justifyContent="center"
      alignItems="center"
      marginRight={[0, 0, 5, 5]}
      marginLeft={[0, 0, 5, 5]}
    >
      <Box width="full" overflow="hidden" rounded="0.5rem">
        <Image alt="" fluid={image.childImageSharp.fluid} />
      </Box>
    </Flex>
  );
};

const Post = ({ title, excerpt, image, path, align, post_button_label }) => {
  return (
    <Flex
      width="full"
      flexDirection="column"
      alignItems="center"
      justifyContent="center"
      marginBottom="20"
    >
      <Flex
        flexDirection="row"
        width="full"
        justifyContent="space-between"
        flexWrap={align === "left" ? "wrap-reverse" : "wrap"}
      >
        {align === "left" ? (
          <>
            <TextSide
              title={title}
              excerpt={excerpt}
              path={path}
              post_button_label={post_button_label}
            />
            <ImageSide image={image} />
          </>
        ) : (
          <>
            <ImageSide image={image} />
            <TextSide
              title={title}
              excerpt={excerpt}
              path={path}
              post_button_label={post_button_label}
            />
          </>
        )}
      </Flex>
    </Flex>
  );
};

export const SpotlightSection = ({ title, description, footer, buttons }) => {
  const data = useStaticQuery(graphql`
    query BlogRollQuery {
      allMarkdownRemark(
        sort: { order: DESC, fields: [frontmatter___date] }
        filter: { frontmatter: { template: { eq: "blog-post" } } }
        limit: 3
      ) {
        edges {
          node {
            id
            frontmatter {
              title
              template
              path
              date(formatString: "DD.MM.YYYY")
              img_path {
                childImageSharp {
                  fluid(maxWidth: 400, quality: 80) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
              post_button_label
              excerpt
            }
          }
        }
      }
    }
  `);

  const posts = data.allMarkdownRemark.edges;

  return (
    <Section color="backgroundWhite">
      <Stack
        width={["full", "full", "2xl", "4xl"]}
        marginTop={["32", "32", "32", "20"]}
        marginBottom={["32", "32", "32", "20"]}
        paddingLeft={["5", "5", "5", "0"]}
        paddingRight={["5", "5", "5", "0"]}
        flexDirection="column"
        justifyContent="space-evenly"
        alignItems="center"
        spacing="16"
      >
        <Divider
          width={["10", "12", "15", "15"]}
          borderColor="brandGray"
          marginBottom="10"
        />
        <Heading
          as="h2"
          fontSize={["3xl", "3xl", "4xl", "5xl"]}
          fontWeight="light"
          color="brand.gray"
          textAlign={["center", "center", "center", "left"]}
          marginBottom="10"
        >
          {title}
        </Heading>
        <Text
          fontWeight="light"
          textAlign={"center"}
          fontSize={["md", "lg", "xl", "xl"]}
        >
          {description}
        </Text>
        {posts.map(({ node }, i) => {
          const { id, frontmatter } = node;
          const {
            title,
            excerpt,
            img_path,
            path,
            post_button_label,
          } = frontmatter;
          const align = i % 2 === 0 ? "left" : "right";
          return (
            <Post
              key={id}
              align={align}
              title={title}
              excerpt={excerpt}
              image={img_path}
              path={path}
              post_button_label={post_button_label}
            />
          );
        })}
        <Text
          fontWeight="light"
          textAlign={"center"}
          fontSize={["md", "lg", "xl", "xl"]}
        >
          {footer}
        </Text>
        <Flex>
          {buttons &&
            buttons.map((button, i) => {
              return (
                <Link key={i} to={button.url}>
                  <Button key={i} variant="dark">
                    {button.title}
                  </Button>
                </Link>
              );
            })}
        </Flex>
      </Stack>
    </Section>
  );
};
