import React from 'react'
import { motion } from "framer-motion";
import reactImg from "../assets/graphql.png"
import nextImg from "../assets/nextjs.png"
const directionLeft = true || false


function Skill({directionLeft}) {
    const skill = [
        {
            _id:1,
            image:"https://cdn.sanity.io/images/10ba2g2h/production/2f4da221fbdde8588262b191d774817b3af45350-250x250.png?w=2000&fit=max&auto=format"
         },
        {
            _id:2,
            image:reactImg
        },
        {
            _id:3,
            image:"https://cdn.sanity.io/images/10ba2g2h/production/b347dcdd51a47279e608fce75f980687934a6248-600x600.png?w=2000&fit=max&auto=format",
        
           },
       /*  {
            _id:4,
            image:"https://cdn.sanity.io/images/10ba2g2h/production/68ee7f9d17c6dd25ea34aed795bc1025cc3a14e7-600x600.png?w=2000&fit=max&auto=format"
        }, */
        {
            _id:5,
            image:"https://cdn.sanity.io/images/10ba2g2h/production/713e2e7dcf9a31a2bce6966da21aa3c75097bb7b-250x250.png?w=2000&fit=max&auto=format"
        },
        {
            _id:6,
            image:"https://cdn.sanity.io/images/10ba2g2h/production/47a5513caffa39b3afa206afcab7f5e388c37c29-250x250.png?w=2000&fit=max&auto=format",
        },
        {
            _id:7,
            image:"https://cdn.sanity.io/images/10ba2g2h/production/2d6776cd8ccaa53c6e548e03117671e1de4aa510-629x629.png?w=2000&fit=max&auto=format",
        },
        {
            _id:8,
            image:"https://cdn.sanity.io/images/10ba2g2h/production/353fce1c76b3e6eb4dc59bf8c53dd4b8a9b3db38-250x250.png?rect=0,1,250,249&w=2000&fit=max&auto=format",
        },
        {
            _id:9,
            image:"https://cdn.sanity.io/images/10ba2g2h/production/c82cfb29dfa05aa4c8f4d0038576b5b4b3f2c57d-1200x1040.png?w=2000&fit=max&auto=format",
        },
        {
            _id:10,
            image:"https://cdn.sanity.io/images/10ba2g2h/production/d62c5f60246264285ea935f5fbd6952b7f77d7cd-3000x2675.png?w=2000&fit=max&auto=format",
        },
        {
            _id:11,
            image:"https://cdn.sanity.io/images/10ba2g2h/production/a2325fb8204eca5889fe0264858d092e910550cc-1100x400.png?w=2000&fit=max&auto=format",
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