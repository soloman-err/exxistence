import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';
import Button from '../Button/Button';

const Header = () => {
    return (
        <>
            <section className='md:flex space-y-5 md:space-y-0 md:items-center py-5'>
                <div className='space-y-2'>
                    <h1 className='font-extrabold text-5xl'>Exxist or Exhaust</h1>
                    <p className='text-slate-700 text-sm'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Necessitatibus eveniet exercitationem nam inventore ullam voluptatibus unde alias quisquam molestiae repellendus!</p>
                    <Button></Button>
                </div>
                <Player
                    autoplay
                    loop
                    src="https://assets2.lottiefiles.com/packages/lf20_czj9tlje.json"

                    className='w-[50%]'
                >
                </Player>
            </section>
        </>
    );
};

export default Header;