/* eslint-disable no-unused-vars */
import { useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { FaUsersGear, FaHome } from 'react-icons/fa';
import { IoBagAddSharp } from "react-icons/io5";
import { AiOutlineBars } from 'react-icons/ai';
import { MdManageAccounts } from 'react-icons/md';
import { motion, AnimatePresence } from 'framer-motion';
import Container from '../Container/Container';

const Sidebar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleSidebar = () => {
    setIsOpen(!isOpen);
  };

  const closeSidebar = () => {
    setIsOpen(false);
  };

  return (
    <Container>
      {/* Small Screen Navbar */}
      <div className='bg-slate-100 text-slate-600 flex justify-between md:hidden'>
        <div className='block cursor-pointer p-4 font-bold '>
          <Link to='/' className='flex-grow flex justify-center'>
            <h2 className='text-3xl font-bold text-slate-400 text-center'>
              <span className='text-slate-300'>Click</span>Craft
            </h2>
          </Link>
        </div>
        <button
          onClick={toggleSidebar}
          className='mobile-menu-button p-4 focus:outline-none focus:bg-slate-200'
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
            <AiOutlineBars className='h-6 w-6' />
          )}
        </button>
      </div>

      {/* Sidebar */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ x: '-100%' }}
            animate={{ x: 0 }}
            exit={{ x: '-100%' }}
            transition={{ duration: 0.3 }}
            className='z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-slate-100 w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform md:translate-x-0 transition duration-200 ease-in-out'
          >
            <div>
              {/* Branding & Profile Info */}
              <Link to='/' className='flex-grow flex justify-center'>
                <h2 className='text-3xl font-bold text-slate-400 text-center'>
                  <span className='text-slate-300'>Click</span>Craft
                </h2>
              </Link>

              {/* Nav Items */}
              <div className='flex flex-col justify-between flex-1 mt-6'>
                <nav>
                  <>
                    {/* Menu Links start */}
                    <NavLink
                      to='/dashboard/add-product'
                      className={({ isActive }) => `flex items-center px-4 py-2 mt-5 text-slate-600 ${isActive ? "active1" : "default"}`}
                      onClick={closeSidebar}
                    >
                      <IoBagAddSharp className='w-6 h-6' />
                      <span className='mx-4 font-medium'>Add Product</span>
                    </NavLink>
                    <NavLink
                      to='/dashboard/manage-products'
                      className={({ isActive }) => `flex items-center px-4 py-2 mt-5 text-slate-600 ${isActive ? "active1" : "default"}`}
                      onClick={closeSidebar}
                    >
                      <MdManageAccounts className='w-6 h-6' />
                      <span className='mx-4 font-medium'>Manage Products</span>
                    </NavLink>
                  </>
                </nav>
              </div>
            </div>
            <div>
              <hr />
              <Link
                to='/'
                className='flex w-full items-center px-4 py-2 mt-5 text-slate-600 hover:bg-slate-300 hover:text-slate-700 transition-colors duration-300 transform'
                onClick={closeSidebar}
              >
                <FaHome className='w-6 h-6' />
                <span className='mx-4 font-medium'>Home</span>
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Always visible sidebar for large screens */}
      <div className='hidden md:flex md:fixed md:flex-col md:justify-between md:overflow-x-hidden md:bg-slate-100 md:w-64 md:space-y-6 md:px-2 md:py-4 md:inset-y-0 md:left-0'>
        <div>
          {/* Branding & Profile Info */}
          <Link to='/' className='flex-grow flex justify-center'>
            <h2 className='text-3xl font-bold text-slate-400 text-center'>
              <span className='text-slate-300'>Click</span>Craft
            </h2>
          </Link>

          {/* Nav Items */}
          <div className='flex flex-col justify-between flex-1 mt-6'>
            <nav>
              <>
                {/* Menu Links start */}
                <NavLink
                  to='/dashboard/add-product'
                  className={({ isActive }) => `flex items-center px-4 py-2 mt-5 text-slate-600 ${isActive ? "active1" : "default"}`}
                >
                  <IoBagAddSharp className='w-6 h-6' />
                  <span className='mx-4 font-medium'>Add Product</span>
                </NavLink>
                <NavLink
                  to='/dashboard/manage-products'
                  className={({ isActive }) => `flex items-center px-4 py-2 mt-5 text-slate-600 ${isActive ? "active1" : "default"}`}
                >
                  <MdManageAccounts className='w-6 h-6' />
                  <span className='mx-4 font-medium'>Manage Products</span>
                </NavLink>
              </>
            </nav>
          </div>
        </div>
        <div>
          <hr />
          <Link
            to='/'
            className='flex w-full items-center px-4 py-2 mt-5 text-slate-600 hover:bg-slate-300 hover:text-slate-700 transition-colors duration-300 transform'
          >
            <FaHome className='w-6 h-6' />
            <span className='mx-4 font-medium'>Home</span>
          </Link>
        </div>
      </div>
    </Container>
  );
};

export default Sidebar;
