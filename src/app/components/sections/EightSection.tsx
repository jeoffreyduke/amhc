import Image from "next/image";
import React from "react";
import counselling from "../../../../public/assets/careercounselling.jpg";

function EightSection() {
  return (
    <section className="bg-black h-[100vh] flex max-sm:flex-col p-2 items-center justify-center space-between">
      <div className="relative w-[60vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw] mx-24">
        <Image src={counselling} alt="curry rice" fill objectFit="contain" />
      </div>
      <div className="w-[50vw] h-[80vh] max-sm:w-[90vw] items-center max-sm:justify-center max-sm:mt-4 flex text-[0.8rem] mx-24 ml-0">
        <div className="w-[40rem] p-4">
          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-[1.8rem]">
            Navigate your career path with confidence and clarity. Our{" "}
            <b>Career Counselling</b> will provide personalized guidance,
            helping you identify your strengths, passions, and goals. We&apos;ll
            assist you in exploring your career options, developing a robust job
            search strategy, and building the confidence you need to succeed in
            your chosen field.
          </p>
        </div>
      </div>
    </section>
  );
}

export default EightSection;
