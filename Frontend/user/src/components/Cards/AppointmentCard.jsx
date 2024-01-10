import React from "react";
import { CalendarIcon, XCircleIcon, PhoneIcon } from '@heroicons/react/24/outline';
import { Link } from 'react-router-dom';

const AppointmentCard = ({ type, appointmentid, img, name, role, date, action }) => {
  return (
    <div>
      <div className="flex flex-row bg-white px-[0.5cm] pt-[1rem] items-center pb-[1rem] md:rounded-[10px]">
        <div className="flex flex-row gap-[1rem] items-center">
          <div className="w-[1.9cm] h-[1.9cm] ">
            <img
              src={img}
              alt=""
              className="rounded-[10px] object-cover h-[100%] w-full"
            />
          </div>
          <div className="flex flex-col">
            <p className="font-semibold text-[0.9rem] text-dark">{name}</p>
            <p className="text-secondary text-[0.75rem] mt-[0.3rem]">{role}</p>
            <div className="flex flex-row mt-[0.8rem] items-center gap-[0.2cm]">
              <CalendarIcon className="text-primary text-[0.7rem]" />
              <p className="text-secondary text-[0.7rem]">{date}</p>
            </div>
          </div>
        </div>
        <div className="flex flex-col ml-auto gap-[0.9rem]">
          { type === 'Upcoming' ? 
            <div>
              <Link to={`/upcoming-appointments/${appointmentid}`}>
              <div className="bg-[#c0eef789] flex items-center justify-center w-[1cm] h-[1cm] rounded-full ml-auto">
                <XCircleIcon className="text-light-primary" />
              </div>
              <div className="px-[0.5rem] py-[0.115rem] rounded-full bg-success-bg-subtle">
                <p className="text-[0.55rem] text-success">cancelled</p>
              </div>
            </Link>
            <Link to={`/upcoming-appointments/${appointmentid}`}>
              <div className="bg-[#c0eef789] flex items-center justify-center w-[1cm] h-[1cm] rounded-full ml-auto">
                <PhoneIcon className="text-light-primary" />
              </div>
              <div className="px-[0.5rem] py-[0.115rem] rounded-full bg-success-bg-subtle">
                <p className="text-[0.55rem] text-success">{action}</p>
              </div>
            </Link>
            </div> : <></>
          }
        </div>
      </div>
    </div>
  );
};

export default AppointmentCard;
