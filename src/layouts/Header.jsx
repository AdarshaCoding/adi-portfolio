import React from "react";
import NavLinks from "./NavLinks";

const Title = () => <h1 className="text-xl font-bold">Adarsha</h1>;

const Header = () => (
  <header className="flex justify-between items-center p-4">
    <Title />
    <NavLinks />
  </header>
);

export default Header;
