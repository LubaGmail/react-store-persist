import CATEGORIES_ACTION_TYPES from './categories.types';

/**
    (state slice) = categories: 
        categories: Array(5)    ['hats', 'jackets', 'Mens', 'Sneakers', 'Womens']
        0:  
            items (9)      [{id: 1, name: 'Brown Brim', price: 25, ...}]
            title: 'Hats'
        1: 
            ...
 */

export const CATEGORIES_INITIAL_STATE = {
    categories: [],
};

export const categoriesReducer = (state = CATEGORIES_INITIAL_STATE, action = {}) => {
    const { type, payload } = action;
    switch (type) {
        case CATEGORIES_ACTION_TYPES.SET_CATEGORIES:
            return { ...state, categories: payload };
        default:
            return state;
    }
}