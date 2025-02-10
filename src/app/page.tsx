/* eslint-disable react/no-unescaped-entities */

"use client"

import Head from 'next/head';
import {motion} from 'framer-motion';
import { FaPython, FaReact, FaJs, FaJava, FaMicrosoft, FaHtml5, FaNode, FaAws} from 'react-icons/fa6';
import { CgCPlusPlus } from "react-icons/cg";
import { SiFirebase, SiTypescript, SiNextdotjs, SiLua, SiPostgresql, SiSqlite } from 'react-icons/si';
import { DiMongodb } from "react-icons/di";
import {Pacifico} from 'next/font/google';

const pacifico = Pacifico({
  weight: "400",
  style: "normal",
  subsets: ['latin']
}
)

export default function HomePage() {
  return (
    <>
    <Head>
      <title>Home | My Portfolio</title>
      <meta name="description" content="Welcome to my portfolio showcasing my projects, skills, and achievements in Software Development, Data Science, and AI/ML." />
    </Head>
    <section className='container mx-auto p-6'>
      <motion.div
        initial={{opacity: 0, y:-50}}
        animate={{opacity: 1, y: 0}}
        transition={{duration: 0.8, ease:"easeOut"}}
        className='flex flex-col md:flex-row items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600 text-white rounded-lg shadow-lg p-10'>
        <div className='flex-shrink-0'>
          <img
              src="/images/pic.jpg"  
              alt="Profile Picture"
              className="w-48 h-48 rounded-full border-4 border-white shadow-md"
            />
        </div>
        <div className='mt-6 md:mt-0 md:ml-10 text-center md:text-left'>
          <h1 className={`${pacifico.className} text-5xl font-extrabold mb-5 text-white`}>Welcome to My Portfolio</h1>
          <p className='text-xl leading-relaxed mb-4 text-white'>
            Hi, I'm Ayush Roy. I create innovative solutions in Software Development, Data Science, and AI/ML.
          </p>
          <span className='text-m leading-relaxed text-white'> Make your way to the Projects page through the Navigation Bar above to see what I've worked on! </span>
        </div>
      </motion.div>
    </section>
    <section className='container mx-auto p-6'>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="bg-white rounded-lg shadow-lg p-10 mb-2 bg-gradient-to-r from-blue-500 to-purple-600">
          <h2 className='text-4xl font-bold mb-4 text-center text-white'>
            About me
          </h2>
          <div className='flex flex-col md:flex-row items-center'>
            <p className='text-lg leading-relaxed text-center md:text-left text-white'>
            Hi! I’m Ayush Roy, a passionate Software Engineer and AI/ML enthusiast currently pursuing a BSc in Computer Science with a Minor in Mathematics at the University of Alberta.
            With experience in full-stack development, machine learning, and data analytics, I love building impactful solutions that drive efficiency and enhance user experiences.
            I’ve had the opportunity to work with companies like TangoRide, Dorsal AI, and the City of Edmonton, where I’ve developed web applications, optimized NLP models, and implemented data-driven solutions that save thousands of dollars annually. 
            I have been chosen as a Project/Tech Lead at the Blueprint Chapter of the University of Alberta where we develop apps that greatly aid non-profit organisations.
            </p>
            <img
              src="/images/jeff.png"  
              alt="Profile Picture"
              className="w-48 h-48 "
            />
          </div>
      </motion.div>
    </section>

    <section className='container mx-auto p-6 text-center'>
      <h1 className="bg-gradient-to-r from-blue-500 to-purple-600 text-4xl inline-block text-transparent bg-clip-text font-semibold">
        Technologies I'm Proficient With
      </h1>
      <div className='container mx-auto flex flex-wrap justify-center gap-20 mt-10'>
        <div className='flex flex-col items-center'>
          <FaPython size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>Python</span>
        </div>
        <div className='flex flex-col items-center'>
          <FaJs size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>JavaScript</span>
        </div>
        <div className='flex flex-col items-center'>
          <FaReact size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>React</span>
        </div>
        <div className='flex flex-col items-center'>
          <FaJava size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>Java</span>
        </div>
        <div className='flex flex-col items-center'>
          <SiSqlite size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>Sqlite</span>
        </div>  
        <div className='flex flex-col items-center'>
          <SiNextdotjs size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>Next.js</span>
        </div>
        <div className='flex flex-col items-center'>
          <SiTypescript size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>TypeScript</span>
        </div>
        <div className='flex flex-col items-center'>
          <FaHtml5 size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>HTML & CSS</span>
        </div>
        <div className='flex flex-col items-center'>
          <FaNode size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>Node.js</span>
        </div>
        <div className='flex flex-col items-center'>
          <FaAws size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>AWS</span>
        </div>
        <div className='flex flex-col items-center'>
          <CgCPlusPlus size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>C/C++/C#</span>
        </div>
        <div className='flex flex-col items-center'>
          <SiFirebase size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>Firebase</span>
        </div>
        <div className='flex flex-col items-center'>
          <DiMongodb size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>MongoDB</span>
        </div>
        <div className='flex flex-col items-center'>
          <SiLua size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>Lua</span>
        </div>
        <div className='flex flex-col items-center'>
          <SiPostgresql size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>Postgresql</span>
        </div>
        <div className='flex flex-col items-center'>
          <FaMicrosoft size={64} className='text-purple-600'/>
          <span className='text-lg font-medium text-purple-600'>Microsoft Office Suite</span>
        </div>
      </div>
    </section>
    </>

  );
}
