import React from 'react';
import Category from '../Category/Category';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='py-5'>
            <Header></Header>
            <Category></Category>
        </div>
    );
};

export default Home;