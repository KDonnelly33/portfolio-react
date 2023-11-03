import React, { useState } from "react";
import NavTabs from "./NavTabs";
import { Link } from "react-router-dom";

export default function Navbar() {
  const links = [
    { key: 1, to: "/", label: "About Me" },
    { key: 2, to: "/contact", label: "Contact Me" },
    { key: 3, to: "/portfolios", label: "Projects" },
    { key: 4, to: "/resume", label: "Resume" },
  ];

  const [activeLink, setActiveLink] = useState(links[0].to); // Set the initial active link

  const handleLinkClick = (to) => {
    setActiveLink(to);
  };

  return (
    <NavTabs
      links={links}
      activeLink={activeLink}
      onLinkClick={handleLinkClick}
    />
  );
}
