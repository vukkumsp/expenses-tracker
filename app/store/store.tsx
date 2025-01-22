import { configureStore } from "@reduxjs/toolkit";
import selectedDateReducer from "@/app/store/selectedDateSlice";
import isDataAvailableReducer from "@/app/store/isDataAvailableSlice";

const store = configureStore({
    reducer: {
        selectedDate: selectedDateReducer,
        isDataAvailable: isDataAvailableReducer
    },
});

export type RootState = ReturnType<typeof store.getState>; // Define RootState
export default store;