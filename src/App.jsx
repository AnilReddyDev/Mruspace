import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import QuestionPaper from './components/QnpaperPages/QuestionPaper'
import Programs from './components/ProgramPages/Programs'
import Materials from './components/MaterialPages/Materials'
import Contribute from './components/Contributions/contribute'
import Blogs from './components/Blogs/Blogs'
function App() {

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
    <Route path='/blogs' element={<Blogs/>}/>

   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
