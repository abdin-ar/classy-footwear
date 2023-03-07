import ColorSizeButton from "../common/ColorSizeButton";

const CardImgControllers = ({
  colors,
  currentColor,
  colorId,
  setColorId,
  size,
  setSize,
  setAvailable,
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
                setColorId(color.cid);
                setSize(color.sizes[0].size);
                setAvailable(color.sizes[0].available);
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
              action={() => {
                setSize(sz.size);
                setAvailable(sz.available);
              }}
            />
          );
        })}
      </div>
    </div>
  );
};
export default CardImgControllers;
