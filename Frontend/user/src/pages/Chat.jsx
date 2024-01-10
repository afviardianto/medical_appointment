import React from "react";
import Header from "../components/Header/HeaderTittle";
import { Link } from 'react-router-dom';
import ProfileImg from "../assets/img/default-profile.png";
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "../redux/app";
import Sidebar from "../components/Sidebar/Sidebar";
import { CHAT } from '../components';

const Profile = () => {
    const dispatch = useDispatch();
    const openSideBar = useSelector((state) => state.App);
  
    const ToggleSideBar = () => {
      dispatch(setOpenSideBar(!openSideBar));
    };
    const closeSideBar = () => {
      dispatch(setOpenSideBar(false));
    };
    return (
      <div className="min-h-screen bg-light">
        <Sidebar openSideBar={openSideBar} closeSideBar={closeSideBar} />
        <div className="w-full md:w-[calc(100%-270px)] absolute right-0 top-0">
          <Header text="Message" />
          <main className="  w-full bg-light pt-4 pb-[120px] md:pb-[160px] ">
            {/* chat cards */}
            <CHAT />
          </main>
        </div>
      </div>
    );
  };
  
  export default Profile;