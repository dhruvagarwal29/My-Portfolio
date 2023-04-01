import React from 'react'

export const About = () => {
  return (
    <div name = "About" className='w-full 
    h-screen bg-gradient-to-b
    from-gray-800 to-black 
    text-white'>
        <div className='max-w-screen-lg 
        p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl  inline border-b-4 border-gray-500'>
                    About Me
                </p>
            </div>
            <p className=' lg:text-xl lg:mt-15 text-justify'>
            I am a Computer Engineering Graduate student at New York University with 
            a strong focus on Machine Learning, Software Development, 
            and Web Applications. My education includes a 
            Master of Science in Computer Engineering with a GPA of 3.8. 
            I have a diverse range of technical skills, 
            including proficiency in Python, Java, C, C++, HTML, CSS, 
            JavaScript, React, SQL, Shell Scripting, MySQL, and various libraries/tools.
            </p>
            <br />
            <p className='lg:text-xl text-justify'>
            My professional experience includes a research internship with Cosmos Technology, 
            where I conducted in-depth research on cryptocurrencies and Metaverses 
            and built a large-scale containerized database of scraped cryptocurrencies on AWS. 
            I have also worked as a Software Engineer Intern at Rice Lake Weighing System, 
            where I developed and implemented a user-friendly configuration menu for a 
            Linux-based indicator using JavaScript. Moreover, 
            I have worked as an Associate Application Developer at Accenture, where 
            I developed a SAP PP system for monitoring the production of coal.
            </p>
        </div>
    </div>
  )
}
