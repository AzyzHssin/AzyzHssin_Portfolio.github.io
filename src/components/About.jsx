import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import RBKpic from '../assets/e01.jpg';
import emnapic from '../assets/e03.jpg';

const About = () => {
    const pageInfo = [
        { 
            profilePic: RBKpic,
            backgroundInformation: "Graduate of the Institute of Information and Communication Sciences and Technologies (ISTIC), specializing in Web Development and Internet of Things IOT, also I'm a great communicator, dynamic and problem solving person. but I still aiming to learn more technologies and that's why I'm looking to develop my knowledge skills."
        },
        {
            profilePic: emnapic,
            backgroundInformation: "Throughout my career, I've focused on projects within the IoT and AI domains. Notably, I developed an intelligent reception robot designed to optimize visitor management in dynamic environments like the Startup Village. This experience has honed my skills in embedded systems development, IoT integration, as well as expertise in speech recognition and natural language processing through hands-on projects and practical application."
        }
    ];

    const [pageIndex, setPageIndex] = useState(0); // State to track current page index

    useEffect(() => {
        const interval = setInterval(() => {
            // Update pageIndex to cycle through pageInfo array
            setPageIndex(prevIndex => (prevIndex + 1) % pageInfo.length);
        }, 15000); // 4000 milliseconds = 4 seconds
        
        // Clean up the interval on component unmount
        return () => clearInterval(interval);
    }, [pageInfo]); // Dependency includes the pageInfo array

    return (
        <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 1.5 }}
            className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center'
        >
            <h3 className='absolute top-16 uppercase tracking-[20px] text-gray-500 text-2xl'>
                About
            </h3>
            <motion.img
                key={pageIndex} // Ensure key changes when pageIndex changes
                initial={{
                    x: -200,
                    opacity: 0
                }}
                transition={{
                    duration: 1.2
                }}
                whileInView={{
                    x: 0,
                    opacity: 1
                }}
                viewport={{ once: true }}
                src={pageInfo[pageIndex].profilePic}
                alt={`Profile Pic ${pageIndex}`}
                className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
            />
            <div className='space-y-10 px-0 md:px-10'>
            <div style={{ marginTop: '-20px' }}>
                <h4 className='text-4xl font-semibold'>
                    Here is a{" "}
                    <span className='underline text-yellow-500'>little</span>{" "}
                    background
                </h4>
                </div>

               
                <p className='text-sm'>
                    {pageInfo[pageIndex].backgroundInformation}
                </p>
                
            </div>
        </motion.div>
    );
};

export default About;
