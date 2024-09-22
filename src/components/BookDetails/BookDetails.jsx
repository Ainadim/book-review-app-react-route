import React from 'react';
import PropTypes from 'prop-types';
import { useLoaderData, useParams } from 'react-router-dom';

const BookDetails = props => {

    const allData = useLoaderData()
    const {bookId} = useParams()
    const idNum = parseInt(bookId)

    const finalData =  allData.find(book => book.bookId === idNum)

    const {
        bookName,
        author,
        image,
        review,
        totalPages,
        rating,
        category,
        tags,
        publisher,
        yearOfPublishing } = finalData

    return (
        <div>
            <div className='grid grid-cols-2 items-center gap-5 my-10'>
                <div className='flex justify-center w-full h-fit py-16 px-16 bg-slate-200 '>
                    <img className='w-3/6' src={image} alt="" />
                </div>
                <div className='w-auto h-auto'>
                    <div className="grid grid-cols-1 divide-y gap-5">
                        <div className='grid justify-items-start gap-3'>
                            <h2 className='text-4xl font-bold'> {bookName}</h2>
                            <p className='font-bold'>By: {author}</p>
                        </div>
                        <div className='grid justify-items-start'>
                            <h4 className='font-bold text-xl pt-5'>{category}</h4>
                        </div>
                        <div className='grid pt-5 text-left gap-5'>
                            <p><span className='font-bold text-xl'> Review: </span> {review}</p>
                            <div className='flex'>
                                <p>
                                    <span className='font-bold'>Tag </span>
                                    <span className='mx-3'>
                                        <span className="p-3 badge badge-info gap-2">
                                            # {tags[0]}
                                        </span>
                                    </span>
                                    <span>
                                        <span className="p-3 badge badge-error gap-2">
                                            # {tags[1]}
                                        </span>
                                    </span>
                                </p>
                            </div>
                        </div>
                        <div className='pt-5'>
                            <div>
                                <div className="overflow-x-auto">
                                    <table className="table text-xl ">
                                        {/* row 1 */}
                                        <tr>
                                            <th>Number of Pages:</th>
                                            <td>{totalPages}</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>Publisher:</th>
                                            <td>{publisher}</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>Year of Publishing:</th>
                                            <td>{yearOfPublishing}</td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr>
                                            <th>Rating:</th>
                                            <td>{rating}</td>
                                        </tr>
                                    </table>
                                </div>
                            </div>
                            <div className='flex gap-5 mt-5'>
                                <button className='btn btn-outline'>Read</button>
                                <button className='btn btn-primary'>Wishlist</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

BookDetails.propTypes = {

};

export default BookDetails;