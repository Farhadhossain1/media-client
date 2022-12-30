import React, { useContext } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Comtext/AuthProvider/AuthProvider';

const Signup = () => {
    const { register,  formState: { errors }, handleSubmit } = useForm();
    const {createUser ,updateUser} = useContext(AuthContext)
    
    const handleLogin = data =>{
        console.log(data);
        createUser(data.email, data.password)
        .then(result =>{
            const user = result.user;
            console.log(user);
            toast.success('Sign up successfully')
            const userInfo ={
                displayName: data.name,
            }
            updateUser(userInfo)
            .then( () => {})
            .catch(error => {
                console.log(error);
            })
        })
        .catch(error =>{
            console.log(error);
        })   
    }

    
    return (
        <div>
                  <div className='border bg-slate-900  border-sky-400 lg:w-[500px] mx-auto rounded-xl mt-12 py-12'>
            <h2 className='text-5xl font-mono text-center mt-12 font-bold'>Sign Up</h2>
            <div className='lg:w-[450px] mx-auto p-7'>
             <form onSubmit={handleSubmit(handleLogin)}>
             <div className="form-control w-full ">
                            <label className="label">
                            <span className="label-text text-xl font-semibold py-4">Full Name</span>
                            </label>
                            <input type="text"  {...register("name", 
                            {  required: "Name  is required"}
                            )} placeholder="email" className="input input-bordered w-full "  />
                            {errors.name && <p className='text-red-600 mt-2'>{errors.name?.message}</p>}
                            </div>
                            
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
                            <input className='btn btn-success my-6  text-black w-full' value="Sign Up" type="submit" />
                            
            </form>
            <p>New to  <Link className='text-secondary' to="/login">Create new Account</Link></p>
        </div>
        </div>
        </div>
    );
};

export default Signup;