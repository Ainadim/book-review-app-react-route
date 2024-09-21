import React from 'react';
import PropTypes from 'prop-types';
import { Outlet } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';

const Root = props => {
    return (
        <div className='w-full m-auto'>
            <Header></Header>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

Root.propTypes = {
    
};

export default Root;