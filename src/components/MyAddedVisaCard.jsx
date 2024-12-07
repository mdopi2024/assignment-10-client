import React from 'react';
import { Link } from 'react-router-dom';
import Update from '../Pages/Update';

const MyAddedVisaCard = ({addeVisa}) => {
    // console.log(addeVisa)
    const{_id,name,photo,visaType,discrip,time,fee,validity, method }=addeVisa
   
    return (
        <div className="card card-compact bg-[#D1E7FD] shadow-xl mt-5 border ">
            <div>
                <Update></Update>
            </div>
        <figure>
            <img className='w-full h-[200px] object-cover'
                src={photo}
                alt="Shoes" />
        </figure>
        <div className="card-body">
            <h2 className="card-title">{name}</h2>
            <p><span className='font-semibold'>Visa type : </span> {visaType}</p>
            <p><span className='font-semibold'>Time : </span>{time}</p>
            
            <p><span className='font-semibold'>Validity : </span>{validity}</p>
            <p><span className='font-semibold'>Fee : </span>{fee}</p>
            <p><span className='font-semibold'>Application method : </span>{method}</p>
            <p><span className='font-semibold'>Description : </span>{discrip}</p>
            <div className="card-actions flex justify-center items-center">
               {/* <Link to={`/update/${_id}`} className=" py-3 rounded-lg  bg-[#007BFF] hover:bg-[#0056B3] text-center font-semibold px-7"> Update</Link> */}

               <button  className=" py-3 rounded-lg  bg-[#007BFF] hover:bg-[#0056B3] text-center font-semibold px-7" onClick={() => document.getElementById('my_modal_3').showModal()}>Update</button>
               <Link to={`/delete`} className=" py-3 rounded-lg  bg-[#007BFF] hover:bg-[#0056B3] text-center font-semibold px-7"> Delete</Link>
            </div>
        </div>
    </div>
    );
};

export default MyAddedVisaCard;