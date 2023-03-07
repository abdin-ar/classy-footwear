import { Link } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";

const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <p>
        &copy;{year} Classy Footwear Ltd. All Rights Reserved.{" "}
        <Link
          to="/terms"
          className="txt-primary txt-50 h-txt-primary h-txt-20 transition"
        >
          Terms of Service
        </Link>
      </p>
      <SocialMediaLinks />
    </footer>
  );
};

export default SiteFooter;
