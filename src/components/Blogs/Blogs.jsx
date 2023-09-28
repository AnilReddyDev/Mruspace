import React from 'react'

export default function Blogs() {
  return (
    <div className=' w-128 h-screen bg-white dark:bg-black'>
      <div className=' w-1/3 h-52 p-10'>
        <img src="https://www.saasdesign.io/wp-content/uploads/2020/06/figma-design-what-is-min.png" alt="figma" />
        <h1 className=' font-semibold text-xl my-2 text-black dark:text-white'>Getting started with Figma</h1>
        <p className=' text-sm my-1 text-black dark:text-white'>Figma is a cloud-based design and prototyping tool that facilitates collaborative and efficient UI/UX design workflows.</p>
        <p className=' text-green-600 font-semibold cursor-pointer'>Read More</p>
      </div>
    </div>
  )
}
