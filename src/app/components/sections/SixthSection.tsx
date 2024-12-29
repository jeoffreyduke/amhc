import Image from "next/image";
import React from "react";
import herbalism from "../../../../public/assets/herbalism.jpg";

function SixthSection() {
  return (
    <section className="bg-black h-[100vh] flex max-sm:flex-col p-2 items-center justify-center space-between">
      <div className="relative w-[60vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw] mx-24">
        <Image src={herbalism} alt="curry rice" fill objectFit="contain" />
      </div>
      <div className="w-[50vw] h-[80vh] max-sm:w-[90vw] items-center max-sm:justify-center max-sm:mt-4 flex text-[0.8rem] mx-24 ml-0">
        <div className="w-[40rem] p-4">
          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-white text-[1.8rem]">
            Rediscover the healing wisdom of nature with our traditional
            <b> Herbalism</b> practices. Our skilled herbalists will carefully
            select and prepare potent remedies tailored to your specific needs.
            Experience the gentle yet profound effects of plant-based medicine,
            promoting natural healing and restoring balance within your body and
            mind.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SixthSection;
