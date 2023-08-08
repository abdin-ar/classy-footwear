const NormalSection = ({ children, className, title, watermark, ...props }) => {
  return (
    <article
      className={`${watermark ? "watermark" : ""} ${className}`}
      data-content={title}
      {...props}
    >
      <h3 className="h4 mb-2">{title}</h3>
      {children}
    </article>
  );
};
export default NormalSection;
