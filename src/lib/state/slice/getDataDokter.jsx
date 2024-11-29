import InstanceAxios from "@/lib/InstanceAxios";
import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

export const getDataDokter = createAsyncThunk("getDataDokter", async(token,{rejectWithValue}) => {
    try{
        const request = await InstanceAxios.get("/Doctor/doctor", {
            headers:{
                Authorization: `Bearer ${token}`
            }
        })
        const response = await request.data;
        console.log(response);
        return response
    }catch(error){
        return rejectWithValue(error.response.data)
    }
})

const getDoctorSlice = createSlice({
    name:"getDoctor",
    initialState:{
        data:[],
        loading:false,
        error:null
    },
    extraReducers: (builder) => {
        builder
        .addCase(getDataDokter.pending, (state) => {
            state.loading = true;
            state.data = null;
            state.error = false;
        })
        .addCase(getDataDokter.fulfilled, (state,action) => {
            state.loading = false;
            state.error = false;
            state.data = action.payload;
        })
        .addCase(getDataDokter.rejected, (state,action) => {
            state.loading = false;
            state.data = null;
            state.error = action.error.message;
        })
    }
})

export default getDoctorSlice.reducer