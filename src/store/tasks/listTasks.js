import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "./baseUrl";


export const listTasks = createAsyncThunk(
    "listTasks", async (thunkApi) => {
        try {
            const response = await axios.get(
                BASE_URL + "tasks/",
            )
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data)
        }
    }
)

const listTasksSlice = createSlice({
    name: "listTasks",
    initialState: {
        loading: false,
        data: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(listTasks.pending, (state) => {
            state.loading = true
        })
        .addCase(listTasks.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null

        })
        .addCase(listTasks.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload
            
        })
    }
})


export default listTasksSlice

