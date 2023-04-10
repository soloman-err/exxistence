import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    return (
        <nav className='flex flex-row-reverse md:flex-row justify-between lg:text-lg uppercase py-5 items-center'>
            <h1 className='text-2xl font-extrabold'>Exxistence</h1>

            <ul className={`absolute flex flex-col md:flex-row ${open ? 'top-16 left-[15%]' : 'top-16 -left-36'} duration-300 md:static md:space-x-3`}>
                <Link to='/'>Home</Link>
                <Link to='/statistics'>Statistics</Link>
                <Link to='/applied-jobs'>Applied Jobs</Link>
                <Link to='/blog'>Blog</Link>
            </ul>
            <button className='hidden md:block'>ApplyUP</button>

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