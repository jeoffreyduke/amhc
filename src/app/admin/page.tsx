import React from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Link from "next/link";

const Admin = () => {
  return (
    <main className="h-[100vh]">
      <Header />
      <section className="max-sm:h-[75vh] max-sm:flex max-sm:flex-col max-sm:justify-center p-8 max-sm:p-4 bg-[rgb(240,230,220)]">
        <div className="flex max-sm:flex-wrap">
          <Link href="/admin/bookings" className="w-full h-fit">
            <div className="border border-black h-[60vh] max-sm:h-[30vh] m-4 relative flex justify-center items-center">
              <div className="w-[60%] h-[10vh] max-sm:h-[10vh] max-sm:w-[70vw] max-sm:text-[1.2rem] flex justify-center items-center text-center p-3 bg-[rgba(30,24,0,0.45)] text-[3rem] text-white">
                <p>Bookings</p>
              </div>
            </div>
          </Link>
        </div>
      </section>
      <Footer />
    </main>
  );
};

export default Admin;
