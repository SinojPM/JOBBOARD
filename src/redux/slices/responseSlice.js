import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
    name:"responses",
    initialState:{
        gridResponse:false
    },
    reducers:{
        setGridResponse:(state,res)=>{
            state.gridResponse=res.payload
        }
    }
})
export const {setGridResponse} =responseSlice.actions
export default responseSlice.reducer