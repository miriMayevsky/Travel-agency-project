import { useDispatch } from "react-redux";
import {Reduction, addOrder, removeOrder, update  } from "../order/orderSlice";
import './style.css';
const ListItem = ({ one }) => {

    let dispatch = useDispatch();
    console.log(one);
    if (!one) {
        return null; // Or render a loading indicator
    }
    let totalPricePerItem=one.qty*one.price
    return (
        <>
            <div>{one.name} טיול ל</div>
            <div> משך הטיול {one.days} ימים</div>
            <img src={one.imgUrl}/>
            <div>{one.qty}</div>
            <div>{one.price}</div>
            <div>{totalPricePerItem}</div>
            <div></div>
            <div>
                <input type="button" value="מחק" onClick={() => {
                    dispatch(removeOrder(one.id))
                }} />
               {/* {console.log(one.name)} */}
                <input type="button" value="הוספת יום " onClick={() => {
                    if(one.qty<1)
                    dispatch(update({"id":one.id,"name":one.name,"days":one.days+1,"price":one.price,"imgUrl":one.imgUrl,"description":one.description}))
                else   dispatch(update({"id":one.id,"name":one.name,"days":one.days+1,"price":one.price,"imgUrl":one.imgUrl,"description":one.description,"qty":one.qty}))

                }} />
                <input type="button" value="הורדת יום" onClick={() => {
                    if (one.days > 1&&one.qty<1)
                        dispatch(update({"id":one.id,"name":one.name,"days":one.days-1,"price":one.price,"imgUrl":one.imgUrl,"description":one.description}))
                else                     if (one.days > 1&&one.qty>1)
                dispatch(update({"id":one.id,"name":one.name,"days":one.days-1,"price":one.price,"imgUrl":one.imgUrl,"description":one.description,"qty":one.qty}))

                }} />
                <input type="button" value="+" onClick={() => {
                    dispatch(addOrder({"id":one.id,"name":one.name,"days":one.days,"price":one.price,"imgUrl":one.imgUrl,"description":one.description}))
                }} />
                <input type="button" value="-" onClick={() => {
                    if(one.qty>1){
                        dispatch(Reduction({"id":one.id,"name":one.name,"days":one.days,"price":one.price,"imgUrl":one.imgUrl,"description":one.description}))
                    }else   
                        dispatch(removeOrder(one.id))

                }} />
                {/* <input type="button" value={`כמות  ${one.count}`} /> */}
            </div>
        </>
    );
}
 
export default ListItem;
