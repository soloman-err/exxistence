import React from 'react';

const Blog = () => {
    return (
        <div className='py-10 space-y-10'>
            <h1 className='text-center text-xl lg:text-2xl uppercase underline'>Career Blog</h1>

            <div className='space-y-5'>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100">
                    <div className="collapse-title text-xl font-medium">
                        When should you use Context API?
                    </div>
                    <div className="collapse-content">
                        <p>To accessing native components And avoid props drilling manually we should use Context API method. It reduces code complexity</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100">
                    <div className="collapse-title text-xl font-medium">
                        What is Custom Hook?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
                <div tabIndex={0} className="collapse collapse-plus border border-base-300 bg-base-100">
                    <div className="collapse-title text-xl font-medium">
                        What is useRef & useMemo?
                    </div>
                    <div className="collapse-content">
                        <p>tabIndex={0} attribute is necessary to make the div focusable</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Blog;