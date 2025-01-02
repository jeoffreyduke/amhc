import React from "react";

const LastSection = () => {
  return (
    <section className="bg-[rgb(240,230,220)] h-[50vh] flex p-2 px-[7rem] items-center justify-center">
      <div className="w-[60vw] flex justify-center items-center text-[0.8rem]">
        <div className="w-fit flex flex-col justify-center items-center p-4">
          <p className="w-[30rem] max-sm:w-[80vw] text-black text-center text-[1.8rem]">
            Contact us to find out more
          </p>
          <button className="bg-black text-center text-[1.2rem] m-5 rounded-md h-[3rem] w-[15rem] z-10">
            <b>Reach out</b>
          </button>
        </div>
      </div>
    </section>
  );
};

export default LastSection;
