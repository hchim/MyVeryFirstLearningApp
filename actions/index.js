import { SELECT_CATEGORY } from './ActionTypes';

//Action Creators

export const selectCategory = (category) => ({
    type: SELECT_CATEGORY,
    payload: {
        category: category
    }
})