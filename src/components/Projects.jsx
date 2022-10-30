
      import React from 'react'
      import { motion } from "framer-motion";
      import { Link } from 'react-router';

      function Projects() {
        const projects = [
          {
            _id: 1,
            title: "Municipality-TN",
            image: "https://cdn.sanity.io/images/10ba2g2h/production/aa5591ca756b2d826819c7b774dc78a05376dcbf-480x290.jpg?rect=165,0,145,290",
            summary:"A mobile application for municipality Tunis (dandan)",
            tech:"https://cdn.sanity.io/images/10ba2g2h/production/d62c5f60246264285ea935f5fbd6952b7f77d7cd-3000x2675.png?w=2000&fit=max&auto=format",
            tech1:"https://cdn.sanity.io/images/10ba2g2h/production/2d6776cd8ccaa53c6e548e03117671e1de4aa510-629x629.png",
            tech2:"https://cdn.sanity.io/images/10ba2g2h/production/47a5513caffa39b3afa206afcab7f5e388c37c29-250x250.png?w=2000&fit=max&auto=format",
            tech3:"https://cdn.sanity.io/images/10ba2g2h/production/a2325fb8204eca5889fe0264858d092e910550cc-1100x400.png?w=2000&fit=max&auto=format",
            link:"https://www.youtube.com/watch?v=x4Nt0OHWNA4"
          },
          {
            _id: 2,
            title: "Movie-World",
            image: "https://cdn.sanity.io/images/10ba2g2h/production/a03bb63929d714cd40950b5c72257ad70fdafe0e-480x320.jpg?w=2000&fit=max&auto=format",
            summary:"A web application that allow the users to watch and download movies",
            tech:"https://cdn.sanity.io/images/10ba2g2h/production/353fce1c76b3e6eb4dc59bf8c53dd4b8a9b3db38-250x250.png?rect=0,1,250,249&w=2000&fit=max&auto=format",
            tech1:"https://cdn.sanity.io/images/10ba2g2h/production/713e2e7dcf9a31a2bce6966da21aa3c75097bb7b-250x250.png?w=2000&fit=max&auto=format",
            tech2:"https://cdn.sanity.io/images/10ba2g2h/production/b347dcdd51a47279e608fce75f980687934a6248-600x600.png?w=2000&fit=max&auto=format",
            tech3:"https://cdn.sanity.io/images/10ba2g2h/production/a2325fb8204eca5889fe0264858d092e910550cc-1100x400.png?w=2000&fit=max&auto=format",
            link:"https://www.youtube.com/watch?v=A20AAmvLjTs"
          },
          {
            _id: 3,
            title: "Symphony-T",
            image: "https://cdn.sanity.io/images/10ba2g2h/production/fee101f8bda81506cd48be1cac088c35970c4971-480x320.jpg?w=2000&fit=max&auto=format",
            summary:"A web application for teaching piano",
            tech:"https://cdn.sanity.io/images/10ba2g2h/production/c82cfb29dfa05aa4c8f4d0038576b5b4b3f2c57d-1200x1040.png?w=2000&fit=max&auto=format",
            tech1:"https://cdn.sanity.io/images/10ba2g2h/production/68ee7f9d17c6dd25ea34aed795bc1025cc3a14e7-600x600.png?w=2000&fit=max&auto=format",
            tech2:"https://cdn.sanity.io/images/10ba2g2h/production/a2325fb8204eca5889fe0264858d092e910550cc-1100x400.png?w=2000&fit=max&auto=format",
            tech3:"https://cdn.sanity.io/images/10ba2g2h/production/713e2e7dcf9a31a2bce6966da21aa3c75097bb7b-250x250.png?w=2000&fit=max&auto=format",
            link:"https://www.youtube.com/watch?v=cVNRnV1_-Ls"
          },
          {
            _id: 4,
            title: "Digital-Marketing",
            image: "https://cdn.sanity.io/images/10ba2g2h/production/d45dd23ff8041b2a94745b130532fe72e59db14c-480x320.jpg?w=2000&fit=max&auto=format",
            summary:"A web application for selling and buying products",
            tech:"https://cdn.sanity.io/images/10ba2g2h/production/353fce1c76b3e6eb4dc59bf8c53dd4b8a9b3db38-250x250.png?rect=0,1,250,249&w=2000&fit=max&auto=format",
            tech1:"https://cdn.sanity.io/images/10ba2g2h/production/713e2e7dcf9a31a2bce6966da21aa3c75097bb7b-250x250.png?w=2000&fit=max&auto=format",
            tech2:"https://cdn.sanity.io/images/10ba2g2h/production/a2325fb8204eca5889fe0264858d092e910550cc-1100x400.png?w=2000&fit=max&auto=format",
            tech3:"https://cdn.sanity.io/images/10ba2g2h/production/b347dcdd51a47279e608fce75f980687934a6248-600x600.png?w=2000&fit=max&auto=format",
            link:"https://www.youtube.com/watch?v=_tU1NkPHu3E"
          },
          // {
          //   _id: 5,
          //   title: "https://github.com/Oussama-Fajraoui/Fav-Movies",
          //   image: "https://www.youtube.com/watch?v=h2zz_yz1SjM",
          //   summary:"",
          // },
          // {
          //   _id: 6,
          //   title: "https://github.com/Oussama-Fajraoui/About-Me",
          //   image: "https://www.youtube.com/watch?v=gALktnCFPl0",
          //   summary:"",
          // },
        ];
        return (
          <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{opacity: 1}}
          transition={{duration: 1.5}}
          className='h-screen relative flex overflow-hidden flex-col text-left md:flex-row max-w-full justify-evenly mx-auto items-center z-0'>
          <h3 className='absolute top-20 uppercase tracking-[20px] text-gray-500 text-2x1'>
              Projects
          </h3>
          <div className='relative w-full flex overflow-x-scroll overflow-y-hidden snap-x snap-mandatory z-20 scrollbar-track-gray-400/20 scrollbar-thumb-[#F7AB0A]/80 scrollbar-thin'>
              {projects.map((project, i)=> (
                   <div 
                   key={project._id}
                   className='w-screen flex-shrink-0 snap-center flex flex-col space-y-2 items-center justify-center p-20 md:p-44 h-screen'>
                   <motion.img 
                   initial={{
                      y:-300,
                      opacity: 0
                   }}
                   transition={{ duration: 1.2 }}
                   whileInView={{ opacity: 1, y: 0 }}
                   viewport={{ once:true }}
                   src={project.image}
                   alt="" 
                   />
                   <div className='space-y-10 px-0 md:px-10 max-w-6x1'>
                    <a href={project.link} target="_blank" rel="noreferrer">
                      <h4 className='text-4x1 font-semibold text-center'> 
                          <span className='underline decoration-[#F7AB0A]/50'>
                              Case Study {i+1} of {projects?.length} : 
                              </span>{" "}
                              {project.title}
                      </h4>
                    </a>
                      <div className='flex items-center space-x-2 justify-center'>

                          <img className='h-7 w-7'
                          key={project._id}
                          src={project.tech}
                          alt=""
                          />
                          <img className='h-7 w-7'
                          key={project._id}
                          src={project.tech1}
                          alt=""
                          />
                              <img className='h-7 w-7'
                          key={project._id}
                          src={project.tech2}
                          alt=""
                          />
                          <img className='h-7 w-7'
                          key={project._id}
                          src={project.tech3}
                          alt=""
                          />
      
                      </div>
                      <p className='text-lg text-center md:text-left'>
                          {project.summary}
                      </p>
                   </div>
               </div>
              ))}
          </div>
          <div className='w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[500px] -skew-y-12'/>
      
          </motion.div>
        )
      }
      
      export default Projects