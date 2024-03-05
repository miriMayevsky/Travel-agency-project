// import { useSelector } from "react-redux";
// import { useNavigate } from "react-router-dom";
// import { selectTotalPrice,selectTotalQty } from "./orderSlice";

// const SmallBasket = () => {
//     let basket = useSelector(state => state.order.basket) || []; // Initialize basket as empty array if undefined
//     const totalPrice = useSelector(selectTotalPrice);
//     const totalQty = useSelector(selectTotalQty);
//     let navigate = useNavigate();
//     const totalPricePerItem=(item)=>item.qty*item.price;
//     // const totalQty=(item)=>
//     return (
//         <div className="a">
//         <ul className="b">
//             {basket.length > 0 ? (
//                 basket.map(item => <li key={item.id}>  <div>{item.name} טיול ל</div>
//                 <div> משך הטיול {item.days} ימים</div>
//                 <img src={item.imgUrl}/>
//                 <div>{item.qty}</div>
//                 <div>{item.price}</div>
//             <div>{totalPricePerItem(item)}</div>
                
//                 </li>)
//             ) : (
//                 <li>No items in the basket</li>
//             )}
//              <div>
//       Total Price: {totalPrice}
//     </div>
//     <div>
//       Total Quantity: {totalQty}
//     </div>
//         </ul> 
        
//                    <button onClick={() => navigate(-1)}>המשך לקנות</button>
//         <button onClick={() =>  navigate('/basket')}>צפייה בסל</button>
// </div>
//     );
// };

// export default SmallBasket;


import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
import { useSelector } from "react-redux";
 import { selectTotalPrice,selectTotalQty } from "./orderSlice";
 import ImageList from '@mui/material/ImageList';
 import ImageListItem from '@mui/material/ImageListItem';
 import ImageListItemBar from '@mui/material/ImageListItemBar';
 import ListSubheader from '@mui/material/ListSubheader';
//  import IconButton from '@mui/material/IconButton';
//  import InfoIcon from '@mui/icons-material/Info';

// const SmallBasket = () => {
//     const rootRef = React.useRef(null);

//     let basket = useSelector(state => state.order.basket) || []; // Initialize basket as empty array if undefined
//     const totalPrice = useSelector(selectTotalPrice);
//     const totalQty = useSelector(selectTotalQty);
//     let navigate = useNavigate();
//     const totalPricePerItem=(item)=>item.qty*item.price;
 
//     return (
//         <div className="a" style={{ position: 'fixed', top:0}}>
//           <Box
//           sx={{
//             height: 1000,
//             flexGrow: 1,
//             minWidth: 2000,
//             transform: 'translateZ(0)',
//             // The position fixed scoping doesn't work in IE11.
//             // Disable this demo to preserve the others.
//             '@media all and (-ms-high-contrast: none)': {
//               display: 'none',
//             },
//           }}
//           ref={rootRef}
//         >
//           <Modal
//             disablePortal
//             disableEnforceFocus
//             disableAutoFocus
//             open
//             aria-labelledby="server-modal-title"
//             aria-describedby="server-modal-description"
//             sx={{
//               display: 'flex',
//               p: 1,
//               alignItems: 'center',
//               justifyContent: 'center',
//             }}
//             container={() => rootRef.current}
//           >
//             <Box
//               sx={{
//                 position: 'relative',
//                 width: 600,
                
//                 bgcolor: 'background.paper',
//                 border: '2px solid #000',
//                 boxShadow: (theme) => theme.shadows[5],
//                 p: 4,
//               }}
//             >
//               <Typography id="server-modal-title" variant="h6" component="h2" textAlign='center'>
//               <ImageList sx={{ width: 500, height: 450 }}>
//       <ImageListItem key="Subheader" cols={2}>
//         <ListSubheader component="div">December</ListSubheader>
//       </ImageListItem>
//       {{basket.length > 0 ? (
//                 basket.map((item) => (
//         <ImageListItem key={item.img}>
//           <img
//             srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
//             src={`${item.img}?w=248&fit=crop&auto=format`}
//             alt={item.title}
//             loading="lazy"
//           />
//           <ImageListItemBar
//             title={item.name}
//             subtitle={item.author}
//             actionIcon={
//               <IconButton
//                 sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
//                 aria-label={`info about ${item.title}`}
//               >
//                 <InfoIcon />
//               </IconButton>
//             }
//           />
//         </ImageListItem>
//          ) : (
//             <div>No items in the basket</div>
//         )}
//       ))}
//     </ImageList>




               


//             <div>{`${totalPricePerItem(item)} count price for this trip`}</div>
                
//                 </div>)
//             ) : (
//                 <div>No items in the basket</div>
//             )}
//              <h1>
//       Total Price: {totalPrice}
//     </h1>
//     <h1>
//       Total Quantity: {totalQty}
//     </h1>
//         </div> 
// </div>
//   */}
            

//       </Typography>

//             </Box>
//           </Modal>
//         </Box>       
//  </div>
//     );
        
// };

////////////////////////////////////
const SmallBasket = () => {
    const rootRef = React.useRef(null);

    let basket = useSelector(state => state.order.basket) || []; // Initialize basket as empty array if undefined
    const totalPrice = useSelector(selectTotalPrice);
    const totalQty = useSelector(selectTotalQty);
    let navigate = useNavigate();
    const totalPricePerItem=(item)=>item.qty*item.price;
 
    return (
        <div  style={{ position: 'fixed', top:0}}>
          <Box
          sx={{
            height: '100vh',
            flexGrow: 1,
            minWidth: '100vw',
            transform: 'translateZ(0)',
            // The position fixed scoping doesn't work in IE11.
            // Disable this demo to preserve the others.
            '@media all and (-ms-high-contrast: none)': {
              display: 'none',
            },
          }}
          ref={rootRef}
        >
          <Modal
            disablePortal
            disableEnforceFocus
            disableAutoFocus
            open
            aria-labelledby="server-modal-title"
            aria-describedby="server-modal-description"
            sx={{
              display: 'flex',
              p: 1,
              alignItems: 'center',
              justifyContent: 'center',
            }}
            container={() => rootRef.current}
          >
            <Box
              sx={{
                position: 'relative',
                width: 600,
                
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: (theme) => theme.shadows[5],
                p: 4,
              }}
            >
              <Typography id="server-modal-title" variant="h6" component="h2" textAlign='center'>
<ImageList sx={{ width: 600, height: 450 }}>
  <ImageListItem key="Subheader" cols={2}>
    <ListSubheader component="div">basket</ListSubheader>
  </ImageListItem>
  {basket.length > 0 ? (
    basket.map((item) => (
      <ImageListItem key={item.img}>
        <img
          srcSet={`${item.img}?w=248&fit=crop&auto=format&dpr=2 2x`}
          src={`${item.imgUrl}?w=248&fit=crop&auto=format`}
          alt={item.title}
          loading="lazy"
        />
        <ImageListItemBar
          title={item.name}
          subtitle={`  days  ${item.days } | $    ${item.price}  `}       

          actionIcon={
            <IconButton
              sx={{ color: 'rgba(255, 255, 255, 0.54)' }}
              aria-label={`info about ${item.title}`}
            >
            </IconButton>
            //pa
 }
        />
      </ImageListItem>
    ))
  ) : (
    <div>No items in the basket</div>
  )}
</ImageList>
<div>
 <IconButton aria-label="add to favorites">
          <AddShoppingCartIcon onClick={() =>  navigate('/basket')}/>
         </IconButton>
         צפייה בסל
         </div>
    <div>        
             <Button style={{color:'black', borderColor: 'black'}} variant="outlined" endIcon={<ArrowForwardIosIcon />} onClick={() =>  navigate('/list')}>
         המשך לקנות
       </Button>
       </div>
</Typography>

             </Box>
           </Modal>
         </Box>       
  </div>
     );
        
 };

export default SmallBasket;
