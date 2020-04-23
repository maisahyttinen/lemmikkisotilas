import React from "react";
import _ from "lodash";
import Image from "./Image";
import { safePrefix, markdownify, Link, classNames } from "../utils";

export default class Intro extends React.Component {
  render() {
    const imagePath = _.get(this.props, "section.img_path").split("/");
    const imageFileName =
      imagePath.length > 0 ? imagePath[imagePath.length - 1] : imagePath;
    return (
      <section id="intro" className="wrapper featured style1">
        <div className="inner" style={{ width: "100%", maxWidth: "63em" }}>
          <span className="image">
            <Image filename={imageFileName} alt="" />
          </span>
          <div
            className="content"
            style={{
              display: "flex",
              justifyContent: "center",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <header style={{ maxWidth: "33em" }}>
              <h1>{_.get(this.props, "section.title")}</h1>
              {markdownify(_.get(this.props, "section.content"))}
            </header>
            {_.get(this.props, "section.actions") && (
              <footer
                style={{
                  display: "flex",
                  alignItems: "flex-start",
                  width: "100%",
                }}
              >
                <ul className="actions">
                  {_.map(
                    _.get(this.props, "section.actions"),
                    (action, action_idx) => (
                      <li key={action_idx}>
                        <Link
                          to={
                            _.get(action, "url").startsWith("#")
                              ? _.get(action, "url")
                              : safePrefix(_.get(action, "url"))
                          }
                          className={classNames(
                            "button",
                            "big",
                            { primary: _.get(action, "is_primary") },
                            { scrolly: _.get(action, "is_scrolly") }
                          )}
                        >
                          {_.get(action, "label")}
                        </Link>
                      </li>
                    )
                  )}
                </ul>
              </footer>
            )}
          </div>
        </div>
      </section>
    );
  }
}
