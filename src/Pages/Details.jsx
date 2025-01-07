import React from 'react';
import { Link, useLoaderData } from 'react-router-dom';
import Modal from '../components/Modal';
import Helmate from '../components/Helmate';

const Details = () => {
    const singleVisa = useLoaderData()
    const { name, photo, visaType, time, email, age, validity, method, passpord, photograph, applicationForm, discrip } = singleVisa
    return (
        <div>
            <Helmate title='Details'></Helmate>
            <div>
                <Modal singleVisa={singleVisa}></Modal>
            </div>
            <h1 className='text-center text-3xl md:text-4xl text-blue-700 font-bold my-14'>All details about  {singleVisa.name}</h1>

            <div className="hero bg-[#D1E7FD] w-full flex justify-center items-center px-5   md:w-2/3 md:mx-auto border mb-7 ">
                <div className="hero-content grid grid-cols-1 md:grid-cols-7 gap-7 ">
                    <div className='md:col-span-3 md:h-[350px] flex justify-center items-center '>
                        <img
                            src={photo}
                            className=" mx-auto md:h-full w-full  object-cover rounded-lg shadow-2xl  " />
                    </div>
                    <div className='col-span-4 '>
                        <h1 className=" text-lg  font-semibold"><span className='text-lg  font-semibold'>County Name : </span> {name}</h1>
                        <p><span className='font-semibold'>Visa type :</span> {visaType}</p>
                        <p><span className='font-semibold'>Time :</span> {time}</p>
                        <p><span className='font-semibold'>Age restriction :</span> {age}</p>
                        <p><span className='font-semibold'>Validity :</span> {validity}</p>
                        <p><span className='font-semibold'>Application method :</span> {method}</p>
                        <p><span className='font-semibold'>Discription :</span> {discrip}</p>



                       <div className='pt-5'>
                       <button  onClick={() => document.getElementById('my_modal_5').showModal()} className="bg-[#007BFF] hover:bg-[#0056B3] mt-5 py-2 px-6 rounded-lg  font-semibold">Apply for the visa</button>
                       </div>
                    </div>
                </div>
            </div>
            <div className='flex justify-center items-center'>
                <Link to='/allvisa' className='font-semibold bg-[#007BFF] hover:bg-[#0056B3] mt-5 py-2 px-6 rounded-lg  mb-3'> See All Visa</Link>
            </div>
        </div>
    );
};

    
export default Details;