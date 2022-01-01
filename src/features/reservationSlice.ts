import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface ReservationState {
    value: string[]
}

const initialState: ReservationState = {
    value: ['Goden Lamge']
}

export const reservationSlice = createSlice({
    name: "reservations",
    initialState,
    reducers: {
        add: (state, action: PayloadAction<string>) => {
            state.value.push(action.payload)
        },
        remove: (state, action: PayloadAction<number>) => {
            console.log("remove", action.payload)
            state.value.splice(action.payload, 1);
        }
    }
});

export const { add, remove } = reservationSlice.actions;

export default reservationSlice.reducer;