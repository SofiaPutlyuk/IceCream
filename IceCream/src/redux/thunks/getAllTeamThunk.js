import { createAsyncThunk } from "@reduxjs/toolkit";
import getAllTemsFetch from "../getAllTeamFetch";

const allTeamThunk = createAsyncThunk("teams",() =>{
    getAllTemsFetch()
})
export default allTeamThunk