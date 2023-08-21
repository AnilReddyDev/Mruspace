import './App.css'
import React, { useEffect } from 'react'
import { BrowserRouter,Route,Routes } from 'react-router-dom'
import Header from './components/Header'
import Home from './components/Home'
import About from './components/About'
import QuestionPaper from './components/QuestionPaper'
import Programs from './components/Programs'
import Materials from './components/Materials'
import Clubs from './components/Clubs'
import Community from './components/Community'

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
    <Route path='/clubs' element={<Clubs/>}/>
    <Route path='/community' element={<Community/>}/>
   </Routes>
   </BrowserRouter>
    </>
  )
}

export default App
