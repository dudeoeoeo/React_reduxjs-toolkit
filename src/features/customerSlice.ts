import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface CustomerState {
    value: Customer[];
}

interface Customer {
    id: string,
    name: string,
    food: string[]
}

interface AddFoodPayloadAction {
    id: string,
    food: string
}

const initialState: CustomerState = {
    value: []
}

export const customerSlice = createSlice({
    name: 'customer',
    initialState,
    reducers: {
        addCustomer: (state, action: PayloadAction<Customer>) => {
            state.value.push(action.payload);
        },
        removeCustomer: (state, action: PayloadAction<number>) => {
            console.log("removeCustomer", action);
            state.value.splice(action.payload, 1);
        },
        addFood: (state, action: PayloadAction<AddFoodPayloadAction>) => {
            console.log("addFood", action.payload)
            state.value.forEach((e) => {
                if(e.id === action.payload.id)
                    e.food.push(action.payload.food);
            })
        }     
    }
});

export const { addCustomer, removeCustomer, addFood } = customerSlice.actions;

export default customerSlice.reducer;