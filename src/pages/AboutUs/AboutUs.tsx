import Collaboration from "../../components/Collaboration/Collaboration";
import Container from "../../components/Container/Container";
import PageTitle from "../../components/PageTitle/PageTitle";
import CountUp from 'react-countup';
const AboutUs = () => {
    return (
        <Container>
            <PageTitle heading="About" subHeading="Stay connected to us..."/>
            <div className='my-10 max-w-screen-xl md:mx-auto mx-10 md:flex justify-center items-start gap-10'>
                <div className='md:w-1/2 p-4 grid grid-cols-1 md:grid-cols-2 items-center gap-10'>
                    <div>
                        <img src="https://img.freepik.com/free-vector/idea-infographic-composition-set_98292-6779.jpg?w=740&t=st=1697049749~exp=1697050349~hmac=79f2e1168d3bb5193f121822599882b75748c5f2a8ccecb26bcbf50982a4bea7" alt="" />
                    </div>
                    <div>
                        <img src="https://img.freepik.com/free-vector/idea-concept-illustration_98292-1742.jpg?w=740&t=st=1697049781~exp=1697050381~hmac=45da2794cb5f04e43826ce4751ab2af9105f01c214a1711723b84fe7fd1a4192" alt="" />
                        <img src="https://img.freepik.com/free-vector/soft-skills-concept-illustration_114360-8834.jpg?w=740&t=st=1697049797~exp=1697050397~hmac=ace94b03b748bf8096c7783bdc5989b1aab52883eb83716ac6ca8b95d47dd0c8" alt="" />
                    </div>
                </div>
                <div className='md:w-1/2 p-4'>
                    <h1 className='md:text-4xl text-2xl font-semibold  text-slate-8000 mb-2'>
                        Whether you want to explore you’ve come to the right place
                    </h1>
                    <p className='md:text-xl mt-4 text-slate-600 text-lg'>
                    ClickCraft is a premier e-commerce company specializing in high-quality mechanical keyboards. Renowned for its vast selection of top brands and innovative designs, ClickCraft caters to both casual users and gaming enthusiasts. With a commitment to excellence, the company ensures each keyboard combines durability, functionality, and style. Exceptional customer service and competitive pricing make ClickCraft a trusted name in the industry. Elevate your typing and gaming experience with ClickCraft's curated collection of mechanical keyboards.
                    </p>
                </div>
            </div>
            <div className='my-4 bg-slate-800 text-slate-100'>
                <div className='max-w-screen-xl md:mx-auto my-10 mx-5'>
                    <h1 className='text-center text-4xl py-10'>Our global community and our course <br /> catalog get bigger every day</h1>
                    <div className='grid md:grid-cols-4 grid-cols-1 justify-items-center py-10 gap-10 text-center'>
                        <div>
                            <h1 className='text-4xl'>
                                <CountUp
                                    start={0}
                                    end={2000}
                                >
                                </CountUp>+
                            </h1>
                            <h1>Product Sells</h1>
                        </div>
                        <div>
                            <h1 className='text-4xl'>
                                <CountUp
                                    start={0}
                                    end={36}
                                >
                                </CountUp>+
                            </h1>
                            <h1>Collaborated Brands</h1>
                        </div>
                        <div>
                            <h1 className='text-4xl'>
                                <CountUp
                                    start={0}
                                    end={10}
                                >
                                </CountUp>+
                            </h1>
                            <h1>Collaborated Companies</h1>
                        </div>
                        <div>
                            <h1 className='text-4xl'>100%</h1>
                            <h1>Satisfaction Rate</h1>
                        </div>

                    </div>
                </div>
               
            </div>
            <div>
                <Collaboration/>
            </div>

        </Container>
    );
};

export default AboutUs;