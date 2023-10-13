import React from 'react'
import moonimg from '../assests/img/icons8-moon-100.png'
import sunimg from '../assests/img/icons8-light-mode-78.png'
import mrulogo from '../assests/img/MRUSPACElogo.svg'
import menuiconb from '../assests/img/icons8-menu-150.png'
import menuiconw from '../assests/img/icons8-menu-150(1).png'
import menuxb from '../assests/img/icons8-x-96-b.png'
import menuxw from '../assests/img/icons8-x-96.png'
import { useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';
import SlideDownMenu from './SlideDownMenu'

export default function Header() {
    const navigate = useNavigate();
    const storedTheme = localStorage.getItem("theme");
    const [theme, setTheme] = useState(storedTheme || "light");
    const [showMenu, setShowMenu] = useState(false);
    useEffect(() => {
        if (theme === "dark") {
            document.documentElement.classList.add("dark");
        } else {
            document.documentElement.classList.remove("dark");
        }
        console.log("useEffect " + theme)
        localStorage.setItem("theme", theme);
    }, [theme]);

    const toggleTheme = () => {
        setTheme(theme === "dark" ? "light" : "dark");
    };

    const toggleMenu = () => {
        setShowMenu(!showMenu)
    }

    return (
        <>
            <header className=' bg-white h-headerH flex justify-between items-center border-b-2 border-slate-200 dark:bg-black dark:border-stone-900'>
                <ul className='flex  justify-between items-center text-black p-4 dark:text-white'>
                    <li className='cursor-pointer lg:mr-14 lg:ml-3 flex justify-center items-center' onClick={() => {navigate("/");setShowMenu(false)}}><span className='mr-2'><img src={mrulogo} className='w-8 h-10' alt="mru logo" /></span><span className='text-xl lg:text-2xl font-bold'>MRU</span><span className='text-xl lg:text-2xl font-bold text-mruOrange'>Space</span></li>
                    <li className='cursor-pointer hidden lg:block text-base mx-4 font-medium' onClick={() => navigate("/qnpapers")}>Question papers</li>
                    <li className='cursor-pointer hidden lg:block text-base mx-4 font-medium' onClick={() => navigate("/programs")}>Programs</li>
                    <li className='cursor-pointer hidden lg:block text-base mx-4 font-medium' onClick={() => navigate("/materials")}>Materials</li>
                    <li className='cursor-pointer hidden lg:block text-base mx-4 font-medium' onClick={() => navigate("/blogs")}>Blogs</li>
                    <li className='cursor-pointer hidden lg:block text-base mx-4 font-medium' onClick={() => navigate("/upload")}>Upload</li>
                    <li className='cursor-pointer hidden lg:block text-base mx-4 font-medium' onClick={() => navigate("/Contribute")}>Contributor</li>
                </ul>
                <ul className='flex justify-between items-center text-black p-4 dark:text-white'>
                    <li className='cursor-pointer  lg:block px-4'><button onClick={toggleTheme} className='flex justify-between items-center'>{theme === "dark" ? <img src={sunimg} className='w-6 h-6' alt="sun" /> : <img src={moonimg} className='w-5 h-5 -rotate-45' alt="moon" />}</button></li>
                    <li className='cursor-pointer hidden lg:block text-base mx-4 font-medium' onClick={() => navigate("/about")}>About</li>
                    <li className='cursor-pointer block lg:hidden text-xl mx-4 font-semibold' onClick={() => toggleMenu()}>{showMenu === false ? (theme === "light" ? (<img className='w-7' src={menuiconb}/>) : (<img className='w-7' src={menuiconw}/>)) : (theme === "light" ? <img className='w-8' src={menuxb}/> : <img className='w-8' src={menuxw}/> )}</li>
                </ul>
            </header>
            {showMenu && <SlideDownMenu toggleMenu={toggleMenu}/>}
        </>
    )
}
