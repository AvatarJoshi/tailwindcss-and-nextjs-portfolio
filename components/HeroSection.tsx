"use client" // this is a client component
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
import {HiArrowDown} from 'react-icons/hi'

export const HeroSection = () => {
  return (
    <section id="home">
        <div className="flex flex-col text-center items-center justify-center my-10 py-16 sm:py-32 md:flex-row md:space-x-4 md:text-left md:py-52">
            <div className="md:w-7/10 m:mt-2">
                <Image 
                    className="rounded-full shadow-2xl" 
                    src="/headshot.png" 
                    alt="Avatar Joshi" 
                    width={200} 
                    height={200}
                />  
            </div>
        <div className="md:w-1/2 m:mt-2">
            <h1 className="font-bold text-4xl mt-6 md:text-7xl md:mt-0">Hi, I'm Avatar</h1>
            <p className="text-lg mt-4 mb-6 md:text-2xl">
                I'm a {' '}
                <span className='font-semibold text-teal-600'>
                    Data Analyst {' '}
                </span> 
                based in Santa Cruz, CA. I specialize in transforming complex data into actionable insights.
            </p>

            <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600 rounded shadow hover:bg-teal-700 hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            > 
            Projects
            </Link>
        </div>
        </div>

        <div className="flex flex-row justify-center">
            <Link
            to="about"
            activeClass="active"
            spy={true}
            smooth={true}
            offset={-100}
            duration={500}
            >
                <HiArrowDown className="animate-bounce text-5xl text-teal-600"/>
            </Link>

        </div>
    </section>
  )
}

export default HeroSection
