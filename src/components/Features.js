import React from "react";
import _ from "lodash";

import { markdownify, Link, safePrefix, classNames } from "../utils";

export default class Features extends React.Component {
  render() {
    return (
      <section className="wrapper style2 special">
        <div className="inner">
          <header>
            <h2>{_.get(this.props, "section.title")}</h2>
            {markdownify(_.get(this.props, "section.subtitle"))}
          </header>
          <ul className="icons major style2" style={{ borderColor: "#fecb63" }}>
            {_.map(
              _.get(this.props, "section.symbol_display"),
              (symbol, symbol_idx) => (
                <li key={symbol_idx}>
                  <div
                    style={{
                      display: "flex",
                      justifyContent: "center",
                      alignItems: "center",
                      width: "6rem",
                      height: "6rem",
                      border: "solid 1px #fecb63",
                      borderRadius: "50%"
                    }}
                  >
                    <img
                      src={`/images/${_.get(symbol, "icon")}.svg`}
                      style={{
                        width: "3rem",
                        height: "3rem",
                        opacity: 0.7
                      }}
                      alt="icon"
                    />
                  </div>
                </li>
              )
            )}
          </ul>
          {markdownify(_.get(this.props, "section.content"))}
          {_.get(this.props, "section.actions") && (
            <footer>
              <ul className="actions special">
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
      </section>
    );
  }
}
