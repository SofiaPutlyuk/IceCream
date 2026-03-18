import { createAsyncThunk } from "@reduxjs/toolkit";
import registrationFetch from "../registrationFetch";
/** @type {any} */

const createUserThunk = createAsyncThunk("user/create",(values) => {
    const {firstName,lastName,email,password,confirmPassword} = values

    return registrationFetch({firstName,lastName,email,password,confirmPassword})
})

export default createUserThunk