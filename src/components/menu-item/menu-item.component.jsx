import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div 
            className='background-image'
            style={{
                backgroundImage: `url(${imageUrl})`
            }}  
        />
        <div className='content'>
        {/* this is the same thing as props.title but title is being passed in using this 'destructuring' method */}
            <h1 className='title'>{title.toUpperCase()}</h1>
            <span className='subtitle'>SHOP NOW</span>
        </div>
    </div>
)

export default MenuItem;