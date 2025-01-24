import { configureStore } from "@reduxjs/toolkit";
import responseSlice from './slices/responseSlice'

const jhStore = configureStore({
    reducer:{
        responseReducer:responseSlice
    }
})
export default jhStore