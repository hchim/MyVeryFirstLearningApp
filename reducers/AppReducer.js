import { SELECT_CATEGORY } from '../actions/ActionTypes';

let initialState = {
    currentCategory: null
};


export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                currentCategory: action.payload.category
            }
        default:
            return state;
    }
}