import React, { useContext } from 'react';
import Button from '../Button/Button';
// import { DetailContext } from '../RootLayout/RootLayout';

const JobDetails = () => {
    // const handleDetail = useContext(DetailContext);
    // console.log(handleDetail)


    return (
        <div className='md:flex justify-between space-y-5 md:space-y-0 md:w-[80%] mx-auto bg-slate-200 p-5 mt-[10%]'>
            <div>
                <p><span>Job Description:</span></p>
                <p><span>Job Responsibility:</span></p>
                <p><span>Educational Requirements:</span></p>
                <p><span>Experiences:</span></p>
            </div>
            <div className='bg-slate-300 p-3 space-y-5'>
                <div className='space-y-3'>
                    <div className='space-y-1'>
                        <h1>Job Details</h1>
                        <div className='flex flex-col border-t border-slate-400'>
                            <span>Salary:</span>
                            <span>Job Title:</span>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <h1>Contact Information</h1>
                        <div className='flex flex-col border-t border-slate-400'>
                            <span>Phone:</span>
                            <span>Email:</span>
                            <span>Address:</span>
                        </div>
                    </div>
                </div>
                <Button>Apply Now</Button>
            </div>
        </div>
    );
};

export default JobDetails;