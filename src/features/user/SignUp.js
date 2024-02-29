

import { PostUser } from './userApi';
import { useForm } from 'react-hook-form';
import { useDispatch } from 'react-redux';
import { userIn } from './userSlice';

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
        <form onSubmit={handleSubmit(save)}>
            <label>name</label>
            <input {...register('name', { required: 'שדה חובה' })} type="text" />
            {errors.name && <p>{errors.name.message}</p>}
            <label>telphone</label>
            <input {...register('telphone')} type="text" />
            <label>password</label>
            <input {...register('password', { required: 'שדה חובה' })} type="text" />
            {errors.password && <p>{errors.password.message}</p>}
            <input type="submit" />
        </form>
    );
};

export default SignUp;
