import useGlobalContext from "../../context/context";

const PaymentForm = ({ setStep, resetCheckoutForm }) => {
  const { dispatch } = useGlobalContext();

  const performPayment = () => {
    dispatch({
      type: "PERFORM_PURCHASE",
      payload: new Date(),
    });
    resetCheckoutForm();
    setStep(3);
  };

  return (
    <form className="form wide-form">
      <p>
        This is the placeholder for the payment form. However, as this is a DEMO
        WEBSITE, please note that no payment and no purchase will be performed!
        Please do not enter any payment info. Please press Purchase to
        continue...
      </p>
      <div className="flexed end gap-2 full-width">
        <button
          type="button"
          onClick={() => setStep(1)}
          className={
            "btn bg-transparent h-txt-error h-txt-50 rounded px-2 py-2"
          }
        >
          Back
        </button>
        <button
          type="button"
          className={
            "btn bg-primary bg-50 txt-grey txt-95 h-bg-primary h-bg-80 h-txt-grey h-txt-5 rounded px-2 py-2"
          }
          onClick={performPayment}
        >
          Purchase
        </button>
      </div>
    </form>
  );
};

export default PaymentForm;
