import SectionTitle from "../SectionTitle/SectionTitle";
import { Card } from 'antd';
import { FaShippingFast, FaWallet } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { AiOutlineDollar } from "react-icons/ai";
import { motion } from "framer-motion";

const Service = () => {
  return (
    <div>
      <SectionTitle 
        subHeading={"Facilities provided by us"}
        heading={"ClickCraft Special"}
      >
      </SectionTitle>

      <div className="pt-10 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          whileHover={{ scale: 1.05 }}
          className="transition-transform duration-300"
        >
          <Card className="bg-gradient-to-r from-neutral-500 to-slate-300 p-4 rounded-2xl">
            <div className="flex justify-between items-start">
            <div>
            <p className="text-3xl p-2 text-slate-500"><FaShippingFast /></p>
            <p className="text-xl p-2 font-semibold text-slate-600">Free Shipping</p>
            <p className="text-thin p-2 text-slate-600">Order Over $500 </p>
            </div>
            <div>
            <p className="text-5xl p-2 text-slate-500 opacity-25"><FaShippingFast /></p>
            </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.7 }}
          whileHover={{ scale: 1.05 }}
          className="transition-transform duration-300"
        >
          <Card className="bg-gradient-to-r from-yellow-300 to-slate-300 p-4 rounded-2xl">
            <div className="flex justify-between items-start">
                <div>
                <p className="text-3xl p-2 text-slate-500"><FaWallet /></p>
                <p className="text-xl p-2 font-semibold text-slate-600">Quick Payment</p>
                <p className="text-thin p-2 text-slate-600">100% Secure</p>
                </div>
                <div>
                <p className="text-5xl p-2 text-slate-500 opacity-25"><FaWallet /></p>
                </div>
            </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.9 }}
          whileHover={{ scale: 1.05 }}
          className="transition-transform duration-300"
        >
          <Card className="bg-gradient-to-l from-blue-300 to-slate-300 p-4 rounded-2xl">
           <div className="flex justify-between items-start">
            <div>
            <p className="text-3xl p-2 text-slate-500"><AiOutlineDollar /></p>
            <p className="text-xl p-2 font-semibold text-slate-600">Big Cashback</p>
            <p className="text-thin p-2 text-slate-600">Over 40% Cashback</p>
            </div>
            <div>
            <p className="text-5xl p-2 text-slate-500 opacity-25"><AiOutlineDollar /></p>
            </div>
           </div>
          </Card>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.1 }}
          whileHover={{ scale: 1.05 }}
          className="transition-transform duration-300"
        >
          <Card className="bg-gradient-to-l from-sky-300 to-slate-300 p-4 rounded-2xl">
            <div className="flex justify-between items-start">
                <div>
                <p className="text-3xl p-2 text-slate-500"><FaRegMessage /></p>
                <p className="text-xl p-2 font-semibold text-slate-600">24/7 support</p>
                <p className="text-thin p-2 text-slate-600">Ready For You</p>
                </div>
                <div>
                <p className="text-5xl p-2 text-slate-500 opacity-25"><FaRegMessage /></p>  
                </div>
            </div>
          </Card>
        </motion.div>
      </div>
    </div>
  );
};

export default Service;
