import React from 'react';
import { useQuery } from 'react-query';
import AboutSection from '../AboutSection/AboutSection';



const About = () => {
    const {data : myInformations = [] } = useQuery({
        queryKey: ['myInformations'],
        queryFn: async () =>{
            try{
                const res = await fetch('http://localhost:5000/myInformations');
                const data = res.json();
                return data;
            }                                                                                                                                      
            catch(error){
                    console.log(error)
            }
        }

    })
    console.log(myInformations)
    return (
        <div>
            {
                myInformations.map(myInfo => <AboutSection
                     key={myInfo}
                     myInfo={myInfo._id}
                ></AboutSection>)
            }

            <h3>sdhbcsehcnqdcfhdcn bdciqecbhbwj : {myInformations?.length}</h3>
            
        </div>
    );
};

export default About;