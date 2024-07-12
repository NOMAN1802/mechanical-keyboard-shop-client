import { FaCheck } from "react-icons/fa6";
import { motion } from "framer-motion";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import Button from "../../components/Button/Button";
import { NavLink } from "react-router-dom";

const ConfirmOrder = () => {
  return (
    <Container>
      <PageTitle heading="Order Confirmation" subHeading="Congratulations! Your order was placed successfully" />
      <div className="w-full h-screen bg-slate-100">
        <div className="flex justify-center items-center flex-col mt-24">
          <motion.div
            className="flex justify-center items-center bg-headerText rounded-full w-32 h-32"
            initial={{ scale: 0 }}
            animate={{ scale: [0, 1.2, 1] }}
            transition={{ duration: 0.5, ease: "easeInOut" }}
          >
            <FaCheck className="text-slate-400 text-4xl" />
          </motion.div>
          <motion.div>
          <h2 className="text-xl font-medium mt-2">
            Your order has been confirmed!
          </h2>
          </motion.div>

          <NavLink to="/" className="my-6">
          <motion.div>
          <Button label="Back To Home"/>
          </motion.div>
          </NavLink>
        </div>
      </div>
    </Container>
  );
};

export default ConfirmOrder;
