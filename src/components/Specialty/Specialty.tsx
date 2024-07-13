import SectionTitle from "../SectionTitle/SectionTitle";
import img from '../../assets/Slider/slider-2.jpg'

const Specialty = () => {
    return (
        <div>
            <SectionTitle heading="Specialty" subHeading="Mechanical Keyboards speciality"/>

            <div className="pt-10 grid sm:grid-cols-1 md:grid-cols-2 bg-slate-100 gap-4">

                <div className="items-center justify-center space-y-6">

                    <h1 className="text-slate-600 text-2xl space-x-4 text-center">Why Choose Mechanical Keyboards?</h1>

                    <p className="text-slate-500 text-lg text-center">
                    Mechanical keyboards offer superior tactile feedback and durability compared to membrane keyboards. Each key switch is designed to provide a distinct, satisfying feel, enhancing typing accuracy and speed. They are built to last, with many models rated for millions of key presses. Additionally, mechanical keyboards often feature customizable keys and vibrant backlighting, making them ideal for both gaming and professional use.
                    </p>
                </div>

                <div>
                    <img className="object-cover rounded-lg" src={img} />
                </div>

            </div>
            
        </div>
    );
};

export default Specialty;