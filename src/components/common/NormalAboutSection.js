const NormalAboutSection = ({
  children,
  className,
  title,
  img,
  watermark,
  ...props
}) => {
  return (
    <article
      className={`${
        watermark ? "watermark" : ""
      } about-normal-section ${className}`}
      data-content={title}
      {...props}
    >
      <div>
        <h3 className="h4 mb-2">{title}</h3>
        {children}
      </div>
      <div className="product-img my-4">
        <img src={`/images/about/${img}`} alt={title} />
      </div>
    </article>
  );
};
export default NormalAboutSection;
