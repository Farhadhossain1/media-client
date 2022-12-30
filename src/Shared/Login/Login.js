import React, { useContext, useState } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../Comtext/AuthProvider/AuthProvider';




const Login = () => {
    const { register,  formState: { errors }, handleSubmit } = useForm();
    const { signIn } = useContext(AuthContext);
    const [loginError, setLoginError] = useState('');
    const location = useLocation();
    const navigate = useNavigate();

    const from = location.state?.from?.pathname || '/';
  




    const handleLogin = data =>{
        console.log(data);
        setLoginError('');
        signIn(data.email, data.password)
            .then(result => {
                const user = result.user;
                console.log(user);
                toast.success('Log in successfully')
                navigate(from, {replace: true});
      
                
            })
            .catch(error => {
                console.log(error.message)
                setLoginError(error.message);
            });
      
    }
    return (
        <div className='border border-sky-400 lg:w-[500px] mx-auto rounded-xl mt-12 py-12'>
            <h2 className='text-5xl font-mono text-center mt-12 font-bold'>Log In</h2>
            <div className='lg:w-[450px] mx-auto p-7'>
             <form onSubmit={handleSubmit(handleLogin)}>
                <div className="form-control w-full ">
                            <label className="label">
                            <span className="label-text text-xl font-semibold py-4">Email</span>
                            </label>
                            <input type="email"  {...register("email", 
                            {  required: "Email Address is required"}
                            )} placeholder="email" className="input input-bordered w-full "  />
                            {errors.email && <p className='text-red-600 mt-2'>{errors.email?.message}</p>}
                            </div>
                            
                <div className="form-control w-full ">
                            <label className="label my-3">
                            <span className="label-text text-xl font-semibold ">Password</span>
                            </label>
                            <input type="password" {...register("password",
                             { required: "Password Address is required",
                             minLength: { value: 6, message: 'Password must be 6 characters or longer' },
                             pattern: {value:/(?=.*[A-Z])(?=.*[0-9])/, message: 'Password must be strong and one uppercase or one number'}
                            },
                             
                            )} placeholder="password" className="input input-bordered w-full "   />
                            {errors.password && <p className='text-red-600'>{errors.password?.message}</p>}
                            <label className="label my-3">
                            <span className="label-text text-xl ">Forget password</span>
                            </label>
                            </div>
                            <div>
                                {loginError && <p className='text-red-600'>{loginError} </p>}
                            </div>
                            <input className='btn btn-success my-6  text-black w-full' value="Login" type="submit" />
                            
            </form>
            <p>New to Doctors Portal <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button>
        </div>
        </div>
    );
};

export default Login;