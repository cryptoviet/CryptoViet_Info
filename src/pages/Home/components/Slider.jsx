import React, { useEffect, useState } from "react";

function Slider() {
  const [selectedIndex, setSelectedIndex] = useState(0);

  const check = (index) => setSelectedIndex(index);

  useEffect(() => {
    const intervalId = setInterval(() => {
      const nextIndex = (selectedIndex + 1) % 3; // assumes 3 slides
      setSelectedIndex(nextIndex);
    }, 2000);
    return () => clearInterval(intervalId);
  }, [selectedIndex]);

  return (
    <div>
      <div className="relative z-10">
        <section id="slider" className="w-full">
          <input
            type="radio"
            name="slider"
            id="s1"
            checked={selectedIndex === 0}
            onClick={() => check(0)}
          />
          <input
            type="radio"
            name="slider"
            id="s2"
            checked={selectedIndex === 1}
            onClick={() => check(1)}
          />
          <input
            type="radio"
            name="slider"
            id="s3"
            checked={selectedIndex === 2}
            onClick={() => check(2)}
          />
          <label htmlFor="s1" id="slide1">
            <img className="pointer-events-none" src="/banner1.svg" alt="" />
          </label>
          <label htmlFor="s2" id="slide2">
            <img className="pointer-events-none" src="/banner2.svg" alt="" />
          </label>
          <label htmlFor="s3" id="slide3">
            <img className="pointer-events-none" src="/banner3.svg" alt="" />
          </label>
        </section>
      </div>
    </div>
  );
}

export default Slider;
