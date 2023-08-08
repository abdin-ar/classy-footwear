import { Link } from "react-router-dom";
import SocialMediaLinks from "./SocialMediaLinks";

const SiteFooter = () => {
  const year = new Date().getFullYear();
  return (
    <footer className="footer">
      <div>
        <p>
          &copy;{year} Classy Footwear Ltd. All Rights Reserved.{" "}
          <Link
            to="/terms"
            className="txt-primary txt-50 h-txt-primary h-txt-20 transition"
          >
            Terms of Service
          </Link>
        </p>
        <p>
          This website was created by{" "}
          <a
            href="https://abdin.onrender.com"
            target="_blank"
            className="txt-primary txt-50 h-txt-primary h-txt-20 transition"
          >
            Abdin AR web developer
          </a>
        </p>
      </div>
      <SocialMediaLinks />
    </footer>
  );
};

export default SiteFooter;
