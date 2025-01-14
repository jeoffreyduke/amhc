"use client";
import Footer from "@/app/components/Footer";
import Header from "@/app/components/Header";
import { collection } from "firebase/firestore";
import React, { useState } from "react";
import { db } from "../../../../firebaseConfig";
import { useCollectionData } from "react-firebase-hooks/firestore";
import { CloseRounded } from "@mui/icons-material";
import { deleteItem } from "../../../../api/database";
import { Modal } from "@mui/material";

const Bookings = () => {
  const bookingsRef = collection(db, "bookings");
  const [bookings, loading] = useCollectionData(bookingsRef);

  const [modalIsActive, setModalIsActive] = useState(false);
  const [activeId, setActiveId] = useState("");

  const trashItem = () => {
    deleteItem(activeId, "bookings");
    setModalIsActive(false);
  };

  return (
    <main className="h-[100vh] overflow-hidden">
      <Header />
      <section className="bg-[rgb(240,230,220)] text-black h-[80vh] max-sm:h-[68vh] overflow-y-auto max-sm:overflow-scroll p-8 py-12 max-sm:p-4">
        <p className="text-black w-full text-[1.5rem] max-sm:m-8 max-sm:ml-0">
          <b>Bookings</b>
        </p>

        <main>
          <div className="flex gap-8 mt-8 max-sm:gap-4">
            <div className="w-[15%] mb-4 max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.9rem]">
              Name
            </div>
            <div className="w-[15%] mb-4 max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.9rem]">
              Service
            </div>
            <div className="w-[15%] mb-4 max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.9rem]">
              Time
            </div>
            <div className="w-[15%] mb-4 max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.9rem]">
              Date
            </div>
            <div className="w-[15%] mb-4 max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.9rem]">
              Email
            </div>
            <div className="w-[15%] mb-4 max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.9rem]">
              Phone Number
            </div>
            <div className="w-[15%] mb-4 max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.9rem]">
              Request
            </div>
            <div className="w-[15%] mb-4 max-sm:min-w-[5rem] sm:overflow-x-auto no-scrollbar font-bold text-[0.9rem]">
              Action
            </div>
          </div>
          {!loading &&
            // eslint-disable-next-line @typescript-eslint/no-explicit-any
            bookings?.map((booking: any) => (
              <>
                <div className="flex justify-between gap-8 max-sm:gap-4">
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.9rem]">
                    {booking.name}
                  </div>
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.9rem]">
                    {booking.service}
                  </div>
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.9rem]">
                    {booking.time}
                  </div>
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.9rem]">
                    {booking.date}
                  </div>
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.9rem]">
                    {booking.email}
                  </div>
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.9rem]">
                    {booking.phoneNumber}
                  </div>
                  <div className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.9rem]">
                    {booking.request}
                  </div>
                  <div
                    data-twe-target="tooltip"
                    className="w-[15%] max-sm:min-w-[5rem] my-2 overflow-x-auto no-scrollbar text-[0.9rem] text-[red] cursor-pointer"
                    onClick={() => {
                      setActiveId(booking.id);
                      setModalIsActive(true);
                    }}
                  >
                    <a data-twe-toggle="tooltip" title="Close booking">
                      <CloseRounded />
                    </a>
                  </div>
                </div>
              </>
            ))}
        </main>

        <Modal
          open={modalIsActive}
          onClose={() => setModalIsActive(false)}
          className="flex flex-col justify-center items-center"
        >
          <main className="bg-black max-sm:w-[80%] p-8">
            <section>Are you sure you want to close this booking?</section>
            <section className="flex justify-between">
              <button
                className="bg-white text-black mx-5 rounded-md h-[2.2rem] w-full mt-4"
                onClick={trashItem}
              >
                Yes
              </button>
              <button
                className="bg-white text-black mx-5 rounded-md h-[2.2rem] w-full mt-4"
                onClick={() => setModalIsActive(false)}
              >
                No
              </button>
            </section>
          </main>
        </Modal>
      </section>

      <Footer />
    </main>
  );
};

export default Bookings;
