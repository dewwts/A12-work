"use client";

import { useState, type FormEvent } from "react";
import { useDispatch } from "react-redux";
import type { Dayjs } from "dayjs";
import DateReserve from "@/components/DateReserve";
import { addBooking } from "@/redux/features/bookSlice";
import type { AppDispatch } from "@/redux/store";

export default function BookingPage() {
  const dispatch = useDispatch<AppDispatch>();
  const [nameLastname, setNameLastname] = useState("");
  const [tel, setTel] = useState("");
  const [venue, setVenue] = useState("");
  const [bookDate, setBookDate] = useState<Dayjs | null>(null);
  const [message, setMessage] = useState("");

  const makeBooking = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!nameLastname || !tel || !venue || !bookDate) {
      setMessage("Please fill in every field before booking.");
      return;
    }
    dispatch(addBooking({ nameLastname, tel, venue, bookDate: bookDate.format("YYYY/MM/DD") }));
    setMessage("Venue booked. See it in My Booking.");
  };

  return (
    <main className="mx-auto flex min-h-[calc(100vh-4rem)] w-full max-w-6xl items-center px-5 py-16 sm:px-8">
      <section className="w-full rounded-3xl border border-stone-200 bg-white p-8 shadow-sm sm:p-14">
        <p className="text-xs font-semibold tracking-[0.22em] text-emerald-700">VENUE EXPLORER</p>
        <h1 className="mt-3 text-4xl font-semibold tracking-tight text-stone-900 sm:text-5xl">Venue Booking</h1>
        <p className="mt-4 max-w-lg text-stone-600">Choose a featured venue and begin planning your next memorable gathering.</p>
        <form className="mt-10 space-y-8" onSubmit={makeBooking}>
          <DateReserve
            nameLastname={nameLastname}
            tel={tel}
            venue={venue}
            bookDate={bookDate}
            onNameChange={setNameLastname}
            onTelChange={setTel}
            onVenueChange={setVenue}
            onDateChange={setBookDate}
          />
          <button
            type="submit"
            name="Book Venue"
            className="rounded-full bg-emerald-700 px-6 py-3 font-semibold text-white transition hover:bg-emerald-800"
          >
            Book Venue
          </button>
          {message ? <p className="text-sm text-stone-600">{message}</p> : null}
        </form>
      </section>
    </main>
  );
}
