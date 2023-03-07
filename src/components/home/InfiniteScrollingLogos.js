const InfiniteScrollingLogos = (props) => {
  const myProps = { ...props };
  for (const prop in myProps) {
    if (prop === "data" || prop === "children" || prop === "className") {
      delete myProps[prop];
    }
  }

  return (
    <div className={`infinite-scrolling-logos ${props.className}`} {...myProps}>
      <div className="infinite-scrolling-logos-center">
        <div className="infinite-scrolling-logos-division">
          {props.data.map((item, index) => {
            return (
              <div key={index} className="m-0 p-0 flexed full-width">
                <img
                  src={`/images/manufacturers/${item.img}-1.gif`}
                  alt={item.name}
                  title={item.name}
                  className="appear-on-lightmode full-width"
                />
                <img
                  src={`/images/manufacturers/${item.img}-2.gif`}
                  alt={item.name}
                  title={item.name}
                  className="appear-on-darkmode full-width"
                />
              </div>
            );
          })}
        </div>
        <div className="infinite-scrolling-logos-division">
          {props.data.map((item, index) => {
            return (
              <div key={index} className="m-0 p-0 flexed full-width">
                <img
                  src={`/images/manufacturers/${item.img}-1.gif`}
                  alt={item.name}
                  title={item.name}
                  className="appear-on-lightmode full-width"
                />
                <img
                  src={`/images/manufacturers/${item.img}-2.gif`}
                  alt={item.name}
                  title={item.name}
                  className="appear-on-darkmode full-width"
                />
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};
export default InfiniteScrollingLogos;
