import NormalAboutSection from "../common/NormalAboutSection";
import DarkSection from "../common/DarkSection";

const AboutSection = ({
  type,
  watermark,
  title,
  img,
  text,
  iconAfter,
  iconBefore,
  ...props
}) => {
  if (type === "normal") {
    return (
      <NormalAboutSection
        watermark={watermark}
        title={title}
        img={img}
        {...props}
      >
        {text.map((item, index) => {
          return <p key={index}>{item}</p>;
        })}
      </NormalAboutSection>
    );
  }
  return (
    <DarkSection
      transitionHeight="5vw"
      classTop="mt-2"
      classBottom="mb-2"
      {...props}
    >
      <h4 className="h4 centered mt-2">
        {iconBefore ? <i className={`fas fa-${iconBefore}`}></i> : null} {title}{" "}
        {iconAfter ? <i className={`fas fa-${iconAfter}`}></i> : null}
      </h4>
      {text.map((item, index) => {
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
