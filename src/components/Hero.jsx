import React from 'react'
import {useTypewriter, Cursor} from "react-simple-typewriter"
import BackgroundCircles from './BackgroundCircles';
import AnimatedCursor from "react-animated-cursor"
import ProfilePic from "../assets/heroImage.png"



export default function Hero() {
    const pageInfo = [
        {
            heroImage:ProfilePic,
            role:"Full-Stack JavaScript Developer",
        }
    ]

    const [text,count] = useTypewriter({
        words: [
          `Hi, My Name is Azyz Hssin`,
          `Guy Who loves To Code`
        ],
        loop: true,
        delaySpeed: 2000,
    });
  return (
    <div className='h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden'>
        <BackgroundCircles />
        {pageInfo.map((info) =>(
    <img 
    src={info.heroImage}
    className='relative rounded-full h-40 w-40 mx-auto object-cover'
    alt="Azyz.Hssin"
    />     
))} 
        <div className='z-20'>
          {pageInfo.map((info) =>(
          <h2 className='text-sm uppercase text-gray-500 pb-2 tracking-[15px]'>
            {info.role}
          </h2>
          ))}
        <h1 className='text-5x1 lg:text-6x1 font-semibold scroll-px-10'>
        <span className='mr-3'>{text}</span>
        <Cursor cursorColor='#F7AB0A' />
        </h1>
        <div className='pt-5'>
          <a href="#about">
          <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>About</button>
          </a>
          {/* <a href="#experience">
          <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Experience</button>
          </a> */}
          <a href="#skills">
          <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Skills</button>
          </a >
          <a href="#projects">
          <button className='px-6 py-2 border border-[#242424] rounded-full uppercase text-xs tracking-widest text-gray-500 transition-all hover:border-[#F7AB0A]/40 hover:text-[#F7AB0A]/40'>Projects</button>
          </a>
        </div>
        </div>
        
    </div>
  )
}