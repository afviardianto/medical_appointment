import React from 'react';
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "../redux/app";
import { SIDEBAR, HEADER, AVAILABLEDOCTORSCARD } from '../components';
import DoctorImg from "../assets/img/doctor.png";
import MedicineImg from "../assets/img/medicine.png";
import ScheduleImg from "../assets/img/schedule.png";
import PrescriptionImg from "../assets/img/prescription.png";
import TopDoctor1 from "../assets/img/top-doctor-1.jpg";
import TopDoctor2 from "../assets/img/top-doctor-2.jpg";
import TopDoctor3 from "../assets/img/top-doctor-3.jpg";


function Home() {
  const dispatch = useDispatch();
  const openSideBar = useSelector((state) => state.App);

  const ToggleSideBar = () => {
    dispatch(setOpenSideBar(!openSideBar));
  };
  const closeSideBar = () => {
    dispatch(setOpenSideBar(false));
  };

  return (
    <div className="min-h-screen bg-light ">
      <SIDEBAR openSideBar={openSideBar} closeSideBar={closeSideBar} />
        <div className="w-full md:w-[calc(100%-270px)] absolute right-0 top-0">
      <HEADER ToggleSideBar={ToggleSideBar} />
      <main className="w-full bg-light pt-4 pb-[120px] md:pb-[160px] md:px-[calc(5%-16px)]">
        <section className="grid grid-cols-4 w-full  px-4 mt-2 my-4 sm:my-8 md:gap-4 lg:my-10 gap-2 ">
            <article className="rounded-[10px] h-[90px] sm:h-[172px] flex flex-col items-center justify-center gap-3 shadow-small p-2 bg-white">
              <img
                src={DoctorImg}
                width={45}
                height={45}
                alt="service-doctor"
              />
              <p className="text-center text-[11.375px] text-ellipsis w-full ">
                Doctor
              </p>
            </article>
            <article className="rounded-[10px] h-[90px] sm:h-[172px] flex flex-col items-center justify-center gap-3 shadow-small p-2 bg-white">
              <img
                src={ScheduleImg}
                width={45}
                height={45}
                alt="service-doctor"
              />
              <p className="text-center whitespace-nowrap overflow-hidden overflow-ellipsis text-[11.375px] w-full ">
                Appointment
              </p>
            </article>
            <article className="rounded-[10px] h-[90px] sm:h-[172px] flex flex-col items-center justify-center gap-3 p-2 shadow-small bg-white ">
              <img
                width={45}
                height={45}
                src={PrescriptionImg}
                alt="service-doctor"
              />
              <p className="text-center whitespace-nowrap overflow-hidden overflow-ellipsis text-[11.375px] w-full ">
                Prescription
              </p>
            </article>
            <article className="rounded-[10px] h-[90px] sm:h-[172px] flex flex-col items-center justify-center gap-3 shadow-small p-2 bg-white text-black">
              <img
                src={MedicineImg}
                width={45}
                height={45}
                alt="service-doctor"
              />
              <h2 className="text-center text-[11.375px] text-ellipsis w-full ">
                Medicine
              </h2>
            </article>
        </section>

        <section className="w-full mt-2">
            <h3 className="font-bold px-4 mb-3">Top Doctors</h3>
            <div className="w-full flex items-start flex-nowrap overflow-y-hidden overflow-x-auto horizontal-overflow px-4 gap-3">
              <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] md:w-[180px] md:h-[188px]  rounded-[10px] shadow-small bg-white">
                <img
                  src={TopDoctor1}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] md:text-[16px] font-semibold ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary md:text-[13px] md:mt-1">
                    Dental Sargon
                  </p>
                </div>
              </article>
              <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] md:w-[180px] md:h-[188px]  rounded-[10px] shadow-small bg-white">
                <img
                  src={TopDoctor3}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] md:text-[16px] font-semibold ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary md:text-[13px] md:mt-1">
                    Dental Sargon
                  </p>
                </div>
              </article>
              <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] md:w-[180px] md:h-[188px]  rounded-[10px] shadow-small bg-white">
                <img
                  src={TopDoctor2}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] md:text-[16px] font-semibold ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary md:text-[13px] md:mt-1">
                    Dental Sargon
                  </p>
                </div>
              </article>
              <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] md:w-[180px] md:h-[188px]  rounded-[10px] shadow-small bg-white">
                <img
                  src={TopDoctor1}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] md:text-[16px] font-semibold ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary md:text-[13px] md:mt-1">
                    Dental Sargon
                  </p>
                </div>
              </article>
            </div>
          </section>

        <AVAILABLEDOCTORSCARD />
      </main>
      
    </div>
    </div>
  );
}

export default Home;
