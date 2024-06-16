import React, { useState } from 'react';
import { formateDate } from '../../utils/formateDate.js';
import { AiFillStar } from 'react-icons/ai';
import FeedbackForm from './FeedbackForm.jsx';

const Feedback = ({ reviews, totalRating }) => {
    const [showFeedbackForm, setShowFeedbackForm] = useState(false);
    const defaultPhoto = 'https://res.cloudinary.com/psywebapp/image/upload/v1234567890/ah9xegnl0lpd7cf7kr5j.jpg';

    return (
        <div>
            <div className='mb-[50px]'>
                <h4 className='text-[20px] leading-[30px] font-bold text-headingColor mb-[30px]'>
                    Все отзывы ({totalRating})
                </h4>

                {reviews?.map((review, index) => (
                    <div key={index} className='flex justify-between gap-10 mb-[30px]'>
                        <div className='flex gap-3'>
                            <figure className='w-10 h-10 rounded-full overflow-hidden'>
                                <img
                                    className='w-full h-full object-cover'
                                    src={review?.user?.photo || defaultPhoto}
                                    alt={review?.user?.name || 'User'}
                                    onError={(e) => {
                                        e.target.src = defaultPhoto;
                                        console.log(`Image load error for user: ${review?.user?.name}`);
                                    }}
                                />
                            </figure>
                            <div>
                                <h5 className='text-[16px] leading-6 text-primaryColor font-bold'>{review?.user?.name}</h5>
                                <p className='text-[14px] leading-6 text-textColor'>{formateDate(review?.createdAt)}</p>
                                <p className='text__para mt-3 font-medium text-[15px]'>{review.reviewText}</p>
                            </div>
                        </div>
                        <div className='flex gap-1'>
                            {[...Array(review?.rating).keys()].map((index) => (
                                <AiFillStar key={index} color='#8b00ff' />
                            ))}
                        </div>
                    </div>
                ))}
            </div>

            {!showFeedbackForm && (
                <div className='text-center'>
                    <button className="btn" onClick={() => setShowFeedbackForm(true)}>Оставить отзыв</button>
                </div>
            )}

            {showFeedbackForm && <FeedbackForm />}
        </div>
    );
};

export default Feedback;