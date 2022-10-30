import React from 'react'
import { motion } from "framer-motion";
import Skill from './Skill';



function Skills() {
  
  return (
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{duration: 1.5}}
    className='flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'>
    <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2x1'>
        Skills
        </h3>

        <h4 className='absolute top-28 uppercase tracking-[3px] text-gray-500 text-sm'>
            Here's some of my skills 
            </h4>
                <Skill />             
            
    </motion.div>
  )
}

export default Skills