import React from 'react'
import linkedin from '../assests/img/linkedin.png'
import instagram from '../assests/img/instagram.png'
import x from '../assests/img/x-twitter.svg'
import github from '../assests/img/icons8-github-512.png'
export default function Profilecard({profiledata}) {
  return (
    <div className=' lg:w-4/6 w-90per  mb-5 lg:mb-0 bg-slate-200  dark:bg-gray-800  lg:mt-8 py-5 px-5 rounded-md'>
       <h1 className='text-xl lg:text-2xl font-bold font-mono mb-2 pb-2 text-black dark:text-mruOrange'>{profiledata.heading}</h1>
       <p className=' font-mono text-black pb-2 dark:text-white'>{profiledata.paragraph}</p>
       <div className="w-128 flex justify-start items-center">
         {profiledata.linkedIn != "" && <a href={profiledata.linkedIn} target='_blank'><img src={linkedin} alt="likedin" className=' w-8 my-1'/></a>}
          {profiledata.instagram != "" && <a href={profiledata.instagram} target='_blank'><img src={instagram} alt="insta" className=' w-8 my-1 mx-3'/></a>}
          {profiledata.x != "" && <a href={profiledata.x} target='_blank'><img src={x} alt="x" className=' w-8 my-1'/></a>}
          {profiledata.github != "" && <a href={profiledata.github} target='_blank'><img src={github} alt="github" className=' w-10 h-12 my-1'/></a>}
       </div>
    </div>
  )
}
