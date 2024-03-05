import {createSlice} from "@reduxjs/toolkit"
import produce from "immer";


const initialState={
    basket: [],
    "address":"",

};
// let orderIdCounter = 0;

const orderSlice=createSlice({
    name:"order",//השם שיודפס בדב טולס
    initialState, //בגלל שזה אותו שם רושמים רק אחד initialState מפה :"initialState" מלמעלה
    reducers:{//פעולות שיכולות לשנות את המערך הזה
        addOrder:(state,action)=>{
          console.log(state.basket);
          console.log(action.payload);
        let itemTo = state.basket.find(item => item.id == action.payload.id);

        console.log("item", itemTo);
           if(!itemTo){
            state.basket.push({...action.payload,qty:1}); //בדיקה אם המוצר כבר קיים
            // בסל ואם כן אז רק לעדכן את הכמות שיש ממנו
           }else itemTo.qty++;
           localStorage.setItem("basket", JSON.stringify(state.basket)); // Use "basket" consistently
           
          },
        removeOrder:(state,action)=>{
        //state.basket=state.basket.filter(item=>item!=action.payload)//אם אסור לי למחוק במערך עצמו צריך פילטר
        let index=state.basket.findIndex(item=>item!==action.payload);
        // let index = state.basket.find(item => item.id === action.payload.id);

       state.basket.splice(index,1);
       localStorage.removeItem("basket")
       localStorage.removeItem("address")


    },
    update:(state,action)=>{
        let index=state.basket.findIndex(item=>item.id==action.payload.id);
        console.log("index: "+index);
       state.basket.splice(index,1,action.payload);
      //  localStorage.setItem("basket", JSON.stringify({...state.basket})); // Use "basket" consistently

      // const baskettt = JSON.parse(localStorage.getItem("basket")) || [];
      const baskettt = JSON.parse(localStorage.getItem("basket"));

      // const newBasket = produce(basket, draft => {
        // draft[index].qty = 0; // עדכון הכמות לאפס
        // const s = state.basket[index].stringify;
        // console.log(s);

      // });
      localStorage.setItem("basket", JSON.stringify((baskettt.splice(index,1,state.basket)))); // Use "basket" consistently

    },
   
    // הפחתה מהסל אם הכמות 0 להסיר

    Reduction :(state,action)=>{
      let itemTo=state.basket.find((item)=>item.id==action.payload.id)
      itemTo.qty--;
      localStorage.setItem("basket", JSON.stringify([...state.basket])); // Use "basket" consistently
    },
    
   //עדכון כתובת ההזמנה
   updateAddress: (state, action) => {
    state.address = action.payload;
    localStorage.setItem("address", JSON.stringify(state.address)); // Use "address" consistently

  },
  clearBasket: (state) => {
    state.basket = [];
    localStorage.removeItem("basket")
    localStorage.removeItem("address")


  },
    },
})

export const {addOrder,removeOrder,update,Reduction,clearBasket,updateAddress} = orderSlice.actions; 

export default orderSlice.reducer;

export const selectTotalQty = (state) => state.order.basket.reduce((total, item) => total + item.qty, 0);

export const selectTotalPrice = (state) =>
  state.order.basket.reduce((total, item) => total + item.qty * item.price, 0);

////////////////////////////////////////////////
// import { createSlice } from "@reduxjs/toolkit";

// const initialState = {
//   basket: [],
//   address: "",
// };

// const orderSlice = createSlice({
//   name: "order",
//   initialState,
//   reducers: {
//       addOrder: (state, action) => {
//           const itemTo = state.basket.find(item => item.id == action.payload.id);

//           if (!itemTo) {
//               state.basket.push({ ...action.payload, qty: 1 });
//           } else {
//               itemTo.qty++;
//           }
//           // let x=JSON.stringify(state.basket);
//           // console.log(x);
//           localStorage.setItem("basket", JSON.stringify(state.basket));
//       },
//       removeOrder: (state, action) => {
//           const index = state.basket.findIndex(item => item.id == action.payload.id);

//           if (index !== -1) {
//               state.basket = state.basket.filter((_, i) => i !== index);
//           }

//           localStorage.setItem("basket", JSON.stringify(state.basket));
//           localStorage.removeItem("address");
//       },
//       update: (state, action) => {
//           const index = state.basket.findIndex(item => item.id == action.payload.id);

//           if (index !== -1) {
//               state.basket[index] = action.payload;
//           }
//           let x=JSON.stringify(state.basket);
//           console.log(x);

//           // localStorage.removeItem("basket");
//           // localStorage.removeItem("address");
//           localStorage.setItem("basket", JSON.stringify(state.basket));
//       },
//       Reduction: (state, action) => {
//           const itemTo = state.basket.find(item => item.id === action.payload.id);

//           if (itemTo && itemTo.qty > 0) {
//               itemTo.qty--;
//           }

//           localStorage.setItem("basket", JSON.stringify(state.basket));
//       },
//       updateAddress: (state, action) => {
//           state.address = action.payload;
//           localStorage.setItem("address", JSON.stringify(state.address));
//       },
//       clearBasket: (state) => {
//           state.basket = [];
//           localStorage.removeItem("basket");
//           localStorage.removeItem("address");
//       },
//   },
// });

// export const {
//   addOrder,
//   removeOrder,
//   update,
//   Reduction,
//   clearBasket,
//   updateAddress,
// } = orderSlice.actions;

// export default orderSlice.reducer;

// export const selectTotalQty = (state) =>
//   state.order.basket.reduce((total, item) => total + item.qty, 0);

// export const selectTotalPrice = (state) =>
//   state.order.basket.reduce((total, item) => total + item.qty * item.price, 0);