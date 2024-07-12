import Container from "../../components/Container/Container";
import ExtraSection from "../../components/ExtraSection/ExtraSection";
import FeaturedProducts from "../../components/FeaturedProducts/FeaturedProducts";
import Service from "../../components/Service/Service";
import Slider from "../../components/Slider/Slider";

const Home = () => {
    return (
        <Container>
            <Slider/>
            <Service/>
            <FeaturedProducts/>
            <ExtraSection/>
        </Container>
    );
};

export default Home;