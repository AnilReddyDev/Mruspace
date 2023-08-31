import React from 'react'
import moonimg from '../components/assests/img/icons8-dark-mode-100.png'
import sunimg from '../components/assests/img/icons8-light-mode-78.png'
import mrulogo from '../components/assests/img/MRUSPACElogo.svg'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
export default function Header() {
    const navigate = useNavigate();
    const storedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(storedTheme || "light");

    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        console.log("useEffect "+theme)
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };


    return (
        <header className=' bg-white h-20 flex justify-between items-center border-b-2 border-slate-200 dark:bg-black dark:border-stone-900'>
            <ul className='flex justify-between items-center text-black p-4 dark:text-white'>
                <li className='cursor-pointer mr-14 ml-3 flex justify-center items-center' onClick={()=>navigate("/")}><span className='mr-2'><img src={mrulogo} className='w-8 h-10' alt="mru logo"/></span><span className='text-2xl font-bold'>MRU</span><span className='text-2xl font-bold text-mruOrange'>Space</span></li>
                <li className='cursor-pointer text-base mx-4 font-medium' onClick={()=>navigate("/qnpapers")}>Question papers</li>
                <li className='cursor-pointer text-base mx-4 font-medium' onClick={()=>navigate("/programs")}>Programs</li>
                <li className='cursor-pointer text-base mx-4 font-medium' onClick={()=>navigate("/materials")}>Materials</li>
                <li className='cursor-pointer text-base mx-4 font-medium' onClick={()=>navigate("/blogs")}>Blogs</li>
                <li className='cursor-pointer text-base mx-4 font-medium' onClick={()=>navigate("/Contribute")}>Contribute</li>
            </ul>
            <ul className='flex justify-between items-center text-black p-4 dark:text-white'>
                <li className='cursor-pointer px-4'><button onClick={toggleTheme} className='flex justify-between items-center'>{theme === "dark" ? <img src={sunimg} className='w-6 h-6' alt="sun" /> : <img src={moonimg} className='w-4 h-4' alt="moon" />}</button></li>
                <li className='cursor-pointer text-base mx-4 font-medium' onClick={()=>navigate("/about")}>About</li>
            </ul>
        </header>
    )
}
