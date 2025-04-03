import { createSlice } from "@reduxjs/toolkit";

const initialState = {
        userName:"",
        email:"",
}

export const user_Cookie_convert_Store = createSlice({

        name:"userCookieConvert",
        initialState,
        reducers: {
                cookie_Convert:(state, action) => {
                        state.userName = action.payload.userName;
                        state.email = action.payload.email;
                }
        },
});

export const { cookie_Convert } = user_Cookie_convert_Store.actions;

export default user_Cookie_convert_Store.reducer;