import { configureStore } from "@reduxjs/toolkit";
import orderSlice from "../features/order/orderSlice";
import userSlice from "../features/user/userSlice";

export const myStore=configureStore({
    reducer:{
        order:orderSlice,
        user:userSlice,

    }
   

})