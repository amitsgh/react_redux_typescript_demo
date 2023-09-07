import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface Icecream {
    numberOfIcecreams: number
}

const initialState: Icecream = {
    numberOfIcecreams: 20
}

const icecreamSlice = createSlice({
    name: 'icecream',
    initialState,
    reducers: {
        ordered: state => {
            state.numberOfIcecreams--
        },
        restored: (state, action: PayloadAction<number>) => {
            state.numberOfIcecreams += action.payload
        }
    }
})

export default icecreamSlice.reducer
export const { ordered, restored } = icecreamSlice.actions