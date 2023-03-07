import { useRef, useEffect } from "react";
import NavLinkEl from "./NavLinkEl";

const NavLinks = ({ links, classLink, toggleState, setToggleState }) => {
  const navLinksRef = useRef(null);
  const linksRef = useRef(null);

  useEffect(() => {
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    if (toggleState) {
      navLinksRef.current.style.height = `${linksHeight}px`;
    } else {
      navLinksRef.current.style.height = `0px`;
    }
  }, [toggleState]);

  return (
    <>
      <div className="nav-links" id="nav-links" ref={navLinksRef}>
        <div className="links" ref={linksRef}>
          {links.map((link) => (
            <NavLinkEl
              key={link.id}
              to={link.to}
              tooltip={link.name}
              classes={classLink}
              setToggleState={setToggleState}
            >
              {link.name}
            </NavLinkEl>
          ))}
        </div>
      </div>
    </>
  );
};

export default NavLinks;
