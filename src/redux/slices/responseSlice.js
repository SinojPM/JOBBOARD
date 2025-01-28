import { createSlice } from "@reduxjs/toolkit";

const responseSlice = createSlice({
    name:"responses",
    initialState:{
        gridResponse:false,
        allJobsResponse:false
    },
    reducers:{
        setGridResponse:(state,res)=>{
            state.gridResponse=res.payload
        },
        setAllJobsResponse:(state,res)=>{
            state.allJobsResponse=res.payload
        }
    }
})
export const {setGridResponse,setAllJobsResponse} =responseSlice.actions
export default responseSlice.reducer