import { createAsyncThunk } from "@reduxjs/toolkit";

export const createUserThunk = createAsyncThunk("user/create",({firstName,lastName,email,password}) => {

})