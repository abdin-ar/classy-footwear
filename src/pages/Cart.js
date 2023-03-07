import useGlobalContext from "../context/context";
import ProductsList from "../components/products/ProductsList";
import { Link } from "react-router-dom";

const Cart = () => {
  const { state, dispatch } = useGlobalContext();

  return (
    <>
      <ProductsList cartList={true} sort={["fid", "string", "asc"]} />
      {!state.cart.length ? null : (
        <section className="cart-footer">
          <div className="cart-text">
            <h3 className="h5">{`You have ${state.cartQty} item${
              state.cartQty > 1 ? "s" : ""
            } in your cart.`}</h3>
            <h3 className="h5">
              Total:{" "}
              {state.undiscountedTotal === state.cartTotal ? null : (
                <span className="price-before-discount">
                  ${state.undiscountedTotal}
                </span>
              )}
              <span>${state.cartTotal}</span>
            </h3>
          </div>
          <div className="btn-container">
            <button
              className="btn h-txt-error h-txt-50 px-2 py-2"
              type="button"
              onClick={() => dispatch({ type: "CLEAR_CART" })}
            >
              <i className="fas fa-times"></i> Clear Cart
            </button>
            <Link
              to="/checkout"
              className="btn h-txt-success h-txt-50 px-2 py-2"
              type="button"
            >
              <i className="fas fa-check"></i> Checkout
            </Link>
          </div>
        </section>
      )}
    </>
  );
};

export default Cart;
