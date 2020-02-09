import React from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import {
  markdownify,
  safePrefix,
  htmlToReact,
  getSeparateDate
} from "../utils";

export default class Page extends React.Component {
  render() {
    const date = _.get(this.props, "pageContext.frontmatter.date");
    const { year, month, day } = getSeparateDate(date);
    return (
      <Layout {...this.props}>
        <section id="main" className="wrapper style1">
          <div className="inner page-inner">
            <header className="major">
              <h1>{_.get(this.props, "pageContext.frontmatter.title")}</h1>
              {markdownify(
                _.get(this.props, "pageContext.frontmatter.subtitle")
              )}
              <p>{`${day}.${month}.${year} - Maisa Hyttinen`}</p>
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
