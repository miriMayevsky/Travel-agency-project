import { Link,useParams } from "react-router-dom";
import './style.css';
import { addOrder } from "../order/orderSlice";
import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import React from 'react';
import { useNavigate } from 'react-router-dom';
import {DeleteProductByParameter} from './productApi';
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
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import ShareIcon from '@mui/icons-material/Share';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import DeleteSweepIcon from '@mui/icons-material/DeleteSweep';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import FlightTakeoffIcon from '@mui/icons-material/FlightTakeoff';

// import Avatar from '@mui/material/Avatar';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';

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

  let basket=useSelector(state=>state.order.basket)//שליפת נתונים מהסטייט הכללי


    const [expanded, setExpanded] = React.useState(false);

    const handleExpandClick = () => {
      setExpanded(!expanded);
    };

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




return (<>
    <Card  className="card" 
    style={{ backgroundColor: basket.some(item => item.id === one.id) ? 'rgba(0, 0, 0, 0.2)' : 'write' }}
     >

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
        height="400"
        image={one.imgUrl}
        alt="Paella dish"
      />
      <CardContent>
        <Typography variant="body2" color="text.secondary">
          {one.description}
        </Typography>
      </CardContent>

      <CardActions disableSpacing>

      { user && user.role=="ADMIN"?(
     <>
      <IconButton aria-label="delete">
      <div className="b">
         <DeleteSweepIcon onClick= {() => handleDelete(one.id)}/>
         delete
       </div>
        </IconButton>
        <IconButton aria-label="delete">
        <div className="b">
             <AppRegistrationIcon onClick= {() => navigate(`/updateProduct/${one.id}`)}/>
          update product</div>
        </IconButton>
      </>):
         <IconButton aria-label="add to favorites">
          <Link to={""+"basket"}>
         <AddShoppingCartIcon onClick={saveTheOrder}/>
          </Link>
        </IconButton>
        }
        <div className="c">
           <Link to={""+one.id}>
           <div >
            <ExpandMoreIcon/>
          </div>details
        </Link>
        </div>

        </CardActions>

        </Card>
        {/* </Grid>
        </Grid> */}





        </>
        // {/* // </div> */}
  );
}




export default ListItem;



