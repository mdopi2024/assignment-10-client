
import { useState } from 'react';
import { data, useLoaderData } from 'react-router-dom';
import MyAddedVisaCard from '../components/MyAddedVisaCard';
import MyApplicationVisaCard from '../components/MyApplicationVisaCard';


const VisaApplication = () => {

    const myApplication = useLoaderData()
    const [application, setApplication] = useState(myApplication)

    const handleSearch = search => {
       search.preventDefault()
       const form=search.target;
       const country = form.country.value
       fetch(`https://assingment-10-server-psi.vercel.app/myvisa?search=${country}`)
       .then(res=>res.json())
       .then(data=>{
        setApplication(data);
        form.reset()
       })
    }

    return (
        <div>
            <div className='flex justify-center items-center mt-7'>
                <div >
                    <form onSubmit={handleSearch} className='flex  gap-2'>
                        <input type="text" name='country' placeholder="Search by country " className="input input-bordered w-full max-w-xs" />
                        <button className='border rounded-md border-blue-700 hover:bg-blue-800 font-semibold px-5 hover:text-white'>Search</button>
                    </form>
                </div>
            </div>
            <div className='grid grid-cols-1 md:grid-cols-4 gap-8 px-5 my-10'>
                {
                    application.map(card => <MyApplicationVisaCard key={card._id} card={card} application={application} setApplication={setApplication}></MyApplicationVisaCard>)
                }
            </div>
        </div>
    );
};

export default VisaApplication;