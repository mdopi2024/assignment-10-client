import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { useNavigate } from 'react-router-dom';

const ForgetPass = () => {
    const {resetPass}=useContext(AuthContext)
    const navigate =useNavigate()
    const handleForm = e => {
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
       resetPass(email)
       .then(result=>{
        console.log(result)
        window.location.href ='https://mail.google.com/mail/u/0/#inbox'
       }).catch(error=>{
        console.log(error.code)
       })
    }
    const goBack=()=>{
       navigate(-1)
    }
    return (
        <div className="hero min-h-screen bg-base-200 ">
            <div className="hero-content flex flex-col md:min-w-[500px] ">
                <h1 className='text-3xl font-bold md:text-4xl'>Reset your password</h1>
                <div className="card bg-base-100 w-full min-w-lg  shrink-0 shadow-2xl">
                    <form onSubmit={handleForm} className="card-body">
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>

                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Reset password</button>
                        </div>
                    </form>

                </div>
                <div>
                    <button onClick={goBack}  className='font-bold btn btn-outline btn-primary'>Go back</button>
                </div>

            </div>

        </div>
    );
};

export default ForgetPass;