import React from 'react'
import { motion } from "framer-motion";
import ResumeAzyzHssin1 from "../assets/resumePage1.png"
import ResumeAzyzHssin2 from "../assets/resumePage2.png"


function Resume() {
  const pageInfo = [
    { 
      ResumeImg:ResumeAzyzHssin1,
      backgroundInformation:"Page 1"
    },
    {
        ResumeImg:ResumeAzyzHssin2,
        backgroundInformation:"Page 2"
    }
  ]
  return (
<div>
<a download="Mohamed Aziz Hssin_fr.pdf" href="../assets" title="Resume">
    <motion.div 
    initial={{ opacity: 0 }}
    whileInView={{opacity: 1}}
    transition={{duration: 2}}
    className='flex flex-col mb-20 relative h-screen text-center md:text-left md:flex-row max-w-7x1 px-10 justify-evenly mt-20 mx-auto items-center'>
    <h3 className='absolute  top-24 uppercase tracking-[20px] text-gray-500 text-2x1'>
        Resume
    </h3>
    


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
      src={pageInfo[0].ResumeImg}
      className='mb-15  md:mb-10 flex-shrink-0 w-66 h-70 object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[550px]'
      />

    

{/* <motion.div
 >
  
    
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
      src={pageInfo[1].ResumeImg}
      className='mb-15  md:mb-10 flex-shrink-0 w-66 h-90  object-cover md:rounded-lg md:w-64 md:h-95 xl:w-[400px] xl:h-[500px]'
      />


    </motion.div> */}
<h4 className='text-4x1 font-semibold text-center '> 
                          <span className=' uppercase mt-10 md:inline-flex text-sm text-gray-400 underline decoration-[#F7AB0A]/50 uppercase tracking-[3px]'>
                              Click on the resume to download it
                              </span>{" "}
                             
                      </h4>
    </motion.div>
</a>




    </div>
  )
  
}

export default Resume