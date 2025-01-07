import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import MyAddedVisaCard from '../components/MyAddedVisaCard';
import Helmate from '../components/Helmate';

const MYAddedVisa = () => {
    const {user}=useContext(AuthContext)
    const [addeVisas,setAddedVisas]=useState([])
    useEffect(()=>{
      fetch(`http://localhost:5000/visa/${user.email}`)
      .then(res=>res.json())
      .then(data=>{
        setAddedVisas(data)
      })

    },[])
    return (
        <div>
          <h1 className='text-center text-3xl md:text-4xl font-bold my-7'>My Added Visas</h1>
          <Helmate title='My Added Visa'></Helmate>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-8 px-5'>
            {
              addeVisas.map(addeVisa=><MyAddedVisaCard key={addeVisa._id} addeVisa={addeVisa} addeVisas={addeVisas} setAddedVisas={setAddedVisas}></MyAddedVisaCard>)
            }
           </div>
        </div>
    );
};

export default MYAddedVisa;