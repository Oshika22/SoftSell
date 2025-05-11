import React from "react";
import { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";
import {hero1} from "../assets/images/index.js";

export default function Hero() {
    const floatRef = useRef(null); 
    gsap.registerPlugin(useGSAP);
  
    useGSAP(() => {
      gsap.to(floatRef.current, {
        y: 10,
        repeat: -1,
        yoyo: true,
        delay: 0.5,
        duration: 1,
        ease: 'power1.inOut',
      });
    },{ dependencies: [floatRef] });
  return (
    <section className="bg-gradient-to-r from-[#22007c] to-[#0d00a4] text-white py-20 px-6 mb-6">
      <div className="h-20"></div>
      <div className="max-w-7xl mx-auto flex flex-col-reverse md:flex-row items-center justify-between gap-10">
        {/* Left Text Content */}
        <div className="flex-1 text-center md:text-left">
          <h1 className="text-4xl sm:text-5xl font-bold leading-tight mb-6">
            Turn Unused Software Licenses Into Real Cash
          </h1>
          <p className="text-lg opacity-90 mb-8">
            Get accurate license valuations instantly and enjoy lightning-fast payouts.
            Start selling your software license today — quick, secure, and hassle-free.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
            <button className="bg-white text-[#22007c] font-semibold py-3 px-6 rounded-lg shadow hover:bg-gray-100 transition duration-300">
              Get Free Valuation
            </button>
            <button className="flex items-center gap-2 border border-white py-3 px-6 rounded-lg hover:bg-white hover:text-[#22007c] transition duration-300">
              How It Works
              <FontAwesomeIcon icon={faArrowRight} />
            </button>
          </div>
        </div>

        {/* Right Image Content */}
        <div className="float flex-1 flex justify-center" ref={floatRef}>
          <img
            src={hero1}
            alt="Hero Illustration"
            className="w-[90%] max-w-md drop-shadow-2xl animate-float"
          />
        </div>
      </div>
    </section>
  );
} 


