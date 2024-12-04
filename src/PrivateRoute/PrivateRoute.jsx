import React, { useContext } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';
import { Navigate } from 'react-router-dom';

const PrivateRoute = ({children}) => {
    const {user,loader}=useContext(AuthContext)
    if(loader){
        return <div className='flex justify-center items-center'> <span className="loading loading-ring loading-lg text-center mx-auto"></span></div>
    }
    if(user){
        return children;
    }
    
    return (
        <Navigate to='/login'></Navigate>
    );
};

export default PrivateRoute;