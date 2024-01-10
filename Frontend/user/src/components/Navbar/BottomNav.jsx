import React from "react";
import { VideoCameraIcon, HomeIcon, ChatBubbleLeftEllipsisIcon, UserIcon, MagnifyingGlassIcon} from '@heroicons/react/24/outline';
import { NavLink } from 'react-router-dom';
//import { usePathname, useRouter } from "next/navigation";

const BottomNav = () => {
    const tabs = [
        {
          name: "home",
          icon: (isActive) => (
            <HomeIcon
              className={`w-6 h-9 ${active ? "text-[#0148ff]" : "text-[#989898]"}`}
            />
          ),
          route: "/",
        },
        {
          name: "search",
          icon: (isActive) => (
            <MagnifyingGlassIcon
              className={`w-6 h-9 ${active ? "text-[#0148ff]" : "text-[#989898]"}`}
            />
          ),
          route: "/search",
        },
        {
          name: "video",
          icon: (isActive) => (
            <VideoCameraIcon
              className={`w-6 h-9 ${active ? "text-[#0148ff]" : "text-[#989898]"}`}
            />
          ),
          route: "/video",
        },
        {
          name: "chat",
          icon: (isActive) => (
            <ChatBubbleLeftEllipsisIcon
              className={`w-6 h-9 ${active ? "text-[#0148ff]" : "text-[#989898]"}`}
            />
          ),
          route: "/chats",
        },
        {
          name: "profile",
          icon: (isActive) => (
            <UserIcon
              className={`w-9 h-9 ${active ? "text-[#0148ff]" : "text-[#989898]"}`}
            />
          ),
          route: "/profile",
        },
      ];
    
    return (
        <div className="px-4 fixed bottom-[1rem] mx-auto md:w-[calc(100%-270px)] flex justify-center md:right-0 items-center w-full  z-[1000]">
        <div className="flex flex-row items-center justify-between  shadow-normal bg-white px-4 sm:px-[2rem]  mt-[2rem] w-full max-w-[90%] sm:max-w-[500px] rounded-[10px]">
        {tabs?.map((m) => (
            <NavLink className={`d-flex align-items-center py-2 px-4 
                ${isActive ? 'border-b-[#0148ff]' : 'border-b-transparent'}`} 
                to={m?.route} >
                {m?.icon(isActive)}
              <p
                className={`uppercase text-[10px] sm:text-[13px] font-semibold text-[#989898] 
                ${ isActive && "text-[#0148ff]"
                }`}
              >
                {m?.name}
              </p>
            </NavLink>
        ))}
      </div>
    </div>
    );
};
export default BottomNav;