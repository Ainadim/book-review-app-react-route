import React from 'react';
import PropTypes from 'prop-types';
import { IoMdStarOutline } from 'react-icons/io';
import { Link } from 'react-router-dom';

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
            <Link to={`/book/${bookId}`}>
                <div className='grid text-left border p-10 rounded-xl gap-4'>
                    <div className='flex justify-center bg-slate-100 p-10 rounded-lg mb-6'>
                        <img src={image} alt="" />
                    </div>
                    <div className='mb-5'>
                        <span className='bg-orange-100 py-2 px-5 mr-2 rounded-lg font-bold'>{tags[0]}</span>
                        <span className='bg-cyan-200 py-2 px-5 ml-2 rounded-lg font-bold'>{tags[1]}</span>
                    </div>
                    <h2 className='font-bold text-3xl'>{bookName}</h2>
                    <p className='font-bold'>By: {author}</p>
                    <div className='w-auto h-auto border-b-[1px] border-dashed border-cyan-300 my-2'></div>
                    <div className='flex justify-between gap-10 text-lg font-bold'>
                        <p>{category}</p>
                        <p className='flex items-center gap-3'> {rating} <IoMdStarOutline /> </p>
                    </div>
                </div>
            </Link>
        </div>
    );
};

HomeBookList.propTypes = {

};

export default HomeBookList;