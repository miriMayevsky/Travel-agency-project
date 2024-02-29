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

function App() {

  const [isSignedIn, setIsSignedIn] = useState(null);

  const user=useSelector(state=>state.user.currentUser);
  // console.log(user.role);

  const dispatch = useDispatch();


  useEffect(() => {
        let u = localStorage.getItem("currentUser");
    if (u) {
      dispatch(userIn(JSON.parse(u)));
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
        <Route path='updateProduct' element={<UpdateProduct />} />
        <Route path='basket' element={<ListBasket />} />
        <Route path='orderForm' element={<OrderForm />} />
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
