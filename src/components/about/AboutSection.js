import NormalAboutSection from "../common/NormalAboutSection";
import DarkSection from "../common/DarkSection";

const AboutSection = (props) => {
  if (props.type === "normal") {
    return (
      <NormalAboutSection
        watermark={props.watermark}
        title={props.title}
        img={props.img}
      >
        {props.text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </NormalAboutSection>
    );
  }
  return (
    <DarkSection transitionHeight="5vw" classTop="mt-2" classBottom="mb-2">
      <h4 className="h4 centered mt-2">
        {props.iconBefore ? (
          <i className={`fas fa-${props.iconBefore}`}></i>
        ) : null}{" "}
        {props.title}{" "}
        {props.iconAfter ? (
          <i className={`fas fa-${props.iconAfter}`}></i>
        ) : null}
      </h4>
      {props.text.map((item, index) => {
        return (
          <p key={index} className="centered mt-4">
            {item}
          </p>
        );
      })}
    </DarkSection>
  );
};
export default AboutSection;
