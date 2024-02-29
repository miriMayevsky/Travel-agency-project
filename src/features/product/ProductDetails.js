
import { useParams, useNavigate } from "react-router-dom";
import { getProductByParameter } from "./productApi";
import './styleDetails.css';
import { useEffect, useState } from "react";
import { addOrder } from "../order/orderSlice";
import { useDispatch } from "react-redux";
import React from 'react';

const ProductDetails = () => {

    let dispatch=useDispatch();

   
    let { id } = useParams();
    let navigate = useNavigate();
    let [product, setProduct] = useState(null);

    useEffect(() => {
        getProductByParameter(id)
            .then((res) => {
                setProduct(res.data);
            })
            .catch((err) => {
                alert("לא ניתן לטעון את המוצרים");
                console.error("error:" + err);
            });
    }, [id]);

    if (!product) {
        return <div>Loading...</div>;
    }
    const saveTheOrder=()=>{
        dispatch(addOrder({"id":product.id,"name":product.name,"days":product.days,"price":product.price,"imgUrl":product.imgUrl,"description":product.description}));
        navigate('/basket'); 
    }
    return (
        <div className="a">
            <div className="b">details {product.name}
<div>            {product.days}
</div>
<div>            {product.price}
</div>
<div>          <img src= {product.imgUrl}/> 
</div>
<div>            {product.description}
</div>
<div>            <input value="הוסף לסל" type="button" onClick={saveTheOrder} />
</div>

            </div>
            <button onClick={() => navigate(-1)}>back</button>
        
        </div>
    );
};

export default ProductDetails;
