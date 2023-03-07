import NormalSection from "../components/common/NormalSection";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <NormalSection title="Page Not Found!" watermark={true} className="mt-4">
      <p>Oops! There is no page with this URL.</p>
      <div className="flexed gap-2">
        <Link
          to="/"
          className="btn bg-primary bg-50 txt-grey txt-95 h-bg-primary h-bg-80 h-txt-grey h-txt-5 rounded"
        >
          Navigate Back Home
        </Link>
        <Link
          to="/contact"
          className="btn bg-grey bg-95 txt-grey txt-5 h-bg-grey h-bg-80 rounded"
        >
          Report a Problem
        </Link>
      </div>
    </NormalSection>
  );
};

export default Error;
