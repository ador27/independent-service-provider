import React from 'react';
import Thumbnail from '../../../Images/Thumbnail/banner.jpg'

const Banner = () => {
    return (
        <div>
            <img style={{ width: '100%', height: '600px' }} src={Thumbnail} alt="" />
        </div>
    );
};

export default Banner;