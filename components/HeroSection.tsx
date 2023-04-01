"use client" // this is a client component
import React from 'react'
import Image from 'next/image'
import { Link } from 'react-scroll/modules'
export const HeroSection = () => {
  return (
    <section id="home">
        <div>
            <div>
                <Image src="/headshot.png" alt="Avatar Joshi" width={200} height={200} />  

            </div>
        <div>
            <h1>Hi, my name is Avatar Joshi</h1>
            <p>
                I'm a {' '}
                <span className='font-semibold text-teal-600'>
                    Data Analyst {' '}
                </span> 
                based in Santa Cruz, CA. I specialize in transforming complex data into simple, actionable insights.
            </p>
            <Link
            to="projects"
            className="text-neutral-100 font-semibold px-6 py-3 bg-teal-600"
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
    </section>
  )
}

export default HeroSection
