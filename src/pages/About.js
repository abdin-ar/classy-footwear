import aboutData from "../data/aboutData";
import AboutSection from "../components/about/AboutSection";

const About = () => {
  return (
    <>
      <br />
      {aboutData.map((item) => {
        return <AboutSection key={item.id} {...item} />;
      })}
    </>
  );
};

export default About;
