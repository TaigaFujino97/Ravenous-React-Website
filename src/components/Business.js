import React from 'react';

function Business(){
    (
        <div className='business'>
            <div className='image-container'>
                <img className='image'/>
            </div>
            <h1 id='businessName'></h1>
            <div className='address-container'>
                <p id='address'></p>
                <p id='city'></p>
                <p id='state'></p>
                <p id='zipcode'></p>
            </div>
            <div className='review-container'>
                <h3 id='category'></h3>
                <p id='rating'></p>
                <p id='reviewCount'></p>
            </div>
        </div>
    )
};

export default Business;