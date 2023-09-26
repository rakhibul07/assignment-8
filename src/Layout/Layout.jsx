
import Navbar from '../components/Header/Navbar/Navbar';
import { Outlet } from 'react-router-dom';

const Layout = () => {
    return (
        <div className='max-w-7xl mx-auto pb-10'>
           
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default Layout;