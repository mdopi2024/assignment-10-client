import React, { useState } from 'react';
import Update from '../Pages/Update';
import Swal from 'sweetalert2';

const MyAddedVisaCard = ({ addeVisa,addeVisas,setAddedVisas }) => {
    const { _id, name, photo, visaType, discrip, time, fee, validity, method } = addeVisa;
    const [update, setUpdate] = useState({});
    


    const hanaleModal = (visa) => {
        setUpdate(visa); // Set the data for the modal.
        document.getElementById(`modal_${_id}`).showModal(); // Use unique ID for modal.
    };


    const handleForm = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const visaType = form.visaType.value;
        const time = form.time.value;
        const age = form.age.value;
        const validity = form.validity.value;
        const method = form.method.value;
        const passpord = form.passpord.value;
        const photograph = form.photograph.value;
        const applicationForm = form.applicationForm.value;
        const fee = form.fee.value;
        const discrip = form.discrip.value;
        const updateData = { name, photo, visaType, time, age, validity, method, passpord, photograph, applicationForm, discrip, fee }
        // console.log(updateData)

        fetch(`http://localhost:5000/visas/${update._id}`, {
            method: 'PATCH',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updateData)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data)
                document.getElementById(`modal_${_id}`).close()
            })
    }

    const handleDelete = id => {
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

                fetch(`http://localhost:5000/visas/${id}`, {
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
                              const filter = addeVisas.filter(visa=>visa._id !== id)
                              console.log(filter)
                              setAddedVisas(filter)
                        }
                    })
            }
        });
    }

    return (
        <div className="card card-compact bg-[#D1E7FD] shadow-xl mt-5 border">
            <div>
                <Update update={update}></Update>
            </div>
            <figure>
                <img
                    className="w-full h-[200px] object-cover"
                    src={photo}
                    alt={name}
                />
            </figure>
            <div className="card-body">
                <h2 className="card-title">{name}</h2>
                <p>
                    <span className="font-semibold">Visa type : </span> {visaType}
                </p>
                <p>
                    <span className="font-semibold">Time : </span>
                    {time}
                </p>
                <p>
                    <span className="font-semibold">Validity : </span>
                    {validity}
                </p>
                <p>
                    <span className="font-semibold">Fee : </span>
                    {fee}
                </p>
                <p>
                    <span className="font-semibold">Application method : </span>
                    {method}
                </p>
                <p>
                    <span className="font-semibold">Description : </span>
                    {discrip}
                </p>
                <div className="card-actions flex justify-center items-center">
                    <button
                        className="py-3 rounded-lg bg-[#007BFF] hover:bg-[#0056B3] text-center font-semibold px-7"
                        onClick={() => hanaleModal(addeVisa)}
                    >
                        Update
                    </button>
                    <button onClick={() => handleDelete(_id)} className="py-3 rounded-lg bg-[#007BFF] hover:bg-[#0056B3] text-center font-semibold px-7"
                    >
                        Delete
                    </button>
                </div>
                {/* Use a unique ID for the modal */}
                <dialog id={`modal_${_id}`} className="modal">
                    <div className="modal-box">
                        <form method="dialog">
                            {/* Close button */}
                            <button className="btn btn-sm btn-circle btn-ghost absolute right-2 top-2">
                                ✕
                            </button>
                        </form>
                        <h3 className="font-bold text-lg">{update.name}</h3>



                        <div className='flex flex-col justify-center  items-center py-10 px-3'>
                            <h1 className='text-center text-2xl md:text-4xl font-bold my-4  '>Add add your visa</h1>
                            <div className="card  w-full  shrink-0 shadow-2xl max-w-[600px]">
                                <form onSubmit={handleForm} className="card-body">
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Country Photo</span>
                                        </label>
                                        <input type="text" name='photo' defaultValue={update.photo} placeholder="Country Photo" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Country Name</span>
                                        </label>
                                        <input type="text" name='name' defaultValue={update.name} placeholder="Country Name" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Visa Type</span>
                                        </label>
                                        <select className='border py-3 px-4 rounded-lg' name="visaType" id="" defaultValue={update.visaType}>
                                            <option value="Select yout visa type">Select yout visa type</option>
                                            <option value="Student Visa">Student Visa</option>
                                            <option value="Tourist visa">Tourist visa</option>
                                            <option value="Official visa">Official visa</option>
                                        </select>
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Processing Time</span>
                                        </label>
                                        <input type="date" name='time' defaultValue={update.time} placeholder="Processing time" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Age_restriction</span>
                                        </label>
                                        <input type="number" name='age' defaultValue={update.age} placeholder="Age_restriction" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Fee</span>
                                        </label>
                                        <input type="number" name='fee' defaultValue={update.fee} placeholder="Fee" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Validity</span>
                                        </label>
                                        <input type="text" name='validity' defaultValue={update.validity} placeholder="Validity" className="input input-bordered" required />
                                    </div>
                                    <div className="form-control">
                                        <label className="label">
                                            <span className="label-text">Application_method</span>
                                        </label>
                                        <select className='border py-3 px-4 rounded-lg' name="method" defaultValue={update.method} id="">
                                            <option value="Application_method.">Application_method</option>
                                            <option value="Online">Online</option>
                                            <option value="In-person">In-person</option>
                                        </select>
                                    </div>




                                    <div>
                                        <input type="checkbox" name="passpord" id="" defaultValue={update.passpord} value={'Valid passport'} /> Valid passport
                                    </div>
                                    <div>
                                        <input type="checkbox" name="photograph" id="" defaultValue={update.photograph} value={'Recent passport-sized photograph'} /> Recent passport-sized photograph
                                    </div>
                                    <div>
                                        <input type="checkbox" name="applicationForm" defaultValue={update.applicationForm} id="" value={'Visa application form'} /> Visa application form
                                    </div>

                                    <textarea className='border rounded-lg px-3' rows='4' name="discrip" id="" defaultValue={update.discrip} placeholder='Description' required></textarea>

                                    <div className="form-control mt-6">
                                        <button className="btn btn-primary">Add Visa</button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </dialog>
            </div>
        </div>
    );
};

export default MyAddedVisaCard;
// const  { name, photo, visaType, time, email,age,validity,method,passpord,photograph,applicationForm,discrip,fee } = update