/* eslint-disable react/prop-types */
import { useContext, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import logo from "../../assets/Image/a.png";
import { AuthContext } from '../../Provider/AuthProvider';

const NavBar = () => {
    const location = useLocation();
    const { user, logOut } = useContext(AuthContext);
    const [isOpen, setIsOpen] = useState(false);

    const handleLogOut = () => {
        logOut()
            .then(() => { })
            .catch(error => console.log(error));
    }

    const toggleTheme = () => {
        const currentTheme = document.documentElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', newTheme);
    };

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className='relative z-50 text-green-600 mb-30 py-5 bg-emerald-200 bg-opacity-30 flex justify-between items-center px-4 md:px-10'>
            <div className='flex gap-2 items-center'>
                <button onClick={toggleMenu} className="md:hidden p-2 rounded-md focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"}></path>
                    </svg>
                </button>
                <img className='rounded-md w-8 h-8' src={logo} alt="Logo" />
                <h1 className='text-2xl font-semibold'>
                    <span className='text-red-700'>I</span>
                    <span className='text-red-600'>P</span>
                    <span className='text-red-500'>I</span>
                    <span className='text-red-400'>T</span>
                    <span className='text-red-400'> Books</span>
                </h1>
            </div>
            <div className='hidden md:flex gap-6 font-bold'>
                <NavLink to='/' active={location.pathname === '/'}>Home</NavLink>
                <NavLink to='/books' active={location.pathname === '/books' || location.pathname === '/book/:id'}>Books</NavLink>
                <NavLink to='/contact' active={location.pathname === '/contact'}>Contact</NavLink>
                <NavLink to='/about' active={location.pathname === '/about'}>About</NavLink>
                {
                    user ? <>
                        <NavLink to="/dashboard/DashboardHome">Dashboard</NavLink>
                        <NavLink><button onClick={handleLogOut}>LogOut</button></NavLink>
                    </> :
                        <>
                            <NavLink to='/login' active={location.pathname === '/login' || location.pathname === '/pleaseLogin' || location.pathname === '/register'}>Login</NavLink>
                        </>
                }
            </div>
            <div className={`fixed top-0 left-0 w-2/3 h-full bg-white shadow-md transition-transform duration-2000 transform ${isOpen ? "translate-x-0" : "-translate-x-full"} z-50 md:hidden`}>
                <button onClick={toggleMenu} className="p-2 m-4 rounded-md focus:outline-none">
                    <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12"></path>
                    </svg>
                </button>
                <div className='flex flex-col gap-6 font-bold p-6'>
                    <NavLink to='/' active={location.pathname === '/'} onClick={toggleMenu}>Home</NavLink>
                    <NavLink to='/books' active={location.pathname === '/books' || location.pathname === '/book/:id'} onClick={toggleMenu}>Books</NavLink>
                    <NavLink to='/contact' active={location.pathname === '/contact'} onClick={toggleMenu}>Contact</NavLink>
                    <NavLink to='/about' active={location.pathname === '/about'} onClick={toggleMenu}>About</NavLink>
                    {
                        user ? <>
                            <NavLink to="/dashboard/DashboardHome" onClick={toggleMenu}>Dashboard</NavLink>
                            <NavLink><button onClick={handleLogOut}>LogOut</button></NavLink>
                        </> :
                            <>
                                <NavLink to='/login' active={location.pathname === '/login' || location.pathname === '/pleaseLogin' || location.pathname === '/register'} onClick={toggleMenu}>Login</NavLink>
                            </>
                    }
                </div>
            </div>
            <div className='flex items-center gap-5'>
                <label className="swap swap-rotate p-1 rounded-full e">
                    <input onClick={toggleTheme} type="checkbox" />
                    <svg className="swap-off fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M21.64,13a1,1,0,0,0-1.05-.14,8.05,8.05,0,0,1-3.37.73A8.15,8.15,0,0,1,9.08,5.49a8.59,8.59,0,0,1,.25-2A1,1,0,0,0,8,2.36,10.14,10.14,0,1,0,22,14.05,1,1,0,0,0,21.64,13Zm-9.5,6.69A8.14,8.14,0,0,1,7.08,5.22v.27A10.15,10.15,0,0,0,17.22,15.63a9.79,9.79,0,0,0,2.1-.22A8.11,8.11,0,0,1,12.14,19.73Z" />
                    </svg>
                    <svg className="swap-on fill-current w-7 h-7" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <path d="M5.64,17l-.71.71a1,1,0,0,0,0,1.41,1,1,0,0,0,1.41,0l.71-.71A1,1,0,0,0,5.64,17ZM5,12a1,1,0,0,0-1-1H3a1,1,0,0,0,0,2H4A1,1,0,0,0,5,12Zm7-7a1,1,0,0,0,1-1V3a1,1,0,0,0-2,0V4A1,1,0,0,0,12,5ZM5.64,7.05a1,1,0,0,0,.7.29,1,1,0,0,0,.71-.29,1,1,0,0,0,0-1.41l-.71-.71A1,1,0,0,0,4.93,6.34Zm12,.29a1,1,0,0,0,.7-.29l.71-.71a1,1,0,1,0-1.41-1.41L17,5.64a1,1,0,0,0,0,1.41A1,1,0,0,0,17.66,7.34ZM21,11H20a1,1,0,0,0,0,2h1a1,1,0,0,0,0-2Zm-9,8a1,1,0,0,0-1,1v1a1,1,0,0,0,2,0V20A1,1,0,0,0,12,19ZM18.36,17A1,1,0,0,0,17,18.36l.71.71a1,1,0,0,0,1.41,0,1,1,0,0,0,0-1.41ZM12,6.5A5.5,5.5,0,1,0,17.5,12,5.51,5.51,0,0,0,12,6.5Zm0,9A3.5,3.5,0,1,1,15.5,12,3.5,3.5,0,0,1,12,15.5Z" />
                    </svg>
                </label>
                {
                    user ? (
                        <div className="avatar">
                            <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img className='h-10 w-10 border-2 border-white bg-white rounded-full' src={user?.photoURL} alt="user" />
                            </div>
                        </div>
                    ) : (
                        <div className="avatar">
                            <div className="w-8 h-8 rounded-full ring ring-primary ring-offset-base-100 ring-offset-2">
                                <img src="https://img.daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" alt="default avatar" />
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    );
};

const NavLink = ({ to, active, children, onClick }) => {
    return (
        <Link to={to} className={`hover:text-orange-400 ${active ? 'border-b-2 border-emerald-600' : ''}`} onClick={onClick}>
            {children}
        </Link>
    );
};

export default NavBar;
