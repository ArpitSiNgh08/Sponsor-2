"use client"; // Ensure this is a client component

import React, { useRef } from 'react';
import bg from '@/assets/backgroundimg.jpg';
import horse from '@/assets/About_Us/horse.webp';
import Image from 'next/image';
import { Pirata_One } from 'next/font/google';
import Cannonball from './Cannonball';
import Cannonball4 from './Cannonball4';
import Cannonball3 from './Cannonball3';
import Cannonball2 from './Cannonball2';

const pirataOne = Pirata_One({
    weight: '400',
    subsets: ['latin'],
    display: 'swap',
});

const AboutUs = () => {
    const rectangleRef = useRef(null);
    const paragraphRef = useRef(null);

    return (
        <div id='about' className="relative w-full">
            {/* Background Layer */}
            <div className="fixed inset-0 z-[-1] bg-[#091826]">
                <div className="relative w-full h-full">
                    <Image
                        src={bg.src}
                        alt="Background image"
                        layout="fill"
                        objectFit="cover"
                        quality={100} // Optional: Adjust quality
                        className="opacity-50" // Set image opacity
                    />
                </div>
            </div>

            {/* Page Content Wrapper */}
            <div className="relative flex flex-col items-center w-full ">
                {/* Flex container for horses and title */}
                <div className="flex items-center justify-center w-full mb-5">
                    {/* Mirrored Horse Image on the left */}
                    <Image
                        src={horse.src}
                        alt="Mirrored Horse Element"
                        width={225} // Base width for larger screens
                        height={180} // Base height for larger screens
                        objectFit="cover"
                        quality={100}
                        className="opacity-100 transform scale-x-[-1] mr-4 w-[70px] md:w-[10%] lg:w-[13%]" // Responsive width
                    />
                    
                    {/* About Us Title */}
                    <h2
                        className={`${pirataOne.className} text-[50px] sm:text-[70px] md:text-[6rem] text-center text-white mb-0`}
                        style={{
                            textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
                        }}
                    >
                        About Us
                    </h2>
                    
                    {/* Normal Horse Image on the right */}
                    <Image
                        src={horse.src}
                        alt="Horse Element"
                        width={225} // Base width for larger screens
                        height={180} // Base height for larger screens
                        objectFit="cover"
                        quality={100}
                        className="opacity-100 ml-4 w-[70px] md:w-[10%] lg:w-[13%]" // Responsive width
                    />
                </div>

                {/* Background Rectangle */}
                <div ref={rectangleRef} className="relative w-full max-w-[90vw] sm:max-w-[70vw] bg-[#03294F] opacity-80 rounded-[30px] sm:rounded-[50px] z-0 p-[4vh] mx-auto">
                    
                    {/* Content */}
                    <div className="relative z-10 w-full flex items-center justify-center">
                        <p ref={paragraphRef} className="font-humanistika text-base md:text-xl lg:text-2xl font-normal text-white leading-[1.3] text-center md:text-left">
                            Prepare to embark on an extraordinary journey into the Colosseum of Code as we unveil the 7th in-person edition of Electrothon! This year, under the banner of a medieval realm, we invite you to a battlefield where code meets creativity and innovation becomes legendary.
                            <br />
                            <br />
                            Spearheaded by the dynamic student community SPEC and illuminated by the vibrant energy of NIT Hamirpur, Electrothon has left an indelible mark on the tech community, empowering over 6000 students to unleash their potential.
                            <br />
                            <br />
                            In previous editions, budding innovators wove spells of technology, transforming visions into reality. Now, in this medieval chapter, prepare to arm yourself with ingenuity, compete with the bravest of coders, and forge groundbreaking solutions that will echo through the halls of innovation.
                        </p>
                    </div>
                </div>

                {/* New Div for Cannonballs with Flexbox for Horizontal Alignment */}
                <div className="flex justify-center items-center space-x-5 pt-5 w-full h-auto"> {/* Increased gap here */}
                    {/* Cannonballs Positioned Horizontally */}
                    <Cannonball4 /> 
                    <Cannonball3 /> 
                    <Cannonball /> 
                    <Cannonball2 /> 
                </div>


            </div>
        </div>
    );
}

export default AboutUs;
