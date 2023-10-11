import React from 'react'
import '../Home/home.css'
export default function Home() {
  return (
    // <main className='bg-white h-screen flex justify-center items-center dark:bg-black'>
    //   <h1 className=' animate-bounce'><span className='text-5xl font-bold text-black dark:text-white'>MRU</span><span className='text-5xl font-bold text-mruOrange'>Space</span></h1>
    // </main>
    <>
      <div className='w-128 hidden lg:block h-bodyH lg:flex bg-white lg:flex-col dark:bg-black justify-center items-center'>
        <div className=' inline-block ml-5'>
          <p className='textLD font-bold text-lg whitespace-nowrap lg:text-5xl text-black dark:text-white lg:font-semibold'>Welcome to Mruspace.in</p>
        </div>
        <div className='inline-clock '>
          <p className='textLDPara font-medium text-md mt-5 whitespace-nowrap lg:text-2xl text-black dark:text-white'>One Stop place for Materials, Prev Question papers & programs.</p>
        </div>
      </div>
      <div className='w-128  block lg:hidden h-bodyH flex flex-col bg-white dark:bg-black justify-center items-center'>
        <div className='inline-block'>
          <p className='textSD font-bold whitespace-nowrap text-2xl text-black dark:text-white lg:font-semibold'>Welcome to</p>
        </div >
        <div className='inline-block'>
          <p className='textSDMS font-bold whitespace-nowrap text-3xl text-black dark:text-white lg:font-semibold'>Mruspace.in</p>
        </div>
        <div className='inline-clock mb-14'>
          <p className='textSDPara1 font-bold text-md  mt-3 whitespace-nowrap text-black dark:text-white'>One Stop place for Materials,</p>
          <p className='textSDPara2 font-bold text-md  whitespace-nowrap text-black dark:text-white'>Prev Question papers & programs.</p>
        </div>
      </div>
    </>

  )
}
