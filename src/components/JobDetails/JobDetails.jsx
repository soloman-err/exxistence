import React, { useContext } from 'react';
import Button from '../Button/Button';
import { AppliedJobsContext } from '../RootLayout/RootLayout';


const JobDetails = () => {
    const { handleApply, jobDetail } = useContext(AppliedJobsContext);
    const { id, image, location, salary, subtitle, time, title, type, phone, email, desc, responsibility, requirements, experiences } = jobDetail;

    return (
        <div className='md:flex justify-between space-y-5 md:space-y-0 md:w-[80%] mx-auto bg-slate-100 border border-slate-500 p-5 my-[10%] gap-5'>
            <div className='space-y-5'>
                <img className='w-[30%] md:w-[40%] lg:w-[20%]' src={image} alt="company-logo" />
                <div className='space-y-2 border-l md:border- border-black pl-2'>
                    <p className='text-xs md:text-sm'><span className='font-extrabold underline'>Job Description:</span> {desc}</p>
                    <p className='text-xs md:text-sm'><span className='font-extrabold underline'>Job Responsibility:</span> {responsibility}</p>
                    <p className='text-xs md:text-sm'><span className='font-extrabold underline'>Educational Requirements:</span> {requirements}</p>
                    <p className='text-xs md:text-sm'><span className='font-extrabold underline'>Experiences:</span> {experiences}</p>
                </div>
            </div>
            <div className='flex flex-col justify-between bg-slate-200 p-4'>
                <div className='space-y-2 py-2'>
                    <div className='space-y-1'>
                        <h1 className='font-extrabold text-xs'>Job Details</h1>
                        <div className='flex flex-col border-t border-slate-300 text-xs space-y-1'>
                            <span><span className='font-extrabold'>Salary:</span> {salary}</span>
                            <span><span className='font-extrabold'>Job Title:</span> {title}</span>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <h1 className='font-extrabold text-xs'>Contact Information</h1>
                        <div className='flex flex-col border-t border-slate-300 text-xs space-y-1'>
                            <span><span className='font-extrabold'>Phone:</span> {phone}</span>
                            <span><span className='font-extrabold'>Email:</span> {email}</span>
                            <span><span className='font-extrabold'>Address:</span> {location}</span>
                        </div>
                    </div>
                </div>
                <Button onClick={() => handleApply(id, jobDetail)} >Apply Now</Button>
            </div>
        </div >
    );
};

export default JobDetails;

// , jobDetail