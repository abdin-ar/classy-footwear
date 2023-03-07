import { NavLink, useLocation } from "react-router-dom";
import useGlobalContext from "../../context/context";
import DarkModeToggleSaved from "./DarkModeToggleSaved";
import NavbarComponent from "./Navbar/NavbarComponent";
import navLinks from "../../data/navLinks";

const Navbar = () => {
  const { pathname } = useLocation();
  const { state } = useGlobalContext();

  return (
    <NavbarComponent
      logo={
        <NavLink to="/" className="nav-logo-rem">
          <img
            src={`/images/logo2.gif`}
            alt="Classy Footwear"
            title="Classy Footwear"
            className="img appear-on-lightmode"
          />
          <img
            src={`/images/logo0.gif`}
            alt="Classy Footwear"
            title="Classy Footwear"
            className="img appear-on-darkmode"
          />
        </NavLink>
      }
      links={navLinks}
      classLink="nav-link-animated-border linear-gradient"
      cta={
        pathname === "/products" || pathname === "/:productId" ? (
          <NavLink
            to="/cart"
            className="btn h-bg-primary h-bg-80 rounded larger-text moving-cart"
            title="Cart"
          >
            <i className="fas fa-shopping-cart"></i>
            <p className="btn-badge">{state.cartQty}</p>
          </NavLink>
        ) : (
          <>
            {pathname === "/cart" ? null : (
              <NavLink
                to="/cart"
                className="btn h-bg-primary h-bg-80 rounded larger-text moving-cart"
                title="Cart"
              >
                <i className="fas fa-shopping-cart"></i>
                <p className="btn-badge">{state.cartQty}</p>
              </NavLink>
            )}

            <NavLink
              to="/products"
              className="nav-cta bg-primary bg-50 txt-grey txt-95 h-bg-primary h-bg-80 h-txt-grey h-txt-5 rounded"
            >
              Shop<span className="appear-on-larger-screen"> Now</span>{" "}
              <i className="fas fa-arrow-right"></i>
            </NavLink>
          </>
        )
      }
      toggle={<i className="fas fa-bars"></i>}
      classToggle="h-bg-primary h-bg-80 rounded"
      toggleSize={"md"}
    >
      <DarkModeToggleSaved
        className="nav-toggle-darkmode h-bg-primary h-bg-80 rounded"
        aria-label="Toggle dark mode"
      />
    </NavbarComponent>
  );
};

export default Navbar;
