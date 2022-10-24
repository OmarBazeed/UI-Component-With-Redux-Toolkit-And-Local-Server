import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from 'axios'


export const addUser = createAsyncThunk("users/add", async (user)=> {
    
    const res = await axios.post("https://localhost:5000/api/users",user);
    return res.data

})

const userSlice = createSlice({
    name:'user',

    initialState:{
        userData:{
            name:'',
            email:'',
            age:'',
        },
        loading:false,
        error:false,
    },

    reducers:{

        // addUser:(state,action)=>{
        //     state.name = action.payload.name;
        //     state.email= action.payload.email
        // },

        // startUser:(state)=>{
        //     state.loading = true;
        // },
        // successUser:(state,action)=>{
        //     state.loading = false;
        //     state.userData = action.payload;
        // },
        // errUser :(state)=>{
        //     state.loading = false;
        //     state.error = true;
        // }

    },
    extraReducers :{
        [addUser.pending]: (state)=>{
            state.loading = true;
        },
        [addUser.fulfilled]: (state,action)=>{
            state.loading = false;
            state.userData = action.payload;
        },
        [addUser.rejected]: (state)=>{
            state.loading = false;
            state.error = true ;
        }
    }
});
// export const {addUser , startUser , successUser , errUser} = userSlice.actions;
export default userSlice.reducer;
