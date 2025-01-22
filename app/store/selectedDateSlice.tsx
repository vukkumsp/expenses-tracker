import { createSlice } from "@reduxjs/toolkit";

const selectedDateSlice = createSlice({
    name: 'selectedDate',
    initialState: {date: new Date().toISOString()},
    reducers: {
        changeDate: (state, action) => {
            if(action.payload!==state) //memoization if same value is being saved
                state.date = new Date(action.payload).toISOString();
            return state; //reducers have to return valid state
        }
    }
});

export const { changeDate } = selectedDateSlice.actions;
export default selectedDateSlice.reducer;