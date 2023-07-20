import React from 'react';

const Blog = () => {
    return (
        <div className='space-y-10'>
            <h1 className='text-center md:text-xl font-extrabold lg:text-2xl uppercase underline bg-slate-50 py-10'>Career Blog</h1>

            <div className='space-y-5'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100">
                    <div className="collapse-title md:text-xl font-medium bg-slate-50">
                        When should you use Context API?
                    </div>
                    <div className="collapse-content text-sm">
                        <p>It allows to create a global data store that can be accessed by any component in DOM tree. It's a way to pass data through components to components without thinking of props-drilling manually at every child level & at the same time it reduces code complexity</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100">
                    <div className="collapse-title md:text-xl font-medium bg-slate-50">
                        What is Custom Hook?
                    </div>
                    <div className="collapse-content text-sm">
                        <p>In React, Custom-Hook is a function that allows us to acquire reusability in function. It's a path to embed logic in functions & extract reuseable logic from Components. It helps with reduce code duplication and easier to maintain.</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100">
                    <div className="collapse-title md:text-xl font-medium bg-slate-50">
                        What is useRef & useMemo?
                    </div>
                    <div className="collapse-content text-sm">
                        <p><span className='font-extrabold underline'>useRef & useMemo:</span> These are significant hooks in React, which allows to optimize & improves better performance of components. </p>
                        <p><span className='font-extrabold underline'>useRef:</span> hook receives an argument as the initial value & returns a reference. useRef has 3 major executions. These are,
                            <li>Accessing DOM elements.</li>
                            <li>Updating references.</li>
                            <li>Returns Mutable references.</li>
                        </p>
                        <p><span className='font-extrabold underline'>useMemo:</span>
                            This built-in React hooks helps us with avoid calling unusual function on every time on functional components & optimizes performances of the application. It avoids executing, slow-to-run functions that are unnecessary to run on every renders.
                        </p>
                    </div>
                </div>
            </div>
        </div >
    );
};

export default Blog;