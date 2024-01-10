import React, { useRef } from "react";
import ProfileImg from "../../assets/img/default-profile.png";
import { VideoCameraIcon } from '@heroicons/react/24/outline';
import { useOutsideAlerter } from "../../utils/handleOutsideClick";
import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';

const Sidebar = ({ openSideBar, closeSideBar }) => {
    const user = useSelector((state) => state.data.value);
    console.log(openSideBar);
    const wrapperRef = useRef(null);
    useOutsideAlerter(wrapperRef, closeSideBar);

    const sideItems = [
        {
          name: "Doctors",
          icon: (active) => (
            <VideoCameraIcon
              className={`w-[13px] h-5 ${
                active ? "text-[#0148ff]" : "text-[#989898]"
              }`}
            />
          ),
          route: "/Doctors",
        },
        {
          name: "Video Consultation",
          icon: (active) => (
            <VideoCameraIcon
              className={`w-[13px] h-5 ${
                active ? "text-[#0148ff]" : "text-[#989898]"
              }`}
            />
          ),
          route: "/Video-call",
        },
        {
          name: "My Appointments",
          icon: (active) => (
            <VideoCameraIcon
              className={`w-[13px] h-5 ${
                active ? "text-[#0148ff]" : "text-[#989898]"
              }`}
            />
          ),
          route: "/my-appointment",
        },
        {
          name: "History",
          icon: (active) => (
            <VideoCameraIcon
              className={`w-[13px] h-5 ${
                active ? "text-[#0148ff]" : "text-[#989898]"
              }`}
            />
          ),
          route: "/history",
        },
        {
          name: "Doctor Recordings",
          icon: (active) => (
            <VideoCameraIcon
              className={`w-[13px] h-5 ${
                active ? "text-[#0148ff]" : "text-[#989898]"
              }`}
            />
          ),
        },
        {
          name: "Message",
          icon: (active) => (
            <VideoCameraIcon
              className={`w-[13px] h-5 ${
                active ? "text-[#0148ff]" : "text-[#989898]"
              }`}
            />
          ),
          route: "/chat",
        },
        {
          name: "Doctor Review",
          icon: (active) => (
            <VideoCameraIcon
              className={`w-[13px] h-5 ${
                active ? "text-[#0148ff]" : "text-[#989898]"
              }`}
            />
          ),
        },
      ];

      const handleLogout = () => {
        localStorage.clear();
        window.location.replace('/login');
      };

      return (
        <section
      className={`fixed z-[2000]  md:w-0  min-w-[100vw] top-0 h-[100vh] bg-black/20 transition-all ease-out md:bg-transparent  md:min-w-fit   ${
        openSideBar ? "translate-x-0" : "translate-x-[-100%] md:translate-x-0"
      }`}
    >
      <div
        ref={wrapperRef}
        className="fixed bg-white bottom-0 border-r md:border-b border-r-bs border-b-bs w-[270px] h-screen md:h-[700px] md:top-0"
      >
        <div className="flex flex-row gap-[1rem] px-4 py-[14px] w-full pl-4 bg-blue-700">
          <Link href="/Profile">
            <img
              width={50}
              height={50}
              src={user?.profileURL ? user?.profileURL : ProfileImg}
              alt="profile"
              className="cursor-pointer min-w-[50px] min-h-[50px] object-cover rounded-full"
            />
          </Link>
          <div className="flex flex-col w-[5cm]">
            <p className="font-semibold text-white cursor-pointer text-[1rem]">
              Hey, {user?.name}
            </p>
            <p className="text-small text-white/50">{user?.email}</p>
          </div>
        </div>
        <ul className="flex flex-col mt-10">
          {sideItems.map((item, index) => {
            const { icon, name, route } = item;
            return (
              <li
                key={index}
                className="h-[50px] cursor-pointer border-b-[#edf1f4] border-b flex justify-between items-center hover:bg-lighter-primary-opacity  px-[1rem] "
              >
                <Link className="text-dark flex items-center gap-4" to={route}>
                  {icon("")}
                  <span className="text-[13px] md:text-[14px] text-[#343a40] bg-transparent ">
                    {name}
                  </span>
                </Link>
              </li>
            );
          })}
        </ul>
        <li className="h-[50px] mt-4 cursor-pointer  flex justify-between items-center  px-[1rem] ">
          <button
              type="button"
              className="text-dark flex items-center gap-4 "
              onClick={() => handleLogout()}
            >
              <VideoCameraIcon className="w-[13px] h-5 text-red-700" />
            <span className="text-[13px] text-dark font-semibold ">Logout</span>
            </button>
        </li>
      </div>
    </section>
      );
}

export default Sidebar;