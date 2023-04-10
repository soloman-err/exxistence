import React from 'react';
import Category from '../Category/Category';
import Featured from '../Featured/Featured';
import Header from '../Header/Header';

const Home = () => {
    return (
        <div className='py-5'>
            <Header></Header>
            <Category></Category>
            <Featured></Featured>
        </div>
    );
};

export default Home;