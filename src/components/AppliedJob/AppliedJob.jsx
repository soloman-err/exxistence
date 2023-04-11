import { faTrashCan } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';
import { HandleDetailContext } from '../RootLayout/RootLayout';

const AppliedJob = ({ job }) => {
    const { id, image, location, salary, subtitle, time, title, type } = job;

    // const handleDelete = (id) => {
    //     console.log(id)
    // }
    const { handleDelete } = useContext(HandleDetailContext)

    return (
        <div className='flex justify-between items-center p-3 md:p-5 md:w-[80%] lg:w-[60%] mx-auto border border-black shadow-lg'>
            <div className='md:flex items-center gap-5'>
                <img className='w-20 h-6 md:w-24 md:h-8' src={image} alt="" />
                <div className='space-y-1'>
                    <h1 className='font-extrabold'>{title}</h1>
                    <small>{subtitle}</small>
                    <div className='flex gap-3 text-sm'>
                        <button className='border border-black px-1 text-sm bg-slate-200'>{type}</button>
                        <button className='border border-black px-1 text-sm bg-slate-200'>{time}</button>
                    </div>
                    <div className='flex flex-col text-xs'>
                        <span>Address: {location}</span>
                        <span>Salary: {salary}</span>
                    </div>
                </div>
            </div>
            <div className='flex gap-3 items-center'>
                <Link to='/job-details' className='text-sm'>
                    <Button>View Details</Button>
                </Link>
                <FontAwesomeIcon onClick={() => handleDelete(id)} icon={faTrashCan} />
            </div>
        </div>
    );
};

export default AppliedJob;