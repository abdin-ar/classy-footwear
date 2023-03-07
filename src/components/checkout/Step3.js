import { useNavigate } from "react-router-dom";
import useScrollTo from "../../hooks/useScrollTo";
import HeartRain from "./HeartRain";

const Step3 = ({ setStep }) => {
  useScrollTo();
  const navigate = useNavigate();

  const finish = () => {
    setStep(1);
    navigate("/cart");
  };

  const allSymbols = [
    <span>&#9733;</span>,
    <span>&#10047;</span>,
    <span>&#10048;</span>,
    <span>&#10049;</span>,
    <span>&#10084;</span>,
    <span>&#127775;</span>,
    <span>&#127800;</span>,
    <span>&#127799;</span>,
    <span>&#127801;</span>,
    <span>&#127804;</span>,
  ];

  const allColors = [
    "darkred",
    "orangered",
    "rebeccapurple",
    "fuchsia",
    "hotpink",
    "royalblue",
    "yellow",
    "green",
    "#ccc",
  ];

  return (
    <>
      <HeartRain
        hearts={allSymbols}
        colors={allColors}
        createEach={35}
        forDuration={1000}
      />
      <div className="overlay">
        <div className="modal">
          <h2 className="h4 mb-4">Successful</h2>
          <p>Your purchase was successful!</p>
          <p>
            Please note that this is a DEMO WEBSITE. No purchase and no payment
            was actually performed. Thank you for testing out this website.
          </p>
          <button
            type="button"
            className={
              "btn bg-primary bg-50 txt-grey txt-95 h-bg-primary h-bg-80 h-txt-grey h-txt-5 rounded full-width py-2 mt-4"
            }
            onClick={finish}
          >
            Done
          </button>
        </div>
      </div>
    </>
  );
};
export default Step3;
