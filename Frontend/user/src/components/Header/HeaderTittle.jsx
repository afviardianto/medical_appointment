import React from "react";
import { Bars4Icon, ArrowLeftIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const HeaderTittle = ({ text }) => {
    return (
      <div className="md:px-[5%] flex flex-row h-[4.5rem] px-[0.5cm] items-center shadow-small bg-white z-[10] sticky w-full top-0">
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
          <p className="font-semibold text-[1rem]">{text}</p>
        </div>
        <div className="ml-auto md:hidden">
          <div className="outline outline-1 outline-gray-200 w-[35px] h-[35px] rounded-full flex items-center justify-center">
            <Bars4Icon className="text-dark cursor-pointer"/>
          </div>
        </div>
      </div>
    );
  };
  
  export default HeaderTittle;