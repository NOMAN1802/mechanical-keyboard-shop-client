/* eslint-disable no-unused-vars */ 
import SectionTitle from '../SectionTitle/SectionTitle';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import { Rating } from '@smastrom/react-rating';
import '@smastrom/react-rating/style.css';
import { FaQuoteLeft } from "react-icons/fa";
import Container from '../Container/Container';
import { useEffect, useState } from 'react';

interface Review {
    _id: string;
    image: string;
    name: string;
    rating: number;
    details: string;
  }
  

  const Testimonials = () => {
    const [reviews, setReviews] = useState<Review[]>([]);
  
    useEffect(() => {
      fetch('/reviews.json')
        .then(res => res.json())
        .then(data => {
          setReviews(data);
        });
    }, []);
  
    return (
      <Container>
        <SectionTitle
          subHeading={'What our client say'}
          heading={'testimonials'}
        />
        <Swiper modules={[Navigation]} navigation>
          {reviews.map(review => (
            <SwiperSlide key={review._id}>
              <div className='flex flex-col items-center mx-24 my-16'>
                <img 
                  src={review.image} 
                  alt={review.name} 
                  className='w-24 h-24 rounded-full object-cover mb-4' 
                />
                <Rating
                  style={{ maxWidth: 180 }}
                  value={review.rating}
                  readOnly
                />
                <FaQuoteLeft className='mt-4 text-3xl' />
                <p className='py-8'>{review.details}</p>
                <h3 className='text-2xl text-orange-400'>{review.name}</h3>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Container>
    );
  };
  
  export default Testimonials;