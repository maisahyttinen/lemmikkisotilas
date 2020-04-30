import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import { Flex, Box } from "@chakra-ui/core";
import Img from "gatsby-image";

export const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode(sort: { order: DESC, fields: timestamp }, limit: 9) {
        edges {
          node {
            localFile {
              childImageSharp {
                fluid(maxWidth: 150, maxHeight: 150) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
          }
        }
      }
    }
  `);

  const posts = data.allInstaNode.edges;

  const images = posts.map(({ node }) => {
    return node.localFile;
  });

  return (
    <Flex
      width="full"
      height="full"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        width="full"
        maxWidth="460px"
        display="grid"
        gridGap="5px"
        gridTemplateColumns="repeat(3, 1fr)"
      >
        {images
          ? images.map(({ childImageSharp }, index) => (
              <Img
                key={index}
                alt=""
                fluid={childImageSharp.fluid}
                style={{
                  borderRadius: "0.5rem",
                  width: "auto",
                  height: "auto",
                }}
              />
            ))
          : null}
      </Box>
    </Flex>
  );
};
