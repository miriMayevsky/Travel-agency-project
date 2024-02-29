import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTotalPrice, clearBasket } from "../order/orderSlice";
import { PostOrder } from "../order/orderApi";

const OrderForm = () => {
  const [address, setAddress] = useState("");
  const totalPrice = useSelector(selectTotalPrice);
  const basket = useSelector(state => state.order.basket);
  const dispatch = useDispatch();

  const handleConfirmOrder = () => {
    if (!address.trim()) {
      alert("Please enter a valid address.");
      return;
    }

    const order = {
      basket: basket,
      address: address,
      totalPrice: totalPrice,
    };
 // Add your authentication token logic here if needed
//  const authToken = ""; 
// Add your authentication token here
   
// Save the order to the server
    PostOrder(order)
      .then((res) => {
        // Clear the basket after the order is confirmed
        dispatch(clearBasket());
        // Optionally, show a confirmation message or navigate to a different screen
        alert("Order confirmed!");
      })
      .catch((err) => {
        alert("Failed to confirm order. Please try again.");
        console.error(err);
      });
  };

  return (
    <div>
      <h2>Order Summary</h2>
      <p>Total Price: {totalPrice}</p>
      <label>
        Address:
        <input
          type="text"
          value={address}
          onChange={(e) => setAddress(e.target.value)}
        />
      </label>
      <button onClick={handleConfirmOrder}>Confirm Order</button>
    </div>
  );
};

export default OrderForm;
