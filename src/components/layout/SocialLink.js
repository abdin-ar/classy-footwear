import { Link } from "react-router-dom";

const SocialLink = ({ icon, title, href, type }) => {
  if (type === "link") {
    return (
      <Link className="footer-social-link" to={href} title={title}>
        <i className={icon}></i>
      </Link>
    );
  }
  return (
    <a className="footer-social-link" href={href} title={title}>
      <i className={icon}></i>
    </a>
  );
};
export default SocialLink;
