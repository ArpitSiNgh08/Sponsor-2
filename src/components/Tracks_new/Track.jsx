"use client";

import { useState } from "react";
import { exploreWorlds, tabData } from "./data";
import { TitleText } from "./CustomTexts";
import ExploreCard from "./ExploreCard.jsx";
import styles from "./style";

const Explore = () => {
  const [active, setActive] = useState(null);

  const handleActive = (id) => {
    if (active === id) {
      setActive(null);
    } else {
      setActive(id);
    }
  };

  return (
    <section className={`${styles.paddings}`} id="themes">
        <div className="text-[50px] text-center sm:text-[70px] md:text-[6rem] font-bold pirata-one-regular"
          style={{
            color: "#FFFFFF", // White color for the heading text
            textTransform: "uppercase",
            letterSpacing: "2px",
            textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
          }}>
          Themes
        </div>
        <div className="mt-12 mb-20 sm:mb-8 md:px-24 xl:px-2 xl:mx-24 2xl:mx-28 flex lg:flex-row flex-col min-h-[85vh] md:min-h-[50vh] gap-10 md:gap-8">
          {tabData.map((world, index) => (
            <ExploreCard
              key={world.id}
              {...world}
              index={index}
              active={active}
              handleClick={handleActive}
            />
          ))}
        </div>
    </section>
  );
};

export default Explore;
