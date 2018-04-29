import {
    SELECT_CATEGORY,
    DISMISS_MODAL
} from '../actions/ActionTypes';

const initialState = {
    // The selected sub categories in home screen
    selectedCategories: [],
    // Whether the modal in home screen is visible or not
    modalVisible: false
};

export default (state = initialState, action) => {
    switch (action.type) {
        case SELECT_CATEGORY:
            return {
                ...state,
                selectedCategories: action.payload.categories,
                modalVisible: true
            };
        case DISMISS_MODAL:
            return {
                ...state,
                modalVisible: false
            };
        default:
            return state;
    }
};