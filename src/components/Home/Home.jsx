import React from 'react';
import PropTypes from 'prop-types';
import BannerSection from '../BannerSection/BannerSection';
import AllBooks from '../AllBooks/AllBooks';
import HomeBookList from '../HomeBookList/HomeBookList';

const Home = props => {
    return (
        <div>
            <BannerSection></BannerSection>
            <AllBooks></AllBooks>
            {/* <HomeBookList></HomeBookList> */}

        </div>
    );
};

Home.propTypes = {
    
};

export default Home;