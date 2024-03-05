import * as React from 'react';
import ImageList from '@mui/material/ImageList';
import ImageListItem from '@mui/material/ImageListItem';
import ImageListItemBar from '@mui/material/ImageListItemBar';
import { useSelector } from "react-redux";
import ListItem from "./ListItem";
import {selectTotalQty,selectTotalPrice} from "../order/orderSlice";
import { useNavigate } from "react-router-dom";
import Button from '@mui/material/Button';
import DeleteIcon from '@mui/icons-material/Delete';
import SendIcon from '@mui/icons-material/Send';
import Stack from '@mui/material/Stack';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import Alert from '@mui/material/Alert';
import { Grid } from '@mui/material';

const ListBasket = () => {
    let basket=useSelector(state=>state.order.basket)//שליפת נתונים מהסטייט הכללי
    console.log(basket);
    let totalQty = useSelector(selectTotalQty);
    let totalPrice=useSelector(selectTotalPrice);
    let navigate = useNavigate();
    let totalPriceString = `$${totalPrice.toLocaleString()}`;
    
  return (
    <>
 <Grid container spacing={2} justifyContent="center" alignItems="center" marginBottom={10}>
  <Grid item>
    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
      <Alert severity="success">{totalQty} סה"כ מוצרים בסל</Alert>
      <Alert severity="success">{totalPriceString} סה"כ לתשלום</Alert>
    </Stack>
  </Grid>
  <Grid item>
    <Stack direction="row" spacing={2} sx={{ width: '100%' }}>
      <Button style={{ color: 'black', borderColor: 'black' }} variant="outlined" endIcon={<ArrowForwardIosIcon />} onClick={() => navigate('/list')}>
        המשך לקנות
      </Button>
      <Button style={{ backgroundColor: 'rgba(0, 0, 0, 0.5)' }} variant="contained" endIcon={<SendIcon />} onClick={() => navigate('/orderForm')}>
        סיום הזמנה
      </Button>
    </Stack>
  </Grid>
</Grid>

    <Grid container spacing={2} justifyContent="center" alignItems="center">
  {basket.map((item) => (
    <Grid item xs={12} sm={6} md={4} >
      <ImageListItem sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center' }}>
        <ListItem one={item}/>
      </ImageListItem>
    </Grid>
  ))}
</Grid>

    </>
  );
}

export default ListBasket;
