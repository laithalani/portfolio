import React from 'react'
import HeroImage from '../assets/heroImage.png'
import {MdOutlineKeyboardArrowRight} from 'react-icons/md'
const Home = () => {
  return (
    <div name="home" className='h-screen w-full bg-gradient-to-b from-black via-black to-gray-800'>
        <div className='max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row'>
            <div className='flex flex-col justify-center h-full'>
                <h2 className='text-4xl sm:text-7xl font-bold text-white'>I'm a front end Developer</h2>
                <p className='text-gray-500 py-4 max-w-md'>
                I’m a web developer who love to explore technologies and frameworks that catch my interest, like React and Tailwind. If you’re looking for a developer to add to your team, I’d love to hear from you.
                </p>
                <div>
                    <button className='group text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer'>
                        Portfolio
                        <span className='group-hover:rotate-90 duration-300'>
                        <MdOutlineKeyboardArrowRight size={25} className='ml-1' />
                        </span>
                    </button>
                </div>
            </div>
            <div>
                <img src={HeroImage} alt="my pic" className='shadow-[0px_0px_20px_20px_rgba(150,150,150,0.2)] rounded-2xl mx-auto w-2/3 md:w-full' />
            </div>
        </div>
        
    </div>
  )
}

export default Home