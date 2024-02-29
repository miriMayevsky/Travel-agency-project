import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { selectTotalPrice,selectTotalQty } from "./orderSlice";

const SmallBasket = () => {
    let basket = useSelector(state => state.order.basket) || []; // Initialize basket as empty array if undefined
    const totalPrice = useSelector(selectTotalPrice);
    const totalQty = useSelector(selectTotalQty);
    let navigate = useNavigate();
    const totalPricePerItem=(item)=>item.qty*item.price;
    // const totalQty=(item)=>
    return (
        <div className="a">
        <ul className="b">
            {basket.length > 0 ? (
                basket.map(item => <li key={item.id}>  <div>{item.name} טיול ל</div>
                <div> משך הטיול {item.days} ימים</div>
                <img src={item.imgUrl}/>
                <div>{item.qty}</div>
                <div>{item.price}</div>
            <div>{totalPricePerItem(item)}</div>
                
                </li>)
            ) : (
                <li>No items in the basket</li>
            )}
             <div>
      Total Price: {totalPrice}
    </div>
    <div>
      Total Quantity: {totalQty}
    </div>
        </ul> 
        
                   <button onClick={() => navigate(-1)}>המשך לקנות</button>
        <button onClick={() =>  navigate('/basket')}>צפייה בסל</button>
</div>
    );
};

export default SmallBasket;
