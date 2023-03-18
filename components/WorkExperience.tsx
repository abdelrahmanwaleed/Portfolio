import React from 'react'
import {motion} from "framer-motion"
import ExrerienceCard from './ExrerienceCard'
import ExrerienceCardArmy from './ExrerienceCardArmy'
type Props = {}

const WorkExperience = (props: Props) => {
  return (
    <motion.div 
    initial={{opacity:0}}
    whileInView={{opacity:1}}
    transition={{duration:1.2}}
    className='flex flex-col relative h-screen overflow-hidden text-center md:flex-row md:text-left max-w-full px-10 justify-evenly mx-auto items-center'>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-[#00FF00]  '>Experience</h3>
        <div className='w-full flex space-x-5 overflow-x-scroll p-10 snap-x snap-mandatory scrollbar-thin scrollbar-track-sky-300 scrollbar-thumb-green-800'>
            <ExrerienceCard/>
            <ExrerienceCardArmy/>
            
        </div>
        </motion.div>
  )
}

export default WorkExperience