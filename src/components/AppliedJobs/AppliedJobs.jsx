import React, { useContext, useState } from 'react';
import { addToDb } from '../../utilities/Database';
import AppliedJob from '../AppliedJob/AppliedJob';
import { AppliedJobsContext } from '../RootLayout/RootLayout';

const AppliedJobs = () => {

    const appliedJobs = JSON.parse(localStorage.getItem("applied-jobs"));

    // Filter Jobs:
    const [filtered, setFiltered] = useState('');

    const handleFiltered = (event) => {
        setFiltered(event.target.value);
    }

    const filteredJobs = filtered ? appliedJobs.filter((job) => job.type === filtered) : appliedJobs;
    console.log(filteredJobs);

    return (
        <div className=''>
            <h1 className='text-center md:text-xl font-extrabold lg:text-2xl uppercase underline bg-slate-50 py-10'>Your Applied Jobs</h1>
            <div className='flex justify-center pt-5'>
                <select onChange={handleFiltered} className='px-3 border-2 border-black'>
                    <option>Filter By</option>
                    <option value="onsite">Onsite</option>
                    <option value="remote">Remote</option>
                </select>
            </div>

            <div className='space-y-3 py-5'>
                {
                    filteredJobs?.map((job) =>
                        <AppliedJob
                            key={job.id}
                            job={job}
                        >
                        </AppliedJob>)
                }
            </div>
        </div>
    );
};

export default AppliedJobs;