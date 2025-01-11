// File path: src/app/page.js
'use client'; // Ensure this is marked as a client component if using hooks

import React, { useEffect, useState } from 'react';
import MainPg from "@/components/MainPg/MainPg.js";
import AboutUs from "@/components/About_Us/AboutUs.js";
import Faqs from "@/components/Faq/faq";
import Slider from "@/components/last_electrothon/slider.js";
import Timeline from "@/components/Timeline/timeline";
import Sponsors1 from "@/components/Sponsors/Sponsers1";
import Sponsors2 from "@/components/Sponsors/Sponsors2";
import Prize from "@/components/Prizes/Prizes";
import SliderT from "@/components/Testimonials/slider";
import Footer from "@/components/contact_us/Footer";
import JudgesSection from "../components/JudgesSection/JudgesSection.js";
import Organizers from "@/components/Organizers/Organizer";
import Image from "next/image";
import ThemeSection from "@/components/ThemeSection/ThemeSection";
import Theme from "@/components/Tracks_new/Track";
import bg from '../assets/backgroundimg.jpg';
import Loader from '@/components/Loader/Loader.js';

export default function Home() {
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            // Simulate a delay (e.g., fetching data)
            await new Promise(resolve => setTimeout(resolve, 2000)); // Adjust the timeout as needed
            setLoading(false); // Set loading to false after data is fetched
        };

        fetchData();
    }, []);

    return (
    <div className="relative h-screen overflow-hidden">
    {loading ? (
        <Loader /> // Show loader while loading                
    ) : (    
        <div
        className="relative scroll-smooth bg-cover bg-center bg-fixed h-full overflow-y-auto space-y-20"
        style={{ backgroundImage: `url(${bg.src})` }}
        >
        <MainPg />
        <AboutUs />
        <Slider />
        <JudgesSection />
        <Theme />
        <Prize />
        <Timeline />
        <Sponsors1 />
        <Sponsors2 />
        <SliderT />
        <Organizers />
        <Faqs />
        <Footer />
        </div>
        )}
    </div>
  );
}
