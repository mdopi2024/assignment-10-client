import React from 'react';
import { Helmet } from 'react-helmet';

const Helmate = ({title}) => {
    return (
       <Helmet> <title>NextStep Visa|{title}</title></Helmet>
    );
};

export default Helmate;