import Head from 'next/head'
import Header from '../components/Header'
import Hero from '../components/Hero'
import About from '../components/About'
import WorkExperience from '../components/WorkExperience'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import ContactMe from '../components/ContactMe'
import Link from 'next/link'
import Image from 'next/image'
import Topimage from "../images/icon-top2.png"

export default function Home() {
  return (
    <div className='bg-[rgb(11,187,222)] text-white h-screen snap-y snap-mandatory overflow-y-scroll overflow-x-hidden z-0  scrollbar-thin scrollbar-track-sky-300 scrollbar-thumb-green-800'>
      <Head>
        <title>Rahman Portfolio</title>
      </Head>
      {/*Header*/}
      <Header/>
      
      {/*Hero*/}
      <section id='hero' className='snap-center '>
        <Hero/>
      </section>
     
      {/*About*/}
      <section id='about' className='snap-center'>
        <About/>
      </section>
     
      {/*Experience*/}
        <section id='experience' className='snap-center'>
        <WorkExperience/>
        </section>      
     
      {/*Skills*/}
      <section id='skills' className='snap-center'>
        <Skills/>

      </section>

      {/* Projects */}
      <section id='projects' className='snap-center'>
        <Projects/>

      </section>

      {/*Contact Me*/}
      <section id='Contact' className='snap-center'>
        <ContactMe/>
      </section>
      
      <Link href='#hero'>
       <footer className='sticky bottom-5 w-full cursor-pointer'>
          <div className='flex items-start'>
            <Image className='h-[5rem] w-[7rem]  filter grayscale hover:grayscale-0 cursor-pointer'  src={Topimage} alt="/" />            
          </div>
       </footer>
      </Link>
         </div>
  )
}
