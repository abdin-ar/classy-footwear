const BannerText = ({ index, data }) => {
  return (
    <section className="banner-carousel-section">
      {data.map((item, itemIndex) => {
        const { id, heading, subheading, text } = item;
        let position = "nextSlide";
        if (itemIndex === index) {
          position = "activeSlide";
        }
        if (
          itemIndex === index - 1 ||
          (index === 0 && itemIndex === data.length - 1)
        ) {
          position = "lastSlide";
        }

        return (
          <article className={`carousel-slide ${position}`} key={id}>
            <div className="banner-carousel-text">
              <h2 className="h2">{heading}</h2>
              <h3 className="h4">{subheading}</h3>
              <p>{text}</p>
            </div>
          </article>
        );
      })}
    </section>
  );
};
export default BannerText;
