import React from "react";
import Header from "../components/Header/HeaderTittle";
import { MagnifyingGlassIcon, FunnelIcon, VideoCameraIcon } from '@heroicons/react/24/outline';
import TopDoctor1 from "../assets/img/top-doctor-1.jpg";
import TopDoctor2 from "../assets/img/top-doctor-2.jpg";
import TopDoctor3 from "../assets/img/top-doctor-3.jpg";
import Sidebar from "../components/Sidebar/Sidebar";
//import ChooseDepartment from "@/src/components/search/chooseDepartment";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "../redux/app";

const Video = () => {
  const dispatch = useDispatch();
  const openSideBar = useSelector((state) => state.App);

  const ToggleSideBar = () => {
    dispatch(setOpenSideBar(!openSideBar));
  };
  const closeSideBar = () => {
    dispatch(setOpenSideBar(false));
  };
  return (
    <div className="bg-light min-h-screen">
      <Sidebar openSideBar={openSideBar} closeSideBar={closeSideBar} />
      <div className="w-full md:w-[calc(100%-270px)] absolute right-0 top-0">
        <Header
          text={
            <>
              <span className="text-black">Video</span>
              <button className="ml-2 w-[106px] h-[25px]  justify-center items-center rounded-[4px] text-white text-[13px] bg-light-primary p-1">
                Consultation
              </button>
            </>
          }
        />
        <article className="w-full p-4 bg-primary h-[83px]">
          <h2 className="text-white font-bold text-[18px]">Discover</h2>
          <p className="text-white/60 mt-1">Find your suitable doctor!</p>
        </article>
        <div className="w-full bg-white h-[52px]    flex flex-row px-4 py-1 items-center shadow-normal">
          <MagnifyingGlassIcon className="text-primary font-bold w-6 h-6 " />
          <input
            type="text"
            placeholder="Find your suitable doctor!"
            className="bg-transparent px-4   w-full text-[0.4cm] text-dark outline-0 border-r focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
          />
          <div className=" min-h-[18px] min-w-[18px] pl-3 flex items-center justify-center  ">
            <FunnelIcon className="min-w-[18px] min-h-[18px]" />
          </div>
        </div>

        <main className="w-full bg-light pt-4 pb-[120px] md:pb-[160px] md:px-[5%]">
          <section className="w-full mt-6 sm:mt-10">
            <h3 className="font-bold px-4 md:px-0 mb-3 sm:mb-5 sm:text-lg lg:text-xl ">
              Consult a specialist
            </h3>
            <div className="w-full flex items-start flex-nowrap   overflow-y-hidden md:px-0 overflow-x-auto horizontal-overflow px-4 gap-3 md:gap-6">
              <article className="flex flex-col min-w-[146px]  w-[146px] md:w-[160px] h-[195px] rounded-[10px] shadow-small bg-white">
                <img
                  src={TopDoctor1}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className=" w-full text-[14px]  ">
                    Experience Gynaecologist
                  </h3>
                  <div className="flex items-center mt-4 justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-black/60 line-through">$499</span>
                      <span>$200</span>
                    </div>
                    <VideoCameraIcon className="stroke-primary text-primary" />
                  </div>
                </div>
              </article>
              <article className="flex flex-col min-w-[146px]  w-[146px] md:w-[160px] h-[195px] rounded-[10px] shadow-small bg-white">
                <img
                  src={TopDoctor3}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className=" w-full text-[14px]  ">
                    Experience MBBS Doctor
                  </h3>
                  <div className="flex items-center mt-4 justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-black/60 line-through">$499</span>
                      <span>$200</span>
                    </div>
                    <VideoCameraIcon className="stroke-primary text-primary" />
                  </div>
                </div>
              </article>
              <article className="flex flex-col min-w-[146px]  w-[146px] md:w-[160px] h-[195px] rounded-[10px] shadow-small bg-white">
                <img
                  src={TopDoctor2}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className=" w-full text-[14px]  ">
                    Experience Child Doctor
                  </h3>
                  <div className="flex items-center mt-4 justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-black/60 line-through">$499</span>
                      <span>$200</span>
                    </div>
                    <VideoCameraIcon className="stroke-primary text-primary" />
                  </div>
                </div>
              </article>
              <article className="flex flex-col min-w-[146px]  w-[146px] md:w-[160px] h-[195px] rounded-[10px] shadow-small bg-white">
                <img
                  src={TopDoctor1}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className=" w-full text-[14px]  ">
                    Experience Pediatrics
                  </h3>
                  <div className="flex items-center mt-4 justify-between">
                    <div className="flex items-center gap-1">
                      <span className="text-black/60 line-through">$499</span>
                      <span>$200</span>
                    </div>
                    <VideoCameraIcon className="stroke-primary text-primary" />
                  </div>
                </div>
              </article>
            </div>
          </section>

          <section className="w-full mt-2 sm:mt-4 ">
            <h3 className="font-bold px-4 mb-3 sm:mb-5  sm:text-lg lg:text-xl">
              Recently Viewed
            </h3>
            <div className="w-full flex items-start flex-nowrap  overflow-y-hidden overflow-x-auto horizontal-overflow px-4 gap-3">
              <article className="flex flex-col min-w-[152px]  w-[152px] h-[161px] md:w-[180px] md:h-[188px]  rounded-[10px] shadow-small bg-white">
                <img
                  src={TopDoctor1}
                  width={0}
                  height={101}
                  alt="service-doctor"
                  className="min-w-full rounded-t-[10px]"
                />
                <div className="p-3">
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold md:text-[16px] ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary md:text-[13px] mt-1">
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
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold md:text-[16px] ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary md:text-[13px] mt-1">
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
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold md:text-[16px] ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary md:text-[13px] mt-1">
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
                  <h3 className="overflow-hidden overflow-ellipsis line-clamp-1 w-full text-[14px] font-semibold md:text-[16px] ">
                    Dr. Taylor Samaro
                  </h3>
                  <p className="text-small text-secondary md:text-[13px] mt-1">
                    Dental Sargon
                  </p>
                </div>
              </article>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
};

export default Video;
