import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import Button from '../Button/Button';

const Header = () => {
    return (
        <>
            <section className='md:flex space-y-5 md:space-y-0 md:items-center py-5'>
                <div className='space-y-3'>
                    <h1 className='font-extrabold text-5xl lg:text-8xl'>Exxist or Exhaust</h1>
                    <p className='text-slate-700 text-sm'>Seeker! you've step up into sphere of careeropedia. The most popular hunting gateway.</p>
                    <Button></Button>
                </div>
                <Player
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_czj9tlje.json"

                    className='w-[70%]'
                >
                </Player>
            </section>
        </>
    );
};

export default Header;