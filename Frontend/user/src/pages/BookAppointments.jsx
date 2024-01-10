import React from 'react';
import { BOOKING_TAB } from '../components';
import Header from "../components/Header/HeaderTittle";
import ProfileBannerImg from "../assets/img/docotor-profile-background-blob.svg";
import AppointmentDoctor from "../assets/img/appointment-doctor.png";

function Appointments() {
  return (
    <>
    <div className="bg-light min-h-[100vh]">
      <Header text="Book Appointment" />
      <main className="pt-8 px-[4%] pb-[100px]">
        <BOOKING_TAB />
      </main>
    </div>
    </>
  );
}

export default Appointments;
