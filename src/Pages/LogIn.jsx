import React, { useContext } from 'react';
import { FcGoogle } from 'react-icons/fc';
import { Link, useNavigate } from 'react-router-dom';
import { AuthContext } from '../AuthProvider/AuthProvider';

const LogIn = () => {
    const {googleLogIn,logInWithEmail}=useContext(AuthContext)
    const navigate = useNavigate()

    const handleGoogleLogIn= ()=>{
         googleLogIn()
         .then(result=>{
           navigate('/')
         }).catch(error=>{
            console.log(error.code)
         })
    }

    const handleForm=e=>{
        e.preventDefault();
        const form = e.target;
        const email = form.email.value;
        const password = form.password.value;
        logInWithEmail(email,password)
        .then(result=>{
            navigate('/')
        }).catch(error=>{
            console.log(error)
        })
    }

    return (
        <div className="hero bg-base-200 ">
            <div className="hero-content flex flex-col md:min-w-[500px] ">
                <h1 className='text-3xl font-bold md:text-4xl'>Login your acount</h1>
                <div className="card bg-base-100 w-full min-w-lg  shrink-0 shadow-2xl">
                    <form onSubmit={handleForm} className="card-body">
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
                            <label className="label">
                                <Link to='/forgetPass' className="label-text-alt link link-hover">Forgot password?</Link>
                            </label>
                        </div>
                        <div className="form-control mt-6">
                            <button className="btn btn-primary">Login</button>
                        </div>
                    </form>
                    <div className='text-center'>
                        <p className='mb-2'>Don't have an accout <Link to='/register'><span className='text-red-600 font-semibold'>Register ?</span> </Link></p>
                    </div>
                </div>
                <div onClick={handleGoogleLogIn} className='flex justify-center items-center gap-3 font-bold bg-white py-2 px-4 rounded-xl'> <FcGoogle className='text-3xl' />Login with Google </div>
            </div>
          
        </div>
    );
};

export default LogIn;