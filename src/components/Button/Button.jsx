import React from 'react';

const Button = ({ onClick, children }) => {
    return (
        <div>
            <button onClick={onClick} className='border-2 border-black px-2 py-1 font-extrabold bg-black text-white hover:bg-slate-50 hover:text-black duration-200 clip-path-btn'>{children}</button>
        </div>
    );
};

export default Button;