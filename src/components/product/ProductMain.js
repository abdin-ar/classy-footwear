import ProductImg from "./ProductImg";
import ProductContent from "./ProductContent";

const ProductMain = ({
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
    <article
      className="product mt-4 watermark"
      data-content={`Model ${data.id} For ${data.shoesFor}`}
    >
      <section>
        <ProductContent
          data={data}
          colorId={colorId}
          currentColor={currentColor}
          size={size}
          available={available}
          productData={productData}
          setProductData={setProductData}
          getCurrentColor={getCurrentColor}
        />
      </section>
      <section>
        <ProductImg
          src={`/images/products/${currentColor.img}.jpg`}
          alt={`${data.type} Shoes for ${data.shoesFor}, Model No: ${data.id}, Color: ${currentColor}`}
        />
      </section>
    </article>
  );
};
export default ProductMain;
