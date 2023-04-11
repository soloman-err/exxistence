import React from 'react';
import { faMapLocation, faMoneyBill } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const FeaturedJob = ({ featuredjob }) => {
    const { id, image, location, salary, subtitle, time, title, type } = featuredjob;

    return (
        <div
            key={id}
            className='border bg-slate-50 text-left flex flex-col justify-between space-y-5 p-5 shadow-md'
        >
            <div className='space-y-3'>
                <img className='lg:w-[50%] h-[40px] lg:h-[50px] opacity-80' src={image} alt="" />
                <div>
                    <h1 className='text-lg font-bold'>{title}</h1>
                    <small className='text-xs text-slate-500'>{subtitle}</small>
                </div>
                <div className='flex gap-5 py-1'>
                    <button className='border border-black px-2 text-sm bg-slate-200'>{type}</button>
                    <button className='border border-black px-2 text-sm bg-slate-200'>{time}</button>
                </div>
                <div className='text-slate-700'>
                    <small className='flex gap-1 items-center'>
                        <FontAwesomeIcon className='text-slate-800' icon={faMapLocation} />
                        {location}
                    </small>
                    <small className='flex gap-1 items-center'>
                        <FontAwesomeIcon className='text-slate-800' icon={faMoneyBill} />
                        {salary}
                    </small>
                </div>
            </div>
            <div>
                <Link to='/job-details'><Button>View Details</Button></Link>
            </div>
        </div >
    );
};

export default FeaturedJob;