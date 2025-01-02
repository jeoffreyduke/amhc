import Image from "next/image";
import React from "react";
import training from "../../../../public/assets/training.jpg";

const ThirdSection = () => {
  return (
    <section className="bg-[rgb(240,230,220)] h-[100vh] max-sm:h-[50vh] flex max-sm:flex-col-reverse p-2 px-[7rem] items-center justify-center">
      <div className="w-[50vw] max-sm:w-[90vw] max-sm:justify-center max-sm:mt-4 flex text-[0.8rem]">
        <div className="w-[30rem] p-4">
          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-black text-[0.9rem]">
            Holistic Health Training:
          </p>

          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-black text-[1.8rem]">
            Equipping individuals with the skills and knowledge to cultivate
            holistic well-being through comprehensive training programs.
          </p>
        </div>
      </div>
      <div className="relative w-[50vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw]">
        <Image src={training} alt="curry rice" fill objectFit="contain" />
      </div>
    </section>
  );
};

export default ThirdSection;
