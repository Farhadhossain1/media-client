import { useQuery } from '@tanstack/react-query';
import React from 'react';
import MediaCard from '../MediaCard/MediaCard';

const Media = () => {
    const {data : allInfo = [] } = useQuery({
        queryKey: ['allInfo'],
        queryFn: async () =>{
            try{
                const res = await fetch('http://localhost:5000/addMessages');
                const data = res.json();
                return data;
            }                                                                                                                                      
            catch(error){
                    console.log(error)
            }
        }

    })
    console.log(allInfo)
    return (
        <div className='grid lg:grid-cols-3 gap-4 grid-clos-1 mx-auto'>
            {
                allInfo.map(info => <MediaCard
                     key={info.id}
                     info = {info}
                ></MediaCard>)
            }
        </div>
    );
};

export default Media;