import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import {selectTotalQty,selectTotalPrice} from "../order/orderSlice";
import { useNavigate } from "react-router-dom";

const ListBasket = () => {
    let basket=useSelector(state=>state.order.basket)//שליפת נתונים מהסטייט הכללי
    console.log(basket);
    let totalQty = useSelector(selectTotalQty);
    let totalPrice=useSelector(selectTotalPrice);
    let navigate = useNavigate();

    return ( <><ul>
            {basket.map(item=>
            <li key={item.id}><ListItem one={item}/></li>)} </ul>
            <div>{totalQty} סה"כ מוצרים בסל</div>
            <div>{totalPrice} סה"כ לתשלום</div>
            <button onClick={() =>  navigate('/list')}>המשך לקנות</button>
            <button onClick={() =>  navigate('/orderForm')}>סיום ההזמנה </button>

            </>
             );
    
}
 
export default ListBasket;


