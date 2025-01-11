import Image from "next/image";
import { Pirata_One } from "next/font/google";
import judge1Image from "../../assets/judges/judge1.png";
import judge2Image from "../../assets/judges/judge2.png";
import judge3Image from "../../assets/judges/judge3.png";
import judge4Image from "../../assets/judges/judge4.png";
import judge5Image from "../../assets/judges/judge5.png";
import ComingSoon from "../ComingSoon/ComingSoon";


const pirataOne = Pirata_One({
  weight: "400",
  subsets: ["latin"],
  display: "swap",
});

const LinkedInIcon = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="currentColor"
  >
    <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.32 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.79M6.88 8.56a1.68 1.68 0 0 0 1.68-1.68c0-.93-.75-1.69-1.68-1.69a1.69 1.69 0 0 0-1.69 1.69c0 .93.76 1.68 1.69 1.68m1.39 9.94v-8.37H5.5v8.37h2.77z" />
  </svg>
);

const judges = [
  { id: 1, color: "#37375E", image: judge1Image },
  { id: 2, color: "#782A2B", image: judge2Image },
  { id: 3, color: "#3E6E7C", image: judge3Image },
  { id: 4, color: "#002E78", image: judge4Image },
  { id: 5, color: "#D0A022", image: judge5Image },
];

export default function JudgesSection() {
  return (
    <section id="judges" className="relative w-full md:overflow-hidden lg:overflow-hidden">
      {/* Content Container */}
      <div className="relative w-full flex flex-col items-center justify-start">
        {/* Title */}
        <h2
          className={`${pirataOne.className} text-[50px] sm:text-[70px] md:text-[6rem] text-center text-white mb-8 sm:mb-10 md:mb-12 lg:mb-12 w-[80%] sm:w-[70%] md:w-[60%]`}
          style={{
            textShadow: "-5px 8px 4px rgba(0, 0, 0, 0.5)",
          }}
        >
          Our Judges and Mentors
        </h2>
          <ComingSoon />
        {/* Judges Grid */}
        {/* <div className="flex flex-col items-center justify-center gap-8 mt-4 w-full px-4 md:grid md:grid-cols-5 md:grid-rows-2 md:gap-y-5 md:gap-x-4 md:max-w-7xl lg:grid lg:grid-cols-5 lg:grid-rows-2 lg:gap-y-5 lg:gap-x-4 lg:max-w-7xl"> */}
          {/* Top row - two judges */}
          {/* <div className="md:col-start-2 md:col-span-1 md:translate-x-1/2 lg:translate-x-1/2"> */}
            {/* <JudgeCard judge={judges[0]} /> */}
          {/* </div> */}
          {/* <div className="md:col-start-4 md:col-span-1 md:-translate-x-1/2 lg:-translate-x-1/2"> */}
            {/* <JudgeCard judge={judges[1]} /> */}
          {/* </div> */}

          {/* Bottom row - three judges */}
          {/* <div className="md:col-start-1 md:col-span-1 md:self-end md:translate-x-3/4 lg:translate-x-3/4"> */}
            {/* <JudgeCard judge={judges[2]} /> */}
          {/* </div> */}
          {/* <div className="md:col-start-2 md:col-span-3 md:self-end"> */}
            {/* <JudgeCard judge={judges[3]} /> */}
          {/* </div> */}
          {/* <div className="md:col-start-5 md:col-span-1 md:self-end md:-translate-x-3/4 lg:-translate-x-3/4"> */}
            {/* <JudgeCard judge={judges[4]} /> */}
          {/* </div> */}
        {/* </div> */}
      </div>
    </section>
  );
}

function JudgeCard({ judge }) {
  return (
    <div className="flex flex-col items-center justify-center space-y-4">
      {/* Profile Image Container */}
      <div className="relative w-40 h-40 sm:w-60 sm:h-60 md:w-40 md:h-40 lg:w-48 lg:h-48">
        <div
          className="absolute inset-0 rounded-full"
          style={{ backgroundColor: judge.color }}
        />
        {judge.image && (
          <div className="absolute inset-0 overflow-hidden rounded-full">
            <Image
              src={judge.image}
              alt={`Judge ${judge.id}`}
              fill
              sizes="(max-width: 640px) 160px, (max-width: 768px) 144px, (max-width: 1024px) 192px, 192px"
              className="object-cover"
            />
          </div>
        )}
      </div>

      {/* Colored Rectangle */}
      <div
        className="w-40 sm:w-48 md:w-36 lg:w-48 h-1 mt-2"
        style={{ backgroundColor: judge.color }}
      />

      {/* LinkedIn Icon */}
      <div className="mt-2 flex justify-center">
        <div
          className="w-[50px] h-[50px] flex items-center justify-center"
          style={{ color: judge.color }}
        >
          <LinkedInIcon />
        </div>
      </div>
    </div>
  );
}
