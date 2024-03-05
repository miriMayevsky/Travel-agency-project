             
import {Reduction, addOrder, removeOrder, update  } from "../order/orderSlice";
import { Link,useParams } from "react-router-dom";
import './style.css';
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Card from '@mui/material/Card';
import CardHeader from '@mui/material/CardHeader';
import CardMedia from '@mui/material/CardMedia';
import CardContent from '@mui/material/CardContent';
import CardActions from '@mui/material/CardActions';
import Avatar from '@mui/material/Avatar';
import IconButton, { IconButtonProps } from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import { red } from '@mui/material/colors';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import RemoveCircleOutlineIcon from '@mui/icons-material/RemoveCircleOutline';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

interface ExpandMoreProps extends IconButtonProps {
    expand: boolean;
  }
  const ExpandMore = styled((props: ExpandMoreProps) => {
    const { expand, ...other } = props;
    return <IconButton {...other} />;
  })(({ theme, expand }) => ({
    transform: !expand ? 'rotate(0deg)' : 'rotate(180deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  })); 
  const ListItem = ({ one }) => {

    let dispatch = useDispatch();
    console.log(one);
    if (!one) {
        return null; // Or render a loading indicator
    }
    let totalPricePerItem=one.qty*one.price;
    

return (<>
    <Card  className="card" >
    {/* // sx={{ maxWidth: 1000,minHeight: 600 }}> */}
      <CardHeader
        avatar={
          <Avatar sx={{ bgcolor: red[60] }} aria-label="recipe">
            <FlightTakeoffIcon/>
          </Avatar>
        }
        action={
          <IconButton aria-label="settings">
            <MoreVertIcon />
          </IconButton>
        }
        title={one.name}
        subheader={`${one.price} $`}
      />
      <CardMedia
        component="img"
        height="250"

        // width="1000"
        image={one.imgUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {one.description}
          <div> משך הטיול {one.days} ימים</div>
            <div>כמות הכרטיסים {one.qty}</div>
            <div> סהכ מחיר לטיול זה $ {totalPricePerItem} </div>
        </Typography>
      </CardContent>

      <CardActions disableSpacing>
      <IconButton aria-label="delete">
      <div className="b">
         <DeleteSweepIcon onClick={() => { dispatch(removeOrder(one.id))}} />
      </div>
        </IconButton>

        <IconButton aria-label="update">
        <div className="b">
             <AppRegistrationIcon onClick={() => { 
                    if(one.qty<1)
                    dispatch(update({"id":one.id,"name":one.name,"days":one.days+1,"price":one.price,"imgUrl":one.imgUrl,"description":one.description}))
                 else   dispatch(update({"id":one.id,"name":one.name,"days":one.days+1,"price":one.price,"imgUrl":one.imgUrl,"description":one.description,"qty":one.qty}))}} /> 
                  הוספת יום</div>  
         </IconButton>

        <IconButton aria-label="less">
         <div className="b">
             <AppRegistrationIcon onClick={() => {
                     if (one.days > 1 && one.qty < 1)
                         dispatch(update({"id":one.id,"name":one.name,"days":one.days-1,"price":one.price,"imgUrl":one.imgUrl,"description":one.description}))
                 else if (one.days > 1 && one.qty >= 1)
                 dispatch(update({"id":one.id,"name":one.name,"days":one.days-1,"price":one.price,"imgUrl":one.imgUrl,"description":one.description,"qty":one.qty}))
                }} />
                  הורדת יום</div>  
         </IconButton>

         <IconButton aria-label="less">
         <div className="b">
             <AddCircleOutlineIcon onClick={() => {
                    dispatch(addOrder({"id":one.id,"name":one.name,"days":one.days,"price":one.price,"imgUrl":one.imgUrl,"description":one.description}))
                }} />
                   </div>  
         </IconButton>

         <IconButton aria-label="less">
         <div className="b">
             <RemoveCircleOutlineIcon  onClick={() => {
                    if(one.qty>1){
                        dispatch(Reduction({"id":one.id,"name":one.name,"days":one.days,"price":one.price,"imgUrl":one.imgUrl,"description":one.description}))
                    }else   
                        dispatch(removeOrder(one.id))

                }} />
                   </div>  
         </IconButton>
         
        </CardActions>

</Card>
</>
);
}


export default ListItem;



