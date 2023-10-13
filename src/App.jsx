import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './components/Header/Header'
import Home from './components/Home/Home'
import About from './components/About/About'
import QuestionPaper from './components/QnpaperPages/QuestionPaper'
import Programs from './components/ProgramPages/Programs'
import Materials from './components/MaterialPages/Materials'
import Contribute from './components/Contributions/contribute'
import Blogs from './components/Blogs/Blogs'
import ShowBlog from './components/Blogs/ShowBlog'
import Upload from './components/upload/Upload'
import ReactGA from "react-ga";

function App() {

    useEffect(() => {
      ReactGA.initialize("G-1WYDY1P9QF");
    }, []);

  return (
    <>
   <BrowserRouter>
   <Header/>
   <Routes>
    <Route path='/' element={<Home/>}/>
    <Route path='/about' element={<About/>}/>
    <Route path='/qnpapers' element={<QuestionPaper/>}/>
    <Route path='/programs' element={<Programs/>}/>
    <Route path='/materials' element={<Materials/>}/>
    <Route path='/contribute' element={<Contribute/>}/>
    <Route path='/upload' element={<Upload/>}/>
    <Route path='/blogs' element={<Blogs/>}/>
    <Route path='/blogs/figma' element={<ShowBlog/>}/>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
