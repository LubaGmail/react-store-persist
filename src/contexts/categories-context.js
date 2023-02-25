import { createContext, useState, useEffect } from 'react';

import { getCategories } from '../utils/firebase/firebase';

export const CategoriesContext = createContext({
    categories: []
})

export const CategoriesProvider = ({ children }) => {
    const [categories, setCategories] = useState({});
    const value = { categories };         // array to obj
    
    useEffect(() => {
        const getData = async() => {
            const categories = await getCategories()
            setCategories(categories)
        }
        getData()
    }, []);
    
    return (
        <CategoriesContext.Provider value={value}>
            {children}
        </CategoriesContext.Provider>
    );
}