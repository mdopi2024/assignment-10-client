
import { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import MyAddedVisaCard from '../components/MyAddedVisaCard';
import MyApplicationVisaCard from '../components/MyApplicationVisaCard';


const VisaApplication = () => {

    const myApplication = useLoaderData()
    const [application,setApplication]= useState(myApplication)
    

    
    return (
        <div className='grid grid-cols-1 md:grid-cols-4 gap-8 px-5'>
        {
            application.map(card=><MyApplicationVisaCard key={card._id} card={card}></MyApplicationVisaCard>)
        }
        </div>
    );
};

export default VisaApplication;