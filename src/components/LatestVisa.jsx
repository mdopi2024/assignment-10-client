import React from 'react';
import { Link } from 'react-router-dom';

const LatestVisa = ({visa}) => {
    const{_id,name,photo,visaType,discrip,time,fee,validity}=visa
    return (
        <div className="card card-compact bg-[#D1E7FD] shadow-xl mt-5 border ">
            <figure>
                <img className='w-full h-[200px] object-cover'
                    src={photo}
                    alt="Shoes" />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p><span className='font-semibold'>Visa type : </span> {visaType}</p>
                <p><span className='font-semibold'>Fee : </span> {fee}</p>
                <p><span className='font-semibold'>Time : </span>{time}</p>
                <p><span className='font-semibold'>Validity : </span>{validity}</p>
                <p><span className='font-semibold'>Description : </span>{discrip}</p>
                <div className="card-actions ">
                   <Link to={`/details/${_id}`} className=" py-3 rounded-lg w-full bg-[#007BFF] hover:bg-[#0056B3] text-center font-semibold"> See details</Link>
                </div>
            </div>
        </div>
    );
};

export default LatestVisa;