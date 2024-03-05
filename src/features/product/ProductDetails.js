
// import { useParams, useNavigate } from "react-router-dom";
// import { getProductByParameter } from "./productApi";
// import './styleDetails.css';
// import { useEffect, useState } from "react";
// import { addOrder } from "../order/orderSlice";
// import { useDispatch } from "react-redux";
// import React from 'react';
// import Modal from '@mui/material/Modal';
// import Typography from '@mui/material/Typography';
// import Box from '@mui/material/Box';
// import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
// import IconButton from '@mui/material/IconButton';
// import Button from '@mui/material/Button';
// import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';

// const ProductDetails = () => {
//     const rootRef = React.useRef(null);

//     let dispatch=useDispatch();

   
//     let { id } = useParams();
//     let navigate = useNavigate();
//     let [product, setProduct] = useState(null);

//     useEffect(() => {
//         getProductByParameter(id)
//             .then((res) => {
//                 setProduct(res.data);
//             })
//             .catch((err) => {
//                 alert("לא ניתן לטעון את המוצרים");
//                 console.error("error:" + err);
//             });
//     }, [id]);

//     if (!product) {
//         return <div>Loading...</div>;
//     }
//     const saveTheOrder=()=>{
//         dispatch(addOrder({"id":product.id,"name":product.name,"days":product.days,"price":product.price,"imgUrl":product.imgUrl,"description":product.description}));
//         navigate('/basket'); 
//     }
//     return (
//         <div style={{ position: 'fixed', top:0}}>
          
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
//              <h1> {product.name}</h1>
//                             </Typography>
//               <Typography id="server-modal-description" sx={{ pt: 2,textAlign:'center' }}>
            

// <div>          <img src= {product.imgUrl} style={{width:"100%"}}/> 
// </div>
// <div>            {product.description}
// </div>
// <div>          { `days ${product.days} ` }
// </div>
// <div>          {`${product.price} $`} 
// </div>
// <div>
// <IconButton aria-label="add to favorites">
//          <AddShoppingCartIcon onClick={saveTheOrder}/>
//         </IconButton>
//         הוסף לסל
//         </div>
//         <div>        
//     <Button style={{color:'black', borderColor: 'black'}} variant="outlined" endIcon={<ArrowForwardIosIcon />} onClick={() =>  navigate('/list')}>
//         המשך לקנות
//       </Button>
//       </div>   
//       </Typography>

//             </Box>
//           </Modal>
//         </Box>  
//         </div>

//     );
// };

// export default ProductDetails;


import { useParams, useNavigate } from "react-router-dom";
import { getProductByParameter } from "./productApi";
import './styleDetails.css';
import { useEffect, useState } from "react";
import { addOrder } from "../order/orderSlice";
import { useDispatch } from "react-redux";
import React from 'react';
import Modal from '@mui/material/Modal';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import AddShoppingCartIcon from '@mui/icons-material/AddShoppingCart';
import IconButton from '@mui/material/IconButton';
import Button from '@mui/material/Button';
import ArrowForwardIosIcon from '@mui/icons-material/ArrowForwardIos';
// import { useMediaQuery } from '@mui/material';
import { useMediaQuery, useTheme } from '@mui/material';

const ProductDetails = () => {
    const theme = useTheme();
    const isSmallScreen = useMediaQuery(theme.breakpoints.down('sm'));
    const rootRef = React.useRef(null);
    // const isSmallScreen = useMediaQuery((theme) => theme.breakpoints.down('sm'));

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
        <div style={{ position: 'fixed', top:0}}>
{/*           
          <Box
          sx={{
            transform: 'translate(-50%, -50%)',
            height: 1000,
            flexGrow: 1,
            minWidth : isSmallScreen? 600: 2000,
            transform: 'translateZ(0)',
            // The position fixed scoping doesn't work in IE11.
            // Disable this demo to preserve the others.
            // '@media all and (-ms-high-contrast: none)': {
            //   display: 'flex',
            // },
          }}
          ref={rootRef}
        > */}
        <Box
  sx={{
    position: 'fixed',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    // הוספת עוד סגנון כדי לשמור על גודל מינימלי כאשר המסך קטן
    minWidth: '100vw',
    minHeight: '90vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  }}
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
            {/* <Box
              sx={{
                width: { xs: '40%', sm: '50%', md: '30%', lg: '30%', xl: '40%' },

                position: 'relative',
                // width: isSmallScreen ? 400 : 600,
                maxWidth: '100%',
                bgcolor: 'background.paper',
                border: '2px solid #000',
                boxShadow: (theme) => theme.shadows[5],
                p: 4,
              }}
            > */}
            <Box
    sx={{
      maxWidth: '90%',
      width: { xs: '90%', sm: '80%', md: '70%', lg: '60%', xl: '40%' },
      maxHeight: '90%',
      overflowY: 'auto',
      backgroundColor: 'white',
      padding: 2,
      borderRadius: 2,
      boxShadow: 5,
    }}
  >
              <Typography id="server-modal-title" variant="h6" component="h2" textAlign='center'>
             <h1> {product.name}</h1>
                            </Typography>
              <Typography id="server-modal-description" sx={{ pt: 2,textAlign:'center' }}>
            

<div>          <img src= {product.imgUrl} style={{width:"100%"}}/> 
</div>
<div>            {product.description}
</div>
<div>          { `days ${product.days} ` }
</div>
<div>          {`${product.price} $`} 
</div>
<div>
<IconButton aria-label="add to favorites">
         <AddShoppingCartIcon onClick={saveTheOrder}/>
        </IconButton>
        הוסף לסל
        </div>
        <div>        
    <Button style={{color:'black', borderColor: 'black'}} variant="outlined" endIcon={<ArrowForwardIosIcon />} onClick={() =>  navigate('/list')}>
        המשך לקנות
      </Button>
      </div>   
      </Typography>

            </Box>
          </Modal>
        </Box>        </div>

    );
};

export default ProductDetails;
