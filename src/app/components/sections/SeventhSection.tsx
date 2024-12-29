import Image from "next/image";
import React from "react";
import musictherapy from "../../../../public/assets/musictherapy.jpg";

function SeventhSection() {
  return (
    <section className="bg-[rgb(240,230,220)] h-[100vh] max-sm:h-[50vh] flex max-sm:flex-col-reverse p-2 px-[7rem] items-center justify-center">
      <div className="w-[50vw] max-sm:w-[90vw] max-sm:justify-center max-sm:mt-4 flex text-[0.8rem]">
        <div className="w-[30rem] p-4">
          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-black text-[1.8rem]">
            Immerse yourself in the healing vibrations of music and sound. Our
            <b> Music/Sound Therapy</b> sessions offer a unique and deeply
            relaxing experience, promoting emotional release, stress reduction,
            and a sense of inner peace. Allow the soothing melodies and resonant
            frequencies to guide you on a journey of emotional and spiritual
            rejuvenation.
          </p>
        </div>
      </div>
      <div className="relative w-[50vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw]">
        <Image src={musictherapy} alt="curry rice" fill objectFit="contain" />
      </div>
    </section>
  );
}

export default SeventhSection;
