import { Link } from "react-router-dom";
import useStorage from "../../hooks/useStorage";

const TermsPrompt = () => {
  const [isAgreed, setIsAgreed] = useStorage("termsAgreementClosed", false);

  if (isAgreed) {
    return null;
  }

  return (
    <div className="terms-prompt">
      <div>
        <p>
          This is a DEMO WEBSITE. By continuing to use this website, you agree
          to our{" "}
          <Link
            to="/terms"
            className="a txt-primary txt-90 h-txt-primary h-txt-80"
          >
            Terms of Service
          </Link>
        </p>
        <button
          type="button"
          className="btn bg-grey bg-70 txt-grey txt-30 h-bg-grey h-bg-80 h-txt-grey h-txt-20"
          onClick={() => setIsAgreed(true)}
        >
          Ok, I got it
        </button>
      </div>
    </div>
  );
};
export default TermsPrompt;
