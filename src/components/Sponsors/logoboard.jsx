import { useState } from 'react';
import React from 'react';
import ReactPlayer from 'react-player';
import Image from "next/image";
import Sponsor_bg from "@/assets/Sponsor/Sponsor_bg.mp4";

const Box = ({ companyLogos, size }) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div 
      className={`relative w-72 h-48 flex justify-center items-center overflow-hidden rounded-lg transition-transform duration-300 ${isHovered ? 'scale-125' : ''}`}
      style={{
        outline: '4px solid rgba(128, 128, 128, 0.5)', // Grayish outline
      }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Video always playing in the background */}
      <ReactPlayer 
        url={Sponsor_bg} 
        className="absolute inset-0 z-10" // Fill parent container
        playing={true} // Always play video
        style={{ objectFit: 'cover' }} // Cover the area
      />

      {/* Gradient overlay */}
      <div className={`absolute inset-0 bg-gradient-to-b from-gray-800 to-black opacity-100 rounded-lg transition-all duration-300 ${isHovered ? 'z-0' : 'z-20'}`} />
      
      {companyLogos.map((company, index) => (
        <div
          key={index}
          className="relative flex justify-center items-center rounded-2xl"
          style={{
            width: "auto", // Set explicit width
            height: "auto", // Set explicit height
          }}
        >
          <Image
            src={company.logo}
            alt={`${company.name} Logo`}
            layout="intrinsic" 
            width={size.width} 
            height={size.height} 
            objectFit="contain"
            className="rounded-lg relative z-30" // Above both video and gradient
          />
        </div>
      ))}
    </div>
  );
};

export default Box;
