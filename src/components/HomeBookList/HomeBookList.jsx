import React from 'react';
import PropTypes from 'prop-types';
import { IoMdStarOutline } from 'react-icons/io';

const HomeBookList = ({ bookList }) => {
    const { bookId,
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing } = bookList
    return (
        <div>
            <div className='grid text-left border p-10 rounded-xl'>
                <div className='flex justify-center bg-slate-100 p-10 rounded-lg mb-10'>
                    <img src={image} alt="" />
                </div>
                <div className='mb-5'>
                    <span className='bg-orange-100 py-2 px-5 mr-2 rounded-lg font-bold'>{tags[0]}</span>
                    <span  className='bg-cyan-200 py-2 px-5 ml-2 rounded-lg font-bold'>{tags[1]}</span>
                </div>
                <h2>{bookName}</h2>
                <p>By: {author}</p>
                <div className='w-auto h-1 border-b-2 border-dashed border-cyan-300 m-10'></div>
                <div>
                    <span>{category}</span>
                    <span>{rating} <IoMdStarOutline></IoMdStarOutline> </span>
                </div>
            </div>
        </div>
    );
};

HomeBookList.propTypes = {

};

export default HomeBookList;