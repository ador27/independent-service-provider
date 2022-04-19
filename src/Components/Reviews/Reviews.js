import React, { useEffect, useState } from 'react';
import Review from './Review/Review';


const Reviews = () => {
    const [reviews, setReviews] = useState([])

    useEffect(() => {
        fetch(`reviewData.json`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])
    return (
        <div className='px-4 pt-20 pb-24 mx-auto max-w-7xl md:px-2'>
            <div>
                <h2 className='text-center text-5xl font-bold mb-10 text-orange-500'>Customer Reviews</h2>

            </div>

            <div className='grid grid-cols-1 md:grid-cols-3 justify-items-center'>
                {
                    reviews.map(review => <Review key={review.id} review={review}></Review>)
                }
            </div>

        </div >
    );
};

export default Reviews;