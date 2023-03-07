const NormalSection = (props) => {
  const myProps = { ...props };
  for (const prop in myProps) {
    if (
      prop === "children" ||
      prop === "className" ||
      prop === "title" ||
      prop === "watermark"
    ) {
      delete myProps[prop];
    }
  }

  return (
    <article
      className={`${props.watermark ? "watermark" : ""} ${props.className}`}
      data-content={props.title}
      {...myProps}
    >
      <h3 className="h4 mb-2">{props.title}</h3>
      {props.children}
    </article>
  );
};
export default NormalSection;
