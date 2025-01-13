import { configureStore } from "@reduxjs/toolkit";
import selectedDateReducer from "@/app/store/selectedDateSlice";

const store = configureStore({
    reducer: {
        selectedDate: selectedDateReducer
    },
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState
export default store;