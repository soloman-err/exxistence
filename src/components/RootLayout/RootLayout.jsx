import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export const AppliedJobsContext = createContext();

const RootLayout = () => {
    const [details, setDetails] = useState([]);
    const [jobDetail, setJobDetail] = useState([]);

    const handleApply = (detail) => {
        const newDetails = [...details, detail]
        setDetails(newDetails);
        // if (newDetails) {
        //     Swal.fire({
        //         position: 'top-end',
        //         icon: 'success',
        //         title: 'Your work has been saved',
        //         showConfirmButton: false,
        //         timer: 1500
        //     })
        // }
    }

    const handleDelete = (id) => {
        const newJobs = details.filter((jobs) => jobs.id !== id);
        setDetails(newJobs);
    }

    const handleDetail = (job) => {
        setJobDetail(job);
    }

    return (
        <div className='font-poppins'>
            <AppliedJobsContext.Provider value={{ details, setDetails, handleApply, handleDelete, handleDetail, jobDetail }}>
                <Navbar></Navbar>
                <div className='min-h-[calc(100vh-200px)] w-[80%] mx-auto'>
                    <Outlet></Outlet>
                </div>
                <Footer></Footer>
            </AppliedJobsContext.Provider>
        </div>
    );
};

export default RootLayout;