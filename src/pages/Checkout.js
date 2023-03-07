import { useEffect } from "react";
import useStorage from "../hooks/useStorage";
import useGlobalContext from "../context/context";
import Step1 from "../components/checkout/Step1";
import Step2 from "../components/checkout/Step2";
import Step3 from "../components/checkout/Step3";

const Checkout = () => {
  const { state, dispatch } = useGlobalContext();

  useEffect(() => {
    dispatch({ type: "UPDATE_PURCHASE_DATA" });
  }, []);

  const [checkoutForm, setCheckoutForm] = useStorage("checkoutForm", {
    fName: "",
    lName: "",
    email: "",
    other: "",
    country: undefined,
    city: undefined,
    address: "",
  });
  const [citiesList, setCitiesList] = useStorage("cities", []);

  const resetCheckoutForm = () => {
    setCheckoutForm({
      fName: "",
      lName: "",
      email: "",
      other: "",
      country: undefined,
      city: undefined,
      address: "",
    });

    setCitiesList([]);
  };

  const setStep = (step) => {
    dispatch({
      type: "SET_PURCHASE_STEP",
      payload: step,
    });
  };

  return (
    <>
      {state.purchaseStep === 1 ? (
        <Step1
          setStep={setStep}
          checkoutForm={checkoutForm}
          setCheckoutForm={setCheckoutForm}
          citiesList={citiesList}
          setCitiesList={setCitiesList}
        />
      ) : null}
      {state.purchaseStep === 2 ? (
        <Step2 setStep={setStep} resetCheckoutForm={resetCheckoutForm} />
      ) : null}
      {state.purchaseStep === 3 ? <Step3 setStep={setStep} /> : null}
    </>
  );
};

export default Checkout;
