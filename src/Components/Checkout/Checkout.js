import React from 'react';
import { useParams } from 'react-router-dom';

const Checkout = () => {
    const { serviceId } = useParams();
    return (
        <div>
            <h1 className='text-3xl'>Welcome to Details: {serviceId}</h1>

            <button value="button" className="px-4 py-2 rounded bg-green-400 text-white hover:bg-orange-600 my-4 w-50" id="whoobe-ibemp">Checkout</button>
        </div>
    );
};

export default Checkout;