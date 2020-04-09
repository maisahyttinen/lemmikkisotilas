import React from "react";
import { Helmet } from "react-helmet";
import { safePrefix } from "../utils";

export const HelmetSeo = ({ title, description }) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initialScale=1, userScalable=no"
      />
      <link rel="stylesheet" href={safePrefix("assets/css/main.css")} />
      <link
        rel="stylesheet"
        href={safePrefix("assets/css/markdown-images.css")}
      />
    </Helmet>
  );
};
