import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Visacard from '../components/Visacard';

const AllVisa = () => {
    const loadedVisa = useLoaderData()
    const [visas,setVisas]=useState(loadedVisa)

    return (
        <div>
            <h1 className='text-center text-3xl md:text-4xl font-bold my-10'>See all visas</h1>
           <div className='grid grid-cols-1 md:grid-cols-4 gap-7 px-6 pb-16 '>
            {
                visas.map(visa=><Visacard key={visa._id} visa={visa}></Visacard>)
            }
           </div>
        </div>
    );
};

export default AllVisa;