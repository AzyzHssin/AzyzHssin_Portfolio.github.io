import React from 'react'
import { motion } from "framer-motion";
import reactImg from "../assets/graphql.png"
import img1HTML from "../assets/1 html 5 logo.png"
import imgCss from "../assets/css.png"
import imgJs from "../assets/3 js logo.png"
import imgPhp from "../assets/4 php logo.png"
import imgC from "../assets/6 c logo.png"
import imgCplusplus from "../assets/7 c++ logo.png"
import imgIstqb from "../assets/8 istqb logo.png"
import imgSql from "../assets/10 sql logo.jpg"
import imgPython  from "../assets/5 python logo.png"

import nextImg from "../assets/nextjs.png"
const directionLeft = true || false


function Skill({directionLeft}) {
    const skill = [
        {
            _id:1,
            image:img1HTML,
         },
       
        {
            _id:3,
            image:imgCss,
        
           },
   
        {
            _id:5,
            image:"https://cdn.sanity.io/images/10ba2g2h/production/713e2e7dcf9a31a2bce6966da21aa3c75097bb7b-250x250.png?w=2000&fit=max&auto=format"
        },
        {
            _id:6,
            image:imgPython
        },
      
        {
            _id:8,
            image:imgPhp
        },
        {
            _id:9,
            image:imgC,
        },
        {
            _id:10,
            image:imgCplusplus
        },
        {
            _id:11,
            image:"https://cdn.sanity.io/images/10ba2g2h/production/a2325fb8204eca5889fe0264858d092e910550cc-1100x400.png?w=2000&fit=max&auto=format",
        },
        {
            _id:12,
            image:imgJs,
        },
        {
            _id:13,
            image:imgIstqb
        },

        {
            _id:14,
            image:imgSql
        }
    ]
  return (
    <div className=' flex cursor-pointer '>
        <div className="items-center justify-center grid grid-cols-3 mt-10 sm:grid-cols-4 gap-8 " >
        {skill.map((info) => (
            
            <motion.img 
            initial={{
                
                opacity: 0
            }}
            
            transition={{ duration: 1 }}
            whileInView={{ opacity: 1, x:0 }}
            src={info.image}
            className='rounded-full border border-gray-800 object-cover w-14 h-14 md:w-20 md:h-20 xl:w-25 xl:h-25 filter transition duration-300 ease-in-out'
            
            />

            ))}
          
            </div>
        {/* <div className='absolute opacity-0 group-hover:opacity-80 transition duration-300 ease-in-out group-hover:bg-white h-24 w-24 md:w-28 md:h-28 xl:w-20 xl:h-20 rounded-full z-0'>
          <div className='flex items-center justify-center h-full'>
          <p className='text-3x1 font-bold text-black opacity-100'>70%</p>
          </div>
        </div> */}
    </div>
    
  )
}

export default Skill