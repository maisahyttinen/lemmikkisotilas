import React, { useState } from "react";
import _ from "lodash";

import { Layout } from "../components/index";
import {
  markdownify,
  getPostYears,
  htmlToReact,
  getPostsByYear,
  getSeparateDate,
  Link,
} from "../utils";

const Allposts = (props) => {
  const pages = _.get(props, "pageContext.pages");

  const years = getPostYears(pages);

  const [selectedYear, setSelectedYear] = useState(years[0]);

  return (
    <Layout {...props}>
      <section id="main" className="wrapper style1">
        <div className="inner">
          <header className="major">
            <h1>{_.get(props, "pageContext.frontmatter.title")}</h1>
            {markdownify(_.get(props, "pageContext.frontmatter.subtitle"))}
          </header>
          {htmlToReact(_.get(props, "pageContext.html"))}
          <div>
            {years.map((year, i) => (
              <button
                className={year === selectedYear ? "primary" : ""}
                style={{ margin: "3px" }}
                key={i}
                onClick={() => setSelectedYear(year)}
              >
                {year}
              </button>
            ))}
          </div>
          <div>
            <br />
            <h2>{selectedYear}</h2>

            {getPostsByYear(pages, selectedYear).map((post, i) => {
              const { month, day } = getSeparateDate(post.frontmatter.date);
              return (
                <React.Fragment key={i}>
                  <Link to={`/posts/${post.name}`}>
                    <strong>{`${day}.${month}.`}</strong>
                    {`  ${post.frontmatter.title}`}
                  </Link>
                  <br />
                  <br />
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Allposts;
