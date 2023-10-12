import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function SlideDownMenu({toggleMenu}) {
    const navigate = useNavigate();
    
  return (

    <>
    <div className='  w-128 absolute z-30 bg-slate-50 h-screen dark:bg-slate-950   text-black dark:text-white flex flex-col items-start pl-5'>
        <ul className=' py-4 z-40 blur-none'>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-poppins font-normal hover:text-3xl' onClick={() => {toggleMenu(), navigate("/")}}>Home</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-poppins font-normal hover:text-3xl' onClick={() => {toggleMenu(), navigate("/materials")}}>Material</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-poppins font-normal hover:text-3xl' onClick={() => {toggleMenu(), navigate("/qnpapers")}}>Question Papers</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-poppins font-normal hover:text-3xl' onClick={() => {toggleMenu(), navigate("/blogs")}}>Blogs</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-poppins font-normal hover:text-3xl' onClick={() => {toggleMenu(), navigate("/programs")}}>Programs</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-poppins font-normal hover:text-3xl' onClick={() => {toggleMenu(), navigate("/upload")}}>upload</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-poppins font-normal hover:text-3xl' onClick={() => {toggleMenu(), navigate("/Contribute")}}>Contributors</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-poppins font-normal hover:text-3xl' onClick={() => {toggleMenu(), navigate("/about")}}>About Us</li>
        </ul>
    </div>
    </>
  )
}
