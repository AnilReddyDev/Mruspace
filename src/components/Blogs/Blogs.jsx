import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function Blogs() {
  const navigate = useNavigate();
  return (
    <div className=' w-128 h-screen bg-white dark:bg-black'>
      <div className=' w-1/3 h-52 p-10'>
        <img src="https://www.saasdesign.io/wp-content/uploads/2020/06/figma-design-what-is-min.png" alt="figma" />
        <h1 className=' font-semibold text-xl my-2 text-black dark:text-white'>Getting started with Figma</h1>
        <p className=' text-sm my-1 text-black dark:text-white'>Figma is a cloud-based design and prototyping tool that facilitates collaborative and efficient UI/UX design workflows.</p>
        <p className=' text-green-600 font-semibold cursor-pointer' onClick={()=>navigate("/blogs/figma")}>Read More</p>
      </div>
    </div>
  )
}
