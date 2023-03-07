const ProductImg = ({ src, alt, placeholder }) => {
  return (
    <div className="product-img">
      <img src={src} alt={alt} />
    </div>
  );
};
export default ProductImg;
