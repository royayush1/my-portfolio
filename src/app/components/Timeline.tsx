/* eslint-disable react/no-unescaped-entities */

"use client"

import React, {useState, useEffect} from "react";
import {motion} from "framer-motion";
import { timelineData, TimelineEvent } from "@/data/timelineData";
import {Pacifico} from 'next/font/google';

const pacifico = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ['latin']
}
)


interface TimelineItemProps {
    event: TimelineEvent
}

const TimelineItem: React.FC<TimelineItemProps> = ({event}) => {
    return(
        <motion.a
            href={event.link}
            target="_blank"
            rel="noopener noreferrer"
            initial={{opacity: 0.2, x: -50}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true, amount: 0.8}}
            transition={{duration: 0.8}}
            className="relative flex flex-col md:flex-row items-center my-8 hover:scale-105 transform transition-all duration-300 mb-20" >
                
                <div className="flex flex-row justify-center items-center md:w-1/4">
                    <div className="w-4 h-4 bg-purple-600 rounded-full"></div>
                    <div className="w-1 h-full bg-gray-300 mt-2"></div>
                    <span className={`${pacifico.className} text-sm text-gray-600`}>{event.date}</span>
                </div>

                <div className="md:w-3/4 md:pl-8">
                    <div className="bg-gradient-to-r from-blue-500 to-purple-600 rounded-lg shadow-md p-6 hover:shadow-xl">
                        {event.image && (
                            <img
                            src={event.image}
                            alt={event.title}
                            className="w-full object-cover rounded-md mb-4"/>

                        )}
                        <h3 className="text-2xl font-bold text-white">{event.title}</h3>
                        <p className="mt-2 text-white">{event.description}</p>
                    </div>
                </div>
        </motion.a>
    )
}

export default function Timeline() {
    const [offsetY, setOffsetY] = useState(0);
    const [targetOffset, setTargetOffset] = useState(0);
    const [luffySrc, setLuffySrc] = useState("/images/luffy1.png")
    const scrollBottom = document.documentElement.scrollHeight - window.innerHeight;

    useEffect(() => {
        
      
        const handleScroll = () => {
            setTargetOffset(window.scrollY);
        };
      
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
      }, []);

    useEffect(() => {
    const smoothUpdate = () => {
        setOffsetY((prev) => prev + (targetOffset - prev) * 0.1);
        requestAnimationFrame(smoothUpdate);
    };
    smoothUpdate();
    }, [targetOffset]);
      

    return(
        <section className="container mx-auto p-6">
            <h2 className={`${pacifico.className} text-4xl font-bold text-center mb-12 text-white`}>My Journey</h2>
            <div className="flex flex-col lg:flex-row">
                <div className="relative w-full lg:w-1/4 hidden lg:block flex flex-col">
                    {window.scrollY < scrollBottom - 100 ? <img
                        src="/images/luffy1.png"
                        alt="luffy"
                        style={
                        {transform: `translateY(${offsetY}px) translateX(-33.33%) scaleX(-1)`}
                        }   
                        className="absolute left-1/2 transform -translate-x-1/3 scale-x-[-1] -translate-y-1/3 z-50 w-48 drop-shadow-xl"
                        /> : 
                        <img
                        src= "/images/luffy2.png"
                        alt="luffy"
                        style={
                        {transform: `translateY(${offsetY}px) translateX(-33.33%) scaleX(-1)`}
                        }   
                        className="absolute left-1/2 transform -translate-x-1/3 scale-x-[-1] -translate-y-1/3 z-50 drop-shadow-xl"
                        />}
                    {/* <img
                        src="/images/slab.png"  
                        alt="slab"
                        className="absolute top-5 left-1/2 transform -translate-x-1/2 -translate-y-1 z-40 w-24 h-24 "
                        /> */}
                    <div className="absolute top-20 left-1/2 transform -translate-x-1/2 h-full w-1 bg-gray-300"></div>
                </div>
                <div className="lg:w-3/4 lg:pl-8">
                    {timelineData.map((event) => (
                        <TimelineItem key={event.id} event={event}/>
                    ))}
                </div>
            </div>
        </section>
    )
}