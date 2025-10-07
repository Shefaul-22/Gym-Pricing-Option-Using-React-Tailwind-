import React from 'react';
import PricingFeatures from './PricingFeatures';

const PricingCard = ({pricing}) => {

    const {name, price, description, features} = pricing;
    return (
        <div className='border bg-amber-600 rounded-2xl p-4 flex flex-col'>
            <div>
                <h1 className='text-5xl'>{name}</h1>
                <h4 className='text-3xl'>{price}</h4>
            </div>

            <div className='bg-amber-300 p-4 rounded-2xl flex-1 mt-1'>
                <p>{description}</p>
                {
                    features.map((feature, index) => <PricingFeatures 
                    key={index}
                    feature={feature}></PricingFeatures>)
                }

            </div>

            <button className="btn w-full mt-3 rounded-sm bg-amber-200 hover:bg-amber-500 border-0">Subscribe</button>
            
        </div>
    );
};

export default PricingCard;