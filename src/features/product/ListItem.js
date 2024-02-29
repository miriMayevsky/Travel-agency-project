import { Link,useParams } from "react-router-dom";

import { addOrder } from "../order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {DeleteProductByParameter} from './productApi';

const ListItem = ({ one }) => {

    let dispatch=useDispatch();
    let navigate = useNavigate();

    const saveTheOrder=()=>{
        dispatch(addOrder({"id":one.id,"name":one.name,"days":one.days,"price":one.price,"imgUrl":one.imgUrl,"description":one.description}));
    }

    let user=useSelector(state=>state.user.currentUser);
    // let { id } = useParams();

//מחיקת מוצר
const [showAlert, setShowAlert] = useState(false);

const handleDelete = (id) => {
    const result = window.confirm("Are you sure you want to delete this item?");
    if (result) {
        // Delete the item
        DeleteProductByParameter(id).then(res => {
            alert("Item deleted successfully");
        }).catch(err => {
            alert("Error deleting item:", err);
        });
    }
    setShowAlert(false); // Hide the alert
};

    return (
    <div>
        <h1>{one.name}</h1>
        <h2>{(`${one.price} $`)}</h2>
        <h2>{one.description}</h2>
       <Link to={""+one.id}>
       הצג פרטים
       <img src={one.imgUrl}/></Link> 
     { user && user.role=="ADMIN"?(
     <>
     <input value="עריכה" type="button" onClick={()=>navigate("/updateProduct")}/>
     <input value="מחיקה" type="button" onClick= {() => handleDelete(one.id)}/>
      </>):
<Link to={""+"basket"}><input value="הוסף לסל" type="button" onClick={saveTheOrder}/>
</Link>
      }
    </div>
        );
}

export default ListItem;



