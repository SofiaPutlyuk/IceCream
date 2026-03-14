import { createAsyncThunk } from "@reduxjs/toolkit";
import registrationFetch from "../registrationFetch";

const createUserThunk = createAsyncThunk("user/create",({firstName,lastName,email,password}) => {
    registrationFetch({firstName,lastName,email,password})
})

export default createUserThunk