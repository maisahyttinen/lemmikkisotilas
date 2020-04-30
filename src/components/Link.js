import React from "react";
import { Link as GatsbyLink } from "gatsby";

export const Link = ({ to, children }) => {
  if (to.includes("https")) {
    return <a href={to}>{children}</a>;
  }

  return <GatsbyLink to={to}>{children}</GatsbyLink>;
};
