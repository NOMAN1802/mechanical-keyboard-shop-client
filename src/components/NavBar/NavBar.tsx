/* eslint-disable no-unused-vars */

import { Link, NavLink } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useAppDispatch, useAppSelector } from '../../redux/hooks';
import { getCartTotal } from '../../redux/features/cart/cartSlice';


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const dispatch = useAppDispatch()
  const {cart , totalQuantity} = useAppSelector((state)=> state.allCart)
  useEffect(() => {
    dispatch(getCartTotal())
  }, [cart,dispatch]) 
  

  const menuVariants = {
    open: {
      opacity: 1,
      height: 'auto',
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    },
    closed: {
      opacity: 0,
      height: 0,
      transition: {
        duration: 0.5,
        ease: 'easeInOut'
      }
    }
  };
  const toggleMenu = () => {
        setIsOpen(!isOpen);
      };
  return (
    <nav className='z-50'>
      <div className='lg:h-10vh flex flex-col lg:flex-row lg:justify-between lg:p-5 px-6 lg:px-20 border-b'>
        <div className='flex items-center justify-between'>
        <button className='lg:hidden focus:outline-none flex-col-reverse '>
          {totalQuantity}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
              />
            </svg>
           </button>

          
          <Link to='/' className='flex-grow flex justify-center lg:justify-start'>
          <h2 className='text-3xl font-bold text-black'>
            <span className='text-slate-500'>Click</span>Craft
          </h2>
        </Link>
          <button
          className="focus:outline-none lg:hidden"
           onClick={toggleMenu}
          aria-label="Menu"
        >
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="h-6 w-6 text-black"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          ) : (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 text-black"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          )}
         </button> 
        
        </div>
        
        
        <AnimatePresence>
        {isOpen ? (
          <motion.ul
            initial="closed"
            animate="open"
            exit="closed"
            variants={menuVariants}
            className="lg:flex lg:gap-10 lg:mr-16 mt-4 lg:mt-0 text-[18px] lg:flex-row flex flex-col"
          >
          <li>
            <NavLink
              onClick={() => setIsOpen(false)}
              to="/"
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="Home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
            onClick={() => setIsOpen(false)}
              to='/products'
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="Products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
            onClick={() => setIsOpen(false)}
              to='/about-us'
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="About Us"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
            onClick={() => setIsOpen(false)}
              to='/contact-us'
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="Contact Us"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/dashboard'
              onClick={() => setIsOpen(false)}
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="Dashboard"
            >
              Dashboard
            </NavLink>
          </li>
          </motion.ul>
        ) : 

        (
          <ul
          className={`${isOpen ? 'flex flex-col' : 'hidden'
            } lg:flex lg:gap-10 lg:mr-16 mt-4 lg:mt-0 text-[18px] lg:flex-row`}
        >
          <li>
            <NavLink
              
              to="/"
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="Home"
            >
              Home
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/products'
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="Products"
            >
              Products
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/about-us'
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="About Us"
            >
              About Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/contact-us'
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="Contact Us"
            >
              Contact Us
            </NavLink>
          </li>
          <li>
            <NavLink
              to='/dashboard'
              className={({ isActive }) => (isActive ? "active1" : "default")}
              title="Dashboard"
            >
              Dashboard
            </NavLink>
          </li>

        </ul>
        )
        
        }
      </AnimatePresence>
                  
      <button className='hidden lg:flex items-center'>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth="1.5"
            stroke="currentColor"
            className="size-6"
          >
            {cart.length}
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M2.25 3h1.386c.51 0 .955.343 1.087.835l.383 1.437M7.5 14.25a3 3 0 0 0-3 3h15.75m-12.75-3h11.218c1.121-2.3 2.1-4.684 2.924-7.138a60.114 60.114 0 0 0-16.536-1.84M7.5 14.25 5.106 5.272M6 20.25a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Zm12.75 0a.75.75 0 1 1-1.5 0 .75.75 0 0 1 1.5 0Z"
            />
          </svg>
        </button>
      </div>
    </nav>
  );
};
export default NavBar;
