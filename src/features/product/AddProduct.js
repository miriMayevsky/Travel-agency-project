import React, { useState } from "react";
import { useForm } from "react-hook-form";
import {PostProduct} from './productApi'

const AddProduct = () => {
    let { register, handleSubmit, reset ,formState: { errors }} = useForm();


    const save = (data) => {
        PostProduct(data).then((res) => {
            alert("הוספת המוצר הצליחה ");
        }).catch((err) => {
            alert("שגיאה", err.response);

            console.log(err.response);
        });
    };

    return (  <form onSubmit={handleSubmit(save)}>
    <label>name</label>
    <input {...register('name', { required: 'שדה חובה' })} type="text" />
    {errors.name && <p>{errors.name.message}</p>}
    <label>days</label>
    <input {...register('days', { required: 'שדה חובה' })} type="text" />
    {errors.days && <p>{errors.days.message}</p>}   
    <label>price</label>
    <input {...register('price', { required: 'שדה חובה' })} type="text" />
    {errors.price && <p>{errors.price.message}</p>}      
    <label>imgUrl</label>
    <input {...register('imgUrl', { required: 'שדה חובה' })} type="text" />
    {errors.imgUrl && <p>{errors.days.imgUrl}</p>}      
    <label>description</label>
    <input {...register('description', { required: 'שדה חובה' })} type="text" />
    {errors.description && <p>{errors.description.message}</p>}      
                 
     <input type="submit" />


</form> );
}
 
export default AddProduct;