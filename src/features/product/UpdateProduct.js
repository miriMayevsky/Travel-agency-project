import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {PostProductByParameter} from './productApi'
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import MonetizationOnIcon from '@mui/icons-material/MonetizationOn';
import AddAPhotoIcon from '@mui/icons-material/AddAPhoto';
import DescriptionIcon from '@mui/icons-material/Description';
import Filter1Icon from '@mui/icons-material/Filter1';
import SportsScoreIcon from '@mui/icons-material/SportsScore';
import { useParams } from "react-router-dom";


const UpdateProduct = () => {
    let { register, handleSubmit, reset ,formState: { errors }} = useForm();
   
    const [description, setDescription] = useState("");
    let [products, setProducts] = useState([]);

    let {id}=useParams();

    useEffect(() => {
        PostProductByParameter({ id: id, days: products.days, price: products.price, imgUrl: products.imgUrl, description: products.description })
        
        .then((res) => {
          // המרת התשובה למערך של אובייקטים בפורמט JSON
          const data = JSON.parse(res.data);
          setProducts(data);
        })
        .catch((err) => {
          alert("לא ניתן לטעון את המוצרים");
          console.error("eror:" +err);
        });
    }, []);

    const save = (data) => {
        PostProductByParameter(data).then((res) => {
            alert(" המוצר עודכן בהצלחה ");
        }).catch((err) => {
            alert("שגיאה", err.response);

            console.log(err.response);
        });
    };

    // const save = (data) => {
    //     PostProductByParameter(data).then((res) => {
    //         alert("המוצר עודכן בהצלחה");
    //     }).catch((err) => {
    //         alert("שגיאה", err.response);
    //         console.log(err.response);
    //     });
    // };
    
    // useEffect(() => {
    //     // השימוש ב- products כמערך ולא ב- data שהוא טקסט של קובץ JSON
    //     // let index = products.findIndex((product) => {
    //     //     console.log(product.id);

    //     //   return  product.id == id ;        
    //     // });
    //     // console.log(products.id);
    //     // console.log(id);
    //     // if (index !== -1) {
    //         // let productToUpdate = products[index];
    //         // שימוש ב- productToUpdate.id במקום ב- id המועבר כארגומנט
    //         // PostProductByParameter(productToUpdate).then((res) => {
    //             PostProductByParameter(products).then((res) => {

    //             alert("המוצר עודכן בהצלחה");
    //         }).catch((err) => {
    //             alert("שגיאה", err.response);
    //             console.log(err.response);
    //         });
    //     // } else {
    //     //     alert("לא ניתן למצוא מוצר עם ה- id שצוין");
    //     // }
    // }, []);
    


    return ( <>
    <h1>update</h1>
     <Box
        height={700}
        width={500}
        my={4}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: '2px solid grey' }}
        style={{marginLeft:730}}>
         
          <form onSubmit={handleSubmit(save)}>

            <div style={{ padding: 20 }}>
            <label style={{ padding: 100 ,paddingRight:5}}>name</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <SportsScoreIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField
            id="input-with-sx"
            variant="standard"
            defaultValue={products && products.name}
            label="הכנס שם מדינה"

            {...register("name", { required: "שדה חובה" })}
/>
        </Box>
            {errors.name && <p>{errors.name.message}</p>}            
            </div>


            <div style={{ padding: 20 }}>
            <label style={{ padding: 100 ,paddingRight:5}}>days</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <Filter1Icon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
           <TextField id="input-with-sx" label="הכנס מספר ימי חופשה" variant="standard" 
            defaultValue={products && products.days}

           {...register('days', { required: 'שדה חובה' })} /> 
           </Box>
            {errors.days && <p>{errors.days.message}</p>}  
            </div>
             
            <div style={{ padding: 20 }}>
            <label style={{ padding: 100 ,paddingRight:5}}>price</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <MonetizationOnIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
           <TextField id="input-with-sx" label="הכנס מחיר" variant="standard" 
            defaultValue={products && products.price}
            {...register('price', { required: 'שדה חובה' })} /> 
           </Box>
           {errors.price && <p>{errors.price.message}</p>}
            </div>

            <div style={{ padding: 20 }}>
            <label style={{ padding: 100 ,paddingRight:5}}>imgUrl</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <AddAPhotoIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
           <TextField id="input-with-sx" label="הכנס תמונה" variant="standard"  
            defaultValue={products.imgUrl}

           {...register('imgUrl', { required: 'שדה חובה' })} /> 
           </Box>
            {errors.imgUrl && <p>{errors.imgUrl.message}</p>}  
            </div>

            <div style={{ padding: 20 }}>
            <label style={{ padding: 100 ,paddingRight:5}}>description</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
           <DescriptionIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
           <TextField id="input-with-sx" label="הכנס תיאור מוצר" variant="standard"            
            defaultValue={products &&products.description}
            {...register('description', { required: 'שדה חובה' })} /> 
           </Box>
            {errors.description && <p>{errors.description.message}</p>}  
            </div>


           
                     {/* <input type="submit" /> */}

         <div style={{padding:70 }}>
            <Button
            type="submit"
              variant="contained"
              endIcon={<SendIcon />}
              style={{ backgroundColor: 'black', color: 'white' }}            >
               שלח
              </Button>

          </div> 
  
        </form>
    </Box>


    {/* <form onSubmit={handleSubmit(save)}>
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
</form> */}
  </>
);
}
 
 
export default UpdateProduct;