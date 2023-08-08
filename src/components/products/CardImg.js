import { useRef } from "react";

const CardImg = ({ src, alt, isNew, isTrending, discount }) => {
  const image = useRef();
  const container = useRef();

  const move = (e) => {
    let eventClientX, eventClientY;

    if (e.type === "touchmove" || e.type === "touchstart") {
      eventClientX = e.targetTouches[0].clientX;
      eventClientY = e.targetTouches[0].clientY;

      const containerPosition = container.current.getBoundingClientRect();
      if (eventClientX < containerPosition.left) {
        eventClientX = containerPosition.left;
      }
      if (eventClientX > containerPosition.right) {
        eventClientX = containerPosition.right;
      }
      if (eventClientY < containerPosition.top) {
        eventClientY = containerPosition.top;
      }
      if (eventClientY > containerPosition.bottom) {
        eventClientY = containerPosition.bottom;
      }
    } else {
      eventClientX = e.clientX;
      eventClientY = e.clientY;
    }

    const x = eventClientX - container.current.getBoundingClientRect().left;
    const y = eventClientY - container.current.getBoundingClientRect().top;

    image.current.style.transformOrigin = `${x}px ${y}px`;
    image.current.style.transform = "scale(2)";
  };

  const leave = (e) => {
    image.current.style.transformOrigin = "center center";
    image.current.style.transform = "scale(1)";
  };

  return (
    <div
      className="zoomable-image"
      onMouseMove={move}
      onMouseLeave={leave}
      onTouchStartCapture={move}
      onTouchMove={move}
      onTouchCancel={leave}
      onTouchEnd={leave}
      ref={container}
    >
      <div className="card-labels">
        {isNew ? <div className="card-label-new">New Collection</div> : null}
        {isTrending ? (
          <div className="card-label-trending">Trending</div>
        ) : null}
        {discount > 0 ? (
          <div className="card-label-discount">Discount {discount}%</div>
        ) : null}
      </div>
      <img src={src} alt={alt} ref={image} />
    </div>
  );
};
export default CardImg;
