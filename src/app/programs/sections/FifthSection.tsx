import React from "react";
import lecture from "../../../../public/assets/lecture.jpg";
import Image from "next/image";

function FifthSection() {
  return (
    <section className="bg-[rgb(240,230,220)] h-[100vh] flex max-sm:flex-col-reverse p-2 px-[7rem] items-center justify-center">
      <div className="w-[50vw] max-sm:w-[90vw] max-sm:justify-center max-sm:mt-4 flex text-[0.8rem]">
        <div className="w-[30rem] p-4">
          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-black text-[0.9rem]">
            Wellness Retreats & Lectures/Workshops:
          </p>

          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-black text-[1.8rem] max-sm:text-[1.4rem]">
            Providing immersive experiences for personal growth and healing
            through retreats, engaging lectures, and interactive workshops.
          </p>
        </div>
      </div>
      <div className="relative w-[50vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw]">
        <Image src={lecture} alt="curry rice" fill objectFit="contain" />
      </div>
    </section>
  );
}

export default FifthSection;
