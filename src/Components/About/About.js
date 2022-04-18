import React from 'react';
import myImage from '../../Images/my-pic.jpg'

const About = () => {
    return (
        <div>
            <div>
                <h1 className='text-2xl text-left pl-20'>Md. Rashedul Haque Ador</h1>

                <img className='h-96 pl-20 mt-3' src={myImage} alt="" />
            </div>
            <div className='border-4 mt-5'>
                <h1 className='text-2xl mt-10 mb-5'>My GOAL</h1>

                <p className='text-justify text-lg p-10'>I am a student of CSE. I want to become world's best full stack web developer. To achieve my goal I will always keep my doing hard work. I will work daily more than 10 hours to be a successful web developer. I will always focus on my goal. And In Shaa Allah one day I wll achieve my goal.</p>
            </div>

        </div>
    );
};

export default About;