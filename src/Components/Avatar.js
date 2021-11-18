import React from 'react';
import { FaChevronDown } from 'react-icons/fa';

function Avatar({ medium, last_name }) {
    return (
        <>
            <img className='avatar' src={medium} alt={last_name} />
            <span className='avatar_name'>
                {last_name} <FaChevronDown className='avatar_arrow' />
            </span>
        </>
    );
}

export default Avatar;
