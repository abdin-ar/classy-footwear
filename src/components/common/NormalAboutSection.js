const NormalAboutSection = (props) => {
  const myProps = { ...props };
  for (const prop in myProps) {
    if (
      prop === "children" ||
      prop === "className" ||
      prop === "title" ||
      prop === "img" ||
      prop === "watermark"
    ) {
      delete myProps[prop];
    }
  }

  return (
    <article
      className={`${props.watermark ? "watermark" : ""} about-normal-section ${
        props.className
      }`}
      data-content={props.title}
      {...myProps}
    >
      <div>
        <h3 className="h4 mb-2">{props.title}</h3>
        {props.children}
      </div>
      <div className="product-img my-4">
        <img src={`/images/about/${props.img}`} alt={props.title} />
      </div>
    </article>
  );
};
export default NormalAboutSection;
