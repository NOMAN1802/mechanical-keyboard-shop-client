import Container from "../../components/Container/Container";
import React from 'react';
import { FaEnvelope, FaLocationDot, FaPhone } from "react-icons/fa6";
import PageTitle from "../../components/PageTitle/PageTitle";
import { toast } from "sonner";

const ContactUs = () => {

    const handleFormSubmit = (e)=>{
        e.preventDefault();
        const form = e.target;
        const name = form.name.value;
        const email = form.email.value;
        const subject = form.subject.value;
        const message = form.message.value;
        const query = {name: name, email: email, subject: subject, message: message};
        if(query){
            toast.success("Message sent successfully")
            form.reset();
        }

    }
    return (
        <Container>
            <PageTitle heading="Contact Us" subHeading="We are available 24/7"/>
         
            <div className='flex flex-col md:flex-row justify-center items-center gap-10 pt-10'>
                <div className='text-center'>
                    <div className='flex justify-center mb-4'>
                        <FaPhone className='text-6xl text-slate-600'/>
                    </div>
                    <h1 className='text-xl font-semibold text-slate-600'>Telephone</h1>
                    <h1 className="text-slate-600">+88017********</h1>
                    <h1 className="text-slate-600">+88019********</h1>
                </div>
                <div className='text-center border-x-2 p-10'>
                    <div className='flex justify-center mb-4'>
                        <FaEnvelope className='text-6xl text-slate-600'/>
                    </div>
                    <h1 className='text-xl font-semibold text-slate-600'>Our Mail</h1>
                    <h1 className="text-slate-600">techagency01@gmail.com</h1>
                    <h1 className="text-slate-600">techagency3@gmail.com</h1>
                </div>
                <div className='text-center text-slate-600'>
                    <div className='flex justify-center mb-4'>
                        <FaLocationDot className='text-6xl text-slate-600'/>
                    </div>
                    <h1 className='text-xl font-semibold text-slate-600'>Location</h1>
                    <h1 className="text-slate-600">Dhaka, Bangladesh</h1>
                </div>
            </div>
            <div className='max-w-screen-xl md:mx-auto mx-5 my-10'>
                <h1 className='text-2xl text-center my-20 font-semibold text-slate-800'>
                    Get Support From Experience Instructors
                </h1>
                <div className='flex justify-center items-center'>
                    <form action="" className='text-center w-3/4' onSubmit={handleFormSubmit}>
                        <input type="text" name="name" id="" className='p-2 border-2 border-slate-400 rounded text-lg w-full my-2' placeholder='Full Name' required />
                        <input type="email" name="email" id="" className='p-2 border-2 border-slate-400 rounded text-lg w-full my-2' placeholder='Your Email' required />
                        <input type="text" name="subject" id="" className='p-2 border-2 border-slate-400 rounded text-lg w-full my-2' placeholder='Your Subject' required />
                        <textarea name="message" id="" className='w-full h-40 border-2 border-slate-400 rounded p-2 text-lg my-2' placeholder='Your Message'></textarea>
                        <input type="submit" value="Submit" className='w-fit md:w-1/4 my-2 bg-slate-600 hover:bg-slate-800 text-slate-100 text-xl font-semibold  px-4 py-2 rounded-xl' />
                    </form>
                </div>
            </div>
        </Container>
    );
};

export default ContactUs;