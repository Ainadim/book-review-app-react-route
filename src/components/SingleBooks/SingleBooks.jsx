import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import HomeBookList from '../HomeBookList/HomeBookList';

const SingleBooks = props => {

    const [book, setBook] = useState([])

    useEffect(() => {
        fetch('Book.json')
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])


    return (
        <div>
            <div className='grid grid-cols-3 gap-10'>
                {
                    book.map((book, idx) => <HomeBookList key={idx} bookList={book}></HomeBookList>)
                }
            </div>
        </div>
    );
};

SingleBooks.propTypes = {

};

export default SingleBooks;