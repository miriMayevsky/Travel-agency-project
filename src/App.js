import './App.css';
import ProductList from './features/product/ProductList';
import NavBar from './NavBar';
import { Route, Routes } from 'react-router-dom';
import ListBasket from './features/order/ListBasket';
import ProductDetails from './features/product/ProductDetails';
import Login from './features/user/Login'
import SignUp from './features/user/SignUp'
import SmallBasket from './features/order/smallBasket';
import OrderForm from './features/order/OrderForm';
import UpdateProduct from './features/product/UpdateProduct';
import AddProduct from './features/product/AddProduct';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import {userIn} from './features/user/userSlice'
import { useState } from 'react';
import Protected from './Protected';
import HomePage from './HomePage.js';
import { addOrder,updateAddress,update } from './features/order/orderSlice';
// import {updateAddress} from './features/order/orderSlice';

function App() {

  const [isSignedIn, setIsSignedIn] = useState(null);

  const user=useSelector(state=>state.user.currentUser);
  // console.log(user.role);

  const dispatch = useDispatch();


  useEffect(() => {
        let u = localStorage.getItem("currentUser");
        let o = localStorage.getItem("basket");
        let a= localStorage.getItem("address");
        if (o) {
          let b=dispatch(addOrder(JSON.parse(o)));
          console.log("b"+b);
          dispatch(update(JSON.parse(o)));
        }
        if (a) {
          dispatch(updateAddress(JSON.parse(a)));
        }   
    if (u) {
      let c=dispatch(userIn(JSON.parse(u)));
      console.log("c"+c);
    }
  }, []); // Added an empty dependency array to ensure the effect runs only once
  
  useEffect(() => {
    if (user && user.role=='ADMIN') {
      setIsSignedIn(true);
    } else {
      setIsSignedIn(false);
    }
  }, [user]);
  
  return (
    <div className='app'>
      <NavBar />
      <Routes>
        <Route path='list' element={<ProductList />} >
          <Route path=':id' element={<ProductDetails />} />
          <Route path='basket' element={<SmallBasket />} />

        </Route>
        <Route path="/updateProduct/:id" element={<UpdateProduct />} />
        <Route path='basket' element={<ListBasket />} />
        <Route path='orderForm' element={<OrderForm />} />
        <Route path='/' element={<HomePage />} />

        <Route path='addProduct' element={
          <Protected isSignedIn={isSignedIn}>
          <AddProduct />
          </Protected>
        }
         />
        <Route path='login' element={<Login />} />
        <Route path='signUp' element={<SignUp />} />

      </Routes>

     
    </div>
  );
}

export default App;
