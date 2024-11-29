import { configureStore } from "@reduxjs/toolkit";
import authLogin from "./slice/loginUserSlice";
import getDataDokter from "./slice/getDataDokter";
const store = configureStore({
    reducer:{
        token: authLogin,
        dokter: getDataDokter 
    }
})

export default store