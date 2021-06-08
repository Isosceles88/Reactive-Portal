import React from "react";
import PropTypes from "prop-types";

const Navbar = (props) => {
  return (
    <nav className="navbar bg-primary">
      <h1>
        <i className={props.icon} /> {props.title}
      </h1>
    </nav>
  );
};

export default Navbar;

//Proptype makes your code more robust by ensuring that the right data types have gone in

Navbar.defaultProps = { title: "Github Finder", icon: "fab fa-github" };
Navbar.propTypes = {
  title: PropTypes.string.isRequired,
  icon: PropTypes.string.isRequired,
};
