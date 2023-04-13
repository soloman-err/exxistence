import React, { createContext, useState } from 'react';
import { Outlet } from 'react-router-dom';
import Swal from 'sweetalert2';
import { removeFromDb } from '../../utilities/Database';
import Footer from '../Footer/Footer';
import Navbar from '../Navbar/Navbar';

export const AppliedJobsContext = createContext();

const RootLayout = () => {
    const [details, setDetails] = useState([]);
    const [jobDetail, setJobDetail] = useState([]);

    // Handling Apply-Job button:
    const handleApply = (id, detail) => {
        if (!details.includes(detail)) {
            const newDetails = [...details, detail]
            setDetails(newDetails);

            const applyJob = (id) => {
                const applied = JSON.parse(localStorage.getItem("applied-jobs")) || [];
                const alreadyApplied = applied.find((job) => job == id);

                if (!alreadyApplied) {
                    applied.push(id);
                    localStorage.setItem("applied-jobs", JSON.stringify(applied));

                    return true;
                }
                else {
                    return false;
                }
            }
            applyJob(id);


            Swal.fire({
                position: 'center',
                icon: 'success',
                title: "You Applied for this job!",
                showConfirmButton: false,
                timer: 1500
            })
        }
        else {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: "You've already applied!",
            })
        }
    }

    // Handling Delete Applied-Job button:
    const handleDelete = (id) => {
        const newJobs = details.filter((jobs) => jobs.id !== id);
        setDetails(newJobs);
        removeFromDb(id);
    }

    // Handling viewing Job-Details:
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