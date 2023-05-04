import { OPEN_CLOTHING } from './prenda-actions';

const INITIAL_STATE = {
    prendaElegida: null,
};

const prendaReducer = (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case OPEN_CLOTHING:
            return { ...state, prendaElegida: action.payload };
        default:
            return state;
        };
};

export default prendaReducer;