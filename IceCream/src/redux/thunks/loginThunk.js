import { createAsyncThunk } from "@reduxjs/toolkit";
import loginFetch from "../loginFetch";

/** @type {any} */

const loginThunk = createAsyncThunk(
    "user/login",
    async (values, { rejectWithValue }) => {
      try {
        const res = await loginFetch(values);
  
        console.log("RES:", res);
  
        return res;
      } catch (err) {
        console.log("ERROR:", err); 
        return rejectWithValue(err.message);
      }
    }
  );

export default loginThunk