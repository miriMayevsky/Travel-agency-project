

import { PostUser } from './userApi';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userIn } from './userSlice';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import AccountCircle from '@mui/icons-material/AccountCircle';
import PasswordIcon from '@mui/icons-material/Password';
import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import './media.css';

const SignUp = () => {
    const { handleSubmit, register, formState: { errors } } = useForm();
    const dispatch = useDispatch();

    const save = (data) => {
        PostUser(data)
            .then((res) => {
                alert('נרשמת בהצלחה');
                dispatch(userIn(res.data));
            })
            .catch((err) => {
                alert('שגיאה', err.response);
                console.log(err.response);
            });
    };

    return (
      <div className='a'>
        <Box
        height={400}
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

            <label style={{ padding: 100 ,paddingRight:5}}>טלפון</label>
            <Box sx={{ display: 'flex', alignItems: 'flex-end' }}>
          <PhoneAndroidIcon sx={{ color: 'action.active', mr: 1, my: 0.5 }} />
          <TextField id="input-with-sx" label="הכנס מספר טלפון" variant="standard"  {...register('telphone')} /> 
        </Box>
            
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
          </div>
        // <form onSubmit={handleSubmit(save)}>
        //     <label>name</label>
        //     <input {...register('name', { required: 'שדה חובה' })} type="text" />
        //     {errors.name && <p>{errors.name.message}</p>}
        //     <label>telphone</label>
        //     <input {...register('telphone')} type="text" />
        //     <label>password</label>
        //     <input {...register('password', { required: 'שדה חובה' })} type="text" />
        //     {errors.password && <p>{errors.password.message}</p>}
        //     <input type="submit" />
        // </form>
    );
};

export default SignUp;
