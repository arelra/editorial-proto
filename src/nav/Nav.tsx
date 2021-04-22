import React from "react";
import "./Nav.css";

const Nav = () => {
  return (
    <section className="css-1pjuho0">
      <div className="css-1ar62qd">
        <div className="css-9jay18">
          <ul data-testid="pillar-list" className="css-v86gv0">
            <li className="css-1ev5v4n">
              <a
                className="css-19mcfa0"
                href="/"
                data-link-name="nav2 : primary : News"
              >
                News
              </a>
            </li>
            <li className="css-1ev5v4n">
              <a
                className="css-1eysd7m"
                href="/commentisfree"
                data-link-name="nav2 : primary : Opinion"
              >
                Opinion
              </a>
            </li>
            <li className="css-1ev5v4n">
              <a
                className="css-1kfqkt0"
                href="/sport"
                data-link-name="nav2 : primary : Sport"
              >
                Sport
              </a>
            </li>
            <li className="css-1ev5v4n">
              <a
                className="css-cr56qg"
                href="/culture"
                data-link-name="nav2 : primary : Culture"
              >
                Culture
              </a>
            </li>
            <li className="css-1ev5v4n">
              <a
                className="css-1mdzs7i"
                href="/lifeandstyle"
                data-link-name="nav2 : primary : Lifestyle"
              >
                Lifestyle
              </a>
            </li>
          </ul>
        </div>
      </div>
    </section>
  );
};

export { Nav };
