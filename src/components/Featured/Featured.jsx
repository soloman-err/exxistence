import React, { createContext, useEffect, useState } from 'react';
import Button from '../Button/Button';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Featured = () => {
    const [featuredjobs, setFeaturedjobs] = useState([]);
    const [showAll, setShowAll] = useState(false);

    useEffect(() => {
        fetch('featured-jobs.json')
            .then((res) => res.json())
            .then((data) => setFeaturedjobs(data))
    }, [])

    const showAllJobs = () => {
        setShowAll(!showAll);
    }

    const renderedJobs = showAll ? featuredjobs : featuredjobs.slice(0, 4);

    return (
        <div className='text-center space-y-3 pt-5'>
            <div className='border-b inline'>
                <h1 className='font-extrabold text-xl lg:text-2xl'>Featured Jobs</h1>
                <small className='text-xs text-slate-600'>International Tech-Giant companies at a glance</small>
            </div>
            <div className='grid md:grid-cols-2 gap-5 w-[90%] md:w-[70%] mx-auto'>
                {
                    renderedJobs.map((featuredjob) =>
                        <FeaturedJob
                            key={featuredjob.id}
                            featuredjob={featuredjob}
                        >
                        </FeaturedJob>
                    )
                }
            </div>
            <button onClick={() => showAllJobs()} className="bg-slate-900 text-white py-2 px-6 rounded-tl-lg hover:bg-slate-700 transition-all duration-200 transform hover:-translate-y-1 focus:outline-none focus:ring-2 focus:ring-slate-600 focus:ring-opacity-50 clip-path-btn">
                See All Jobs
            </button>

        </div >
    );
};

export default Featured;