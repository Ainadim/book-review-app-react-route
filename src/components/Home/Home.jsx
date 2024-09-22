import React from 'react';
import PropTypes from 'prop-types';
import BannerSection from '../BannerSection/BannerSection';
import SingleBooks from '../SingleBooks/SingleBooks';
import HeaderTItle from '../HeaderTItle/HeaderTItle';
const Home = props => {
    return (
        <div className='my-10'>
            <BannerSection></BannerSection>
            <HeaderTItle></HeaderTItle>
            <SingleBooks></SingleBooks>
        </div>
    );
};

Home.propTypes = {
    
};

export default Home;