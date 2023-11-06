import { Link } from "react-router-dom";
export default function NavTabs({ links, activeLink, onLinkClick }) {
  return (
    <nav>
      <div>
        <ul className="flex flex-row">
          {links.map((link) => (
            <li
              className={
                link.to === activeLink
                  ? "active-background  mx-1 px-3 round-top-corners link text-white lg:text-xl lg:mx-3"
                  : "lightgrey-background  mx-1 px-3 round-top-corners  link text-color lg:text-xl lg:mx-3"
              }
              key={link.key}
            >
              <Link to={link.to} onClick={() => onLinkClick(link.to)}>
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
