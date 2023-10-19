import React, { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import Headlines from './Headlines';
import { useEffect } from 'react';
export default function Blogs() {
  const [showHeadline,setShowheadline] = useState(false)
  useEffect(() => {
    setShowheadline(true)
    setTimeout(() => {
      setShowheadline(false)
    }, 8000);
  }, [])
  
  const navigate = useNavigate();
  return (
    <div className=' w-128 h-bodyH bg-white dark:bg-black flex flex-col justify-start items-start lg:justify-start lg:items-start'>
      {showHeadline && <Headlines/>}
      <div className='w-128 lg:w-1/3 h-auto lg:h-52 p-10'>
        <img src="https://www.saasdesign.io/wp-content/uploads/2020/06/figma-design-what-is-min.png" alt="figma" />
        <h1 className=' font-semibold text-xl my-2 text-black dark:text-white'>Getting started with Figma</h1>
        <p className=' text-sm my-1 text-black dark:text-white'>Figma is a cloud-based design and prototyping tool that facilitates collaborative and efficient UI/UX design workflows.</p>
        <p className=' text-mruOrange font-semibold cursor-pointer' onClick={()=>navigate("/blogs/figma")}>Read More</p>
      </div>
    </div>
  )
}

