import Navbar from "./Navbar";
import SiteFooter from "./SiteFooter";
import { Outlet } from "react-router-dom";
import TermsPrompt from "./TermsPrompt";

const Layout = () => {
  return (
    <>
      <Navbar />
      <main className="page">
        <Outlet />
      </main>
      <SiteFooter />
      <TermsPrompt />
    </>
  );
};

export default Layout;
