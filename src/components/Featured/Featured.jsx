import React, { useEffect, useState } from 'react';
import FeaturedJob from '../FeaturedJob/FeaturedJob';

const Featured = () => {
    const [featuredjobs, setFeaturedjobs] = useState([]);

    useEffect(() => {
        fetch('featured-jobs.json')
            .then((res) => res.json())
            .then((data) => setFeaturedjobs(data))
    })
    return (
        <div className='text-center space-y-3 py-5'>
            <div className='border-b inline'>
                <h1 className='font-extrabold text-xl lg:text-2xl'>Featured Jobs</h1>
                <small className='text-xs text-slate-600'>International Tech-Giant companies at a glance</small>
            </div>
            <div className='grid md:grid-cols-2 gap-5 w-[90%] md:w-[70%] mx-auto'>
                {
                    featuredjobs.map((featuredjob) =>
                        <FeaturedJob
                            key={featuredjob.id}
                            featuredjob={featuredjob}
                        >
                        </FeaturedJob>
                    )
                }
            </div>
        </div >
    );
};

export default Featured;