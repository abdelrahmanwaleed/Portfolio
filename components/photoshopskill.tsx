import Image from 'next/image';
import React from 'react'
import { motion } from 'framer-motion'
import photoshoplogo from '../images/photoshoplogo.png'

type Props = { directionleft?: boolean;}

const photoshopskill = ({directionleft}: Props) => {
  return(
     <div className='group relative flex cursor-pointer'>
        <motion.div
        initial={{
            x: directionleft ?-200 : 200,
            opacity:0
        }}
        transition={{
            duration:1
        }}
        whileInView={{
            opacity:1,
            x:0
        }}
        >
            <Image src={photoshoplogo} alt="55" 
            className='rounded-full border border-[#00FF00] object-cover w-24 h-24 md:h-28
            md:w-28 xl:w-32 xl:h-32 filter group-hover:grayscale transition duration-300 ease-in-out group-hover:shadow-2xl'>
            </Image>
        </motion.div>
                <div className='absolute opacity-0 group-hover:opacity-95 transition duration-300 ease-in-out group-hover:bg-sky-500 h-24 w-24 md:h-28 md:w-28 xl:w-32 xl:h-32 rounded-full z-0'>
                    <div className='flex items-center justify-center h-full'>
                        <p className='text-3xl font-semibold text-[#00FF00] opacity-100'>80%</p>
                    </div>
                </div>
            </div>
        )

}

export default photoshopskill