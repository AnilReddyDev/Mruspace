import React from 'react'
import { useNavigate } from 'react-router-dom'
export default function SlideDownMenu({toggleMenu}) {
    const navigate = useNavigate();
    
  return (
    <div className='w-128 bg-mruOrange flex flex-col items-center'>
        <ul className=' py-4 '>
            <li className=' text-2xl py-2' onClick={() => {toggleMenu(), navigate("/")}}>Home</li>
            <li className=' text-2xl py-2' onClick={() => {toggleMenu(), navigate("/materials")}}>Material</li>
            <li className=' text-2xl py-2' onClick={() => {toggleMenu(), navigate("/qnpapers")}}>Question Papers</li>
            <li className=' text-2xl py-2' onClick={() => {toggleMenu(), navigate("/blogs")}}>Blogs</li>
            <li className=' text-2xl py-2' onClick={() => {toggleMenu(), navigate("/programs")}}>Programs</li>
            <li className=' text-2xl py-2' onClick={() => {toggleMenu(), navigate("/Contribute")}}>Contributions</li>
            <li className=' text-2xl py-2' onClick={() => {toggleMenu(), navigate("/about")}}>About Us</li>
        </ul>
    </div>
  )
}
