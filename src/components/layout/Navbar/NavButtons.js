const NavButtons = ({ cta, toggle, logo, children }) => {
  const quantity = (toggle ? 1 : 0) + (cta ? 1 : 0) + (children ? 1 : 0);
  if (quantity === 0) {
    return null;
  }
  if (quantity === 1 && toggle) {
    return <>{toggle}</>;
  }
  if (!logo) {
    return (
      <div className="btn-container end m-0" style={{ marginLeft: "auto" }}>
        {children}
        {toggle}
        {cta}
      </div>
    );
  }
  return (
    <div className="btn-container end m-0">
      {children}
      {toggle}
      {cta}
    </div>
  );
};

export default NavButtons;
