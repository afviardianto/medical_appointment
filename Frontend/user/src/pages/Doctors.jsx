
import React, { useState, useEffect } from 'react';
import Header from "../components/Header/Header";
import { StarIcon } from '@heroicons/react/24/outline';
import { useDispatch, useSelector } from "react-redux";
import { setOpenSideBar } from "../redux/app";
import Sidebar from "../components/Sidebar/Sidebar";
import { ArrowLeftIcon, ArrowRightIcon, SearchIcon } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { commonApi, userApi } from '../configs/axios.config';
import ProfileImg from "../assets/img/default-profile.png";

const starsArray = new Array(5).fill();

const Doctors = () => {
  const dispatch = useDispatch();
  const openSideBar = useSelector((state) => state.App);
  const token = localStorage.getItem('token');
  const [doctors, setDoctors] = useState([]);
  const [doctorId, setDoctorId] = useState('');
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const [modal, setModal] = useState(false);
  const [reason, setReason] = useState('');
  const [department, setDepartment] = useState([]);
  const [departmentFilter, setFilterDepartment] = useState([]);
  const [searchKeyword, setSearchKeyword] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const [nextPage, setNextPage] = useState(true);
  const [prevPage, setPrevPage] = useState(true);

  const user = useSelector((state) => state.data.value);

  const ToggleSideBar = () => {
    dispatch(setOpenSideBar(!openSideBar));
  };
  const closeSideBar = () => {
    dispatch(setOpenSideBar(false));
  };

  useEffect(() => {
    const getDoctors = async () => {
      let users = await commonApi.get('/get-doctors');
      users = users.data.data;
      setDoctors(users?.docs);
      setFilteredDoctors(users?.docs);

      setNextPage(users.hasNextPage);
      setPrevPage(users.hasPrevPage);
    };

    const getDepartment = async () => {
      const res = await commonApi.get('/get-department');
      setDepartment(res?.data?.data);
    };
    getDoctors();
    getDepartment();
  }, []);

  useEffect(() => {
    if (departmentFilter === 'all') return setFilteredDoctors(doctors);
    const data = doctors.filter((val) => departmentFilter === val.department);
    return setFilteredDoctors(data);
  }, [departmentFilter]);

  const handleReportDoctor = async () => {
    if (!reason) return toast.error('Please Enter Reason');
    const data = {
      doctorId,
      userId: user._id,
      reason,
    };
    const result = await userApi.post('/report-doctor', data, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    if (result?.data?.success) return toast.success('Reported Doctor');
    return setModal(!modal);
  };

  const searchHandler = async () => {
    const result = await commonApi.get(`/search-doctors?keyword=${searchKeyword}`);
    setFilteredDoctors(result?.data?.result);
  };

  const handlePagination = async (type) => {
    try {
      if (type === 'next' && !nextPage) return;
      const page = type === 'next' ? currentPage + 1 : currentPage - 1;

      let data = await commonApi.get(`/get-doctors?page=${page}`);
      data = data.data.data;
      setDoctors(data?.docs);
      setFilteredDoctors(data?.docs);

      setNextPage(data.hasNextPage);
      setPrevPage(data.hasPrevPage);
      setCurrentPage(data.page);
    } catch (error) {
      toast.error('someting went wrong');
    }
  };


  return (
    <div className="bg-light min-h-screen ">
      <Sidebar openSideBar={openSideBar} closeSideBar={closeSideBar} />
      <div className="w-full md:w-[calc(100%-270px)] absolute right-0 top-0">
        <Header ToggleSideBar={ToggleSideBar} />

        <main className="w-full bg-light pt-4 pb-[120px] md:pb-[160px] md:px-[calc(5%)]">
        <div className="flex max-w-full justify-between px-4">
        <div className="mx-auto w-full max-w-full w-/2">
          <div className="px-2 py-6">
            <select
              className="border-none border-0"
              name="department"
              id=""
              onChange={(e) => setFilterDepartment(e.target.value)}
            >
              <option value="all">All</option>
              {department?.map((data) => (
                <option key={data?.name} value={data.name}>
                  {data?.name}
                </option>
              ))}
            </select>
          </div>
        </div>

        <div className="relative w-1/2 h-12 mt-4 flex items-center text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50">
          <input
            type="text"
            id="default-search"
            className="block w-full border-none outline-none hover:outline-none"
            placeholder="Search For Doctor"
            value={searchKeyword}
            onChange={(e) => setSearchKeyword(e.target.value)}
          />
          <SearchIcon className="absolute right-3" onClick={(e) => searchHandler(e)} />
        </div>
      </div>

          <div className="my-4">
            <p className=" font-semibold ml-4 mb-4 sm:text-lg lg:text-xl">
              Doctors
            </p>
            <section className="flex flex-col shadow-small ">
            {console.log(filteredDoctors)}
            {filteredDoctors?.map((data) => (
                <article key={data?._id} className="flex flex-row items-center p-[1rem] bg-white border-b border-b-bs ">
                    <div className="flex flex-row items-center gap-[1rem]">
                    <img
                        src={data?.photoURL ? data?.photoURL : ProfileImg}
                        alt=""
                        className="w-[50px] object-cover h-[50px] rounded-[10px]"
                    />
                  <div className="flex flex-col gap-1 justify-center">
                    <p className="font-semibold text-dark text-[14px] leading-[17px]">
                      {'Dr. '+data?.firstName+' '+data?.lastName}
                    </p>
                    <div className="flex flex-row items-center  gap-[0.2rem]">
                      <div className="flex leading-[14.92px] flex-row gap-[0.4rem]">
                        {starsArray.map((_, index) => {
                          return (
                            <div key={index}>
                              <StarIcon className="text-warning leading-[14.92px] text-[8px]" />
                            </div>
                          );
                        })}
                      </div>
                      <p className="text-warning leading-[11px] ml-[2px] text-[11px]">
                        4.9
                      </p>
                      <p className="text-[11px] leading-[14.92px] text-secondary font-medium">
                        &#40;5,380&#41;
                      </p>
                    </div>
                    <p className="text-[11px] text-secondary leading-[12px]">
                      Dentist - {data?.department}
                    </p>
                  </div>
                  <div className="flex justify-between">
                <Link
                  to="/book-appointment"
                  className="mt-6 w-1/2 rounded-sm bg-black px-2 py-1.5 text-sm font-semibold text-white shadow-sm hover:bg-black/80 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-black"
                >
                  GOTO BOOKING
                </Link>
                <button
                  type="button"
                  onClick={() => {
                    setDoctorId(data?._id);
                    setModal(true);
                  }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-6 h-6 mt-6 text-red-600"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M3 3v1.5M3 21v-6m0 0l2.77-.693a9 9 0 016.208.682l.108.054a9 9 0 006.086.71l3.114-.732a48.524 48.524 0 01-.005-10.499l-3.11.732a9 9 0 01-6.085-.711l-.108-.054a9 9 0 00-6.208-.682L3 4.5M3 15V4.5"
                    />
                  </svg>
                </button>
              </div>
                </div>
                </article>
            ))}
            </section>
          </div>
          <div className="mt-4 md:mt-8">
          <div className="px-24 py-8 flex items-center justify-between mt-6">
        <button
          type="button"
          className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100"
          onClick={() => handlePagination()}
        >
          <ArrowLeftIcon className="w-4 h-4" />
          <span>previous</span>
        </button>
        <button
          type="button"
          className="flex items-center px-5 py-2 text-sm text-gray-700 capitalize transition-colors duration-200 bg-white border rounded-md gap-x-2 hover:bg-gray-100"
          onClick={() => handlePagination('next')}
        >
          <span>Next</span>
          <ArrowRightIcon className="w-4 h-4" />
        </button>
      </div>
          </div>
        </main>
      </div>
    </div>
  );
};

export default Doctors;
