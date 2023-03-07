import ProductLabels from "./ProductLabels";
import ProductControllers from "./ProductControllers";
import ProductImgControllers from "./ProductImgControllers";

const ProductContent = ({
  data,
  colorId,
  currentColor,
  size,
  available,
  productData,
  setProductData,
  getCurrentColor,
}) => {
  return (
    <div className="product-main">
      <div>
        <h4 className="h4 mb-2">{data.type} Shoes</h4>
        <h4 className="h5 mb-2">
          for {data.shoesFor} - Model {data.id}
        </h4>
        <p className="mb-4">{data.desc}</p>
        <ProductLabels
          isNew={data.isNew}
          isTrending={data.isTrending}
          discount={data.discount}
        />
      </div>
      <div>
        <ProductImgControllers
          colors={data.colors}
          colorId={colorId}
          currentColor={currentColor}
          size={size}
          productData={productData}
          setProductData={setProductData}
          getCurrentColor={getCurrentColor}
        />
        {data.discount === 0 ? (
          <p className="price mt-4">${data.price}</p>
        ) : (
          <p className="price mt-4">
            <span className="price-before-discount">${data.price}</span>
            <span>${data.finalPrice}</span>
          </p>
        )}

        <ProductControllers
          id={data.id}
          colorId={colorId}
          size={size}
          available={available}
        />
      </div>
    </div>
  );
};
export default ProductContent;
