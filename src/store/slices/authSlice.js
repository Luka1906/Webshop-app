// import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
// import axios from "axios";

// const initialState = {
//     token: localStorage.getItem("token"),
//     name: "",
//     email: "",
//     _id: "",
//     registerStatus: "",
//     registerError: "",
//     logInStatus: "",
//     logInError: "",
//     useLogged: false


// };

// export const registerUser = createAsyncThunk(
//     "auth/registerUser",
//     (values,{rejectWithValue}) => {
//         try {
//             axios.post("http://4000/api/register")
         
//         }
//         catch (err) {

//         }
//     }
// )

// const authSlice = createSlice({
//     name: "auth",
//     initialState,
//     reducers:{

//     },
//     extraReducers: {

//     }
// });

// export default authSlice.reducer