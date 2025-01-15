import Image from "next/image";
import React from "react";
import onlinecourse from "../../../../public/assets/onlinecourse.jpg";

function SixthSection() {
  return (
    <section className="bg-black h-[100vh] flex max-sm:flex-col p-2 items-center justify-center">
      <div className="relative w-[60vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw] mx-24">
        <Image
          src={onlinecourse}
          alt="online course"
          fill
          objectFit="contain"
        />
      </div>
      <div className="w-[50vw] max-sm:w-[90vw] flex flex-col items-center max-sm:items-center mt-4 text-[0.8rem] mx-24 ml-0 max-sm:ml-24">
        <div className="w-[40rem] max-sm:w-[80vw] p-4">
          <p className="w-full text-white text-[0.9rem] max-sm:text-center">
            Online Courses:
          </p>
          <p className="w-full text-white text-[1.8rem] max-sm:text-[1.4rem] max-sm:text-center">
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
