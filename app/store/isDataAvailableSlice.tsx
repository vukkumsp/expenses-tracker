import { createSlice } from "@reduxjs/toolkit";

const isDataAvailableSlice = createSlice({
    name: 'isDataAvailable',
    initialState: false,
    reducers: {
        toggle: (state, action) => {
            if(action.payload!==state) //memoization if same value is being saved
                state = action.payload;
            return state; //reducers have to return valid state
        }
    }
});

export const { toggle } = isDataAvailableSlice.actions;
export default isDataAvailableSlice.reducer;