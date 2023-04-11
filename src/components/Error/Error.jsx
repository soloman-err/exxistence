import { Player } from '@lottiefiles/react-lottie-player';
import React from 'react';

const Error = () => {
    return (
        <div>
            <Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/private_files/lf30_hdjv06hi.json"
                className='pt-[50%] md:pt-[10%] lg:w-[50%] mx-auto'
            >
            </Player>
        </div>
    );
};

export default Error;