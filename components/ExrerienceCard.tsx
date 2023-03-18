import React from 'react'
import { motion } from 'framer-motion'
import Image from 'next/image'
import img2 from "../public/Me.jpg"
import imageadobe from "../images/adobe.png"
import imageblender from "../images/blender.png"
import imagereact from "../images/react.png"
import imagehtml from "../images/program.png"



type Props = {}

const ExrerienceCard = (props: Props) => {
  return (
    <article className='flex flex-col rounded-2xl hover:shadow-lg items-center space-y-7 flex-shrink-0 w-[400px] md:w-[600px] xl:w-[900px] snap-center bg-[#00A2DE] p-10 hover:opacity-100 opacity-50 cursor-pointer transition-opacity duration-200'>
        <motion.div 
        className='flex flex-col items-center'
        initial={{
            y:-200,
            opacity:0,
        }}
        transition={{
            duration:1.2
        }}
        whileInView={{
            y:0,
            opacity:1,
        }}>
            <Image
            className='w-32 h-32 rounded-full xl:w-[200px] xl:h-[200px] object-cover object-center'
            src={img2} alt="/" />
            
            <div className='px-0 md:px-10 text-left'>
                <h4 className='text-4xl font-light'>Freelancer</h4>
                <p className='font-bold text-2xl mt-1'>company name</p> 
                    <div className='flex space-x-2 my-2'>
                   
                    <Image className='w-[40px] h-[35px]' src={imageadobe} alt="12" />
{/*                     <Image className='w-[40px] h-[40px]' src={image3} alt ="/" />
 */}                    <Image className='w-[40px] h-[40px]' src={imageblender} alt ="/" />
                         <Image className='w-[40px] h-[40px]' src={imagereact} alt ="/" />
                         <Image className='w-[40px] h-[40px]' src={imagehtml} alt ="/" />

            </div>
            <p>since 2020</p>
        <ul className='list-disc space-y-4 ml-5'>
            <li>Aim to model anything to a 3D object</li>
            <li>learning more programing </li>
            <li>publish alot of my work</li>
            
        </ul>
        </div>
        </motion.div>
                
    </article>
  )
}

export default ExrerienceCard
