import SectionTitle from "../SectionTitle/SectionTitle";
import { motion } from "framer-motion";

const FeaturedBrand = () => {
    const keyboardBrands = [
        {
          logo: "/razer.png",
          alt: "Razer Logo",
        },
        {
          logo: "/rog.png",
          alt: "Rog Logo",
        },
        {
          logo: "/logitech.png",
          alt: "Logitech Logo",
        },
        {
          logo: "/rapoo .png",
          alt: "Rapoo Logo",
        },
        {
          logo: "/monsGreek.png",
          alt: "MonsGreek Logo",
        },
        {
          logo: "/A4Tech-Logo.png",
          alt: "A4Tech Logo",
        },
        {
          logo: "/gigabyte.png",
          alt: "Gigabyte Logo",
        },
      ];
      

      return (
        <div>
        <SectionTitle heading="Featured Brands" subHeading="Explore our featured mechanical keyboard brands..." />
        <div className="pt-10">
          <div className="flex flex-col md:flex-wrap lg:flex-row justify-around items-center gap-6">
            {keyboardBrands.map((brand, index) => (
              <motion.img
                src={brand.logo}
                alt={brand.alt}
                className="max-h-12 h-auto max-w-full"
                key={index}
                initial={{ y: 0 }}
                animate={{ y: [0, -10, 0] }}
                transition={{ repeat: Infinity, duration: 2, ease: "easeInOut", delay: index * 0.2 }}
              />
            ))}
          </div>
        </div>
      </div>
      );
    };
    

export default FeaturedBrand;