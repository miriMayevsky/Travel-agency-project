import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { PostUserByParameter } from "./userApi";
import { userIn } from "./userSlice";
import { Link } from "react-router-dom";
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import './media.css';

const Login = () => {
    let { register, handleSubmit, reset ,formState: { errors }} = useForm();
    let dispatch = useDispatch();
    const [loginError, setLoginError] = useState(false);

    const save = (data) => {
        PostUserByParameter(data).then((res) => {
            alert("נכנסת בהצלחה");
            dispatch(userIn(res.data));
            setLoginError(false);

        }).catch((err) => {
            alert("שגיאה", err.response);
           setLoginError(true);

            console.log(err.response);
        });
    };

    return (
      <div className="a">
        <Box
        height={350}
        width={500}
        my={4}
        display="flex"
        flexDirection={"column"}
        alignItems="center"
        gap={4}
        p={2}
        sx={{ border: '2px solid grey' }}
        >
         
          <form onSubmit={handleSubmit(save)}>
            <div style={{ padding: 20 }}>
            <label style={{ padding: 100 ,paddingRight:5}}>שם</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <AccountCircle sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="הכנס את שמך" variant="standard"  {...register('name', { required: 'שדה חובה' })} /> 
        </Box>
            {errors.name && <p>{errors.name.message}</p>}            
            </div>
            <div style={{ padding: 20 }}>
              <label style={{ padding: 100 ,paddingRight:5}}>סיסמא</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <PasswordIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="הכנס סיסמא" variant="standard"   {...register('password', { required: 'שדה חובה' })} /> 
        </Box>
            {/* <input {...register('password', { required: 'שדה חובה' })} type="text" /> */}
            {errors.password && <p>{errors.password.message}</p>}  
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
          {loginError && <div>ההתחברות נכשלה. אנא נסה שוב או <Link to="/signUp">הרשם כאן</Link></div>}
  
        </form>

          </Box>        </div>

         
       
    );
}

export default Login;
