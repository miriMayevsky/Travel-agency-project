import React, { useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import { selectTotalPrice, clearBasket } from "../order/orderSlice";
import { PostOrder } from "../order/orderApi";
import Box from '@mui/material/Box';
import AddCardIcon from '@mui/icons-material/AddCard';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import RateReviewIcon from '@mui/icons-material/RateReview';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import HomeIcon from '@mui/icons-material/Home';
import { margin } from "@mui/system";

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

        <Box
      height={400}
      width={600}
      my={4}
      display="flex"
      flexDirection={"column"}
      alignItems="center"
      gap={4}
      p={2}
      sx={{ border: '2px solid grey' }}
      style={{marginLeft:800,marginTop:200}}>
        {/* <div style={{marginLeft:900,marginTop:300}}> */}

      <h2>Order Summary</h2>
      <p>Total Price: {totalPrice}</p>
         <div><HomeIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label=" כתובת" variant="standard" 
          onChange={(e) => setAddress(e.target.value)} /> </div>
         <div style={{ margin: 10 }}>
          <Button
            variant="contained"
            endIcon={<SendIcon />}
            onClick={handleConfirmOrder}
            style={{ backgroundColor: 'black', color: 'white' }}            >
             Confirm Order
            </Button>
        </div>   
        {/* //  </div> */}

        </Box>
       
  );
};

export default OrderForm;
