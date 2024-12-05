import React from 'react';
import { useLoaderData } from 'react-router-dom';

const Details = () => {
    const singleVisa = useLoaderData()
    console.log(singleVisa)
    return (
        <div>
            i am details : {singleVisa.name}
        </div>
    );
};

export default Details;