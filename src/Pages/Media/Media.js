import { useQuery } from '@tanstack/react-query';
import React from 'react';

const Media = () => {
    const {data : allInfo } = useQuery({
        queryKey: ['allInfo'],
        queryFn: async () =>{
            try{
                const res = await fetch('http://localhost:5000/addMessages' , {
                    headers: {
                        authorization : `bearer ${localStorage.getItem('accessToken')}`
                    }
                });
                const data = await res.json();
                return data;
            }                                                                                                                                                                                                                               
            catch(error){
                    console.log(error)
            }
        }
    })
    return (
        <div>
            <h3 className='text-4xl'>Media Section : {allInfo.length}</h3>
        </div>
    );
};

export default Media;