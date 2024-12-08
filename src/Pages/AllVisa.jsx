import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import Visacard from '../components/Visacard';

const AllVisa = () => {
    const loadedVisa = useLoaderData()
    const [visas, setVisas] = useState(loadedVisa)

    const handleSerch=serch=>{
       fetch(`https://assingment-10-server-psi.vercel.app/visas?search=${serch}`)
       .then(res=>res.json())
       .then(data=>{
       if(data){
        setVisas(data)
       }
       })
    }

    return (
        <div>
            <div className='flex justify-end items-center'>
                <div className="dropdown mr-10 my-2">
                    <div tabIndex={0} role="button" className="btn m-1 border border-[#007BFF] hover:bg-[#0056B3]">Serach by Vist Type</div>
                    <ul tabIndex={0} className="dropdown-content menu bg-base-100 rounded-box z-[1] w-52 p-2 shadow">
                        <li className='bg-[#007BFF] hover:bg-[#0056B3] mt-3 rounded-md' onClick={()=>handleSerch('Student Visa')}>Student Visa</li>
                        <li className='bg-[#007BFF] hover:bg-[#0056B3] mt-3 rounded-md' onClick={()=>handleSerch('Tourist Visa')}>Tourist Visa</li>
                        <li className='bg-[#007BFF] hover:bg-[#0056B3] mt-3 rounded-md' onClick={()=>handleSerch('Official Visa')}>Official Visa</li>
                    </ul>
                </div> 
            </div>
            <h1 className='text-center text-3xl md:text-4xl font-bold my-10'>See all visas</h1>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-7 px-6 pb-16 '>
                {
                    visas.map(visa => <Visacard key={visa._id} visa={visa}></Visacard>)
                }
            </div>
        </div>
    );
};

export default AllVisa;