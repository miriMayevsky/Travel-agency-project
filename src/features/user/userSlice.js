import { createSlice } from "@reduxjs/toolkit"

const initialState={
    currentUser: null,


}

const userSlice=createSlice({
  name:"user",
  initialState,
  reducers:{
      userIn:(state,action)=>{
            state.currentUser=action.payload
            localStorage.setItem("currentUser", JSON.stringify(state.currentUser)); // Use "currentUser" consistently
          },
      userOut:(state)=>{
        state.currentUser=null;
        localStorage.removeItem("currentUser")
      },
  },
})

export const {userOut,userIn}=userSlice.actions;
export default userSlice.reducer;