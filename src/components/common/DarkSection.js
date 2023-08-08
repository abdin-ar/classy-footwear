const DarkSection = ({
  children,
  className,
  classTop,
  classBottom,
  transitionHeight,
  ...props
}) => {
  return (
    <>
      <div
        className={`start-dark-section ${classTop}`}
        style={transitionHeight ? { height: transitionHeight } : null}
      ></div>
      <article
        className={`dark-section ${className}`}
        style={
          transitionHeight
            ? {
                paddingTop: transitionHeight,
                paddingBottom: transitionHeight,
                marginTop: `-${transitionHeight}`,
                marginBottom: `-${transitionHeight}`,
                clipPath: `polygon(0 ${transitionHeight}, 100% 0, 100% 100%, 0 calc(100% - ${transitionHeight}))`,
              }
            : null
        }
        {...props}
      >
        {children}
      </article>
      <div
        className={`end-dark-section ${classBottom}`}
        style={transitionHeight ? { height: transitionHeight } : null}
      ></div>
    </>
  );
};
export default DarkSection;
