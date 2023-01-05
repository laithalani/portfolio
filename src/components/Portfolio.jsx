import React from 'react'
import hooBank from '../assets/portfolio/hooBank.jpg'
import longestVowel from '../assets/portfolio/longestVowel.jpg'
import portfolio1 from '../assets/portfolio/portfolio.jpg'


const Portfolio = () => {

    const portfolio =[
        {
            id: 1,
            src: hooBank,
            link: 'https://laithalani.github.io/',
            code: 'https://github.com/laithalani/Modern-Bank-final.git',
        },
        {
            id: 2,
            src: longestVowel,
            link: 'https://github.com/laithalani/longest-vowel-word-in-a-sentence.git',
            code: 'https://github.com/laithalani/longest-vowel-word-in-a-sentence.git',
        },
        {
            id: 3,
            src: portfolio1,
            link: 'https://www.laithalani.com',
            code: 'https://github.com/laithalani/longest-vowel-word-in-a-sentence.git',
        },
    ];

  return (
    <div name="portfolio" className='bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>Portfolio</p>
                <p className='py-6'>Check out some of my work right here</p>
            </div>
            <div className='grid md:grid-cols-3 sm:grid-cols-2 gap-8 px-12 sm:px-0'>
                {portfolio.map(({id, src, link, code}) => (

                <div key={id} className='shadow-md shadow-gray-600 rounded-lg'>
                    <img src={src} alt="" className='rounded-md duration-200 hover:scale-105'/>
                    <div className='flex items-center justify-center'>
                        <a target='_blank' href={link}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Demo</button></a>
                        <a target='_blank' href={code}><button className='w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105'>Code</button></a>
                        
                    </div>
                </div>
                ))}
            </div>
        </div>
    </div>
  )
}

export default Portfolio