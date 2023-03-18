import React from 'react'
import { motion } from 'framer-motion'
import Skill from './skill'
import Skillblender from './Skillblender'
import Htmlskills from './htmlskill'
import JavaSskill from './JavaSskill'
import CSSskill from './CSSskill'
import Tailwindskill from './Tailwindskill'
import Photoshopskill from './photoshopskill'
type Props = {}

const Skills = (props: Props) => {
  return (
    <motion.div
    initial={{opacity:0,}}
    whileInView={{opacity:1,}}
    transition={{duration:1.5}}
    className='flex relative flex-col text-center md:flex-row max-w-[200]
    xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center'
>
    <h3 className='absolute top-24 uppercase tracking-[20px] text-[#00FF00] text-2xl'>Skills</h3>
    <motion.h3 
    initial={{
        opacity:0,
        y:-500,}}
    whileInView={{
        opacity:1,
        y:0,
    }}
        animate={{
        opacity:1,
        y:0,}}
    transition={{duration:1.5,}}
    className='absolute top-36  uppercase tracking-[3px] text-[#00FF00] text-sm'>
        hover over a skill to view the profieciency percent
    </motion.h3>
        <div className='grid grid-cols-4 gap-10 '>
            <Skill />
            <Skillblender  />
            <Htmlskills/>
            <JavaSskill  />
            <CSSskill  />
            <Tailwindskill  />
            <Photoshopskill  />
        </div>
        </motion.div>

  )
}

export default Skills