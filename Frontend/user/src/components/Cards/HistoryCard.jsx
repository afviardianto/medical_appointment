import React from "react";
import { ArrowLeftIcon } from '@heroicons/react/24/outline';

const HistoryCard = ({ image, name, role, time, action }) => {
  return (
    <div>
      <div className="flex flex-row bg-white px-[0.5cm] pt-[1rem] items-center pb-[1rem] md:rounded-[10px]">
        <div className="flex flex-row gap-[1rem] items-center">
          <div className="w-[1.9cm] h-[1.9cm] ">
            <img
              src={image}
              alt=""
              className="rounded-[10px] object-cover h-[100%] w-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-[0.9rem] text-dark">{name}</p>
            <div className="flex flex-row items-baseline">
              <p className="text-secondary text-[0.75rem] mt-[0.3rem]">
                {role}
              </p>
              <div className="px-[0.5rem] rounded-full bg-success-bg-subtle flex items-center justify-center ml-2 h-4">
                <p className="text-[0.55rem] text-success">{action}</p>
              </div>
            </div>
            <div className="flex flex-row mt-[0.8rem] items-center gap-[0.2cm]">
              <p className="text-secondary text-[0.7rem]">{time}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-auto gap-[0.9rem]">
          <div className="bg-[#c0eef731] flex items-center justify-center w-[1cm] h-[1cm] rounded-full ml-auto">
            <ArrowLeftIcon className="text-primary text-[]" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HistoryCard;
