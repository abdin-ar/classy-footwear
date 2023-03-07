const CardContent = ({ id, type, shoesFor, price, discount, finalPrice }) => {
  return (
    <div className="card-content">
      <h4 className="h4 mb-2">{type} Shoes</h4>
      <h4 className="h6 mb-2">
        for {shoesFor} - Model {id}
      </h4>
      {discount === 0 ? (
        <p className="price">${price}</p>
      ) : (
        <p className="price">
          <span className="price-before-discount">${price}</span>
          <span>${finalPrice}</span>
        </p>
      )}
    </div>
  );
};
export default CardContent;
