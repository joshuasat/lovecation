import React, { useState } from "react";
import Fade from "react-reveal/Fade";

import Button from "elements/Button";
import BrandIcon from "parts/IconText";

export default function Header(props) {
  const [toggle, setToggle] = useState(false);
  const getNavLinkClass = (path) => {
    return props.location.pathname === path ? " active" : "";
  };

  if (props.isCentered)
    return (
      <Fade>
        <header className="spacing-sm">
          <div className="container">
            <nav className="navbar navbar-expand-lg navbar-light">
              <Button className="brand-text-icon mx-auto" href="" type="link">
                Love<span className="text-gray-900">Cation</span>
              </Button>
            </nav>
          </div>
        </header>
      </Fade>
    );

  return (
    <Fade>
      <header className="spacing-sm">
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light">
            <BrandIcon />

            <button
              onClick={() => setToggle(!toggle)}
              className={`navbar-toggler${toggle === true ? "" : " collapsed"}`}
              type="button"
              data-toggle="collapse"
              data-target="#navbar-lovecation"
              aria-controls="navbar-lovecation"
              aria-expanded="false"
              aria-label="Toggle navigation"
              style={{ borderRadius: 5 }}
            >
              <span className="navbar-toggler-icon "></span>
            </button>
            <div
              className={`navbar-collapse collapse ${
                toggle === true ? "show" : ""
              }`}
              id="navbar-lovecation"
            >
              <ul className="navbar-nav ml-auto">
                <li className={`nav-item${getNavLinkClass("/")}`}>
                  <Button className="nav-link" type="link" href="/">
                    Home
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/browse-by")}`}>
                  <Button className="nav-link" type="link" href="/browse-by">
                    Browse By
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/stories")}`}>
                  <Button className="nav-link" type="link" href="/stories">
                    Stories
                  </Button>
                </li>
                <li className={`nav-item${getNavLinkClass("/agents")}`}>
                  <Button className="nav-link" type="link" href="/agents">
                    Agents
                  </Button>
                </li>
              </ul>
            </div>
          </nav>
        </div>
      </header>
    </Fade>
  );
}
