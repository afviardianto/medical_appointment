import React, { useEffect, useState } from "react";
import HeaderTittle from "../components/Header/HeaderTittle";
//import BottomNav from "../components/Navbar/BottomNav";
import AppointmentCard from '../components/Cards/AppointmentCard';
import { HomeModernIcon, UserIcon, StarIcon} from '@heroicons/react/24/outline';
import { userApi } from '../configs/axios.config';
import { Link, useParams, useSearchParams } from 'react-router-dom';

const Upcoming_Appointments = () => {
  const params = useParams();
  const token = localStorage?.getItem('token');
  console.log(params);
  const [appoinmtent, setAppointment] = useState();

  useEffect(() => {
    const getAppointmentData = async () => {
      const appointments = await userApi?.get(`/get-appointments/${params.id}`, {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      });
      setAppointment(appointments);
      console.log(appointments.data)

    };
    getAppointmentData();
  }, []);
    return (
      <div className="bg-gray-100 mt-[4.5rem] mb-[3cm]">
        <HeaderTittle text={"Upcoming Appointment"} />
      </div>
    );
  };
  
  export default Upcoming_Appointments;