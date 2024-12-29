import React from "react";
import Link from "next/link";
import Carousel, { ImageData } from "../Carousel";
import duo from "../../../../public/assets/duo.jpg";
import trio from "../../../../public/assets/trio.jpg";
import mentalhealth from "../../../../public/assets/mentalhealth.jpg";

const images: ImageData[] = [
  { src: duo, alt: "Happy Duo" },
  { src: trio, alt: "Busy Trio" },
  { src: mentalhealth, alt: "Mental health matters" },
];

const FirstSection = () => {
  return (
    <section className="relative h-[91vh] max-sm:h-[76vh] bg-[rgb(240,230,220)]">
      <div className="relative w-full h-full flex flex-col items-center">
        <div className="relative flex justify-center w-[95vw] h-[80vh] max-sm:h-[100vh] mt-10 bg-black">
          <Carousel images={images} />

          <div className="absolute bottom-8 border-r-10 border-transparent">
            <Link href="/menu">
              <button className="bg-black text-[2rem] m-5 rounded-md h-[6rem] w-[30rem] mx-1 z-10">
                <b>Make a booking</b>
              </button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FirstSection;
