import React from "react";
import { VideoCameraIcon, StarIcon, BriefcaseIcon } from '@heroicons/react/24/outline';
import AvailableDoctor3 from "../../assets/img/available-doctor-3.jpg";
import AvailableDoctor2 from "../../assets/img/available-doctor-2.jpg";
import AvailableDoctor1 from "../../assets/img/available-doctor-1.jpg";
import AvailableDoctor4 from "../../assets/img/available-doctor-4.jpg";

const AvailableDoctors = () => {
    return (
      <section className="mt-8 sm:mt-10 w-full ">
        <h3 className="font-bold px-4 mb-3 sm:text-lg lg:text-xl">
          Available Doctors
        </h3>
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 items-center gap-x-4 gap-y-4 w-full px-4">
          <article className="flex-col rounded-[10px] bg-white">
            <div className="relative">
              <img
                src={AvailableDoctor1}
                width={0}
                height={101}
                alt="service-doctor"
                className="min-w-full rounded-t-[10px] relative "
              />
              <div className="min-w-fit w-[48px] absolute left-2 px-[6px] py-[3px] bg-success text-white flex justify-center items-center text-[9.75px] top-2 h-auto rounded-[40px]">
                ONLINE
              </div>
            </div>
            <div className="p-3 flex flex-col gap-1">
              <div className="">
                <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold ">
                  Dr. Taylor Samaro
                </h3>
                <p className="text-small text-secondary">MBBS, BCS</p>
              </div>
              <div className="flex w-full items-center mb-3 justify-between gap-2 flex-wrap  text-small">
                <div className="flex items-center">
                  <StarIcon className="text-warning text-small" />
                  &nbsp;4.9 (5,380)
                </div>
                <div className="flex items-center">
                  <BriefcaseIcon className="text-primary text-small" />
                  &nbsp;4+ Years
                </div>
              </div>
              <h2 className="">
                $199
                <span className="font-small text-secondary ml-1">Inc.VAT</span>
              </h2>
            </div>
            <div className="w-full rounded-b-[10px] bg-[#0147ff] text-white h-[42px] px-3 flex items-center justify-between">
              <h5 className="text-small font-bold">SEE DOCTOR NOW</h5>
              <VideoCameraIcon className="text-[18px] stroke-white" />
            </div>
          </article>
          <article className="flex-col rounded-[10px] bg-white">
            <div className="relative">
              <img
                src={AvailableDoctor2}
                width={0}
                height={101}
                alt="service-doctor"
                className="min-w-full rounded-t-[10px] relative "
              />
              <div className="min-w-fit w-[48px] absolute left-2 px-[6px] py-[3px] bg-success text-white flex justify-center items-center text-[9.75px] top-2 h-auto rounded-[40px]">
                ONLINE
              </div>
            </div>
            <div className="p-3 flex flex-col gap-1">
              <div className="">
                <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold ">
                  Dr. Taylor Samaro
                </h3>
                <p className="text-small text-secondary">MBBS, BCS</p>
              </div>
              <div className="flex w-full items-center mb-3 justify-between gap-2 flex-wrap text-small">
                <div className="flex items-center">
                  <StarIcon className="text-warning text-small" />
                  &nbsp;4.9 (5,380)
                </div>
                <div className="flex items-center">
                  <BriefcaseIcon className="text-primary text-small" />
                  &nbsp;4+ Years
                </div>
              </div>
              <h2 className="">
                $199
                <span className="font-small text-secondary ml-1">Inc.VAT</span>
              </h2>
            </div>
            <div className="w-full rounded-b-[10px] bg-[#0147ff] text-white h-[42px] px-3 flex items-center justify-between">
              <h5 className="text-small font-bold">SEE DOCTOR NOW</h5>
              <VideoCameraIcon className="text-[18px] stroke-white" />
            </div>
          </article>
          <article className="flex-col rounded-[10px] bg-white">
            <div className="relative">
              <img
                src={AvailableDoctor3}
                width={0}
                height={101}
                alt="service-doctor"
                className="min-w-full rounded-t-[10px] relative "
              />
              <div className="min-w-fit w-[48px] absolute left-2 px-[6px] py-[3px] bg-success text-white  justify-center items-center text-[9.75px] top-2 h-auto rounded-[40px] hidden">
                ONLINE
              </div>
            </div>
            <div className="p-3 flex flex-col gap-1">
              <div className="">
                <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold ">
                  Dr. Taylor Samaro
                </h3>
                <p className="text-small text-secondary">MBBS, BCS</p>
              </div>
              <div className="flex w-full items-center mb-3 justify-between gap-2 flex-wrap text-small">
                <div className="flex items-center">
                  <StarIcon className="text-warning text-small" />
                  &nbsp;4.9 (5,380)
                </div>
                <div className="flex items-center">
                  <BriefcaseIcon className="text-primary text-small" />
                  &nbsp;4+ Years
                </div>
              </div>
              <h2 className="">
                $199
                <span className="font-small text-secondary ml-1">Inc.VAT</span>
              </h2>
            </div>
            <div className="w-full rounded-b-[10px] bg-[#0147ff] text-white h-[42px] px-3 flex items-center justify-between">
              <h5 className="text-small font-bold">SEE DOCTOR NOW</h5>
              <VideoCameraIcon className="text-[18px] stroke-white" />
            </div>
          </article>
          <article className="flex-col rounded-[10px] bg-white">
            <div className="relative">
              <img
                src={AvailableDoctor4}
                width={0}
                height={101}
                alt="service-doctor"
                className="min-w-full rounded-t-[10px] relative "
              />
              <div className="min-w-fit w-[48px] absolute left-2 px-[6px] py-[3px] bg-success text-white flex justify-center items-center text-[9.75px] top-2 h-auto rounded-[40px]">
                ONLINE
              </div>
            </div>
            <div className="p-3 flex flex-col gap-1">
              <div className="">
                <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold ">
                  Dr. Taylor Samaro
                </h3>
                <p className="text-small text-secondary">MBBS, BCS</p>
              </div>
              <div className="flex w-full items-center mb-3 justify-between gap-2 flex-wrap text-small">
                <div className="flex items-center">
                  <StarIcon className="text-warning text-small" />
                  &nbsp;4.9 (5,380)
                </div>
                <div className="flex items-center">
                  <BriefcaseIcon className="text-primary text-small" />
                  &nbsp;4+ Years
                </div>
              </div>
              <h2 className="">
                $199
                <span className="font-small text-secondary ml-1">Inc.VAT</span>
              </h2>
            </div>
            <div className="w-full rounded-b-[10px] bg-[#0147ff] text-white h-[42px] px-3 flex items-center justify-between">
              <h5 className="text-small font-bold">SEE DOCTOR NOW</h5>
              <VideoCameraIcon className="text-[18px] stroke-white" />
            </div>
          </article>
        </div>
      </section>
    );
  };
  
  export default AvailableDoctors;
