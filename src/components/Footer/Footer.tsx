import { FaEnvelope, FaFacebookF, FaLocationArrow, FaPhone, FaTwitter, FaYoutube } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Container from '../Container/Container';

const Footer = () => {
    return (
        <Container>
            <div className='bg-slate-800 text-slate-100  mt-10 py-10'>
            <div className='max-w-screen-xl md:mx-auto mx-10 py-5 grid grid-cols-1 md:grid-cols-3 md:justify-items-center gap-10 md:gap-20'>
                <div>
                     <Link to='/' className='flex-grow flex justify-center lg:justify-start'>
                    <h2 className='text-3xl font-bold text-black'>
                    <span className='text-slate-500'>Click</span>Craft
                   </h2>
                   </Link>
                    <p className='my-4 text-lg'>We support programs that create advancement for people</p>
                    <div className='text-lg flex gap-4'>
                        <div className='p-2 border-2 rounded-full border-slate-400 text-slate-500 hover:bg-slate-400 hover:text-slate-100 '>
                            <FaFacebookF className='' />
                        </div>
                        <div className='p-2 border-2 rounded-full border-slate-400 text-slate-500 hover:bg-slate-400 hover:text-slate-100 '>
                            <FaYoutube />
                        </div>
                        <div className='p-2 border-2 rounded-full border-slate-400 text-slate-500 hover:bg-slate-400 hover:text-slate-100 '>
                            <FaTwitter />
                        </div>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-5'>Useful Links</h1>
                    <div className='flex flex-col gap-2'>
                        <Link to="/about-us">
                            <h1>About Us</h1>
                        </Link>
                        <Link to="/contact-us">
                            <h1>Contact Us</h1>
                        </Link>
                        <Link to="/">
                            <h1>Privacy Policy</h1>
                        </Link>
                        <Link to="/">
                            <h1>Terms & Condition</h1>
                        </Link>
                    </div>
                </div>
                <div>
                    <h1 className='text-xl font-semibold mb-5'>Contact Us</h1>
                    <div className='flex flex-col gap-2'>
                        <div className='flex items-center gap-3'>
                            <FaPhone className='text-slate-500' /> <h1>+88019202020</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaEnvelope className='text-slate-500' /> <h1>clickcraft@gmail.com</h1>
                        </div>
                        <div className='flex items-center gap-3'>
                            <FaLocationArrow className='text-slate-500' /> <h1>Dhaka, Bangladesh</h1>
                        </div>
                    </div>
                </div>
            </div>
            <div className='text-center mt-5 border-t-2 mx-10 border-gray-500'>
                <h1 className='mt-5'>
                    &copy; Copyright 2024 TechAgency All rights reserved.
                </h1>
            </div>
        </div>
        </Container>
    );
};

export default Footer;