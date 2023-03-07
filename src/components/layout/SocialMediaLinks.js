import SocialLink from "./SocialLink";
import socialLinks from "../../data/socialLinks";

const SocialMediaLinks = () => {
  return (
    <div className="footer-social-links">
      {socialLinks.map((sLink) => {
        return <SocialLink key={sLink.id} {...sLink} />;
      })}
    </div>
  );
};
export default SocialMediaLinks;
