import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

import { BASE_URL } from "./baseUrl";
import { toast } from "react-toastify";






export const postTask = createAsyncThunk(
    "postTask", async (data, thunkApi) => {
        try {
            const response = await axios.post(
                BASE_URL + "tasks/", data,
            )
            return response.data
        } catch (error) {
            return thunkApi.rejectWithValue(error.response.data)
        }
    }
)

const postTaskSlice = createSlice({
    name: "postTask",
    initialState: {
        loading: false,
        data: null,
        error: null,
    },
    reducers: {},
    extraReducers: (builder) =>{
        builder
        .addCase(postTask.pending, (state) => {
            state.loading = true
        })
        .addCase(postTask.fulfilled, (state, action) => {
            state.loading = false
            state.data = action.payload
            state.error = null

            // toast.success("Profile picture updated successfully")
            setTimeout(() => {
                window.location.reload()
            }, 1000)

        })
        .addCase(postTask.rejected, (state, action) => {
            state.loading = false
            state.error = action.payload

            if(action.payload){
                console.log("ERROR", action.payload)
                toast.error(action.payload.errors.error)
            }
            
            if(action.payload.non_field_errors){
                toast.error(action.payload.non_field_errors)
            }
            
        })
    }
})


export default postTaskSlice

