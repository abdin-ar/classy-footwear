import CardImg from "./CardImg";
import CardContent from "./CardContent";
import CardControllers from "./CardControllers";
import CartCardInfo from "./CartCardInfo";

const CartCard = ({
  id,
  shoesFor,
  type,
  price,
  discount,
  finalPrice,
  isNew,
  isTrending,
  colors,
  size,
  available,
  noDetailsBtn,
}) => {
  return (
    <div className="card">
      <CardImg
        src={`/images/products/${colors[0].img}.jpg`}
        alt={`${type} Shoes for ${shoesFor}, Model No: ${id}, Color: ${colors[0]}`}
        isNew={isNew}
        isTrending={isTrending}
        discount={discount}
      />
      <CartCardInfo colors={colors} size={size} />
      <CardContent
        id={id}
        type={type}
        shoesFor={shoesFor}
        price={price}
        discount={discount}
        finalPrice={finalPrice}
      />
      <CardControllers
        id={id}
        colorId={colors[0].cid}
        size={size}
        available={available}
        noDetailsBtn={noDetailsBtn}
      />
    </div>
  );
};
export default CartCard;
