import SectionTitle from "../SectionTitle/SectionTitle";
import { motion } from "framer-motion";

const ExtraSection = () => {
  const images = [
    "https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg",
    "https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg",
    "https://images.pexels.com/photos/428333/pexels-photo-428333.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/733872/pexels-photo-733872.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1065084/pexels-photo-1065084.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/834863/pexels-photo-834863.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1212984/pexels-photo-1212984.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/1043474/pexels-photo-1043474.jpeg?auto=compress&cs=tinysrgb&w=600",
    "https://images.pexels.com/photos/762020/pexels-photo-762020.jpeg?auto=compress&cs=tinysrgb&w=600",
  ];

  return (
    <>
      <SectionTitle heading="Our Happy Client" subHeading="We are Happy to serve you" />
      <div className="grid grid-cols-1 md:grid-cols-4 gap-4 pt-10">
        {images.map((src, index) => (
          <motion.div
            key={index}
            className="rounded-lg overflow-hidden"
            initial={{ y: 0 }}
            animate={{ y: [0, -10, 0] }}
            transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: index * 0.2 }}
          >
            <img
              className="h-48 w-full object-cover rounded-lg"
              src={src}
              alt=""
            />
          </motion.div>
        ))}
      </div>
    </>
  );
};

export default ExtraSection;
