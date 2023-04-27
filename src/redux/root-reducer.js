import { combineReducers } from "redux";

import productsReducer from './products/products-reducer';
import categoriesReducer from './categories/categories-reducer.js';
import recommendedReducer from './recommended/recommended-reducer';
import cartReducer from './cart/cart-reducer';
import userReducer from './user/user-reducer';
import ordersReducer from './orders/orders-reducer'


export const rootReducer = combineReducers({
    products: productsReducer,
    categories: categoriesReducer,
    recommended: recommendedReducer,
    cart: cartReducer,
    user: userReducer,
    orders: ordersReducer
});