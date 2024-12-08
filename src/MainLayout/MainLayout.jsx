import React from 'react';
import Header from '../components/Header/Header';
import { Outlet } from 'react-router-dom';
import Footer from '../components/Footer';

const MainLayout = () => {
    return (
        <div>
           <nav>
           <Header></Header>
           </nav>
            <div className=''>
                <Outlet></Outlet>
            </div>
            <div>
                <Footer></Footer>
            </div>
        </div>
    );
};

export default MainLayout;