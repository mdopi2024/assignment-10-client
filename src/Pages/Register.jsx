import React, { useContext, useState } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const Register = () => {
    const { registerWithEmal,googleLogIn,updateUserProfile } = useContext(AuthContext)
    const navigate = useNavigate()
    const [showErr, setShowErr] = useState('')

    const handleGoogleLogIn = () => {
        googleLogIn()
            .then(result => {
                navigate('/')
            }).catch(error => {
               setShowErr(error.code)
            })
    }



    const handleForm = e => {
        e.preventDefault();

        const form = e.target;
        const name = form.name.value;
        const photo = form.photo.value;
        const email = form.email.value;
        const password = form.password.value;
        const regex = /^(?=.*[A-Z])(?=.*[a-z]).{6,}$/
        if (!regex.test(password)) {
            return setShowErr('Password must be at least 6 characters long, with at least one uppercase and one lowercase letter.')
        }
        registerWithEmal(email, password)
            .then(result => {
                updateUserProfile({displayName:name,  photoURL:photo})
                .then(result=>{
                    console.log(result)
                }).catch(error=>{
                    setShowErr(error.code)
                })
                navigate('/')
            }).catch(error => {
                console.log(error.code)
                setShowErr(error.code)

            })
    }
    return (
        <div className="hero  my-10 ">
            <div className="hero-content flex flex-col md:w-[500px] ">
                <h1 className='text-3xl text-center font-bold md:text-4xl'>Register your acount</h1>
                <div className="card bg-base-100 w-full min-w-lg  shrink-0 shadow-2xl">
                    <form onSubmit={handleForm} className="card-body">

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Name</span>
                            </label>
                            <input type="text" name='name' placeholder="Name" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Photo-URL</span>
                            </label>
                            <input type="text" name='photo' placeholder="Photo-URL" className="input input-bordered" required />
                        </div>

                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Email</span>
                            </label>
                            <input type="email" name='email' placeholder="email" className="input input-bordered" required />
                        </div>
                        <div className="form-control">
                            <label className="label">
                                <span className="label-text">Password</span>
                            </label>
                            <input type="password" name='password' placeholder="password" className="input input-bordered" required />

                        </div>
                        <div>
                            {
                                showErr && <p className='text-center font-semibold text-red-600'>{showErr}</p>
                            }
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Register</button>
                        </div>
                    </form>
                    <div className='text-center'>
                        <p className='mb-2'>Allready have an accout <Link to='/login'><span className='text-red-600 font-semibold'>Login ?</span> </Link></p>
                    </div>
                </div>
                <div onClick={handleGoogleLogIn} className='flex justify-center items-center gap-3 font-bold bg-gray-100 py-2 px-4 rounded-xl'> <FcGoogle className='text-3xl' />Login with Google </div>
            </div>

        </div>
    );
};

export default Register;