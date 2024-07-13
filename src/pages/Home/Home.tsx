import Container from "../../components/Container/Container";
import ExtraSection from "../../components/ExtraSection/ExtraSection";
import FeaturedBrand from "../../components/FeaturedBrand/FeaturedBrand";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Service from "../../components/Service/Service";
import Slider from "../../components/Slider/Slider";
import Testimonials from "../../components/Testimonials/Testimonials";

const Home = () => {
    return (
        <Container>
            <Slider/>
            <Service/>
            <FeaturedProducts/>
            <FeaturedBrand/>
            <Testimonials/>
            <ExtraSection/>
        </Container>
    );
};

export default Home;