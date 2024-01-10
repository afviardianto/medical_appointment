import React from "react";
import Header from "../components/Header/HeaderTittle";
import ProfileBannerImg from "../assets/img/docotor-profile-background-blob.svg";
import AppointmentDoctor from "../assets/img/appointment-doctor.png";
import { EnvelopeIcon, PhoneIcon, VideoCameraIcon, ArrowRightIcon} from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const BookAppointment = () => {
  return (
    <div className="bg-light min-h-[100vh]">
      <Header text="Appointment" />
      <main className="pt-8 px-[4%] pb-[100px]">
        <article
          style={{
            backgroundImage: `url(${ProfileBannerImg.src})`,
          }}
          className="h-[122px] px-3 rounded-[10px] w-full mb-6 bg-cover bg-center  flex  items-center gap-3"
        >
          <img
            width={90}
            height={0}
            alt="appointment-img"
            style={{ width: "auto", height: "100%" }}
            src={AppointmentDoctor.src}
            className="object-cover"
          />
          <div className="flex flex-col items-center">
            <h3 className="leading-[1.2] font-medium mb-2">Consultation Fee</h3>
            <div className=" mt-2 text-primary  font-bold  text-[calc(1.375rem+1.5vw)]">
              <span className="leading-8">$199</span>
              <span className="text-secondary font-normal text-[16px]">
                &nbsp;Inc. VAT
              </span>
            </div>
          </div>
        </article>

        <article className="mb-6">
          <h3 className="leading-5 font-bold text-black text-[14px] mb-3">
            November
          </h3>
          <section className="grid grid-cols-6 gap-2 w-full">
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">Mon</span>
              <span className="text-[19px] font-bold">10</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">Tue</span>
              <span className="text-[19px] font-bold">10</span>
            </div>
            <div className="flex flex-col items-center justify-center  text-[13px] leading-5 px-[9px] py-[7px] rounded-[10px] border hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300 border-light-primary  text-light-primary">
              <span className="font-bold">Wed</span>
              <span className="text-[19px] font-bold">11</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">Thu</span>
              <span className="text-[19px] font-bold">12</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">Fri</span>
              <span className="text-[19px] font-bold">13</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">Sat</span>
              <span className="text-[19px] font-bold">14</span>
            </div>
          </section>
        </article>

        <article className="mb-6">
          <h3 className="leading-5 font-bold text-black text-[14px] mb-3">
            Morning Slots
          </h3>
          <section className="grid grid-cols-3 gap-2 w-full">
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">10:30 AM</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">11:00 AM</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">11:30 AM</span>
            </div>
          </section>
        </article>

        <article className="mb-6">
          <h3 className="leading-5 font-bold text-black text-[14px] mb-3">
            Afternoon Slots
          </h3>
          <section className="grid grid-cols-3  gap-2 w-full">
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">10:30 AM</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">10:30 AM</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">10:30 AM</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">10:30 AM</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">10:30 AM</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">10:30 AM</span>
            </div>
          </section>
        </article>

        <article className="mb-6">
          <h3 className="leading-5 font-bold text-black text-[14px] mb-3">
            Evening Slots
          </h3>
          <section className="grid grid-cols-3  gap-2 w-full">
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300 ">
              <span className="font-bold">10:30 AM</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">10:30 AM</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">10:30 AM</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">10:30 AM</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">10:30 AM</span>
            </div>
            <div className="flex flex-col items-center justify-center bg-white text-[13px] cursor-pointer leading-5 px-[9px] py-[7px] rounded-[10px] border border-light-primary  text-light-primary hover:border-transparent  hover:text-white hover:bg-light-primary transition-colors ease-in duration-300">
              <span className="font-bold">10:30 AM</span>
            </div>
          </section>
        </article>

        <div className="mb-6">
          <h3 className="leading-5 font-bold text-black text-[14px] mb-3">
            Fee Information
          </h3>
          <section className="grid grid-cols-1 gap-2 w-full">
            <article className="w-full p-4 h-[77px] bg-white rounded-[10px] shadow-normal flex gap-3 justify-between items-center">
              <div className="w-[80%] gap-3 flex items-center">
                <div className="w-[45px] h-[45px] rounded-[10px] bg-light-primary text-white flex justify-center items-center">
                  <PhoneIcon className="w-[18px] h-[27px]" />
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-[14px] mb-1">Voice Call</h3>
                  <p className="text-secondary text-small ">
                    Can make a voice call
                  </p>
                </div>
              </div>
              <h1 className="w-[20%] text-primary text-right font-bold text-[calc(1.275rem+0.3vw)] ">
                $20
              </h1>
            </article>
            <article className="w-full p-4 h-[77px] bg-white rounded-[10px] shadow-normal flex gap-3 justify-between items-center">
              <div className="w-[80%] gap-3 flex items-center">
                <div className="w-[45px] h-[45px] rounded-[10px] bg-light-primary text-white flex justify-center items-center">
                  <VideoCameraIcon className="w-[18px] h-[27px]" />
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-[14px] mb-1">Video Call</h3>
                  <p className="text-secondary text-small ">
                    Can make a video call
                  </p>
                </div>
              </div>
              <h1 className="w-[20%] text-primary text-right font-bold text-[calc(1.275rem+0.3vw)] ">
                $30
              </h1>
            </article>
            <article className="w-full p-4 h-[77px] bg-white rounded-[10px] shadow-normal flex gap-3 justify-between items-center">
              <div className="w-[80%] gap-3 flex items-center">
                <div className="w-[45px] h-[45px] rounded-[10px] bg-light-primary text-white flex justify-center items-center">
                  <EnvelopeIcon className="w-[18px] h-[27px]" />
                </div>
                <div className="flex flex-col ">
                  <h3 className="text-[14px] mb-1">Messaging</h3>
                  <p className="text-secondary text-small ">
                    Can make a message
                  </p>
                </div>
              </div>
              <h1 className="w-[20%] text-primary text-right font-bold text-[calc(1.275rem+0.3vw)] ">
                $10
              </h1>
            </article>
          </section>
        </div>
      </main>

      <section className="bg-light w-full p-4 sticky bottom-0 flex justify-center items-center">
        <Link to="/dashboard/visit-info" className="w-full">
          <button className="flex justify-center items-center bg-light-primary text-white text-[16px] w-full h-[56px] px-5 py-4 font-bold gap-2 rounded-[10px]">
            <span> Continue Booking</span>
            <ArrowRightIcon className="w-5 h-5 text-white" />
          </button>
        </Link>
      </section>
    </div>
  );
};

export default BookAppointment;
