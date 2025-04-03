import { createSlice } from '@reduxjs/toolkit'

const User_Like_Data = createSlice({
        name:'UserLike',
        initialState:0,
        reducers:{
                LikeCount:(state, action) => state = action.payload.LikeNum,
        }
});

export const { LikeCount } = User_Like_Data.actions;

export default User_Like_Data.reducer;