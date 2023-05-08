export const TOGGLE_HIDDEN_MENU = 'TOGGLE_HIDDEN_MENU';

export const toggleHiddenMenu = () => ({ type: TOGGLE_HIDDEN_MENU });

const INITIAL_STATE = {
    hiddenMenu: true
}

const navbarMenuReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case TOGGLE_HIDDEN_MENU:
            return { ...state, hiddenMenu: !state.hiddenMenu };
        default:
            return state;
    }
}

export default navbarMenuReducer;