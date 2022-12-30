import React from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { useNavigate } from 'react-router-dom';

const MediaSection = () => {
    const { register, handleSubmit, formState: { errors } } = useForm();
    const imageHostingKey = process.env.REACT_APP_imagebb_key;
    const navigate =useNavigate();

    console.log(imageHostingKey);
    const handelAddInformation = data =>{
        const image = data.image[0];
        const formData = new FormData();
        formData.append('image', image);
        const url = `https://api.imgbb.com/1/upload?expiration=600&key=${imageHostingKey}`
       fetch(url, {
        method: 'POST',
        body: formData
       })
       .then(res => res.json())
       .then(imgData =>{
        if(imgData.success){
            console.log(imgData.data.url);
            const information = {
                    message: data.message,
                    image: imgData.data.url,
                    name: 'hala'
            }
            fetch('http://localhost:5000/addMessages' ,{
                method: 'POST',
                headers: {
                    'content-type' : 'application/json',
                },
                body: JSON.stringify(information)
            })
            .then(res => res.json())
            .then(result => {
                console.log(result);
                toast.success('submission is successful ')
                navigate('/media')
            })
        }
        
       })
    }
    return (
     
       <div className='lg:w-[600px] border border-gray-400 rounded-lg mx-auto mt-24 bg-slate-900 lg:py-12'>
         <div className='lg:w-[550px]  mx-auto p-7'>
        <h2 className="text-4xl text-center mb-8">Creativity Details</h2>
        <form onSubmit={handleSubmit(handelAddInformation)}>

            <div className="form-control w-full ">
                <label className="label"> <span className="label-text">Photo</span></label>
                <input type="file" {...register("image", {
                    required: "Photo is Required"
                })} className="input input-bordered w-full " />
                {errors.image && <p className='text-red-500'>{errors.image.message}</p>}
            </div>

            <div className="form-control w-full ">
                <label className="label"> <span className="label-text">message</span></label>
                <input type="textarea" {...register("message", {
                    required: "Message is Required"
                })} className="input input-bordered w-full " />
                {errors.name && <p className='text-red-500'>{errors.name.message}</p>}
            </div>
            
            <input className='btn btn-accent w-full  mt-12' value="Add Creativity " type="submit" />
        </form>
    </div>
       </div>
    );
};

export default MediaSection;