import React, { useContext, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
import { AuthContext } from '../../AuthProvider/AuthProvider';
import logo from '../../assets/logo2.png'
import { FaRegUserCircle } from 'react-icons/fa';



const Header = () => {
    const { user, singOutUser,toggleValue,setToggleValue } = useContext(AuthContext)
    const link = <>
        <li><NavLink to='/' className={({ isActive }) => isActive ? '!bg-white !text-blue-500 font-bold' : ''}>Home</NavLink></li>
        <li><NavLink to='/allvisa' className={({ isActive }) => isActive ? '!bg-white !text-blue-500 font-bold' : ''}>All Visas</NavLink></li>
        <li><NavLink to='/addvisa' className={({ isActive }) => isActive ? '!bg-white !text-blue-500 font-bold' : ''}>Add Visa</NavLink></li>
        <li><NavLink to='/myaddedvisa' className={({ isActive }) => isActive ? '!bg-white !text-blue-500 font-bold' : ''}>My Added Visa</NavLink></li>
        <li><NavLink to='/visaapplicatin' className={({ isActive }) => isActive ? '!bg-white !text-blue-500 font-bold' : ''}>My Visa applications</NavLink></li>
    </>
    const navigate = useNavigate()
    const handleLogOut = () => {
        singOutUser()
            .then(result => {
                navigate('/login')

            }).catch(error => {
                console.log(error.code)
            })
    }
  
   
    const handleToggle=()=>{
         setToggleValue(!toggleValue)
    }
    return (
        <div className="navbar bg-[#0057b3]  fixed top-0 z-50">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor">
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M4 6h16M4 12h8m-8 6h16" />
                        </svg>
                    </div>
                    <ul
                        tabIndex={0}
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow ">

                        {
                            link
                        }
                    </ul>
                </div>
                <div className='flex justify-center items-center '>
                    <p className="btn btn-ghost text-xl text-black">NextStep Visa</p>
                    <img className='w-20 h-20 object-cover ' src={logo} alt="" />
                </div>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 ">

                    {
                        link
                    }
                </ul>
            </div>
            <div className="navbar-end ">
                <div className="form-control">
                    <label className="label cursor-pointer">
                        <input onClick={handleToggle} type="checkbox" className="toggle" defaultChecked />
                    </label>
                </div>
                {
                    user ? <div className='flex justify-center items-center gap-2'>
                        <button onClick={handleLogOut} className='btn btn-outline btn-primary text-white font-bold'><span className='text-black'>log Out</span></button>
                        <div>
                            {user?.photoURL ? <div className='group'>
                                <p className='absolute top-1 right-2 hidden group-hover:block font-semibold'>{user.displayName}</p>
                                <img  className='w-12 h-12 rounded-full object-cover' src={user?.photoURL} alt="" /></div> : <FaRegUserCircle className='text-4xl' />
                            }
                        </div>


                    </div>
                        :
                        <div>
                            <button className='btn btn-outline btn-primary'>  <Link to='/login' className='text-black font-bold'>Login</Link></button>
                            <button className='btn btn-outline btn-primary '>  <Link to='/register' className='text-black font-bold'>Register</Link></button>
                        </div>
                }
            </div>
        </div>
    );
};

export default Header;