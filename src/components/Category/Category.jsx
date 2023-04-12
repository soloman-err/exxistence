import { Player } from '@lottiefiles/react-lottie-player';
import React, { useEffect, useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        try {
            fetch('categories.json')
                .then((res) => res.json())
                .then((data) => setCategories(data))
        }
        catch (error) {
            <Player
                autoplay
                loop
                src="https://assets9.lottiefiles.com/private_files/lf30_hdjv06hi.json"
                className='pt-[50%] md:pt-[10%] lg:w-[50%] mx-auto'
            >
            </Player>
        }
    })
    return (
        <div className='text-center pt-10 space-y-5'>
            <div className='border-b inline'>
                <h1 className='font-extrabold text-xl lg:text-2xl'>Job Categories</h1>
                <small className='text-xs text-slate-600'>Explore bunch of job opportunities with all the information you need.</small>
            </div>
            <div className='space-y-2 gap-3 w-[90%] md:w-[70%] mx-auto md:space-y-0 md:flex md:justify-around'>
                {
                    categories.map((category) =>
                        <div
                            key={category.id}
                            className='border p-5 bg-slate-50 shadow-sm'
                        >
                            <img className='w-6 mx-auto' src={category.img} alt="" />
                            <h1>{category.title}</h1>
                            <small className='text-slate-700 text-xs'>{category.available_jobs} jobs available</small>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

export default Category;