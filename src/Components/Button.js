import React, { useState } from 'react';
import data from './data2';
import { FaChevronDown } from 'react-icons/fa';

const Button = () => {
    const [names, setNames] = useState(data);
    return (
        <div className='flex-container'>
            {names.map((e) => {
                const { id, name } = e;
                return (
                    <div key={id}>
                        <button className='btn btn-primary btn-details'>
                            {name}
                            <FaChevronDown />
                        </button>
                    </div>
                );
            })}
        </div>
    );
};

export default Button;
