import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit"
import axios from "axios"

interface JsonDataFormat {
    id: number;
    name: string;
    username: string;
    email: string;
    address: {
        street: string;
        suite: string;
        city: string;
        zipcode: string;
        geo: {
        lat: string;
        lng: string;
        };
    };
    phone: string;
    website: string;
    company: {
        name: string;
        catchPhrase: string;
        bs: string;
    };
}  

interface User {
    loading: boolean,
    users: Array<JsonDataFormat>,
    error: Error | null
}

const initialState: User = {
    loading: false,
    users: [{}] as Array<JsonDataFormat>,
    error: null
}

// this asyn action will have pending, fulfilled, rejected
export const fetchUsers = createAsyncThunk('user/fetchUsers', async () => {
    const response = await axios.get("https://jsonplaceholder.typicode.com/users")
    console.log(response.data)
    return response.data
})

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {},
    extraReducers: (builder) => {
        builder
            .addCase(fetchUsers.pending, (state) => {
                state.loading = true
            })
            .addCase(fetchUsers.fulfilled, (state, action: PayloadAction<JsonDataFormat[]>) => {
                state.loading = false
                state.users = action.payload
            })
            .addCase(fetchUsers.rejected, (state, action) => {
                state.loading = false
                state.error = new Error(action.error.message) 
            })
    }
})

export default userSlice.reducer

 