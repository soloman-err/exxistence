import { faMapLocation, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';
import Button from '../Button/Button';

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
                        <div
                            key={featuredjob.id}
                            className='border bg-slate-50 text-left flex flex-col justify-between space-y-5 p-5 shadow-md'
                        >
                            <div className='space-y-3'>
                                <img className='lg:w-[50%] h-[40px] lg:h-[50px] opacity-80' src={featuredjob.image} alt="" />
                                <div>
                                    <h1 className='text-lg font-bold'>{featuredjob.title}</h1>
                                    <small className='text-xs text-slate-500'>{featuredjob.subtitle}</small>
                                </div>
                                <div className='flex gap-5 py-1'>
                                    <button className='border border-black px-2 text-sm bg-slate-200'>{featuredjob.type}</button>
                                    <button className='border border-black px-2 text-sm bg-slate-200'>{featuredjob.time}</button>
                                </div>
                                <div className='text-slate-700'>
                                    <small className='flex gap-1 items-center'>
                                        <FontAwesomeIcon className='text-slate-800' icon={faMapLocation} />
                                        {featuredjob.location}
                                    </small>
                                    <small className='flex gap-1 items-center'>
                                        <FontAwesomeIcon className='text-slate-800' icon={faMoneyBill} />
                                        {featuredjob.salary}
                                    </small>
                                </div>
                            </div>
                            <div>
                                <button className='border border-black px-2 py-1 bg-slate-800 text-white hover:bg-slate-200 hover:text-black h mt-auto text-sm'>View Details</button>
                            </div>
                        </div>
                    )
                }
            </div>
            {/* <Button></Button> */}
        </div >
    );
};

export default Featured;