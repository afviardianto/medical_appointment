import React from 'react';
import { HeartIcon, BellIcon, MagnifyingGlassIcon, Bars4Icon, FunnelIcon } from '@heroicons/react/24/outline';
import { useSelector } from 'react-redux';
import { Link } from 'react-router-dom';
import ProfileImg from "../../assets/img/default-profile.png";

const Header = ({ ToggleSideBar }) => {
    const user = useSelector((state) => state.data.value);
    return (
        <div className=" px-[16px] sticky  md:pl-[5%] top-0 shadow-small py-[1rem] z-[10] bg-white w-full">
            <div className="flex flex-row items-center justify-between w-full">
              <div className="flex flex-row gap-[1rem] w-[50%]">
                <Link to="/profile">
                {console.log(user)}
                    <img 
                        width={35}
                        height={35}
                        src={user?.profileURL ? user?.profileURL : ProfileImg}
                        alt="profile"
                        className="cursor-pointer min-w-[35px] min-h-[35px] object-cover rounded-full"
                    />
                </Link>
                <div className="flex flex-col w-[5cm]">
                  <p className="text-small text-orange">Welcome</p>
                  <p className="font-semibold text-primary cursor-pointer text-[0.81rem]">
                    Hey, {user?.name}
                  </p>
                </div>
              </div>
              <div className="flex flex-row gap-[1rem] w-full justify-end">
                <div className="outline outline-1 outline-gray-200 w-[2rem] h-[2rem] rounded-full flex items-center justify-center shadow-normal">
                  <HeartIcon className="text-primary cursor-pointer" />
                </div>
                <Link
                  to="/notifications"
                  className=" w-[2rem] h-[2rem] rounded-full flex items-center justify-center shadow-normal"
                >
                  <BellIcon className="text-primary cursor-pointer" />
                </Link>
                <div
                  className=" w-[2rem] h-[2rem] rounded-full md:hidden flex items-center justify-center shadow-normal"
                  onClick={ToggleSideBar}
                >
                  <Bars4Icon className="text-primary cursor-pointer" />
                </div>
              </div>
            </div>
          </div>
        );
    }

export default Header;