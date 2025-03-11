import React, { useEffect, useRef } from 'react';
import { arrowLeft, arrowRight } from '../Components/Navlink';
import { tns } from "tiny-slider";
import "tiny-slider/dist/tiny-slider.css"; 



const TestimonialSlider = () => {
  const blogSliderRef = useRef();
  const blogSliderContainer = useRef();
  useEffect(() => {
    if (!blogSliderRef.current && blogSliderContainer.current) {
      blogSliderRef.current = tns({
        container: blogSliderContainer.current,
        autoplayButtonOutput: false,
        mouseDrag: true,
        loop: false,
        controlsPosition: "top",
        controlsText: [
            `<div>${arrowLeft}</div>`,
            `<div>${arrowRight}</div>`
          ],
        speed: 800,
        nav: false,
        autoplay: false,
        responsive: {
          0: { items: 1, gutter: 0, controls: true },
          768: { items: 2, gutter: 0, controls: true },
          1200: { items: 3, gutter: 0, controls: true },
        },
      });
    }
  }, []);

  const StarRating = ({ rating }) => {
    const totalStars = 5;
  
    return (
      <div className="flex gap-1">
        {[...Array(totalStars)].map((_, index) => {

          if (index < Math.floor(rating)) {
            return (
              <svg
                key={index}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#001290"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.1033 3.81663C11.4701 3.07346 12.5299 3.07346 12.8967 3.81663L14.8576 7.78909C15.0031 8.08394 15.2843 8.2884 15.6096 8.33595L19.9962 8.97712C20.8161 9.09696 21.1429 10.1048 20.5493 10.683L17.3768 13.773C17.1409 14.0027 17.0333 14.3339 17.0889 14.6584L17.8374 19.0226C17.9775 19.8396 17.12 20.4626 16.3864 20.0767L12.4655 18.0148C12.1741 17.8615 11.8259 17.8615 11.5345 18.0148L7.61363 20.0767C6.88 20.4626 6.02245 19.8396 6.16257 19.0226L6.91109 14.6584C6.96675 14.3339 6.85908 14.0027 6.62321 13.773L3.45068 10.683C2.85708 10.1048 3.18387 9.09696 4.00378 8.97712L8.39037 8.33595C8.71572 8.2884 8.99691 8.08394 9.14245 7.78909L11.1033 3.81663Z" />
              </svg>
            );
          } 

          else if (index === Math.floor(rating) && rating % 1 !== 0) {
            return (
              <svg
                key={index}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                xmlns="http://www.w3.org/2000/svg"
              >
                <defs>
                  <linearGradient id="half-filled" x1="0%" y1="0%" x2="100%" y2="0%">
                    <stop offset="50%" stopColor="#001290" />
                    <stop offset="50%" stopColor="#e0e0e0" />
                  </linearGradient>
                </defs>
                <path
                  d="M11.1033 3.81663C11.4701 3.07346 12.5299 3.07346 12.8967 3.81663L14.8576 7.78909C15.0031 8.08394 15.2843 8.2884 15.6096 8.33595L19.9962 8.97712C20.8161 9.09696 21.1429 10.1048 20.5493 10.683L17.3768 13.773C17.1409 14.0027 17.0333 14.3339 17.0889 14.6584L17.8374 19.0226C17.9775 19.8396 17.12 20.4626 16.3864 20.0767L12.4655 18.0148C12.1741 17.8615 11.8259 17.8615 11.5345 18.0148L7.61363 20.0767C6.88 20.4626 6.02245 19.8396 6.16257 19.0226L6.91109 14.6584C6.96675 14.3339 6.85908 14.0027 6.62321 13.773L3.45068 10.683C2.85708 10.1048 3.18387 9.09696 4.00378 8.97712L8.39037 8.33595C8.71572 8.2884 8.99691 8.08394 9.14245 7.78909L11.1033 3.81663Z"
                  fill="url(#half-filled)"
                />
              </svg>
            );
          }

          else {
            return (
              <svg
                key={index}
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="#e0e0e0"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path d="M11.1033 3.81663C11.4701 3.07346 12.5299 3.07346 12.8967 3.81663L14.8576 7.78909C15.0031 8.08394 15.2843 8.2884 15.6096 8.33595L19.9962 8.97712C20.8161 9.09696 21.1429 10.1048 20.5493 10.683L17.3768 13.773C17.1409 14.0027 17.0333 14.3339 17.0889 14.6584L17.8374 19.0226C17.9775 19.8396 17.12 20.4626 16.3864 20.0767L12.4655 18.0148C12.1741 17.8615 11.8259 17.8615 11.5345 18.0148L7.61363 20.0767C6.88 20.4626 6.02245 19.8396 6.16257 19.0226L6.91109 14.6584C6.96675 14.3339 6.85908 14.0027 6.62321 13.773L3.45068 10.683C2.85708 10.1048 3.18387 9.09696 4.00378 8.97712L8.39037 8.33595C8.71572 8.2884 8.99691 8.08394 9.14245 7.78909L11.1033 3.81663Z" />
              </svg>
            );
          }
        })}
       <span className="ml-4 text-20 self-center">{`(${rating}/5)`}</span>
      </div>
    );
  };
  
  const testimonials = [
    {
      id: 1,
      name: "Ajay Shukla",
      corporation: " CMF, XYZ Corporation",
      rating: 5,
      description: "Communion has transformed how I connect with my community, fostering unity and understanding among diverse faiths. The platform's ability to bring people together has created meaningful relationships. ",
      photoUrl: "ajay.webp",
    },
    {
      id: 2,
      name: "Akhil Gautam ",
      corporation: " CMF, XYZ Corporation",
      rating: 4.5,
      description: "Being part of Communion is life-changing, blending innovation with spirituality to create a truly inclusive space. The events and discussions have deepened my understanding of different faiths.",
      photoUrl: "akhil.webp",
    },
    {
      id: 3,
      name: "Anjali Rathore",
      corporation: " CMF, XYZ Corporation",
      rating: 5,
      description: "Through Communion, I've joined events and discussions that broadened my perspective and connected me globally. The platform's interfaith dialogue features have helped me grow spiritually .",
      photoUrl: "anjali.webp",
    },
   
  
  ];

  return (
    <section className="section-pad overflow-hidden">
        <div className="container">
          <h1 className=" md:text-3xl text-2xl text-bold mb-8 md:mb-2">
          Trusted by Over 1500+ Active
Global Users

          </h1>
          <p className='text-[#666] text-lg mb-5 md:mb-2'> Join a growing community of over 1500 users worldwide who trust us to connect, engage, and thrive together.</p>

        </div>

    
        <div className="container">
          <div className="top-controls">
            <div 
              className="blog-slider flex gap-5 overflow-hidden "
              ref={blogSliderContainer}
            >
              {testimonials.map(({ id, name, description, rating, photoUrl, corporation }) => (
                <div key={id} >
                  <div className="p-5 flex-row items-center flex-wrap md:flex-nowrap">
                    <div className="overflow-hidden  md:max-w-[384px] pl-5  border-l -ml-5 border-l-black">
                    <StarRating  rating={rating} />
                    <p className='mb-0 pb-21 text-wrap text-16 mt-4'>{description}</p>
                    <div className='flex items-center  gap-4'>
                    <img src={photoUrl} alt='John Smith' className='h-16 w-16 rounded-full object-cover' />
                    <div className='flex flex-col'>
                        <p className='mb-0'>{name}</p>
                        <p className='mb-0'>{corporation}</p>
                    </div>
                    </div>
                    </div>
                    <div className="bg-white relative overflow-hidden  duration-500 ease-out max-w-[590px]">
                    
                     
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      
    </section>
  );
};

export default TestimonialSlider;
