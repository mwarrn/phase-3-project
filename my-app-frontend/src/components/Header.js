import React from "react";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <ul>
      <li>
        <Link to="/">Home</Link> &nbsp;
        <Link to="/addemployees">Add Employees</Link>
      </li>
    </ul>
  );
};

export default Header;