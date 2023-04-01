import React from 'react'
import { FaLinkedin, FaGithub } from 'react-icons/fa'
// import { HiOutlineMail} from 'react-icons/hi'
import {BsFillPersonLinesFill} from 'react-icons/bs';


export const SocialLinks = () => {

    const links = [
        {
            id:1,
            child:(
                <>
                    LinkedIn <FaLinkedin size={30} color='#0072b1'/>
                </>
            ),
            href: 'https://www.linkedin.com/in/dhruvagarwal29/',
            style:'rounded-tr-md'
        },
        {
            id:2,
            child:(
                <>
                    Github <FaGithub size={30} color='black'/>
                </>
            ),
            href: 'https://github.com/dhruvagarwal29',

        },
        // {
        //     id:3,
        //     child:(
        //         <>
        //             Mail <HiOutlineMail size={30} color='Purple'/>
        //         </>
        //     ),
        //     href: 'https://linkedin.com',

        // },
        {
            id:3,
            child:(
                <>
                    Resume <BsFillPersonLinesFill size={30} color='forestgreen'/>
                </>
            ),
            href: '/DhruvAgarwal-Resume.pdf',
            style:'rounded-br-md',
            download: true
        },
    ]
  return (
    <div className=' hidden lg:flex flex-col top-[35%] left-0 fixed  '>
        <ul>
            {links.map(({id, child, href, style, download}) => (
                <li key = {id} 
                className= 
                {"flex justify-between items-center w-40 h-14 px-4 bg-gray ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 bg-gray-200 " 
                + 
                " " + 
                style }
                >
                    <a 
                        href={href} 
                        className='flex justify-between items-center w-full text-black'
                        download={download} target="_blank" rel="noreferrer"
                    
                    >
                        {child}
                    </a>
                </li>
                // eslint-disable-next-line
            ))}
        </ul>
    </div>
  )
}
