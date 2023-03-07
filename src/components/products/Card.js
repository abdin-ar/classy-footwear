import { useState } from "react";
import CardImg from "./CardImg";
import CardContent from "./CardContent";
import CardControllers from "./CardControllers";
import CardImgControllers from "./CardImgControllers";

const Card = ({
  id,
  shoesFor,
  type,
  price,
  discount,
  finalPrice,
  isNew,
  isTrending,
  colors,
}) => {
  const [colorId, setColorId] = useState(colors[0].cid);
  const [size, setSize] = useState(colors[0].sizes[0].size);
  const [available, setAvailable] = useState(colors[0].sizes[0].available);
  const currentColor = colors.find((color) => color.cid === colorId);
  return (
    <div className="card">
      <CardImg
        src={`/images/products/${currentColor.img}.jpg`}
        alt={`${type} Shoes for ${shoesFor}, Model No: ${id}, Color: ${currentColor}`}
        isNew={isNew}
        isTrending={isTrending}
        discount={discount}
      />
      <CardImgControllers
        colors={colors}
        colorId={colorId}
        currentColor={currentColor}
        setColorId={setColorId}
        size={size}
        setSize={setSize}
        setAvailable={setAvailable}
      />
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
        colorId={colorId}
        size={size}
        available={available}
      />
    </div>
  );
};
export default Card;
