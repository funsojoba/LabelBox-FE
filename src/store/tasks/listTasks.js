import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";


const baseUrl = import.meta.env.VITE_BASE_URL;


export const listTasks = createAsyncThunk(
    "listTasks", async (thunkApi) => {

        try {
            const response = await axios.get(
                baseUrl + "tasks/",
            )

            console.log('RESPONSE ->',response)
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

            console.log("ERROR", action)
            
        })
    }
})


export default listTasksSlice

