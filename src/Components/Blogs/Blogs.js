import React from 'react';

const Blogs = () => {
    return (
        <div>
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>Difference between authorization and authentication</h1>
                <div className='text-left pl-10'>
                    <h3 className='text-xl'>Authorization</h3>
                    <p>1. Authorization determines what resources a user can access.</p>
                    <p>2. Authorization works through settings that are implemented and maintained by the organization.</p>
                    <p>3. Authorization always takes place after authentication.</p>
                    <h3 className='text-xl'>Authentication</h3>
                    <p>1. Authentication verifies who the user is.</p>
                    <p>2. Authentication is the first step of a good identity and access management process.</p>
                    <p>3. Authentication is visible to and partially changeable by the user.</p>

                </div>
            </div>

        </div>
    );
};

export default Blogs;