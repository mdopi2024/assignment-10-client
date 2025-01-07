import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { data } from 'autoprefixer';
import Swal from 'sweetalert2';
import Helmate from '../components/Helmate';

const AddVisa = () => {
    const { user } = useContext(AuthContext)
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
        // console.log({name,photo,visaType,age,validity,method,passpord,photograph,applicationForm,discrip})


        const email = user.email
        const visa = { name, photo, visaType, time, email,age,validity,method,passpord,photograph,applicationForm,discrip,fee }
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
        <div className='flex flex-col justify-center  items-center py-10 px-3'>
            <Helmate title='Add Visa'></Helmate>
            <h1 className='text-center text-2xl md:text-4xl font-bold my-4  '>Add add your visa</h1>
            <div className="card  w-full  shrink-0 shadow-2xl max-w-[600px]">
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
                    <div className="form-control">
                        <label className="label">
                            <span className="label-text">Age_restriction</span>
                        </label>
                        <input type="number" name='age' placeholder="Age_restriction" className="input input-bordered" required />
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
                            <span className="label-text">Application_method</span>
                        </label>
                        <select className='border py-3 px-4 rounded-lg' name="method" id="">
                            <option value="Application_method.">Application_method</option>
                            <option value="Online">Online</option>
                            <option value="In-person">In-person</option>
                        </select>
                    </div>




                    <div>
                        <input type="checkbox" name="passpord" id="" value={'Valid passport'} /> Valid passport
                    </div>
                    <div>
                        <input type="checkbox" name="photograph" id="" value={'Recent passport-sized photograph'} /> Recent passport-sized photograph
                    </div>
                    <div>
                        <input type="checkbox" name="applicationForm" id="" value={'Visa application form'} /> Visa application form
                    </div>

                    <textarea className='border rounded-lg px-3' rows='4' name="discrip" id="" placeholder='Description' required></textarea>

                    <div className="form-control mt-6">
                        <button className="btn btn-primary">Add Visa</button>
                    </div>
                </form>
            </div>
        </div>
    );
};

export default AddVisa;