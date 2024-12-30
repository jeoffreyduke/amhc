import React from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import Image from "next/image";
import sunflower from "../../../public/assets/sunflower.jpg";

const OurStory = () => {
  return (
    <main className="h-[100vh]">
      <Header />
      <section className="w-100vw flex justify-center bg-white">
        <div className="relative flex justify-center w-[90vw] h-[50vh] max-sm:h-[30vh]">
          <Image
            style={{ filter: "brightness(0.8) contrast(1.1) opacity: 0.7" }}
            src={sunflower}
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

      <section className="flex justify-center my-8 bg-white">
        <div className="w-fit mx-16 max-sm:mx-8 flex max-sm:flex-col flex-wrap gap-4 bg-[rgb(233,186,0)] p-8">
          <p className="w-full text-center text-[14px]">
            Elechi&apos;s is named after a Nigerian American who transitioned
            from earth four months after turning 18. She had a deep love for
            Nigeria and Memphis. When you step inside Elechis&apos;, we want to
            share everything that shaped her incredible life, influenced by
            these two amazing cultures she loved.
          </p>
        </div>
      </section>

      <section className="flex justify-center my-8 bg-white">
        <div className="w-fit mx-16 max-sm:mx-8 flex max-sm:flex-col flex-wrap gap-4 bg-[rgb(233,186,0)] p-8">
          <p className="w-full text-center text-[14px]">
            Welcome to experiencing Elechi’s. Enjoy your time here, she would
            want you to!
          </p>
        </div>
      </section>

      <Footer />
    </main>
  );
};

export default OurStory;
