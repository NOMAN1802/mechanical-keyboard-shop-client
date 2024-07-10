import { Carousel } from 'react-responsive-carousel';
import "react-responsive-carousel/lib/styles/carousel.min.css";
import img1 from '../../assets/Slider/slider-1.jpg';
import img2 from '../../assets/Slider/slider-2.jpg';
import img3 from '../../assets/Slider/slider-3.jpg';
import img4 from '../../assets/Slider/slider-4.jpg';
import { FaArrowLeft, FaArrowRight } from 'react-icons/fa';
import SliderText from './SliderText';

const Slider = () => {

  const arrowStyles = {
    position: 'absolute',
    zIndex: 2,
    top: 'calc(50% - 15px)',
    width: 15,
    height: 15,
    cursor: 'pointer',
    color: '#CBD5E1'
  };

  return (
    <div className="relative">
      <div>
        <Carousel
          className='relative z-10'
          showThumbs={false}
          infiniteLoop
          emulateTouch
          swipeable
          showArrows
          renderArrowPrev={(onClickHandler, hasPrev, label) =>
            hasPrev && (
              <FaArrowLeft
                style={{ ...arrowStyles, left: 15 }}
                onClick={onClickHandler}
                title={label}
              />
            )
          }
          renderArrowNext={(onClickHandler, hasNext, label) =>
            hasNext && (
              <FaArrowRight
                style={{ ...arrowStyles, right: 15 }}
                onClick={onClickHandler}
                title={label}
              />
            )
          }
        >
          <div className="slide">
            <img className="h-2/3 object-cover w-full" src={img1} alt="Slide 1" />
          </div>
          <div className="slide">
            <img className="h-2/3 object-cover w-full" src={img2} alt="Slide 2" />
          </div>
          <div className="slide">
            <img className="h-2/3 object-cover w-full" src={img3} alt="Slide 3" />
          </div>
          <div className="slide">
            <img className="h-2/3 object-cover w-full" src={img4} alt="Slide 4" />
          </div>
        </Carousel>
      </div>
      <div className='absolute bottom-10 left-0 w-1/4 p-4 z-10 hidden md:block'>
        <SliderText />
      </div>
      <div className='block md:hidden mt-4'>
        <SliderText />
      </div>
    </div>
  );
};

export default Slider;
