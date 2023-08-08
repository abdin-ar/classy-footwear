import bannerData from "../../data/bannerData";
import { useState, useEffect } from "react";
import BannerText from "./BannerText";
import BannerImg from "./BannerImg";

const timeInterval = 5000;

const Banner = () => {
  const [bannerIndex, setBannerIndex] = useState(0);

  const nextBannerIndex = () => {
    if (bannerIndex > bannerData.length - 2) {
      setBannerIndex(0);
    } else {
      setBannerIndex((prev) => prev + 1);
    }
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextBannerIndex();
    }, timeInterval);

    return () => {
      clearInterval(interval);
    };
  }, [bannerIndex]);

  return (
    <article className="banner">
      <div className="banner-center">
        <BannerText index={bannerIndex} data={bannerData} />
        <BannerImg index={bannerIndex} data={bannerData} />
      </div>
    </article>
  );
};
export default Banner;
