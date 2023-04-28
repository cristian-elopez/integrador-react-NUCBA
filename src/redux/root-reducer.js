import { combineReducers } from "redux";
import { persistReducer } from "redux-persist";
import storage from "redux-persist/lib/storage";

import ropaHombreReducer from './products/ropaHombre-reducer';
import ropaMujerReducer from "./products/ropaMujer-reducer";
import categoriesReducer from './categories/categories-reducer.js';
import recommendedReducer from './recommended/recommended-reducer';

const persistConfig = {
    key: 'root',
    storage: storage,
    whitelist: []
};

const rootReducer = combineReducers({
    ropaHombre: ropaHombreReducer,
    ropaMujer: ropaMujerReducer,
    categories: categoriesReducer,
    recommended: recommendedReducer,
});

export default persistReducer(persistConfig, rootReducer);