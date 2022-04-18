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
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>Why are you using firebase? What other options do you have to implement authentication?</h1>
                <div className='text-left pl-10'>
                    <h3 className='text-base'>Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more.
                        Authentication is common way to handle security for all applications. This is only way to answer the question “who you are?” to the application, when comes to stateless architecture or service oriented architecture we got lot of new concepts and technologies in the market. In this article we will learn how to handle authentication on RESTful APIs. Authentication:
                        Lets start by listing the various ways through which we can achieve authentication, Cookie-Based authentication Token-Based authentication Third party access(OAuth, API-token) OpenId SAML</h3>
                </div>
            </div>
            <div className='border-4 border-slate-800 mt-5 py-7'>
                <h1 className='mt-8 mb-5 text-2xl'>What other services does firebase provide other than authentication</h1>
                <div className='text-left pl-10'>
                    <h3 className='text-base'>Most apps need to know the identity of a user. Knowing a user's identity allows an app to securely save user data in the cloud and provide the same personalized experience across all of the user's devices.
                        Firebase Authentication provides backend services, easy-to-use SDKs, and ready-made UI libraries to authenticate users to your app. It supports authentication using passwords, phone numbers, popular federated identity providers like Google, Facebook and Twitter, and more. Firebase Authentication integrates tightly with other Firebase services, and it leverages industry standards like OAuth 2.0 and OpenID Connect, so it can be easily integrated with your custom backend.</h3>
                </div>
            </div>

        </div>
    );
};

export default Blogs;