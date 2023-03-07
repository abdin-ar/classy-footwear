import ColorSizeButton from "../common/ColorSizeButton";

const ProductImgControllers = ({
  colors,
  currentColor,
  colorId,
  size,
  productData,
  setProductData,
  getCurrentColor,
}) => {
  return (
    <div className="card-img-controllers">
      <div className="card-img-controllers-colors clearfix">
        {colors.map((color) => {
          return (
            <ColorSizeButton
              key={color.cid}
              style={{ backgroundColor: color.hex }}
              title={color.color}
              className={color.cid === colorId ? "selected" : ""}
              action={() => {
                const currentColor = getCurrentColor(
                  productData.data,
                  color.cid
                );
                setProductData({
                  ...productData,
                  colorId: color.cid,
                  size: color.sizes[0].size,
                  available: color.sizes[0].available,
                  currentColor: currentColor,
                });
              }}
            />
          );
        })}
      </div>
      <div className="card-img-controllers-sizes clearfix">
        {currentColor.sizes.map((sz) => {
          return (
            <ColorSizeButton
              key={sz.size}
              className={size === sz.size ? "selected" : ""}
              text={sz.size}
              action={() =>
                setProductData({
                  ...productData,
                  size: sz.size,
                  available: sz.available,
                })
              }
            />
          );
        })}
      </div>
    </div>
  );
};
export default ProductImgControllers;
