import React from 'react'
import { motion } from "framer-motion";



function ExperienceCard() {
  const experience = [
    {
      _id:1,
      companyImage:"https://cdn.sanity.io/images/10ba2g2h/production/905fba38048768b890754f438870e372579b92e3-200x200.jpg?w=2000&fit=max&auto=format",
      dataStarted:"2022-08-01",
      dateEnded:"2022-08-27",
      jobTitle:"Scrum-Master",
      company:"Green-Aura",
      image1:"https://cdn.sanity.io/images/10ba2g2h/production/d62c5f60246264285ea935f5fbd6952b7f77d7cd-3000x2675.png?w=2000&fit=max&auto=format",
      image2:"https://cdn.sanity.io/images/10ba2g2h/production/2d6776cd8ccaa53c6e548e03117671e1de4aa510-629x629.png?w=2000&fit=max&auto=format",
      
    },
  ]

  return (
    <article className='flex flex-col rounded-lg items-center space-y-7 flex-shrink-0 w-[500px] md:w-[600px] xl:w[900px] snap-center bg-[#292929] p-10 hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden'>
       {experience.map((experience) => (

         <motion.img 
         initial={{
           y: -100,
           opacity: 0,
          }}
          transition={{
            duration: 1.2
        }}
        whileInView={{
          opacity: 1,
          y: 0
        }}
        viewport={{
          once: true
        }}
        className='w-32 h-32 rounded-full xl:w-[80px] xl:h-[80px] object-cover object-center'
        src={experience.companyImage}
        key={experience._id}
        alt=""
        />

          ))}
        <div className='px-0 md:px-10'>
            <h4 className='text-4x1 font-light'>{experience.jobTitle}</h4>
            <p className='font-bold text-2x1 mt-1'>{experience.company}</p>
            <div className='flex space-x-2 my-2'>
                {experience.map((technology) => (
                    <img 
                    key={technology._id}
                    className="h-10 w-10 rounded-full"
                    src={technology.image1}
                    />
                ))}
            </div>
            {/* <p className='uppercase py-5 text-gray-300'> 
            {new Date(experience.dateStarted).toDateString()} --{" "}
            {experience.isCurrentWorkingHere
            ? "Present"
            : new Date(experience.dateEnded).toDateString()}
            </p> */}

            <ul className='list-disc space-y-4 ml-5 text-lg '>
                {/* {experience.points?.map(point => (
                    <li >{point}</li>
                ))} */}
            </ul>
        </div>
    </article>
  )
}

export default ExperienceCard