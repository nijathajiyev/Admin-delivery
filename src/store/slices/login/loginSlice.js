import { createSlice } from "@reduxjs/toolkit";

const initialState={
    user : {
        username:"Team2",
        password:"Team2Admin"
    },
    userAccepted:false
};


export const loginSlice = createSlice({
    name  : 'login',
    initialState,
    reducers:{
        setUserAccepted:(state,action)=>{
            state.userAccepted = action.payload
        }
    }
})


export const {setUserAccepted} = loginSlice.actions;

export default loginSlice.reducer