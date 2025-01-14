"use client";
import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import community from "../../../public/assets/community.jpg";
import SecondSection from "./sections/SecondSection";
import ThirdSection from "./sections/ThirdSection";
import FourthSection from "./sections/FourthSection";
import FifthSection from "./sections/FifthSection";
import SixthSection from "./sections/SixthSection";
import LastSection from "./sections/LastSection";

const Booking = () => {
  return (
    <main className="h-[100vh]">
      <Header />
      <section className="h-[82vh] max-sm:h-[75vh] bg-[rgb(240,230,220)] text-black w-100vw flex justify-center pt-20">
        <div className="relative w-full h-full flex flex-col items-center">
          <div className="relative flex justify-center w-[90vw] h-[58vh] max-sm:h-[60vh]">
            <Image
              style={{ filter: "brightness(0.8) contrast(1.1) opacity: 0.7" }}
              src={community}
              objectFit="cover"
              layout="fill"
              fill
              alt="menu"
            />
            <div className="absolute bottom-8 w-[60vw] h-[10vh] max-sm:h-[5vh] max-sm:w-[85vw] max-sm:text-[1.2rem] flex justify-center items-center text-center p-3 bg-[rgba(30,24,0,0.45)] text-[3rem] text-white">
              <p>Programs</p>
            </div>
          </div>
        </div>
      </section>

      <main>
        <SecondSection />
        <ThirdSection />
        <FourthSection />
        <FifthSection />
        <SixthSection />
        <LastSection />
      </main>

      <Footer />
    </main>
  );
};

export default Booking;
