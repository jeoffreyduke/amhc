import Image from "next/image";
import React from "react";
import research from "../../../../public/assets/research.jpg";

function FourthSection() {
  return (
    <section className="bg-black h-[100vh] flex max-sm:flex-col p-2 items-center justify-center">
      <div className="relative w-[60vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw] mx-24">
        <Image src={research} alt="curry rice" fill objectFit="contain" />
      </div>
      <div className="w-[50vw] max-sm:w-[90vw] flex flex-col items-center max-sm:items-center mt-4 text-[0.8rem] mx-24 ml-0 max-sm:ml-24">
        <div className="w-[40rem] max-sm:w-[80vw] p-4">
          <p className="w-full text-white text-[0.9rem] max-sm:text-center">
            Research on African Medicine:
          </p>
          <p className="w-full text-white text-[1.8rem] max-sm:text-[1.4rem] max-sm:text-center">
            Exploring and validating the efficacy of traditional African
            medicine practices for mental and physical health.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
