const BannerImg = ({ index, data }) => {
  return (
    <section className="banner-carousel-section">
      {data.map((item, itemIndex) => {
        const { id, img, blob, heading, subheading } = item;
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
          <article
            className={`carousel-vertical-slide ${
              blob ? "carousel-slide-blob" : ""
            } ${position}`}
            key={id}
          >
            <img
              src={`/images/${img}`}
              alt={`${heading} ${subheading}`}
              style={
                blob
                  ? {
                      borderRadius: blob,
                    }
                  : null
              }
              className={`banner-carousel-img${blob ? "-blob" : ""}`}
            />
          </article>
        );
      })}
    </section>
  );
};
export default BannerImg;
