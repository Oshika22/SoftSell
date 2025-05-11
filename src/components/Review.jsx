import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import TestimonialCard from "./TestimonialCard";
import { blake, mark } from "../assets/images";
const Review = () => {
  const spotRef = useRef(null); 
  gsap.registerPlugin(useGSAP);

  useGSAP(() => {
    gsap.to(spotRef.current, {
      x: 100,
      opacity: 0,
      repeat: -1,
      delay: 0.5,
      duration: 2,
      ease: 'power1.inOut',
    });
  },{ dependencies: [spotRef] });
  const testimonials = [
    {
      name: "Mark Edwards",
      image: mark, 
      rating: 5,
      title: "Made my selling process super smooth!",
      content:
        "I was skeptical at first, but uploading my license and getting a valuation was effortless. Within a few days, I got paid without any hassle. The interface was intuitive, and the support team was incredibly responsive!",
    },
    {
      name: "Blake Reid",
      image: blake,
      rating: 4,
      title: "Fast, simple, and transparent!",
      content:
        "This platform saved me a ton of time. I liked how everything was step-by-step — upload, get valued, and boom, the money's in. Highly recommend for anyone looking to sell without stress.",
    },
  ];



  return (
    <div className="max-w-6xl mx-auto px-4 py-8">
      
        <h1 className="text-6xl mb-3 font-bold leading-tight bg-gradient-to-r from-[#140152] to-[#3220ff] bg-clip-text text-transparent"><span className='text-5xl mb-3 font-bold leading-tight bg-gradient-to-r from-[#140152] to-[#3220ff] bg-clip-text text-transparent' >See What Our Customers Say</span> 
          <span className='inline-block bg-gradient-to-r from-[#140152] to-[#3220ff] w-2.5 h-2.5 rounded-full align-bottom m-2 mb-2.5'></span>
          <span className='inline-block bg-gradient-to-r from-[#140152] to-[#3220ff] w-2.5 h-2.5 rounded-full align-bottom m-2 mb-2.5'></span>
          <span className='spot inline-block bg-gradient-to-r from-[#140152] to-[#3220ff] w-2.5 h-2.5 rounded-full align-bottom m-2 mb-2.5'  ref={spotRef}></span>
        </h1>

  
      {testimonials.map((item, index) => (
        <TestimonialCard key={index} {...item} />
      ))}
    </div>
  );
};

export default Review;
