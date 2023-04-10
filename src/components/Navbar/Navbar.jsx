import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='w-[80%] mx-auto flex flex-row-reverse md:flex-row justify-between lg:text-lg uppercase py-5 items-center border-b pb-3'>
            <h1 className='text-2xl font-extrabold'>Exxistence</h1>

            <ul className={`absolute flex flex-col md:flex-row ${open ? 'top-16 left-[10%] bg-white border-t pb-[100%] space-y-3 pr-10' : 'top-16 -left-36'} duration-300 md:static md:space-x-3 text-sm font-extrabold`}>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied-jobs'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </ul>
            <button className='hidden md:block border-2 border-black px-2 py-1 text-sm font-extrabold'>ApplyUP</button>

            <div className='font-bold text-xl md:hidden' onClick={() => setOpen(!open)}>
                <span>
                    {
                        open === true ?
                            <FontAwesomeIcon icon={faX} />
                            :
                            <FontAwesomeIcon icon={faBars} />
                    }
                </span>
            </div>
        </nav >
    );
};

export default Navbar;