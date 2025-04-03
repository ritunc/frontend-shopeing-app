import { createSlice } from "@reduxjs/toolkit";


export const boolenSlice = createSlice({
        initialState:false,
        name:"Boolean",
        reducers: {
                boolean: (state, action) => state = action.payload.boole,
        },
});

export const { boolean } = boolenSlice.actions;

export default boolenSlice.reducer;