import { createSlice } from "@reduxjs/toolkit";
import { userList } from '../Redux/Data';

const userSlice  = createSlice({
    name : "users",
    initialState :userList,
    reducers:{ 
        addDetails : (state,action) =>{
        state.push(action.payload)
      },

    }
})
export const {addDetails} = userSlice.actions;
export default userSlice.reducer;