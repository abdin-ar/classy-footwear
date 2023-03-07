const NavToggle = ({ className, toggleLinks, children }) => {
  return (
    <button
      className={`nav-toggle ${className}`}
      onClick={toggleLinks}
      aria-label="Menu"
    >
      {children}
    </button>
  );
};

export default NavToggle;
