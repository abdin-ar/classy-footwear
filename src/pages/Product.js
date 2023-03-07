import { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";
import useGlobalContext from "../context/context";
import ProductMain from "../components/product/ProductMain";
import NormalSection from "../components/common/NormalSection";
import ProductsList from "../components/products/ProductsList";

const Product = () => {
  const { productId } = useParams();
  const navigate = useNavigate();
  const { state } = useGlobalContext();

  const getProductData = () => {
    const data = state.data.find((item) => item.id === parseInt(productId));
    if (!data) {
      return;
    }
    const colorId = data.colors[0].cid;
    const currentColor = getCurrentColor(data, colorId);
    const size = data.colors[0].sizes[0].size;
    const available = data.colors[0].sizes[0].available;
    return { data, colorId, currentColor, size, available };
  };

  const getCurrentColor = (productData, colorId) => {
    return productData.colors.find((color) => color.cid === colorId);
  };

  const [productData, setProductData] = useState(getProductData());

  useEffect(() => {
    const data = getProductData();
    setProductData(data);
    if (!data) {
      navigate("/error");
    }
  }, [productId]);

  if (!productData) {
    return;
  }

  const itemInCart = state.cart.filter(
    (item) => item.id === productData.data.id
  );

  return (
    <>
      <ProductMain
        {...productData}
        productData={productData}
        setProductData={setProductData}
        getCurrentColor={getCurrentColor}
      />
      <br />
      <br />
      {itemInCart.length > 0 ? (
        <>
          <NormalSection title="In Cart From Current Product" watermark="true">
            <ProductsList
              data={itemInCart}
              sort={["fid", "string", "asc"]}
              currentItemInCart={true}
            />
          </NormalSection>
          <br />
          <br />
        </>
      ) : null}

      <NormalSection title="Related Products" watermark="true">
        <ProductsList
          query={`type:${productData.data.type}&shoesFor:${productData.data.shoesFor}&removeId:${productData.data.id}`}
        />
      </NormalSection>
    </>
  );
};

export default Product;
