import Button from '../Button/Button';
import { motion } from 'framer-motion';

const SliderText = () => {
    return (
        <motion.div
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            
        >
             <div>
                <p className="text-white  rounded-md p-2 bg-slate-900  bg-opacity-50 md:text-2xl text-center  my-4">
                    Enhance your tech experience 
                    <br /> With ClickCraft
                </p>
                <p className="text-white  rounded-md p-1 bg-slate-900  bg-opacity-50 md:text-xl text-center  my-4">
                    On Sale!!!
                </p>
            </div>
            <div className="w-1/4 mx-auto  mt-4">
                <Button label='Shop Now' small rounded />
            </div>
            </motion.div>
    );
};

export default SliderText;
