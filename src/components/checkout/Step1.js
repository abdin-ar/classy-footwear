import NormalSection from "../common/NormalSection";
import CheckoutForm from "./CheckoutForm";
import useGlobalContext from "../../context/context";
import useScrollTo from "../../hooks/useScrollTo";

const Step1 = ({
  setStep,
  checkoutForm,
  setCheckoutForm,
  citiesList,
  setCitiesList,
}) => {
  useScrollTo();
  const { state } = useGlobalContext();

  return (
    <NormalSection title="Checkout" watermark={true} className="mt-4">
      <p>
        You have {state.cartQty} item{state.cartQty > 1 ? "s" : ""} in your
        cart. The total amount to pay is ${state.cartTotal} (excluding delivery
        costs).
      </p>
      <p>
        To continue with your purchase, please enter your contact info and
        delivery address then press Next.
      </p>
      <CheckoutForm
        setStep={setStep}
        checkoutForm={checkoutForm}
        setCheckoutForm={setCheckoutForm}
        citiesList={citiesList}
        setCitiesList={setCitiesList}
      />
    </NormalSection>
  );
};

export default Step1;
