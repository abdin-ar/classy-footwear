import { useRef } from "react";
import { NavLink } from "react-router-dom";

const NavLinkEl = ({ to, tooltip, children, classes, setToggleState }) => {
  const gradientLink = useRef();

  function gradientPosition(e) {
    gradientLink.current.style = `--gradient-position: ${e.clientX}px; --gradient-position-Y: ${e.clientY}px;`;
  }

  return (
    <>
      <NavLink
        to={to}
        title={tooltip}
        className={`nav-link ${classes}`}
        onClick={() => setToggleState(false)}
        onMouseMove={(e) => gradientPosition(e)}
        ref={gradientLink}
      >
        {children}
      </NavLink>
    </>
  );
};

export default NavLinkEl;
