import React from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import {
  markdownify,
  safePrefix,
  htmlToReact,
  getSeparateDate,
} from "../utils";
import { HelmetSeo } from "../components/HelmetSeo";

export default class Page extends React.Component {
  render() {
    const date = _.get(this.props, "pageContext.frontmatter.date");
    const { year, month, day } = getSeparateDate(date);

    const title = _.get(this.props, "pageContext.frontmatter.title");
    const subtitle =
      _.get(this.props, "pageContext.html")
        .replace(/<\/?[^>]+>/gi, " ")
        .replace("\n", "")
        .trim()
        .substring(0, 155) + "...";
    const seoTitle = _.get(this.props, "pageContext.frontmatter.header-title");
    const seoDescription = _.get(
      this.props,
      "pageContext.frontmatter.header-description"
    );

    const helmetTitle = seoTitle && seoTitle !== "" ? seoTitle : title;
    const helmetDescription =
      seoDescription && seoDescription !== "" ? seoDescription : subtitle;

    return (
      <Layout {...this.props}>
        <HelmetSeo title={helmetTitle} description={helmetDescription} />
        <section id="main" className="wrapper style1">
          <div className="inner page-inner">
            <header className="major">
              <h1>{_.get(this.props, "pageContext.frontmatter.title")}</h1>
              {markdownify(
                _.get(this.props, "pageContext.frontmatter.subtitle")
              )}
              {date && <p>{`${day}.${month}.${year} - Maisa Hyttinen`}</p>}
            </header>
            {_.get(this.props, "pageContext.frontmatter.img_path") && (
              <span className="image main">
                <img
                  src={safePrefix(
                    _.get(this.props, "pageContext.frontmatter.img_path")
                  )}
                  alt=""
                />
              </span>
            )}
            {htmlToReact(_.get(this.props, "pageContext.html"))}
          </div>
        </section>
      </Layout>
    );
  }
}
