import React from "react";
import { useState } from "react";
import NavLinks from "./NavLinks";
import NavButtons from "./NavButtons";
import NavToggle from "./NavToggle";

const NavbarComponent = ({
  classNav,
  logo,
  links,
  classLink,
  cta,
  toggle,
  classToggle,
  toggleSize,
  children,
}) => {
  const [toggleState, setToggleState] = useState(false);

  const toggleLinks = () => {
    setToggleState((prevState) => !prevState);
  };

  const toggleBtn = toggle ? (
    <NavToggle className={classToggle} toggleLinks={toggleLinks}>
      {toggle}
    </NavToggle>
  ) : null;

  const toggleSizeClass = toggleSize
    ? `toggle-size-${toggleSize}`
    : "toggle-size-md";

  return (
    <>
      <nav className={classNav ? `nav fixed ${classNav}` : "nav fixed"}>
        <div className={`nav-center ${toggleSizeClass}`}>
          {logo ? logo : null}
          {links ? (
            <NavLinks
              links={links}
              classLink={classLink}
              toggleState={toggleState}
              setToggleState={setToggleState}
            />
          ) : null}
          <NavButtons cta={cta} toggle={toggleBtn} logo={logo ? true : false}>
            {children}
          </NavButtons>
        </div>
      </nav>
      <div className="nav-spacer"></div>
    </>
  );
};

export default NavbarComponent;
