import React from 'react';
import Cocktail from './Cocktail';
import Loading from './Loading';
import { useGlobalContext } from '../context';

export default function CocktailList() {
    const { cocktails, loading } = useGlobalContext();
    if (loading) {
        return <Loading />;
    }
    if (cocktails.length < 1) {
        return <h2 className='section-title'>no matched your search criteria</h2>;
    }
    return (
        <section className='section'>
            <div className='cocktails-center'>
                {cocktails.slice(0,10).map((item) => {
                    return <Cocktail key={item.id} {...item} />;
                })}
            </div>
        </section>
    );
}
