import React from 'react'
import '../Home/home.css'
export default function Home() {
  return (
    // <main className='bg-white h-screen flex justify-center items-center dark:bg-black'>
    //   <h1 className=' animate-bounce'><span className='text-5xl font-bold text-black dark:text-white'>MRU</span><span className='text-5xl font-bold text-mruOrange'>Space</span></h1>
    // </main>
    <>
    <div className='w-128 hidden lg:block h-bodyH lg:flex bg-white dark:bg-black justify-center items-center'>
        <div className=' inline-block ml-5'>
            <p className='textLD font-bold text-lg whitespace-nowrap lg:text-5xl text-black dark:text-white lg:font-semibold'>Welcome To Mruspace.int</p>
        </div>
    </div>
    <div className='w-128 block lg:hidden h-bodyH flex bg-white dark:bg-black justify-center items-center'>
        <div className='inline-block mb-20'>
        <p className='textSD font-bold leading-10 whitespace-nowrap text-2xl text-black dark:text-white lg:font-semibold'>Welcome To</p>
        <p className='textSDMS font-bold whitespace-nowrap text-3xl text-black dark:text-white lg:font-semibold'>Mruspace.in</p>
        </div >
    </div>
    </>

  )
}
