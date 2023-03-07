const ProductLabels = ({ isNew, isTrending, discount }) => {
  return (
    <div className="product-labels">
      {isNew ? <div className="card-label-new">New Collection</div> : null}
      {isTrending ? <div className="card-label-trending">Trending</div> : null}
      {discount > 0 ? (
        <div className="card-label-discount">Discount {discount}%</div>
      ) : null}
    </div>
  );
};
export default ProductLabels;
