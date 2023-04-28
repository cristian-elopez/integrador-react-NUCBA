import { configureStore } from '@reduxjs/toolkit';
import  rootReducer  from './root-reducer'

const initialState = {};

export const store = configureStore({
    reducer: { rootReducer },
    initialState
});