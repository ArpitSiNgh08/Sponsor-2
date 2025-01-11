"use client";
import React from "react";
import bg from "@/assets/backgroundimg.jpg";
import Image from "next/image";
import Navbar from "@/components/MainPg/Navbar";
import Devfolio_Button from "./devfolio_button";
import "@/app/globals.css";
import hourglass from "@/assets/hourglass.gif";
import { useState, useEffect } from "react";
import timebg from "@/assets/timebg.png";

const MainPg = () => {
  const [timeLeft, setTimeLeft] = useState({
    days: 0,
    hours: 0,
    minutes: 0,
    seconds: 0,
  });

  useEffect(() => {
    const targetDate = new Date("2025-01-31T23:59:59").getTime();

    const updateTimer = () => {
      const now = new Date().getTime();
      const difference = targetDate - now;

      if (difference > 0) {
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));
        const hours = Math.floor(
          (difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)
        );
        const minutes = Math.floor(
          (difference % (1000 * 60 * 60)) / (1000 * 60)
        );
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);

        setTimeLeft({ days, hours, minutes, seconds });
      } else {
        clearInterval(timerInterval);
      }
    };

    const timerInterval = setInterval(updateTimer, 1000);

    return () => clearInterval(timerInterval);
  }, []);

  return (
    <div id="home" className="w-full lg:h-[90vh]">
      <Navbar />
      <div className="flex items-center justify-center sm:space-y-16 space-y-12 h-full flex-col">
        <div className="flex w-full flex-col items-center justify-center">
          <span
            style={{
              textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
            }}
            className="text-[150px] px-3 pirata-one-regular lg:leading-none max-lg:text-[120px] max-md:text-[80px] max-sm:text-[70px] text-center"
          >
            ELECTROTHON 7.0
          </span>
          <span className="text-[50px] macondo-swash-caps-regular lg:leading-none max-lg:text-[40px] max-md:text-[30px] text-center">
            Colosseum of Code
          </span>
        </div>
        {/* <button className='lg:text-[28px] sm:text-[24px] text-[18px] flex space-x-3 bg-[#3770FF] items-center justify-center font-[600] inter px-6 py-2 rounded-full'>
          <Image className='sm:w-[30px] w-[23px]' src={register} alt='' width={35} height={35} />
          <span className='text-center'>
            Register Here
          </span>
        </button> */}
        <Devfolio_Button />

        <div className="flex justify-center items-center w-full">
          <Image
            className="max-lg:hidden max-md:w-[100px] max-lg:w-[120px]"
            src={hourglass}
            alt=""
            width={220}
          />
          <div 
          style={{ backgroundImage: `url(${timebg.src})` }}
          className="flex flex-col items-center justify-center md:h-[244px] md:w-[551px] sm:w-[500px] sm:h-[200px] w-[440px] h-[170px] bg-cover bg-center">
            <div
              className="md:text-[53px] text-[46px] island-moments-regular text-black leading-[35px] text-center"
            >
              Time Left To Register
            </div>
            <div className="abhaya-libre-regular sm:leading-[55px] leading-[40px] lg:leading-[75px] flex w-full justify-center items-center">
              {/* <Image className="sm:hidden" src={hourglass} alt="" width={60} /> */}
              <div

                className="flex items-center justify-center text-[50px] text-[#113A4A] font-light sm:space-x-2 space-x-1"
              >
                <span className="flex flex-col items-center justify-center">
                  <span className="sm:text-[70px] text-[50px]">
                    {timeLeft.days}
                  </span>
                  <span className="sm:text-[20px] text-[18px] lg:leading-[0px] leading-[15px]">
                    Days
                  </span>
                </span>
                <span>:</span>
                <span className="flex flex-col items-center justify-center">
                  <span className="sm:text-[70px] text-[50px] ">
                    {timeLeft.hours}
                  </span>
                  <span className="sm:text-[20px] text-[18px] lg:leading-[0px] leading-[15px]">
                    Hours
                  </span>
                </span>
                <span>:</span>
                <span className="flex flex-col items-center justify-center">
                  <span className="sm:text-[70px] text-[50px] ">
                    {timeLeft.minutes}
                  </span>
                  <span className="sm:text-[20px] text-[18px] lg:leading-[0px] leading-[15px]">
                    Minutes
                  </span>
                </span>
                <span>:</span>
                <span className="flex flex-col items-center justify-center">
                  <span className="sm:text-[70px] text-[50px] ">
                    {timeLeft.seconds}
                  </span>
                  <span className="sm:text-[20px] text-[18px] lg:leading-[0px] leading-[15px]">
                    Seconds
                  </span>
                </span>
              </div>
              {/* <Image
                className="sm:hidden -scale-x-100"
                src={hourglass}
                alt=""
                width={60}
              /> */}
            </div>
          </div>
          <Image
            className="max-lg:hidden max-md:w-[100px] -scale-x-100 max-lg:w-[120px]"
            src={hourglass}
            alt=""
            width={220}
          />
        </div>
      </div>
    </div>
  );
};

export default MainPg;
