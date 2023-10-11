import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function SlideDownMenu({toggleMenu}) {
    const navigate = useNavigate();
    
  return (
    <div className='w-128 bg-slate-200 h-screen dark:bg-slate-800 text-black dark:text-white flex flex-col items-start pl-5'>
        <ul className=' py-4 '>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-mono font-semibold hover:text-3xl' onClick={() => {toggleMenu(), navigate("/")}}>Home</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-mono font-semibold hover:text-3xl' onClick={() => {toggleMenu(), navigate("/materials")}}>Material</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-mono font-semibold hover:text-3xl' onClick={() => {toggleMenu(), navigate("/qnpapers")}}>Question Papers</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-mono font-semibold hover:text-3xl' onClick={() => {toggleMenu(), navigate("/blogs")}}>Blogs</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-mono font-semibold hover:text-3xl' onClick={() => {toggleMenu(), navigate("/programs")}}>Programs</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-mono font-semibold hover:text-3xl' onClick={() => {toggleMenu(), navigate("/upload")}}>upload</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-mono font-semibold hover:text-3xl' onClick={() => {toggleMenu(), navigate("/Contribute")}}>Contributors</li>
            <li className=' text-2xl h-12 transition-all 0.5s ease-in font-mono font-semibold hover:text-3xl' onClick={() => {toggleMenu(), navigate("/about")}}>About Us</li>
        </ul>
    </div>
  )
}
