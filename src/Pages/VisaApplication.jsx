
import { useContext, useEffect, useState } from 'react';
import { data, useLoaderData } from 'react-router-dom';
import MyAddedVisaCard from '../components/MyAddedVisaCard';
import MyApplicationVisaCard from '../components/MyApplicationVisaCard';
import { AuthContext } from '../AuthProvider/AuthProvider';


const VisaApplication = () => {
    const {user}= useContext(AuthContext)
    const [application, setApplication] = useState([])

    useEffect(()=>{
        fetch(`http://localhost:5000/myvisa/${user?.email}`)
        .then(res=>res.json())
        .then(data=>{
        setApplication(data)
        })
    },[])

    const handleSearch = search => {
       search.preventDefault()
       const form=search.target;
       const country = form.country.value
       console.log(country)
       fetch(`http://localhost:5000/myvisa/${user?.email}?search=${country}`)
       .then(res=>res.json())
       .then(data=>{
        setApplication(data);
        form.reset()
       })
    }

    return (
        <div>
            <div className='flex justify-center items-center mt-7 '>
                <div className='mt-[100px]' >
                    <form onSubmit={handleSearch} className='flex  gap-2'>
                        <input type="text" name='country' placeholder="Search by country " className="input input-bordered w-full max-w-xs" />
                        <button className='border rounded-md border-blue-700 hover:bg-blue-800 font-semibold px-5 hover:text-white'>Search</button>
                    </form>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 px-5 my-10'>
                {
                    application?.map(card => <MyApplicationVisaCard key={card._id} card={card} application={application} setApplication={setApplication}></MyApplicationVisaCard>)
                }
            </div>
        </div>
    );
};

export default VisaApplication;