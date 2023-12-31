import { faBars, faX } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Button from '../Button/Button';

const Navbar = () => {
    const [open, setOpen] = useState(false);
    const [active, setActive] = useState('');

    const handleActive = (state) => {
        setActive(state)
    }

    return (
        <nav className='w-[80%] mx-auto flex flex-row-reverse md:flex-row justify-between lg:text-lg uppercase py-5 items-center border-b pb-3'>
            <Link to='/'><h1 className='text-2xl font-extrabold'>Exxistence</h1></Link>

            <ul className={`absolute z-10 flex flex-col md:flex-row ${open ? 'top-16 left-[10%] bg-white border-t space-y-3 md:space-y-0 pr-3 pb-10 pt-2 ' : 'top-16 -left-36'} duration-300 md:static md:space-x-3 text-sm font-extrabold`}>
                <Link className={active === 'Home' ? 'border-b-2 border-black' : ''} onClick={() => handleActive('Home')} to='/'>Home</Link>
                <Link className={active === 'Statistics' ? 'border-b-2 border-black' : ''} onClick={() => handleActive('Statistics')} to='/statistics'>Statistics</Link>
                <Link className={active === 'Applied Jobs' ? 'border-b-2 border-black' : ''} onClick={() => handleActive('Applied Jobs')} to='/applied-jobs'>Applied Jobs</Link>
                <Link className={active === 'Blog' ? 'border-b-2 border-black' : ''} onClick={() => handleActive('Blog')} to='/blog'>Blog</Link>
            </ul>
            <div className='hidden md:block'>
                <div className='flex gap-2'>
                    <button className='border-2 border-black px-2 font-extrabold hover:text-white hover:bg-black bg-slate-50'>Log In</button>
                    <Button>Sign Up</Button>
                </div>
            </div>

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