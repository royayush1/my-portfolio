/* eslint-disable react/no-unescaped-entities */

"use client"

import Head from 'next/head';
import { FaGithub, FaInstagram, FaLinkedin } from 'react-icons/fa6';
import { SiGmail } from "react-icons/si";
import {Pacifico} from 'next/font/google';

const pacifico = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ['latin']
})

const socialLinks = [
    {
        name: 'Github',
        url: 'https://github.com/royayush1',
        icon: <FaGithub size={24} className='text-purple-600'/>
    },
    {
        name: 'LinkedIn',
        url: 'https://www.linkedin.com/in/ayush-roy-6075a8aa/',
        icon: <FaLinkedin size={24} className='text-blue-700'/>
    },
    {
        name: 'Instagram',
        url: 'https://www.instagram.com/steroyd99/',
        icon: <FaInstagram size={24} className='text-pink-500'/>
    },
    {
        name: 'roy.ayush1@gmail.com',
        url: 'https://mail.google.com/mail/?view=cm&fs=1&to=roy.ayush1@gmail.com&su=SUBJECT&body=BODY',
        icon: <SiGmail size={24} className='text-red-700'/>
    }
]

export default function ProjectsPage() {
    return(
        <>
        <Head>
            <title>My Contact | My Portfolio</title>
            <meta name="description" content="Get in touch with Ayush Roy via social media or visit my website." />
        </Head>
        
        <section className='container mx-auto p-6'>
            <h1 className={`${pacifico.className} text-4xl font-bold mb-4 text-center`}>
                My Socials & Contact
            </h1>
            <div className='flex flex-col md:flex-row gap-8 items-center justify-evenly'>
                <div className='flex flex-col space-y-4'>
                    
                    {
                        socialLinks.map((link) =>(
                            <a
                                key={link.name}
                                href={link.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className='flex items-center space-x-2 hover:underline'>
                                    <span>{link.icon}</span>
                                    <span className='text-lg font-medium'>{link.name}</span>

                            </a>

                        ))
                    }
                </div>
                    <img
                        src="/images/goku.png"
                        alt="Illustration for aesthetic"
                        className='w-full max-w-md rounded-lg object-cover drop-shadow-xl'/>
            </div>

        </section>
       
        </>
    )
}



