import Marquee from 'react-fast-marquee';

const Collaboration = () => {

    const companies = [
        {
            id: 1,
            icon: "/rog.png"
        },
        {
            id: 2,
            icon: "/razer.png"
        },
      {
          id: 3,
            icon: "/rapoo .png"
        },
        {
            id: 4,
            icon: "/logitech.png"
        },{
            id: 5,
            icon: "/monsGreek.png"
        },{
            id: 6,
            icon: "/gigabyte.png"
        },{

            id: 7,
            icon: "/A4Tech-Logo.png"
        }
    ]
    
  
    return (
        <div className='max-w-screen-xl md:mx-auto mx-7 my-20'>
            <h1 className='text-center text-xl text-slate-800 font-semibold uppercase'>
                We collaborate with <span className='text-slate-500'>10+</span> companies
            </h1>
            <div className='my-10 md:mx-96'>
                <Marquee className=''>
                    {
                        companies.map(company=>(
                            <div key={company.id} className='mx-5 w-10' >
                                <img src={company.icon} alt="" />
                            </div>
                        ))
                    }
                </Marquee>
            </div>
        </div>
    );
};

export default Collaboration;