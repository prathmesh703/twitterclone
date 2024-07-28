import { createSlice} from "@reduxjs/toolkit"

const slice= createSlice({
    name:"user",
    initialState:{
        user:null,
        otheruser:null,
        profile:null
    },
    reducers:{
        getUser:(state,action)=>{
            state.user=action.payload
        },
        getOtheruser:(state,action)=>{
            state.otheruser=action.payload
        },
        getmyprofile:(state,action)=>{
            state.profile=action.payload
        }
    }
})

export const {getOtheruser,getUser,getmyprofile}=slice.actions;
export default slice.reducer;