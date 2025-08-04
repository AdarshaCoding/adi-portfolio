import React from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  return (
    <nav aria-label="Main navigation">
      <ul className="flex space-x-4">
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive ? "font-medium underline" : "font-medium hover:underline"
            }
          >
            Home
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/contact"
            className={({ isActive }) =>
              isActive ? "font-medium underline" : "font-medium hover:underline"
            }
          >
            Contact
          </NavLink>
        </li>
      </ul>
    </nav>
  );
};

export default NavLinks;
