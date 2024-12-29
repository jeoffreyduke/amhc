import React from "react";
import mentalism from "../../../../public/assets/mentalism.jpg";
import Image from "next/image";

function FifthSection() {
  return (
    <section className="bg-[rgb(240,230,220)] h-[100vh] max-sm:h-[50vh] flex max-sm:flex-col-reverse p-2 px-[7rem] items-center justify-center">
      <div className="w-[50vw] max-sm:w-[90vw] max-sm:justify-center max-sm:mt-4 flex text-[0.8rem]">
        <div className="w-[30rem] p-4">
          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-black text-[1.8rem]">
            Unlock the hidden potential of your mind with our innovative
            <b> Mentalism</b> services. Explore the depths of your subconscious,
            cultivate mental clarity, and develop powerful coping mechanisms.
            Our experienced practitioners will guide you on a journey of
            self-discovery, empowering you to overcome challenges and live a
            more fulfilling life.
          </p>
        </div>
      </div>
      <div className="relative w-[50vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw]">
        <Image src={mentalism} alt="curry rice" fill objectFit="contain" />
      </div>
    </section>
  );
}

export default FifthSection;
