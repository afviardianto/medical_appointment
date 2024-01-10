import React, { useState } from "react";
import Header from "../components/Header/HeaderTittle";
import BottomNav from "../components/Navbar/BottomNav";
//import Tabs from "../../../../components/history/Tabs";
import { MagnifyingGlassIcon, FunnelIcon, ArrowLeftIcon, Bars4Icon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "../redux/app";
import Sidebar from "../components/Sidebar/Sidebar";
import HistoryCard from "../components/Cards/HistoryCard";
import { Link } from 'react-router-dom';
import { Tabs } from "flowbite-react";

const history = () => {
    const dispatch = useDispatch();
    const [selectedIndex, setSelectedIndex] = useState(0);
    const openSideBar = useSelector((state) => state.App);
  
    const ToggleSideBar = () => {
      dispatch(setOpenSideBar(!openSideBar));
    };
    const closeSideBar = () => {
      dispatch(setOpenSideBar(false));
    };
    return (
      <div className="bg-light min-h-screen ">
        <Sidebar openSideBar={openSideBar} closeSideBar={closeSideBar} />
        <div className="w-full md:w-[calc(100%-270px)] absolute right-0 top-0">
          <header className="  px-[16px] sticky  md:pl-[5%] top-0 shadow-small py-[1rem] z-[10] bg-white w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row items-center gap-[1rem]">
                <Link to="/profile">
                  {" "}
                  <div
                    className="outline outline-1 outline-gray-200 w-[35px] h-[35px] rounded-full flex items-center justify-center cursor-pointer"
                    onClick={() => router.back()}
                  >
                    <ArrowLeftIcon className="text-dark cursor-pointer" />
                  </div>
                </Link>
                <h2 className="font-semibold text-[1rem] ">History</h2>
              </div>
              <div className="ml-auto">
                <div className="outline outline-1 outline-gray-200 w-[35px] h-[35px] rounded-full flex items-center justify-center">
                  <Bars4Icon className="text-dark cursor-pointer" />
                </div>
              </div>
            </div>
            <div className="">
              <div className="w-full bg-light h-[1.2cm] mt-[1rem]  rounded-[10px] flex flex-row px-4 py-1 items-center shadow-normal">
                <MagnifyingGlassIcon className="text-primary font-bold w-4 h-4 " />
                <input
                  type="text"
                  placeholder="Search"
                  className="bg-transparent px-4   w-full text-[0.4cm] text-dark outline-0  focus:ring-0 focus:outline-0 border-0 focus:border-gray-300 border-gray-300"
                />
              </div>
            </div>
          </header>
  
          <main className="w-full bg-light mt-4 pb-[120px] md:pb-[160px] md:px-[calc(5%)]">
            <div className="mt-[1rem] w-full bg-gray-100">
                <Tabs selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                    <Tabs.Item active title="Message">
                    <div className="pb-[8rem]">
      <p className="font-semibold text-[17px] px-[1rem]">Today</p>
      <div className="flex flex-col gap-[0.3rem] mt-[0.5rem]">
        <div className="flex flex-row gap-[1rem] bg-white p-[1rem] md:rounded-[10px]">
          <img
            src="/Images/top-doctor-2.jpg"
            alt=""
            className="w-[40px] h-[40px] rounded-[10px] object-cover"
          />
          <div className="flex flex-col gap-[0.2rem] ">
            <p className="font-medium text-dark text-[15px] mb-0">
              Dr. Cayden Stack
            </p>
            <p className="text-secondary text-[11px] mt-0">
              I am cardio patient. I need your help
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[1rem] bg-white p-[1rem] md:rounded-[10px]">
          <img
            src="/Images/top-doctor-2.jpg"
            alt=""
            className="w-[40px] h-[40px] rounded-[10px] object-cover"
          />
          <div className="flex flex-col gap-[0.2rem] ">
            <p className="font-medium text-dark text-[15px] mb-0">
              Dr. Cayden Stack
            </p>
            <p className="text-secondary text-[11px] mt-0">
              I am cardio patient. I need your help
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[1rem] bg-white p-[1rem] md:rounded-[10px]">
          <img
            src="/Images/top-doctor-2.jpg"
            alt=""
            className="w-[40px] h-[40px] rounded-[10px] object-cover"
          />
          <div className="flex flex-col gap-[0.2rem] ">
            <p className="font-medium text-dark text-[15px] mb-0">
              Dr. Cayden Stack
            </p>
            <p className="text-secondary text-[11px] mt-0">
              I am cardio patient. I need your help
            </p>
          </div>
        </div>
      </div>

      <p className="font-semibold text-[17px] px-[1rem] mt-[3rem]">Yesterday</p>
      <div className="flex flex-col gap-[0.3rem] mt-[0.5rem]">
        <div className="flex flex-row gap-[1rem] bg-white p-[1rem] md:rounded-[10px]">
          <img
            src="/Images/top-doctor-2.jpg"
            alt=""
            className="w-[40px] h-[40px] rounded-[10px] object-cover"
          />
          <div className="flex flex-col gap-[0.2rem] ">
            <p className="font-medium text-dark text-[15px] mb-0">
              Dr. Cayden Stack
            </p>
            <p className="text-secondary text-[11px] mt-0">
              I am cardio patient. I need your help
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[1rem] bg-white p-[1rem] md:rounded-[10px]">
          <img
            src="/Images/top-doctor-2.jpg"
            alt=""
            className="w-[40px] h-[40px] rounded-[10px] object-cover"
          />
          <div className="flex flex-col gap-[0.2rem] ">
            <p className="font-medium text-dark text-[15px] mb-0">
              Dr. Cayden Stack
            </p>
            <p className="text-secondary text-[11px] mt-0">
              I am cardio patient. I need your help
            </p>
          </div>
        </div>
        <div className="flex flex-row gap-[1rem] bg-white p-[1rem] md:rounded-[10px]">
          <img
            src="/Images/top-doctor-2.jpg"
            alt=""
            className="w-[40px] h-[40px] rounded-[10px] object-cover"
          />
          <div className="flex flex-col gap-[0.2rem] ">
            <p className="font-medium text-dark text-[15px] mb-0">
              Dr. Cayden Stack
            </p>
            <p className="text-secondary text-[11px] mt-0">
              I am cardio patient. I need your help
            </p>
          </div>
        </div>
      </div>
    </div>
                    </Tabs.Item>
                    <Tabs.Item active title="Voice Call">
                    <div className='pb-[8rem]'>
                    <p className='font-semibold text-[15px] px-[1rem] mb-4'>Today</p>
                    <HistoryCard
                        img="/Images/available-doctor-1.jpg"
                        name="Dr. Mahububa Islam"
                        role="Voice Call"
                        time="Today, 2:00 - 2:30 PM"
                        action="COMPLETE"
                    />
                    <p className='font-semibold text-[15px] px-[1rem] mb-4 mt-4'>Yesterday</p>
                    <div className='flex flex-col gap-1'>
                    <HistoryCard
                        img="/Images/available-doctor-1.jpg"
                        name="Dr. Mahububa Islam"
                        role="Voice Call"
                        time="Today, 2:00 - 2:30 PM"
                        action="COMPLETE"
                    />
                    <HistoryCard
                        img="/Images/available-doctor-1.jpg"
                        name="Dr. Mahububa Islam"
                        role="Voice Call"
                        time="Today, 2:00 - 2:30 PM"
                        action="COMPLETE"
                    />
                    <HistoryCard
                        img="/Images/available-doctor-1.jpg"
                        name="Dr. Mahububa Islam"
                        role="Voice Call"
                        time="Today, 2:00 - 2:30 PM"
                        action="COMPLETE"
                    />
                    </div>
                    </div>
                    </Tabs.Item>
                    <Tabs.Item active title="Video Call">
                    <div className='pb-[8rem]'>
            <p className='font-semibold text-[15px] px-[1rem] mb-4'>Today</p>
            <HistoryCard
        img="/Images/available-doctor-1.jpg"
        name="Dr. Mahububa Islam"
        role="Voice Call"
        time="Today, 2:00 - 2:30 PM"
        action="COMPLETE"
      />
    <p className='font-semibold text-[15px] px-[1rem] mb-4 mt-4'>Yesterday</p>
    <div className='flex flex-col gap-1'>
    <HistoryCard
        img="/Images/available-doctor-1.jpg"
        name="Dr. Mahububa Islam"
        role="Voice Call"
        time="Today, 2:00 - 2:30 PM"
        action="COMPLETE"
      />
       <HistoryCard
        img="/Images/available-doctor-1.jpg"
        name="Dr. Mahububa Islam"
        role="Voice Call"
        time="Today, 2:00 - 2:30 PM"
        action="COMPLETE"
      />
       <HistoryCard
        img="/Images/available-doctor-1.jpg"
        name="Dr. Mahububa Islam"
        role="Voice Call"
        time="Today, 2:00 - 2:30 PM"
        action="COMPLETE"
      />
    </div>
    </div>
                    </Tabs.Item>
                </Tabs>
            </div>
          </main>
        </div>
      </div>
    );
  };
  
  export default history;