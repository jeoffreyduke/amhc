import Image from "next/image";
import React from "react";
import onlinecourse from "../../../../public/assets/onlinecourse.jpg";

function SixthSection() {
  return (
    <section className="bg-black h-[100vh] flex max-sm:flex-col p-2 items-center justify-center space-between">
      <div className="relative w-[60vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw] mx-24">
        <Image src={onlinecourse} alt="curry rice" fill objectFit="contain" />
      </div>
      <div className="w-[50vw] h-[80vh] max-sm:w-[90vw] items-center max-sm:justify-center max-sm:mt-4 flex text-[0.8rem] mx-24 ml-0">
        <div className="w-[40rem] p-4">
          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-white text-[0.9rem]">
            Online Courses:
          </p>

          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-white text-[1.8rem]">
            Accessible learning opportunities for individuals seeking to enhance
            their mental and emotional well-being through convenient online
            courses.
          </p>
        </div>
      </div>
    </section>
  );
}

export default SixthSection;
