import NormalSection from "../common/NormalSection";
import PaymentForm from "./PaymentForm";
import useGlobalContext from "../../context/context";
import useScrollTo from "../../hooks/useScrollTo";

const Step2 = ({ setStep, resetCheckoutForm }) => {
  useScrollTo();
  const { state } = useGlobalContext();

  return (
    <NormalSection title="Checkout" watermark={true} className="mt-4">
      <p>
        You have {state.cartQty} item{state.cartQty > 1 ? "s" : ""} in your
        cart. The total amount to pay is ${state.cartTotal} + $
        {state.purchaseData.deliveryCosts} delivery costs = $
        {state.purchaseData.totalWithDelivery}.
      </p>
      <p>
        To continue with your purchase, please enter your payment info then
        press Purchase.
      </p>
      <PaymentForm setStep={setStep} resetCheckoutForm={resetCheckoutForm} />
    </NormalSection>
  );
};
export default Step2;
