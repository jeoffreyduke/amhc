import Image from "next/image";
import React from "react";
import biomedicine from "../../../../public/assets/biomedicine.jpg";

const ThirdSection = () => {
  return (
    <section className="bg-[rgb(240,230,220)] h-[100vh] flex max-sm:flex-col-reverse p-2 px-[7rem] items-center justify-center">
      <div className="w-[50vw] max-sm:w-[90vw] max-sm:justify-center max-sm:mt-4 flex text-[0.8rem]">
        <div className="w-[30rem] p-4">
          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-black text-[1.8rem]">
            At the heart of our <b>Biological Medicine</b> approach lies a deep
            understanding of the intricate connection between your body and
            mind. We delve into the root causes of your concerns, offering
            personalized treatment plans that address your unique biological
            needs. Experience a comprehensive approach to healing that empowers
            you to take control of your health.
          </p>
        </div>
      </div>
      <div className="relative w-[50vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw] max-sm:mt-8">
        <Image src={biomedicine} alt="curry rice" fill objectFit="contain" />
      </div>
    </section>
  );
};

export default ThirdSection;
