import useGlobalContext from "../../context/context";

const ProductControllers = ({ id, colorId, size, available }) => {
  const { state, addToCart, removeFromCart, increase, decrease } =
    useGlobalContext();
  const cartItem = state.cart.find(
    (item) => item.fid === `${id}-${colorId}-${size}`
  );

  return (
    <div className="card-controllers bg-primary bg-80 product-controllers">
      {!cartItem ? (
        <button
          className="btn bg-primary bg-80 h-bg-primary h-bg-70 add-to-cart not-rounded"
          onClick={() => addToCart(id, colorId, size, available)}
        >
          <i className="fas fa-cart-plus"></i> Add To Cart
        </button>
      ) : (
        <div className="edit-cart-quantity">
          <button
            className="btn bg-primary bg-80 h-bg-primary h-bg-70 not-rounded"
            onClick={() => decrease(id, colorId, size)}
          >
            -
          </button>
          <span className="card-quantity">{cartItem.qty}</span>
          <button
            className="btn bg-primary bg-80 h-bg-primary h-bg-70 not-rounded"
            onClick={() => increase(id, colorId, size, available)}
          >
            +
          </button>
          <button
            className="btn bg-primary bg-80 h-bg-primary h-bg-70 not-rounded"
            onClick={() => removeFromCart(id, colorId, size)}
          >
            <i className="fas fa-trash"></i>
          </button>
        </div>
      )}
    </div>
  );
};
export default ProductControllers;
