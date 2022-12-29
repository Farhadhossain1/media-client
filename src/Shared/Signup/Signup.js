import React from 'react';
import { useForm } from 'react-hook-form';
import { Link } from 'react-router-dom';

const Signup = () => {
    const { register,  formState: { errors }, handleSubmit } = useForm();

    const handleLogin = data =>{
        console.log(data);
  
     
      
    }
    return (
        <div>
                  <div className='border border-sky-400 lg:w-[500px] mx-auto rounded-xl mt-12 py-12'>
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
            <p>New to  <Link className='text-secondary' to="/signup">Create new Account</Link></p>
                {/* <div className="divider">OR</div>
                <button className='btn btn-outline w-full'>CONTINUE WITH GOOGLE</button> */}
        </div>
        </div>
        </div>
    );
};

export default Signup;