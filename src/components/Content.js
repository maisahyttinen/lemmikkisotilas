import React from "react";
import styled from "@emotion/styled";
import { Breakpoints } from "../gatsby-plugin-chakra-ui/theme";

const ContentContainer = styled("div")`
  a {
    color: inherit;
    text-decoration: none;
    border-bottom: dotted 1px;

    &:hover {
      border-bottom-color: transparent;
    }
  }

  strong,
  b {
    color: inherit;
    font-weight: 500;
  }

  em,
  i {
    font-style: italic;
  }

  p {
    margin: 0 0 2rem 0;
    line-height: 1.8;
    font-size: 17px;
    font-weight: 300;
    letter-spacing: 1px;

    :last-child {
      margin: 0 0 0.5rem 0;
    }

    @media screen and (max-width: ${Breakpoints.lg}) {
      font-size: 16px;
    }

    @media screen and (max-width: ${Breakpoints.md}) {
      font-size: 16px;
    }

    @media screen and (max-width: ${Breakpoints.sm}) {
      font-size: 16px;
    }
  }

  img {
    border-radius: 0.5rem;
  }

  h1,
  h2,
  h3,
  h4,
  h5,
  h6 {
    color: inherit;
    font-weight: 300;
    line-height: 1.5;
    margin: 1.5rem 0 2rem 0;
    letter-spacing: 0.05em;

    a {
      color: inherit;
      text-decoration: none;
    }

    @media screen and (max-width: ${Breakpoints.md}) {
      margin: 1.5rem 0 3rem 0;
    }

    @media screen and (max-width: ${Breakpoints.sm}) {
      margin: 1.25rem 0 2.5rem 0;
    }
  }

  h1 {
    font-size: 3.25em;
    line-height: 1.1;
    margin: 0 0 1.5rem 0;
    letter-spacing: 0.025em;

    @media screen and (max-width: ${Breakpoints.sm}) {
      font-size: 2em;
      line-height: 1.3;
      margin: 0 0 1rem 0;
    }
  }

  h2 {
    font-size: 2.5em;
    line-height: 1.3;

    @media screen and (max-width: ${Breakpoints.lg}) {
      font-size: 2.25em;
    }

    @media screen and (max-width: ${Breakpoints.sm}) {
      font-size: 1.5em;
      line-height: 1.5;
    }
  }

  h3 {
    font-size: 1.75em;

    @media screen and (max-width: ${Breakpoints.sm}) {
      font-size: 1.25em;
    }
  }

  h4 {
    font-size: 1.1em;

    @media screen and (max-width: ${Breakpoints.sm}) {
      font-size: 1em;
    }
  }

  h5 {
    font-size: 0.9em;
  }

  h6 {
    font-size: 0.7em;
  }

  sub {
    font-size: 0.8em;
    position: relative;
    top: 0.5em;
  }

  sup {
    font-size: 0.8em;
    position: relative;
    top: -0.5em;
  }

  blockquote {
    border-left: solid 4px;
    font-style: italic;
    margin: 0 0 _size(element-margin) 0;
    padding: 1rem 0 1rem 1rem;
  }

  code {
    border-radius: 1rem;
    font-family: Raleway, Helvetica, sans-serif;
    font-size: 0.9em;
    margin: 0 0.25em;
    padding: 0.25em 0.65em;
  }

  pre {
    -webkit-overflow-scrolling: touch;
    font-family: Raleway, Helvetica, sans-serif;
    font-size: 0.9em;
    margin: 0 0 1rem 0;

    code {
      display: block;
      padding: 1em 1.5em;
      overflow-x: auto;
    }
  }

  hr {
    border: 0;
    border-bottom: solid 1px;
    margin: 1rem 0;

    &.major {
      margin: 1rem 0;
    }
  }

  .align-left {
    text-align: left;
  }

  .align-center {
    text-align: center;
  }

  .align-right {
    text-align: right;
  }

  /* Text meant only for screen readers */
  .screen-reader-text {
    border: 0;
    clip: rect(1px, 1px, 1px, 1px);
    height: 1px;
    overflow: hidden;
    padding: 0;
    position: absolute !important;
    width: 1px;
  }
`;

export const HTMLContent = ({ content }) => (
  <ContentContainer dangerouslySetInnerHTML={{ __html: content }} />
);

export const Content = ({ content }) => (
  <ContentContainer>{content}</ContentContainer>
);
