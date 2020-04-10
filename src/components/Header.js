import React from "react";

import { Link } from "../utils";

export default class Header extends React.Component {
  render() {
    return (
      <header id="header">
        <nav className="nav">
          <ul>
            <li>
              <Link to="#menu">Navi</Link>
            </li>
          </ul>
        </nav>
      </header>
    );
  }
}
