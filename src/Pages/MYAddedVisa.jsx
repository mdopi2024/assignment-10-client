import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../AuthProvider/AuthProvider';

const MYAddedVisa = () => {
    const {user}=useContext(AuthContext)
    console.log(user.email)
    const [addeVisa,setAddedVisa]=useState([])
    useEffect(()=>{
      fetch(`http://localhost:5000/visa/${user.email}`)
      .then(res=>res.json())
      .then(data=>{
        console.log(data)
      })

    },[])
    return (
        <div>
            my added visa
        </div>
    );
};

export default MYAddedVisa;