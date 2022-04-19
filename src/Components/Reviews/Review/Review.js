import React from 'react';

const Review = (props) => {
    const { name, review, rating, picture } = props.review;
    return (
        <div className='p-5 bg-purple-700 text-white'>
            <img className='h-40 pl-36' src={picture} alt="" />
            <h3>Name: {name}</h3>
            <h5>Review: <small>{review}</small></h5>
            <h5>Rating: {rating}</h5>

        </div>
    );
};

export default Review;