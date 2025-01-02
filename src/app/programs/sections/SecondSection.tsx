import Image from "next/image";
import React from "react";
import outreach from "../../../../public/assets/outreach.jpg";

const SecondSection = () => {
  return (
    <section className="bg-black h-[100vh] flex max-sm:flex-col p-2 items-center justify-center space-between">
      <div className="relative w-[60vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw] mx-24">
        <Image src={outreach} alt="curry rice" fill objectFit="contain" />
      </div>
      <div className="w-[50vw] h-[80vh] max-sm:w-[90vw] items-center max-sm:justify-center max-sm:mt-4 flex text-[0.8rem] mx-24 ml-0">
        <div className="w-[40rem] p-4">
          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-white text-[0.9rem]">
            Community Outreach & Education:
          </p>

          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-white text-[1.8rem]">
            Empowering communities with mental health knowledge and resources
            through accessible workshops and awareness campaigns.
          </p>
        </div>
      </div>
    </section>
  );
};

export default SecondSection;
