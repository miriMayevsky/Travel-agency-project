import {createSlice} from "@reduxjs/toolkit"

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
        let itemTo = state.basket.find(item => item.id == action.payload.id);
        console.log("item", itemTo);
           if(!itemTo){
            state.basket.push({...action.payload,qty:1}); //בדיקה אם המוצר כבר קיים
            // בסל ואם כן אז רק לעדכן את הכמות שיש ממנו
           }else itemTo.qty++;
        },
        removeOrder:(state,action)=>{
        //state.basket=state.basket.filter(item=>item!=action.payload)//אם אסור לי למחוק במערך עצמו צריך פילטר
        let index=state.basket.findIndex(item=>item!==action.payload);
       state.basket.splice(index,1);
       
    },
    update:(state,action)=>{
        let index=state.basket.findIndex(item=>item.id===action.payload.id);
        console.log("index: "+index);
       state.basket.splice(index,1,action.payload);

    },
   
    // הפחתה מהסל אם הכמות 0 להסיר

    Reduction :(state,action)=>{
      let itemTo=state.basket.find((item)=>item.id==action.payload.id)
      itemTo.qty--;
    },
    
   //עדכון כתובת ההזמנה
   updateAddress: (state, action) => {
    state.address = action.payload;
  },
  clearBasket: (state) => {
    state.basket = [];
  },
    },
})
export const {addOrder,removeOrder,update,Reduction,clearBasket} = orderSlice.actions; 

export default orderSlice.reducer;

export const selectTotalQty = (state) => state.order.basket.reduce((total, item) => total + item.qty, 0);

export const selectTotalPrice = (state) =>
  state.order.basket.reduce((total, item) => total + item.qty * item.price, 0);