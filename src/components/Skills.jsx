import React from 'react'
import html from '../assets/html.png'
import css from '../assets/css.png'
import cpp from '../assets/cpp.png'
import java from '../assets/java.png'
import javascript from '../assets/javascript.png'
import github from '../assets/github.png'
import reactImage from '../assets/react.png'
import tail from '../assets/tailwind.png'
import python from '../assets/python.png'


const Skills = () => {

    const skills = [
        {
            id:1,
            tech:python,
            title: 'Python',
            style: 'shadow-white'
        },
        {
            id:1,
            tech:html,
            title: 'HTML',
            style: 'shadow-orange-500'
        },
        {
            id:2,
            tech:css,
            title: 'CSS',
            style: 'shadow-blue-500'
        },
        {
            id:3,
            tech:javascript,
            title: 'JavaScript',
            style: 'shadow-yellow-500'
        },
        {
            id:4,
            tech:reactImage,
            title: 'React',
            style: 'shadow-blue-600'
        },
        {
            id:5,
            tech:tail,
            title: 'Tailwind',
            style: 'shadow-sky-400'
        },
        {
            id:6,
            tech:cpp,
            title: 'C/C++',
            style: 'shadow-sky-500'
        },
        {
            id:7,
            tech:java,
            title: 'Java',
            style: 'shadow-red-800'
        },
        {
            id:8,
            tech:github,
            title: 'GitHub',
            style: 'shadow-gray-400'
        },
    ]
  return (
    <div name="Skills" className=' bg-gradient-to-b from-gray-800 to-black w-full h-full'>

        <div className=' max-w-screen-lg mx-auto p-4 flex flex-col
        justify-center w-full h-full text-white '>
            <div>
                <p className=' text-4xl border-b-4 border-gray-500 p-2 inline text-center'>Skills</p>
                <p className='py-6'>These are the technologies I've worked with ! </p>
            </div>

            <div className='w-full grid grid-cols-2 sm:grid-cols-3 
            gap-8 text-center py-8 px-12 sm:px-0'>

            {
                skills.map(({id, tech, title,style})=>(
                    <div key= {id} className={`shadow-md hover:scale-105 duration-500 py-2
                    rounded-lg ${style}`}>
                        <img src={tech} alt="" className='w-20 mx-auto'></img>
                        <p className='mt-4'>{title}</p>
                    </div>
                    
                ))
            }

            
        </div>
        </div>

        


    </div>
  )
}

export default Skills