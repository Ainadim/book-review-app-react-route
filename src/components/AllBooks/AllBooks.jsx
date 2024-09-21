import React from 'react';
import PropTypes from 'prop-types';
import HeaderTItle from '../HeaderTItle/HeaderTItle';
import SingleBooks from '../SingleBooks/SingleBooks';

const AllBooks = props => {
    return (
        <div>
            <div>
                <HeaderTItle></HeaderTItle>
            </div>
            <div>
                <SingleBooks></SingleBooks>
            </div>
        </div>
    );
};

AllBooks.propTypes = {

};

export default AllBooks;