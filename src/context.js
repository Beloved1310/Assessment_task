import React, { useState, useContext, useEffect } from 'react';
import { useCallback } from 'react';

const url = 'https://api.unsplash.com/search/photos?page=1&query=';
const AppContext = React.createContext();

const AppProvider = ({ children }) => {
    const [loading, setLoading] = useState(true);
    const [searchTerm, setSearchTerm] = useState('cocktail');
    const [cocktails, setCocktails] = useState([]);

    const fetchDrinks = useCallback(async () => {
        setLoading(true);
        try {
            const response = await fetch(`${url}${searchTerm}&client_id=3RRiGqktwKf_CGLxO67dkU0YN3rPgmFqdKU4k5w_MIo`);
            const data = await response.json();

            const { results } = data;

            if (results) {
                const newCocktails = results.map((item) => {
                    const { user, links } = item;
                    const { location, last_name, profile_image } = user;
                    const { download } = links;
                    const { medium } = profile_image;

                    return {
                        location,
                        last_name,
                        download,
                        medium,
                    };
                });
                setCocktails(newCocktails);
            } else {
                setCocktails([]);
            }
            setLoading(false);
        } catch (error) {
            setLoading(false);
        }
    }, [searchTerm]);
    useEffect(() => {
        fetchDrinks();
    }, [searchTerm, fetchDrinks]);
    return (
        <AppContext.Provider value={{ loading, cocktails, searchTerm, setSearchTerm }}>{children}</AppContext.Provider>
    );
};

export const useGlobalContext = () => {
    return useContext(AppContext);
};

export { AppContext, AppProvider };
