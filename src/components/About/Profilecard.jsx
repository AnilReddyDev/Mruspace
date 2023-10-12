import React from 'react'
import linkedin from '../assests/img/linkedin.png'
import instagram from '../assests/img/instagram.png'
import x from '../assests/img/x-twitter.svg'
export default function Profilecard({profiledata}) {
  return (
    <div className=' lg:w-4/6 w-90per  mb-5 lg:mb-0 bg-slate-200 dark:bg-slate-700  lg:mt-8 py-2 px-5 rounded-md'>
       <h1 className='text-xl lg:text-2xl font-bold font-mono mb-2 text-black dark:text-mruOrange'>{profiledata.heading}</h1>
       <p className=' font-mono text-black dark:text-white'>{profiledata.paragraph}</p>
       <div className="w-128 flex">
          <a href={profiledata.linkedIn} target='_blank'><img src={linkedin} alt="likedin" className=' w-8 my-3'/></a>
          <a href={profiledata.instagram} target='_blank'><img src={instagram} alt="insta" className=' w-8 my-3 mx-3'/></a>
          <a href={profiledata.x} target='_blank'><img src={x} alt="x" className=' w-8 my-3'/></a>
       </div>
    </div>
  )
}
