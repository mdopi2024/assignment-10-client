import React from 'react';

const Modal = () => {
    const handleForm =e=>{
        e.preventDefault()
        const form = e.target;
        const email = form.email.value;
        const firstName = form.firstName.value;
        const lastName = form.lastName.value;
        const date = form.date.value;
        const fee = form.fee.value;
        console.log(email,firstName,lastName,date,fee)
    }
    return (
        <div>
            <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                <div className="modal-box ">
                <h1 className='text-center text-3xl md:text-4xl font-bold my-5 text-blue-600'>Apply for the visa</h1>
                    <div className="card bg-base-100 mx-auto w-full max-w-sm shrink-0 shadow-2xl">
                      
                        <form onSubmit={handleForm} className="card-body">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Email</span>
                                </label>
                                <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">First Name</span>
                                </label>
                                <input type="Text" name='firstName'  placeholder="Frist Name" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Last Name</span>
                                </label>
                                <input type="Text" name='lastName' placeholder="Last Name" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Apply Date</span>
                                </label>
                                <input type="date" name='date' placeholder="Last Name" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text">Visa Fee</span>
                                </label>
                                <input type="number" name='fee' placeholder="Visa Fee" className="input input-bordered" required />
                               
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn bg-[#007BFF] hover:bg-[#0056B3]">Apply</button>
                            </div>
                        </form>
                    </div>
                    <div className="modal-action">
                        <form method="dialog">
                            <button className="btn">Close</button>
                        </form>
                    </div>
                </div>
            </dialog>
        </div>
    );
};

export default Modal;