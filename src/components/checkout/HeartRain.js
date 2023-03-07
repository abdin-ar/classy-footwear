import { useState, useEffect } from "react";

const HeartRain = ({ hearts, colors, createEach, forDuration }) => {
  const [allHearts, setAllHearts] = useState([]);

  useEffect(() => {
    heartRain(hearts, colors, createEach, forDuration);
  }, []);

  function heartRain(hearts, colors, createEach, forDuration) {
    let interval = setInterval(() => {
      createHeart(hearts, colors);
    }, createEach);
    if (forDuration) {
      setTimeout(() => {
        clearInterval(interval);
      }, forDuration);
    }
  }

  function createHeart(hearts, colors) {
    const heart = {};
    heart.left = Math.random() * 100 + "vw";
    heart.animationDuration = Math.random() * 2 + 3 + "s";
    heart.color = colors[Math.floor(Math.random() * colors.length)];
    heart.heart = hearts[Math.floor(Math.random() * hearts.length)];
    heart.id = `${new Date()}-${heart.left}-${heart.animationDuration}-${
      heart.color
    }-${heart.heart}`;
    setAllHearts((prev) => [...prev, heart]);
    setTimeout(() => {
      const newHearts = allHearts.filter((item) => item.id !== heart.id);
      setAllHearts([...newHearts]);
    }, 6000);
  }

  return (
    <div className="rain">
      {allHearts.map((item) => {
        const { left, animationDuration, color, heart, id } = item;
        return (
          <div
            key={id}
            className="heart"
            style={{
              left: left,
              animationDuration: animationDuration,
              color: color,
            }}
          >
            {heart}
          </div>
        );
      })}
    </div>
  );
};
export default HeartRain;
