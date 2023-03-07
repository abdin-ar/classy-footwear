const CartCardInfo = ({ colors, size }) => {
  return (
    <div className="cart-card-info">
      <div>
        <p className="m-0">Color:</p>
        <div
          style={{ backgroundColor: colors[0].hex }}
          title={colors[0].color}
          className="color"
        ></div>
      </div>
      <p className="m-0">Size: {size}</p>
    </div>
  );
};
export default CartCardInfo;
