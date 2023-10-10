import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function SlideDownMenu({toggleMenu}) {
    const navigate = useNavigate();
    
  return (
    <div className='w-128 bg-slate-200 h-screen dark:bg-slate-800 text-black dark:text-white flex flex-col items-start pl-5'>
        <ul className=' py-4 '>
            <li className=' text-2xl py-2 font-mono font-semibold' onClick={() => {toggleMenu(), navigate("/")}}>Home</li>
            <li className=' text-2xl py-2 font-mono font-semibold' onClick={() => {toggleMenu(), navigate("/materials")}}>Material</li>
            <li className=' text-2xl py-2 font-mono font-semibold' onClick={() => {toggleMenu(), navigate("/qnpapers")}}>Question Papers</li>
            <li className=' text-2xl py-2 font-mono font-semibold' onClick={() => {toggleMenu(), navigate("/blogs")}}>Blogs</li>
            <li className=' text-2xl py-2 font-mono font-semibold' onClick={() => {toggleMenu(), navigate("/programs")}}>Programs</li>
            <li className=' text-2xl py-2 font-mono font-semibold' onClick={() => {toggleMenu(), navigate("/Contribute")}}>Contributions</li>
            <li className=' text-2xl py-2 font-mono font-semibold' onClick={() => {toggleMenu(), navigate("/about")}}>About Us</li>
        </ul>
    </div>
  )
}
