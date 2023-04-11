import React, { useContext } from 'react';
import AppliedJob from '../AppliedJob/AppliedJob';
import { AppliedJobsContext } from '../RootLayout/RootLayout';

const AppliedJobs = () => {
    const { details } = useContext(AppliedJobsContext);

    return (
        <div className='py-10'>
            <h1 className='text-center text-xl lg:text-2xl uppercase underline'>Your Applied Jobs</h1>
            <div className='space-y-3 py-5'>
                {
                    details.map((job) =>
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