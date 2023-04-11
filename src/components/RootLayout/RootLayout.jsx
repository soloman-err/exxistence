import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export const HandleDetailContext = createContext();
export const AppliedJobsContext = createContext();
// export const DeleteContext = createContext();

const RootLayout = () => {
    const [details, setDetails] = useState([]);
    // console.log(details);

    const handleDetail = (detail) => {
        const newDetails = [...details, detail]
        setDetails(newDetails);
    }

    const handleDelete = (id) => {
        console.log(id);
    }

    return (
        <div className='font-poppins'>
            <AppliedJobsContext.Provider value={{ details, setDetails, handleDelete }}>
                <HandleDetailContext.Provider value={handleDetail}>
                    <Navbar></Navbar>
                    <div className='min-h-[calc(100vh-100px)] w-[80%] mx-auto '>
                        <Outlet></Outlet>
                    </div>
                    <Footer></Footer>
                </HandleDetailContext.Provider>
            </AppliedJobsContext.Provider>
        </div>
    );
};

export default RootLayout;