import { configureStore } from "@reduxjs/toolkit";

import booleanReducer from "./Slices/Boolean/Boolean";
import cookieConvertreducer from "./Slices/Boolean/String_Data";
import likeUserreducer from './Slices/Boolean/wishList';

export const store = configureStore({
        reducer: {
                boolean: booleanReducer,
                cookiConvert:cookieConvertreducer,
                likeCount:likeUserreducer,
        },
});