import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';

const AddVisa = () => {
    const { user } = useContext(AuthContext)
    const handleForm = e => {
        e.preventDefault()
        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const visaType = form.visaType.value;
        const time = form.time.value;
        const email = user.email
        const visa = { name, photo, visaType, time, email }
        fetch('http://localhost:5000/visas', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(visa)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    Swal.fire({
                        title: 'Success!',
                        text: 'Your visa successfully added',
                        icon: 'success',
                        confirmButtonText: 'Close'
                    })
                }
            })
    }
    return (
        <div className='flex flex-col justify-center  items-center py-10'>
            <h1 className='text-center text-2xl md:text-4xl font-bold my-4'>Add add your visa</h1>
            <div className="card  w-full max-w-sm shrink-0 shadow-2xl">
                <form onSubmit={handleForm} className="card-body">
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country Photo</span>
                        </label>
                        <input type="text" name='photo' placeholder="Country Photo" className="input input-bordered" required />
                    </div>
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Country Name</span>
                        </label>
                        <input type="text" name='name' placeholder="Country Name" className="input input-bordered" required />
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
                        <input type="date" name='time' placeholder="Processing time" className="input input-bordered" required />
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" value={'Valid passport'} /> Valid passport
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" value={'Recent passport-sized photograph'} /> Recent passport-sized photograph
                    </div>
                    <div>
                        <input type="checkbox" name="" id="" value={'Valid passport'} /> Valid passport
                    </div>
                     
                     <textarea className='border rounded-lg ' rows='4' name="" id="" placeholder='Description' required></textarea>

                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Age</span>
                        </label>
                        <input type="number" name='age' placeholder="age" className="input input-bordered" required />
                    </div>
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Fee</span>
                        </label>
                        <input type="number" name='fee' placeholder="Fee" className="input input-bordered" required />
                    </div>
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Validity</span>
                        </label>
                        <input type="text" name='validity' placeholder="Validity" className="input input-bordered" required />
                    </div>
                     <div className="form-control">
                        <label className="label">
                            <span className="label-text">Application Method</span>
                        </label>
                        <input type="text" name='method' placeholder="Application Method" className="input input-bordered" required />
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