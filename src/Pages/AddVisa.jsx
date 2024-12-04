import React from 'react';

const AddVisa = () => {
    return (
        <div className='flex justify-center items-center py-10'>
            <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
                <form className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country Photo</span>
                        </label>
                        <input type="text" placeholder="Country Photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input type="text" placeholder="Country Name" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Visa Type</span>
                        </label>
                        <select className='border py-3 px-4 rounded-lg' name="visaType" id="">
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
                        <input type="date" placeholder="Processing time" className="input input-bordered" required />
                    </div>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Visa</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVisa;