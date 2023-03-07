const DarkSection = (props) => {
  const myProps = { ...props };
  for (const prop in myProps) {
    if (
      prop === "children" ||
      prop === "className" ||
      prop === "classTop" ||
      prop === "classBottom" ||
      prop === "transitionHeight"
    ) {
      delete myProps[prop];
    }
  }

  return (
    <>
      <div
        className={`start-dark-section ${props.classTop}`}
        style={
          props.transitionHeight ? { height: props.transitionHeight } : null
        }
      ></div>
      <article
        className={`dark-section ${props.className}`}
        style={
          props.transitionHeight
            ? {
                paddingTop: props.transitionHeight,
                paddingBottom: props.transitionHeight,
                marginTop: `-${props.transitionHeight}`,
                marginBottom: `-${props.transitionHeight}`,
                clipPath: `polygon(0 ${props.transitionHeight}, 100% 0, 100% 100%, 0 calc(100% - ${props.transitionHeight}))`,
              }
            : null
        }
        {...myProps}
      >
        {props.children}
      </article>
      <div
        className={`end-dark-section ${props.classBottom}`}
        style={
          props.transitionHeight ? { height: props.transitionHeight } : null
        }
      ></div>
    </>
  );
};
export default DarkSection;
