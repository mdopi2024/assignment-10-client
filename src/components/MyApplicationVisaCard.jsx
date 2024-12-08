import React from 'react';
import Swal from 'sweetalert2';

const MyApplicationVisaCard = ({ card,application,setApplication }) => {
    const { _id, email, firstName, lastName, date, fee, name, photo, visaType, time, method } = card
    const handleCencel = id => {
        Swal.fire({
            title: "Are you sure?",
            text: "You won't be able to revert this!",
            icon: "warning",
            showCancelButton: true,
            confirmButtonColor: "#3085d6",
            cancelButtonColor: "#d33",
            confirmButtonText: "Yes, delete it!"
        }).then((result) => {
            if (result.isConfirmed) {

                fetch(`https://assingment-10-server-psi.vercel.app/myvisa/${id}`, {
                    method: 'DELETE'
                })
                    .then(res => res.json())
                    .then(data => {
                        if (data.deletedCount) {
                            Swal.fire({
                                title: "Deleted!",
                                text: "Your file has been deleted.",
                                icon: "success"
                            });
                            const filter = application.filter(visa => visa._id !== id)
                            setApplication(filter)
                        }
                    })
            }
        });
    }
    return (
        <div>
            <div className="card card-compact bg-[#D1E7FD] shadow-xl mt-5 border ">
                <figure>
                    <img className='w-full h-[200px] object-cover'
                        src={photo}
                        alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>

                    <p><span className='font-semibold'>Applicant's name : </span> {`${firstName} ${lastName}`}</p>
                    <p><span className='font-semibold'> Email : </span> {email}</p>
                    <p><span className='font-semibold'>Visa type : </span> {visaType}</p>
                    <p><span className='font-semibold'>Fee : </span> {fee}</p>
                    <p><span className='font-semibold'>Time : </span>{time}</p>
                    <p><span className='font-semibold'>Application_method : </span>{method}</p>
                    <p><span className='font-semibold'>Applied_date : </span>{date}</p>
                    <div className="card-actions ">
                        <button onClick={() => handleCencel(_id)} className=' className=" py-3 rounded-lg w-full bg-[#007BFF] hover:bg-[#0056B3] text-center font-semibold"'>Cencle</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default MyApplicationVisaCard;