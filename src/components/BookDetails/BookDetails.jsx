import React from 'react';
import PropTypes from 'prop-types';

const BookDetails = props => {
    return (
        <div>
            <div className='grid grid-cols-2 items-center gap-5 my-10'>
                <div className='w-full h-fit py-16 px-16 bg-slate-200 '>
                    <img className='w-3/4' src="https://i.ibb.co.com/dJ5LgBZ/Book-Name-1.png" alt="" />
                </div>
                <div className='w-auto h-auto'>
                    <div className="grid grid-cols-1 divide-y gap-5">
                        <div className='grid justify-items-start gap-3'>
                            <h2 className='text-4xl font-bold'>THe </h2>
                            <p className='font-bold'>By: Awlad</p>
                        </div>
                        <div className='grid justify-items-start'>
                            <h4 className='font-bold text-xl pt-5'>Fiction</h4>
                        </div>
                        <div className='grid pt-5 text-left gap-5'>
                            <p><span className='font-bold text-xl'> Review: </span> Lorem ipsum dolor, sit amet consectetur adipisicing elit. Dolor tenetur deserunt perferendis ex! Accusamus id eaque quasi magnam, dolorem vitae eligendi impedit earum dolor consequuntur nesciunt sequi, odit quisquam illum distinctio laboriosam et est, qui excepturi. Placeat tempore, necessitatibus repellat tenetur asperiores quasi. Dolore est fuga unde, dignissimos quidem ipsam!</p>
                            <div className='flex'>
                                <p>
                                    <span className='font-bold'>Tag </span>
                                    <span className='mx-3'>
                                        <div className="p-3 badge badge-info gap-2">
                                            # Young
                                        </div>
                                    </span>
                                    <span>
                                        <div className="p-3 badge badge-error gap-2">
                                            # Identy
                                        </div>
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
                                            <td>Cy Ganderton</td>
                                        </tr>
                                        {/* row 2 */}
                                        <tr>
                                            <th>Publisher:</th>
                                            <td>Hart Hagerty</td>
                                        </tr>
                                        {/* row 3 */}
                                        <tr>
                                            <th>Year of Publishing:</th>
                                            <td>Brice Swyre</td>
                                        </tr>
                                        {/* row 4 */}
                                        <tr>
                                            <th>Rating:</th>
                                            <td>Brice Swyre</td>
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