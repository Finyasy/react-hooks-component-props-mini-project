import React from "react";
import blogData from "../data/blog";

function Header() {
    const {name} = blogData;
  return (
    <header>
      <h1>{name}</h1>
    </header>
  );
}

export default Header;