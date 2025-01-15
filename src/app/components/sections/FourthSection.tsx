import Image from "next/image";
import React from "react";
import meditate from "../../../../public/assets/meditate.jpg";

function FourthSection() {
  return (
    <section className="bg-black h-[100vh] flex max-sm:flex-col p-2 items-center justify-center space-between">
      <div className="relative w-[60vw] h-[80vh] max-sm:h-[30vh] max-sm:w-[80vw] mx-24 max-sm:mt-8">
        <Image src={meditate} alt="curry rice" fill objectFit="contain" />
      </div>
      <div className="w-[50vw] h-[80vh] max-sm:w-[90vw] items-center max-sm:justify-center max-sm:mt-4 flex text-[0.8rem] mx-24 ml-0 max-sm:ml-24">
        <div className="w-[40rem] p-4">
          <p className="w-full max-sm:w-[80vw] max-sm:text-center text-white text-[1.8rem] max-sm:text-[1.35rem]">
            Experience the transformative power of{" "}
            <b>Electromagnetic Therapy</b>, a cutting-edge approach that
            harnesses the subtle energies within your body. Our expert
            practitioners utilize advanced technologies to gently stimulate and
            rebalance your natural energy flow, promoting deep relaxation, pain
            relief, and overall well-being.
          </p>
        </div>
      </div>
    </section>
  );
}

export default FourthSection;
