import React from "react";
import { NavLink } from "react-router-dom";
import "./Nav.css";

function Nav({ dogs }) {
  return (
    <nav>
      <NavLink key="home" exact to="/dogs" className="Nav-NavLink">
        Home
      </NavLink>
      {dogs.map((d) => (
        <NavLink
          key={d.name}
          exact
          to={`/dogs/${d.name}`}
          className="Nav-NavLink"
        >
          {d.name}
        </NavLink>
      ))}
    </nav>
  );
}

export default Nav;
