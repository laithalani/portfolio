import React from 'react'

const About = () => {
  return (
    <div name='about' className='w-full h-screen bg-gradient-to-b from-gray-800 to-black text-white'>
        <div className='max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full'>
            <div className='pb-8'>
                <p className='text-4xl font-bold inline border-b-4 border-gray-500'>
                    About
                </p>
            </div>
            <p className='text-xl mt-20'>
            I love to learn new techs and expand my knowledge. I have done a few web development and there are a lot of parts to it. The part that I love is that I can build something and I can see it immediately. I can show it to people and they can interact with it. 
            </p>
            <br />
            <p className='text-xl'>
                Many people love being web developer because they can extend their creativity and passion on developing websites, and I’m one of them.
            </p>
        </div>
    </div>
  )
}

export default About