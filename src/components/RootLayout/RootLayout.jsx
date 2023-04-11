import React from 'react';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';


const RootLayout = () => {

    return (
        <div className='font-poppins'>

            <Navbar></Navbar>
            <div className='min-h-[calc(100vh-100px)] w-[80%] mx-auto '>
                <Outlet></Outlet>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;