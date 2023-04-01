import React from 'react'
import Ether from '../assets/portfolio/Ethereum.jpeg'
import Residual from '../assets/portfolio/Residual.png'
import re from '../assets/portfolio/react.png'
const Portfolio = () => {

    const portfolios = [
        {
            id:1,
            src:re,
            heading: 'Debiasing the Word Embeddings',
            href: 'https://github.com/dhruvagarwal29/Debiasing-Word-Embeddings.git' 
        },
        {
            id:2,
            src:Ether,
            heading: 'Ethereum Transactions and Balance Using Etherscan API' ,
            href:'https://github.com/dhruvagarwal29/Track-Ethereum-Transactions-and-Balance-Using-Python'
        },
        {
            id:3,
            src:Residual,
            heading: 'Implemented Deep learning residual networks' ,
            href:'https://github.com/dhruvagarwal29/Residual-Network'
        },
    ]

  return (
    <div name="Portfolio"
    className=' bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className=' max-w-screen-lg p-4 mx-auto flex flex-col justify-center
         w-full h-full'>
            <div className=' pb-8'>
                <p className=' text-4xl inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'> Check out some of my work right here.</p>
            </div>
            <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-8 
                    px-12 sm:px-0'>
                {
                    portfolios.map(({id, src, heading,href})=>(
                        <div key={id} className=' shadow-md shadow-gray-600 rounded-lg' >
                            <a href={href}>
                            <img src={src} alt="" className='  h-48 w-96 rounded-md duration-200 hover:scale-105'/>
                            </a>
                                
                            <div className='flex items-center justify-center px-6 py-2 m-2'>
                                <p>{heading}
                                </p>
                                {/* <button className='w-1/2 px-6 py-2 m-2 duration-200 
                                hover:scale-105'>Code</button>    */}
                            </div>     
                        </div>
                    ))
                }
            </div>
        </div>
    </div>
    
  )
}

export default Portfolio