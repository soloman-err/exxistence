import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { AppliedJobsContext } from '../RootLayout/RootLayout';


const JobDetails = ({ featuredjob, }) => {
    const { handleApply, jobDetail } = useContext(AppliedJobsContext);
    console.log(jobDetail)
    const { id, image, location, salary, subtitle, time, title, type } = jobDetail;

    return (
        <div className='md:flex justify-between space-y-5 md:space-y-0 md:w-[80%] mx-auto bg-slate-100 border border-slate-500 p-5 mt-[10%]'>
            <div className='space-y-5'>
                <img className='w-[50%]' src={image} alt="job-details-image" />
                <div>
                    <p><span>Job Description:</span></p>
                    <p><span>Job Responsibility:</span></p>
                    <p><span>Educational Requirements:</span></p>
                    <p><span>Experiences:</span></p>
                </div>
            </div>
            <div className='bg-slate-200 p-4'>
                <div className='space-y-2 py-2'>
                    <div className='space-y-1'>
                        <h1 className='font-extrabold text-xs'>Job Details</h1>
                        <div className='flex flex-col border-t border-slate-300 text-xs'>
                            <span>Salary: {salary}</span>
                            <span>Job Title: {title}</span>
                        </div>
                    </div>
                    <div className='space-y-1'>
                        <h1 className='font-extrabold text-xs'>Contact Information</h1>
                        <div className='flex flex-col border-t border-slate-300 text-xs'>
                            <span>Phone:</span>
                            <span>Email:</span>
                            <span>Address:</span>
                        </div>
                    </div>
                </div>
                <Link to='/applied-jobs'>
                    <Button onClick={() => handleApply(jobDetail)} >Apply Now</Button>
                </Link>
            </div>
        </div >
    );
};

export default JobDetails;

// onClick = {() => handleApply(featuredjob)}