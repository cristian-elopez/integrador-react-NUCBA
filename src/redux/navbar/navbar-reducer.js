import { TOGGLE_MENU } from './navbar-actions';

const INITIAL_STATE = {
    hamburgerMenu: null,
    hidden: true,
};

const navbarReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_MENU:
            return { 
                ...state, 
                hidden: !state.hidden, 
                hamburgerMenu: action.payload
            };
        default:
            return state;
        };
};

export default navbarReducer;