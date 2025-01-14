import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import typewriter from "../../../public/assets/typewriter.jpg";
import pen from "../../../public/assets/pen.jpg";

const OurStory = () => {
  return (
    <main className="h-[100vh]">
      <Header />
      <section className="w-[100vw] flex justify-center bg-[rgb(240,230,220)] py-20">
        <div className="relative flex justify-center w-[90vw] h-[62vh] max-sm:h-[30vh]">
          <Image
            style={{ filter: "brightness(0.8) contrast(1.1) opacity: 0.7" }}
            src={typewriter}
            objectFit="cover"
            layout="fill"
            fill
            alt="menu"
          />
          <div className="absolute bottom-8 w-[60vw] h-[10vh] max-sm:h-[10vh] max-sm:w-[85vw] max-sm:text-[1.2rem] flex justify-center items-center text-center p-3 bg-[rgba(30,24,0,0.45)] text-[3rem] text-white">
            <p>Our Story</p>
          </div>
        </div>
      </section>

      <section className="w-[100vw] flex flex-col justify-center items-center">
        <div className="w-[90vw] max-sm:w-[85vw] my-20">
          <p className="text-lg text-center mt-5">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            malesuada, purus nec tincidunt volutpat, sed diam nonumy eirmod
            tempor inc tempor ullamcorper sed velit. Ut wisi enim ad minim
            veniam, et wisi et al. Ut en ullamcorper sed et al tempor, in erat
            posuere. Ut wisi enim ad minim veniam, et wisi et al. Ut en
            ullamcorper sed et al tempor, in erat posuere. Ut wisi enim ad minim
            veniam, et wisi et al. Ut en ullamcorper sed et al tempor, in erat
            posuere. Ut wisi enim ad minim veniam, et wisi et al. Ut en
            ullamcorper sed et al tempor, in erat posuere. Ut wisi enim ad minim
            veniam, et wisi et al. Ut en ullamcorper sed et al tempor, in erat
            posuere. Ut wisi enim ad minim veniam, et wisi et al. Ut en
            ullamcorper sed et al tempor, in erat posuere. Ut wisi enim ad minim
            veniam, et wisi et al. Ut en ullamcorper sed et al tempor, in erat
            posuere. Ut wisi enim ad minim veniam, et wisi et al. Ut en
            ullamcorper sed et al tempor, in erat posuere. Ut wisi enim ad minim
            veniam, et wisi et al. Ut en ullamcorper sed et al tempor, in erat
            posuere. Ut wisi enim ad minim veniam, et wisi et al. Ut en
            ullamcorper sed et al tempor, in erat posuere.
          </p>
        </div>

        <div className="relative w-[70vw] h-[50vh] max-sm:h-[30vh] max-sm:w-[80vw]">
          <Image src={pen} alt="curry rice" fill objectFit="contain" />
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OurStory;
