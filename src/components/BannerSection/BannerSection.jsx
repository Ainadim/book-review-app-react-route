import React from 'react';
import PropTypes from 'prop-types';
import heroImage from "../../assets/Hero.png"

const HeroSection = props => {
    return (
        <div>
            <div className="hero bg-base-200 min-h-full py-20 mb-24">
                <div className="hero-content flex-col lg:flex-row-reverse">
                    <img
                        src={heroImage}
                        className="max-w-sm rounded-lg shadow-2xl" />
                    <div className='mx-28'>
                        <h1 className="text-5xl font-bold mb-10">Box Office News!</h1>

                        <button className="btn btn-primary">Get Started</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

HeroSection.propTypes = {

};

export default HeroSection;