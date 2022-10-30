import React from 'react'
import { motion } from "framer-motion";
import RBKpic from "../assets/DSC_1371.jpg"



function About() {
  const pageInfo = [
    { 
      profilePic:RBKpic,
      backgroundInformation:"I’m a Full Stack JavaScript developer, also I'm a great communicator, dynamic and problem solving person. Through my experience I'd worked on a lot of projects that made me technically confident, but I still aiming to learn more technologies and that's why I'm looking to develop my knowledge skills."
    }
  ]
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex flex-col relative h-screen text-center md:text-left md:flex-row max-w-7x1 px-10 justify-evenly mx-auto items-center'>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-gray-500 text-2x1'>
        About
    </h3>
    {pageInfo.map((info) => (

      <motion.img 
      initial={{
        x:-200,
        opacity: 0
      }}
      transition={{
        duration: 1.2
    }}
    whileInView={{
        x:0,
        opacity: 1
      }}
      viewport={{once:true}}
      src={info.profilePic}
      className='-mb-20 md:mb-0 flex-shrink-0 w-56 h-56 rounded-full object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
      />
      ))}
    <div className='space-y-10 px-0 md:px-10'>
        <h4 className='text-4x1 font-semibold'>
            Here is a{" "} 
        <span className='underline decoration-[#F7AB0A]'>little</span>{" "} 
        background
        </h4>
        {pageInfo.map((info) => (

          <p className='text-sm'>
            {info.backgroundInformation}
        </p>
          ))}
    </div>

    </motion.div>
  )
}

export default About