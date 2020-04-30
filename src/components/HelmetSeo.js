import React from "react";
import { Helmet } from "react-helmet";

export const HelmetSeo = ({ title, description, tags }) => {
  return (
    <Helmet>
      <html lang="fi" />
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta charSet="utf-8" />
      <meta
        name="viewport"
        content="width=device-width, initialScale=1, userScalable=no"
      />

      <link
        rel="apple-touch-icon"
        sizes="180x180"
        href={`/images/apple-touch-icon.png`}
      />
      <link
        rel="icon"
        type="image/png"
        href={`/images/favicon-32x32.png`}
        sizes="32x32"
      />
      <link
        rel="icon"
        type="image/png"
        href={`/images/favicon-16x16.png`}
        sizes="16x16"
      />

      <meta name="theme-color" content="#fff" />
      <meta property="og:type" content="business.business" />
      <meta property="og:title" content={title} />
      <meta property="og:url" content="/" />
      {/* <meta
          property="og:image"
          content={`${withPrefix("/")}images/og-image.jpg`}
        /> */}
    </Helmet>
  );
};
