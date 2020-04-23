import React from "react";
import { useStaticQuery, graphql } from "gatsby";
import Img from "gatsby-image";

export const Instagram = () => {
  const data = useStaticQuery(graphql`
    query {
      allInstaNode {
        edges {
          node {
            localFile {
              childImageSharp {
                fixed(width: 150, height: 150) {
                  ...GatsbyImageSharpFixed
                }
              }
            }
            # Only available with the public api scraper
            thumbnails {
              src
              config_width
              config_height
            }
            dimensions {
              height
              width
            }
          }
        }
      }
    }
  `);

  const posts = data.allInstaNode.edges;
  const images = posts
    .map(({ node }) => {
      return node.localFile;
    })
    .slice(0, 9);

  return (
    <div
      style={{
        display: "flex",
        width: "100%",
        height: "100%",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <div
        style={{
          maxWidth: "460px",
          display: "grid",
          gridGap: "5px",
          gridTemplateColumns: "repeat(3, 1fr)",
        }}
      >
        {images
          ? images.map(({ childImageSharp }, index) => (
              <Img key={index} fixed={childImageSharp.fixed} />
            ))
          : null}
      </div>
    </div>
  );
};
