import {
    SELECT_CATEGORY,
    DISMISS_MODAL,
} from './ActionTypes';

// Action Creators
export const selectCategory = (categories) => ({
    type: SELECT_CATEGORY,
    payload: {
        categories: categories
    }
});

export const dismissModal = () => ({
    type: DISMISS_MODAL
});