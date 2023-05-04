import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import ropaHombreReducer from './products/ropaHombre-reducer';
import ropaMujerReducer from "./products/ropaMujer-reducer";
import categoriesReducer from './categories/categories-reducer.js';
import recommendedReducer from './recommended/recommended-reducer';
import cartReducer from './cart/cart-reducer';
import prendaReducer from "./prenda/prenda-reducer";

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: ['cart']
};

const rootReducer = combineReducers({
    ropaHombre: ropaHombreReducer,
    ropaMujer: ropaMujerReducer,
    categories: categoriesReducer,
    recommended: recommendedReducer,
    prenda: prendaReducer,
    cart: cartReducer
});

export default persistReducer(persistConfig, rootReducer);