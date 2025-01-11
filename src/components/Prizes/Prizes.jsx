"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import data_prizes from "../../assets/prizes_data/prizes";

const staggerContainer = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: {
      staggerChildren: 0.3,
    },
  },
};

const Prize = () => {
  const { pic1, pic2, pic3 } = data_prizes[0] || {};

  return (
    <div
      id="prizes"
      className="prizes-section w-full bg-cover bg-center flex items-center justify-center"
    >
      <motion.div
        variants={staggerContainer}
        initial="hidden"
        animate="show"
        className="relative z-10 flex flex-col items-center justify-center text-center px-4 md:px-6 lg:px-8 w-full max-w-7xl"
      >
        {/* Title */}
        <h1
          style={{
            textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
          }}
          className="text-white text-[50px] md:text-[70px] lg:text-[6rem] pirata-one-regular mb-8">
          Prizes
        </h1>

        {/* Prizes Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 lg:gap-8 w-full">
          {/* Second Prize */}
          <div
            className="order-2 md:order-1 flex flex-col items-center justify-center bg-black/70 p-4 md:p-6 lg:p-8 relative"
            style={{
              border: "3px solid #66B2FF",
              borderRadius: "24px",
              boxShadow: "0px 6px 15px rgba(102, 178, 255, 0.5)",
            }}
          >
            <div className="relative">
              <Image
                src={pic2 || "/placeholder-image.png"}
                alt="Second Prize Icon"
                width={200}
                height={200}
                className="max-w-full"
              />
              <p className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl pirata-one-regular font-bold">
                Coming Soon
              </p>
            </div>
            <h2 className="text-white text-lg md:text-xl lg:text-2xl pirata-one-regular font-bold mt-4">
              Second Prize
            </h2>
          </div>

          {/* First Prize */}
          <div
            className="order-1 md:order-2 flex flex-col items-center justify-center bg-black/70 p-4 md:p-6 lg:p-8 relative"
            style={{
              border: "3px solid #66CC66",
              borderRadius: "24px",
              boxShadow: "0px 6px 15px rgba(102, 204, 102, 0.5)",
            }}
          >
            <div className="relative">
              <Image
                src={pic1 || "/placeholder-image.png"}
                alt="First Prize Icon"
                width={250}
                height={250}
                className="max-w-full"
              />
              <p className="absolute inset-0 flex items-center justify-center text-white text-xl md:text-2xl pirata-one-regular font-bold">
                Coming Soon
              </p>
            </div>
            <h2 className="text-white text-lg md:text-xl lg:text-2xl pirata-one-regular font-bold mt-4">
              First Prize
            </h2>
          </div>

          {/* Third Prize */}
          <div
            className="order-3 md:order-3 flex flex-col items-center justify-center bg-black/70 p-4 md:p-6 lg:p-8 relative"
            style={{
              border: "3px solid #FF99CC",
              borderRadius: "24px",
              boxShadow: "0px 6px 15px rgba(255, 153, 204, 0.5)",
            }}
          >
            <div className="relative">
              <Image
                src={pic3 || "/placeholder-image.png"}
                alt="Third Prize Icon"
                width={200}
                height={200}
                className="max-w-full"
              />
              <p className="absolute inset-0 flex items-center justify-center text-white text-lg md:text-xl pirata-one-regular font-bold">
                Coming Soon
              </p>
            </div>
            <h2 className="text-white text-lg md:text-xl lg:text-2xl pirata-one-regular font-bold mt-4">
              Third Prize
            </h2>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Prize;
