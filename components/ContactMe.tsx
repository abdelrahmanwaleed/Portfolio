import React from 'react'
import {PhoneIcon , MapPinIcon, EnvelopeIcon} from "@heroicons/react/24/solid"
import { useForm, SubmitHandler } from "react-hook-form";

type Inputs = {
    name:string,
    email:string,
    subject: string,
    message: string,
  };

type Props = {}

function ContactMe({}:Props){
    const {
        register, 
        handleSubmit, 
    } = useForm<Inputs>();
    const onSubmit: SubmitHandler<Inputs> = (formData) => {
        window.location.href = `mailto:abdelrahmanmoali@gmail.com?subject=${formData.subject}&body=Hi, My name is ${formData.name}. ${formData.message} (${formData.email})`
    };

  return (
    <div className='h-screen flex relative flex-col text-center md:text-left md:flex-row max-w-7xl px-10  justify-evenly mx-auto items-center '>
        <h3 className='absolute top-24 uppercase tracking-[20px] text-2xl text-[#00FF00]'>Contact</h3>
            <div className='flex flex-col space-y-10'>
                <h4 className='text-4xl font-semibold text-center pt-10'>
                let&apos;s keep in touch.{" "}
                    <span className='decoration-[#00FF00] underline'>Waiting You.</span>
                </h4>

                <div className='space-y-10'>
                    <div className='flex items-center space-x-5 justify-center'>
                    <PhoneIcon className='text-[#FF5733] h-5 w-5 animate-pulse '/>
                    <p className='text-2xl'>+201011955134</p>
                    </div>
                   
                    <div className='flex items-center space-x-5 justify-center'>
                    <EnvelopeIcon className='text-[#FF5733] h-5 w-5 animate-pulse '/>
                    <p className='text-2xl'>abdelrahmanmoali@gmail.com</p>
                    </div>

                    <div className='flex items-center space-x-5 justify-center'>
                    <MapPinIcon className='text-[#FF5733] h-5 w-5 animate-pulse '/>
                    <p className='text-2xl'>ElRehab, New Cairo</p>
                    </div>
                </div>
               
                <form 
                    onSubmit={handleSubmit(onSubmit)} 
                    className='flex flex-col space-y-2 w-fit mx-auto text-slate-800'
                    >
                    <div className='flex space-x-2'>
                        <input 
                            {...register('name')} 
                            placeholder='Name' 
                            className='contactInput' 
                            type="text" 
                            required
                        />
                        <input {...register('email')} 
                            placeholder='Email' 
                            className='contactInput' 
                            type="email"
                            required 
                        />
                    </div>
                    <input 
                        {...register('subject')} 
                        placeholder='Subject' 
                        className='contactInput' 
                        type="text" 
                    />
                    <textarea 
                        {...register('message')} 
                        placeholder='Message'  
                        className='contactInput'
                    />
                    
                    <button 
                        className='bg-green-900 py-5 px-10 rounded-md text-black font-semibold text-lg'
                        >
                            Submit
                    </button>
                </form>
            </div>
        </div>
  )
}

export default ContactMe