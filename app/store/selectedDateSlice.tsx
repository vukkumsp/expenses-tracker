import { createSlice } from "@reduxjs/toolkit";

const selectedDateSlice = createSlice({
    name: 'selectedDate',
    initialState: {date: new Date()},
    reducers: {
        changeDate: (state, action) => {
            state.date = new Date(JSON.parse(action.payload));
        }
    }
});

export const { changeDate } = selectedDateSlice.actions;
export default selectedDateSlice.reducer;