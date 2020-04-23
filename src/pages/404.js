import React from "react";
import { Link, classNames } from "../utils";
import Layout from "../components/Layout";

export default class Intro extends React.Component {
  render() {
    return (
      <Layout {...this.props}>
        <section id="intro" className="wrapper featured style1">
          <div className="inner" style={{ width: "100%", maxWidth: "63em" }}>
            <div
              className="content"
              style={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
                alignItems: "center",
                width: "100%",
              }}
            >
              <header style={{ maxWidth: "40em" }}>
                <h1>404 - Jotain meni pieleen</h1>
                Valitettavasti etsimääsi sivua ei löytynyt. Koita löytyykö
                haluamasi sivu arkistosta!
              </header>
              <footer
                style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  width: "100%",
                  marginTop: "3rem",
                }}
              >
                <ul className="actions">
                  <li>
                    <Link
                      to={"/"}
                      className={classNames("button", "big", { primary: true })}
                    >
                      Etusivulle
                    </Link>
                  </li>
                </ul>
              </footer>
            </div>
          </div>
        </section>
      </Layout>
    );
  }
}
