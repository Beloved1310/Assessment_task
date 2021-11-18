import React from 'react';
import { FaSearchLocation } from 'react-icons/fa';

export default function Cocktail({ location, last_name, download }) {
    return (
        <article className='image'>
            <div className=''>
                <div className='cocktail'>
                    <img className='image__img' src={download} alt={last_name} />
                </div>

                <div className='image__overlay'>
                    <div className='image__title'>{last_name}</div>
                    <p class='image__description'>
                        <FaSearchLocation />
                        {location}
                    </p>
                </div>
            </div>
        </article>
    );
}
