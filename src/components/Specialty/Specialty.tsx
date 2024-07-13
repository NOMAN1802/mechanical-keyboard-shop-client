import Collaboration from "../Collaboration/Collaboration";
import SectionTitle from "../SectionTitle/SectionTitle";


const Specialty = () => {
    return (
        <div>
            <SectionTitle heading="Specialty" subHeading="Mechanical Keyboards speciality"/>

            <div className='my-10 max-w-screen-xl md:mx-auto mx-10 md:flex justify-center items-start gap-10'>
                <div className='md:w-1/2 p-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
                    <div>
                        <img src="https://img.freepik.com/free-photo/view-illuminated-neon-gaming-keyboard-setup-controller_23-2149529367.jpg?t=st=1720867534~exp=1720871134~hmac=9c49a8b2f4261a585e944c1713cfee619bce16fde670fb6dc38c8fd21a60a13c&w=1060" alt="" />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-photo/programming-background-with-person-working-with-codes-computer_23-2150010125.jpg?t=st=1720866885~exp=1720870485~hmac=a65cf9a92ad78fff39db3a62b2594516bc0f4606237ba293a5da268c3fa419a4&w=1060" alt="" />
                        <img className="my-2" src="https://img.freepik.com/free-vector/programming-concept-illustration_114360-1351.jpg?t=st=1720867881~exp=1720871481~hmac=e0411fa075eb4290ca3a0fae546407f23b82e43c7c6446abbd77397368483ee2&w=740" alt="" />
                    </div>
                </div>
                <div className='md:w-1/2 p-4'>
                    <h1 className='md:text-4xl text-2xl font-semibold  text-blue-950 mb-2'>
                    Why Choose Mechanical Keyboards?
                    </h1>
                    <p className='md:text-xl mt-4 text-lg'>
                    Mechanical keyboards offer superior tactile feedback and durability compared to membrane keyboards. Each key switch is designed to provide a distinct, satisfying feel, enhancing typing accuracy and speed. They are built to last, with many models rated for millions of key presses. Additionally, mechanical keyboards often feature customizable keys and vibrant backlighting, making them ideal for both gaming and professional use.
                    </p>
                </div>
            </div>

            <Collaboration/>
            
        </div>
    );
};

export default Specialty;