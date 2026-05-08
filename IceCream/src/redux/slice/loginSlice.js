import { createSlice, isAction } from "@reduxjs/toolkit";
import loginThunk from "../getAllTeam/loginThunk";

const initialState = {
    firstName: "",
    lastName: "",
}

const loginSlice = createSlice({
    name:"login",
    initialState:initialState,
    reducers:{

    },
    extraReducers:(builder) => {
        builder
        .addCase(loginThunk.fulfilled,(state,action)=>{
            console.log(action)
        })
    }
})

export default loginSlice.reducer