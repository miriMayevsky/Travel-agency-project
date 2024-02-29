import React, { useState } from "react";
import { useForm } from "react-hook-form";
import { useDispatch } from "react-redux";
import { PostUserByParameter } from "./userApi";
import { userIn } from "./userSlice";
import { Link } from "react-router-dom";

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
        <form onSubmit={handleSubmit(save)}>
            <label>שם</label>
            <input {...register('name', { required: 'שדה חובה' })} type="text" />
            {errors.name && <p>{errors.name.message}</p>}            
            <label>ססמא</label>
            <input {...register('password', { required: 'שדה חובה' })} type="text" />
            {errors.password && <p>{errors.password.message}</p>}           
             <input type="submit" />

         {loginError && <div>ההתחברות נכשלה. אנא נסה שוב או <Link to="/signUp">הרשם כאן</Link></div>}

        </form>
    );
}

export default Login;
