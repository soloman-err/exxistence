import { faMicrochip } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import React, { useEffect, useState } from 'react';

const Category = () => {
    const [categories, setCategories] = useState([]);
    useEffect(() => {
        fetch('categories.json')
            .then((res) => res.json())
            .then((data) => setCategories(data))
    })
    return (
        <div className='text-center py-5 space-y-3'>
            <div>
                <h1 className='font-extrabold text-xl'>Job Categories</h1>
                <small className='text-xs text-slate-700'>Explore bunch of job opportunities with all the information you need.</small>
            </div>
            <div className='space-y-2 gap-3 w-[60%] mx-auto md:space-y-0 md:flex md:justify-around'>
                {
                    categories.map((category) =>
                        <div
                            key={category.id}
                            className='border p-2 bg-slate-50'
                        >
                            <img src="" alt="" />
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