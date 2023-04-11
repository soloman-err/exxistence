import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export const HandleApplyContext = createContext();
export const AppliedJobsContext = createContext();

const RootLayout = () => {
    const [details, setDetails] = useState([]);

    const handleApply = (detail) => {
        const newDetails = [...details, detail]
        setDetails(newDetails);
    }

    const handleDelete = (id) => {
        const newJobs = details.filter((jobs) => jobs.id !== id);
        setDetails(newJobs);
    }

    return (
        <div className='font-poppins'>
            <AppliedJobsContext.Provider value={{ details, setDetails, handleDelete }}>
                <HandleApplyContext.Provider value={{ handleApply, handleDelete }}>
                    <Navbar></Navbar>
                    <div className='min-h-[calc(100vh-100px)] w-[80%] mx-auto '>
                        <Outlet></Outlet>
                    </div>
                    <Footer></Footer>
                </HandleApplyContext.Provider>
            </AppliedJobsContext.Provider>
        </div>
    );
};

export default RootLayout;