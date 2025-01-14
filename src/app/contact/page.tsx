/* eslint-disable @typescript-eslint/no-explicit-any */
"use client";
import React, { useState } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";

function Contact() {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [loading, setLoading] = useState(false);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const emailContent = `
      Name: ${name}
      Email: ${email}
      Phone Number: ${phoneNumber}
      Message: ${message}
    `;

    window.open(
      `mailto:help@amhc.africa?subject=Contact Form Submission&body=${encodeURIComponent(
        emailContent
      )}`
    );
  };

  return (
    <main className="h-[100vh] bg-[rgb(240,230,220)]">
      <Header />

      <p className="bg-[rgb(240,230,220)] text-black w-full pb-4 pr-[3rem] text-[1.5rem] p-16 max-sm:m-0">
        <b>Contact Us</b>
      </p>

      <div className="bg-[rgb(240,230,220)] text-black flex max-sm:justify-center p-16 pt-4 max-sm:mx-16 max-sm:p-8">
        <form onSubmit={handleSubmit}>
          <div className="mt-0">
            <label className="font-[600]">
              Name<span className="text-red text-[0.9rem] font-light">*</span>
            </label>
            <br />
            <input
              className="h-12 w-[30rem] max-sm:w-[100%] bg-transparent border border-[rgb(34,20,0)] outline-[rgb(34,24,0)] px-4 mt-2"
              type="text"
              autoCapitalize="words"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="font-[600]">
              Email
              <span className="text-red text-[0.9rem] font-light">*</span>
            </label>
            <br />
            <input
              className="h-12 w-[30rem] max-sm:w-[100%] bg-transparent border border-[rgb(34,20,0)] outline-[rgb(34,24,0)] px-4 mt-2"
              type="text"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="font-[600]">
              Phone Number<span>(optional)</span>
            </label>
            <br />
            <input
              className="h-12 w-[30rem] max-sm:w-[100%] bg-transparent border border-[rgb(34,20,0)] outline-[rgb(34,24,0)] px-4 mt-2"
              type="text"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="mt-4">
            <label className="font-[600]">Message</label>
            <br />
            <textarea
              className="h-36 w-[30rem] max-sm:w-[100%] bg-transparent border border-[rgb(34,20,0)] outline-[rgb(34,24,0)] px-4 mt-2"
              value={message}
              onChange={(e) => setMessage(e.target.value)}
            ></textarea>
          </div>

          <button
            className="bg-black text-white m-4 rounded-md h-[3rem] w-[20rem] mx-0"
            type="submit"
            onClick={handleSubmit}
          >
            {loading ? "loading..." : "Submit"}
          </button>
        </form>
      </div>
      <Footer />
    </main>
  );
}

export default Contact;
