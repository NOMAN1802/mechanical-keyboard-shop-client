/* eslint-disable no-unused-vars */
import { Link, NavLink } from 'react-router-dom';
import Button from "../Button/Button";
import { useState } from 'react';

// import { AuthContext } from '../../providers/AuthProvider';
//

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);






  return (
    <nav className='z-50'>
      <div className='lg:h-10vh flex flex-col lg:flex-row lg:justify-between lg:p-5 px-6 lg:px-20 border-b'>
        <div className='flex items-center justify-between'>
          <Link to='/'> <h2 className='text-3xl font-bold text-black'><span className='text-slate-500'>Click</span>Craft</h2></Link>
          <button
            className='lg:hidden focus:outline-none'
            
          >
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className={`h-6 w-6 ${isOpen ? 'text-slate-400' : 'text-black'}`}
              fill='none'
              viewBox='0 0 24 24'
              stroke='currentColor'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                strokeWidth='2'
                d='M4 6h16M4 12h16M4 18h16'
              />
            </svg>
          </button>
        </div>
        <ul
          className={`${isOpen ? 'flex flex-col' : 'hidden'
            } lg:flex lg:gap-8 lg:mr-16 mt-4 lg:mt-0 text-[18px] lg:flex-row`}
        >

          <li>
            <NavLink onClick={() => {
              
            }}
              to="/"
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="Home"
            >
              Home
            </NavLink>
          </li>  

          <li>
            <NavLink to='/products'
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="Products"
                 
              >
              Products
            </NavLink>
          </li>

          <li>

            <NavLink to='/about-us'
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="About Us"
                 
              >
              About Us
            </NavLink>
          </li>

          <li>

            <NavLink to='/contact-us'
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="Contact Us"
                 
              >
              Contact Us
            </NavLink>
          </li>

          <li>

            <NavLink to='/dashboard'
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="Dashboard"
                 
              >
              Dashboard
            </NavLink>
          </li>


        </ul>

        <div className='flex items-center'>
          
        </div>
      </div>

    </nav>
  );
};

export default NavBar;