"use client";
import React, { useState } from "react";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Image from "next/image";
import consultancy from "../../../public/assets/consultancy.jpg";
import {
  FormControl,
  InputLabel,
  MenuItem,
  Modal,
  Select,
  SelectChangeEvent,
  TextField,
} from "@mui/material";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import { DatePicker } from "@mui/x-date-pickers/DatePicker";
import { TimePicker } from "@mui/x-date-pickers/TimePicker";
import dayjs, { Dayjs } from "dayjs";
import { addBooking } from "../../../api/database";

const Booking = () => {
  const [open, setOpen] = useState(false);

  const services = [
    "Natural Holistic Healthcare",
    "Biological Medicine",
    "Electromagnetic Therapy",
    "Mentalism",
    "Herbalism",
    "Music/Sound Therapy",
    "Career Counselling",
  ];

  const [error, setError] = useState("");

  const [name, setName] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [email, setEmail] = useState("");
  const [date, setDate] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const [time, setTime] = React.useState<Dayjs | null>(
    dayjs("2022-04-17T15:30")
  );
  const [service, setservice] = useState("0");
  const [request, setRequest] = useState("");

  const handleSetservice = (event: SelectChangeEvent) => {
    setservice(event.target.value as string);
  };

  const submitChanges = () => {
    if (
      name.length < 1 ||
      phoneNumber.length < 1 ||
      email.length < 1 ||
      date === null ||
      time === null ||
      service.length < 1 ||
      name.length < 1
    ) {
      setError("A required field has been left out.");
      return;
    } else
      addBooking(
        name,
        phoneNumber,
        email,
        date,
        time,
        services[+service],
        request
      );

    setOpen(false);
  };

  return (
    <main className="h-[100vh]">
      <Header />
      <section className="bg-[rgb(240,230,220)] text-black w-100vw flex justify-center pt-20">
        <div className="relative w-full h-full flex flex-col items-center">
          <div className="relative flex justify-center w-[90vw] h-[58vh] max-sm:h-[60vh]">
            <Image
              style={{ filter: "brightness(0.8) contrast(1.1) opacity: 0.7" }}
              src={consultancy}
              objectFit="cover"
              layout="fill"
              fill
              alt="menu"
            />
            <div className="absolute bottom-8 w-[60vw] h-[10vh] max-sm:h-[5vh] max-sm:w-[85vw] max-sm:text-[1.2rem] flex justify-center items-center text-center p-3 bg-[rgba(30,24,0,0.45)] text-[3rem] text-white">
              <p>Booking</p>
            </div>
          </div>

          <button
            className="bg-black text-white m-5 mt-12 rounded-md h-[3rem] w-[20rem] mx-1"
            onClick={() => setOpen(true)}
          >
            <b>Make a booking</b>
          </button>
        </div>
      </section>

      <Modal
        open={open}
        onClose={() => setOpen(false)}
        className="flex flex-col justify-center items-center"
      >
        <main className="bg-[rgb(240,230,220)] text-black h-[95%] w-[30%] max-sm:w-[80%] overflow-y-auto p-4 px-8">
          <p className="mt-10 mb-8">
            <b className="text-[1.1rem]">Make your booking.</b>
          </p>

          <div className="mb-4">
            <TextField
              className="mb-10"
              required
              id="outlined-required"
              label="Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <TextField
              className="mb-10"
              required
              id="outlined-required"
              label="Phone Number"
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>

          <div className="mb-4">
            <TextField
              className="mb-10"
              required
              id="outlined-required"
              label="Email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
            />
          </div>

          <LocalizationProvider dateAdapter={AdapterDayjs}>
            <div className="mb-4">
              <DatePicker
                className="mb-10"
                label="Date *"
                value={date}
                onChange={(newValue) => setDate(newValue)}
              />
            </div>
            <div className="mb-4">
              <TimePicker
                className="mb-10"
                label="Time *"
                value={time}
                onChange={(newValue) => setTime(newValue)}
              />
            </div>
          </LocalizationProvider>

          <div className="mb-4">
            <FormControl fullWidth className="mb-10">
              <InputLabel id="demo-simple-select-label">Service</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={service}
                label="Service"
                onChange={handleSetservice}
              >
                {services.map((service: string, i) => (
                  <MenuItem key={i} value={i.toString()}>
                    {service}
                  </MenuItem>
                ))}
              </Select>
            </FormControl>
          </div>

          <div className="mb-4">
            <TextField
              className="mb-10"
              required
              id="outlined-required"
              label="Special Notes"
              value={request}
              onChange={(e) => setRequest(e.target.value)}
            />
          </div>
          {error && <div className="text-[0.8rem] text-[red]">{error}</div>}

          <button
            className="bg-black text-white m-5 rounded-md h-[3rem] w-full mx-1"
            onClick={submitChanges}
          >
            <b>Submit</b>
          </button>
        </main>
      </Modal>

      <Footer />
    </main>
  );
};

export default Booking;
