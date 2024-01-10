import React, { useEffect, useState } from "react";
import HeaderTittle from "../components/Header/HeaderTittle";
//import BottomNav from "../components/Navbar/BottomNav";
import Sidebar from "../components/Sidebar/Sidebar";
import AppointmentCard from '../components/Cards/AppointmentCard'
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "../redux/app";
import { userApi } from '../configs/axios.config';
import { Tabs } from "flowbite-react";
import { Link } from 'react-router-dom';

const Appointments = () => {
    const dispatch = useDispatch();
    const token = localStorage?.getItem('token');
    const profileData = useSelector((state) => state?.data?.value);
    const openSideBar = useSelector((state) => state.App);

    const [selectedIndex, setSelectedIndex] = useState(0);
    const [prescription, setPrescription] = useState();
    const [appoinmtent, setAppointment] = useState();
  
    const ToggleSideBar = () => {
      dispatch(setOpenSideBar(!openSideBar));
    };
    const closeSideBar = () => {
      dispatch(setOpenSideBar(false));
    };

    useEffect(() => {
        const getUserData = async () => {
          const user = await userApi?.get(`/get-user-info/${profileData?._id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setPrescription(user?.data?.data?.prescription);
        };
        getUserData();
        const getAppiontment = async () => {
          const data = await userApi?.get(`/get-appointments/${profileData._id}`, {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          });
          setAppointment(data.data.data);
        };
        getAppiontment();
      }, []);


    return (
      <div className="bg-light min-h-screen ">
        <Sidebar openSideBar={openSideBar} closeSideBar={closeSideBar} />
        <div className="w-full md:w-[calc(100%-270px)] absolute right-0 top-0">
          <HeaderTittle text="My Appointment" />
          <main className="w-full bg-light mt-4 pb-[120px] md:pb-[160px] md:px-[5%]">
          <div className=" mt-[4.5rem] w-full bg-gray-100 mb-[3cm]">
            <Tabs selectedIndex={selectedIndex} onChange={setSelectedIndex}>
                <Tabs.Item active title="Upcoming">
                    <div className='bg-gray-100 flex flex-col gap-[5px] mt-[-7px]'>
                        {appoinmtent?.map((item) =>
                            { return item.active === true ? 
                                <div>
                                    <AppointmentCard 
                                        type='Upcoming'
                                        appointmentid={item._id} 
                                        name={item.doctorName} role='Gynecology' 
                                        date={item.date} action='COMPLETE' />
                                </div> : <></>
                            }
                        )}
                    </div>
                </Tabs.Item>
                <Tabs.Item title="Past">
                    {appoinmtent?.map((item) =>
                            { return item.active === false ? 
                              <div>
                                    <AppointmentCard 
                                        type='Past'
                                        appointmentid={item._id} 
                                        name={item.doctorName} role='Gynecology' 
                                        date={item.date} action='COMPLETE' />
                                </div> : <></>
                            }
                        )}
                </Tabs.Item>
                <Tabs.Item title="cancelled">
                    {appoinmtent?.map((item) =>
                            { return item.cancelled === true ? 
                              <div>
                                    <AppointmentCard 
                                        type='cancelled'
                                        appointmentid={item._id} 
                                        name={item.doctorName} role='Gynecology' 
                                        date={item.date} action='COMPLETE' />
                                </div> : <></>
                            }
                        )}
                </Tabs.Item>
          </Tabs>
        </div>
          </main>
        </div>
      </div>
    );
  };
  
  export default Appointments;