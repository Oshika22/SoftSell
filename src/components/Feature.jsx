import React from 'react';
import { motion } from "framer-motion";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMoneyBillTrendUp, faGears, faShieldHalved } from '@fortawesome/free-solid-svg-icons';

const fList = [
    {
        id: 1,
        title: "Trusted & Transparent Process",
        icon: faShieldHalved,
        disc: "We prioritize transparency—no hidden fees, no confusing steps. You stay informed at every stage of your license sale.", 
    },
    {
        id: 2,
        title: "Smart License Evaluation",
        icon:  faGears,
        disc:  "Our intelligent platform instantly analyzes your software license and delivers accurate, competitive market valuations.", 
    },
    {
        id: 3,
        title: "Get Paid Faster Than Ever",
        icon:  faMoneyBillTrendUp,
        disc:  "Why wait? We offer industry-leading payout speeds so you can access your funds in record time—direct to your account.", 
    },
];

const FeaturePanel = ({ title, icon, disc }) => {
    return (
        <div className="relative group transform transition-all duration-500 ease-in-out rounded-xl shadow-xl p-8 h-[400px] flex flex-col justify-between">
            {/* Gradient Overlay */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#4130ff] to-[#3000b5] rounded-md opacity-60 group-hover:opacity-100 transition-opacity duration-500"></div>

            <div className="relative flex flex-col justify-between items-center text-center p-2 h-full">
                {/* Icon */}
                <div className="h-[50px] w-[70px] flex justify-center items-center mb-2">
                    <FontAwesomeIcon className="text-6xl text-[#3000b5] group-hover:text-[#02010A] group-hover:scale-105 transition-colors duration-300" icon={icon} />
                </div>

                {/* Title */}
                <h3 className="text-xl font-semibold text-[#02010A] mb-4">{title}</h3>

                {/* Description */}
                <p className="text-md text-[#02010A] opacity-80 group-hover:opacity-100 transition-opacity duration-300">
                    {disc}
                </p>
            </div>
        </div>
    );
};

export default function Feature() {
    return (
        <div className="px-6 py-10">
            <div className='text-6xl text-center m-4 font-bold leading-tight bg-gradient-to-r from-[#140152] to-[#3220ff] bg-clip-text text-transparent '>We Don’t Just Deliver, We Elevate</div>
            <div className="flex flex-wrap justify-center items-center gap-6">
                {fList.map((fEle) => (
                    <div key={fEle.id} className="w-full sm:w-1/2 md:w-1/3 xl:w-1/4 p-4">
                        <FeaturePanel 
                            title={fEle.title} 
                            icon={fEle.icon} 
                            disc={fEle.disc} 
                        />
                    </div>
                ))}
            </div>
        </div>
    );
};