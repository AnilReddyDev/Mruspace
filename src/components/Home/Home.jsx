import React from 'react'
import './home.css'
export default function Home() {
  return (
    <div className='w-128 h-bodyH bg-white flex flex-col lg:flex-row justify-center items-center dark:bg-black'>
      <div className="leftcon w-11/12 lg:w-3/5 pl-4 lg:pl-8 lg:flex lg:flex-col items-center  box-border mb-7 lg:h-96">
        <div>
          <h1 className='text-black dark:text-white hidden lg:block lg:text-5xl mb-1 lg:mb-3 font-poppins font-bold'>Welcome to the exculsive space for</h1>
          <h1 className='text-black dark:text-white font-bold block lg:hidden text-2xl lg:text-4xl mb-3 lg:mb-3 font-poppins '>Welcome to the exculsive space for MallaReddy students<b className='text-mruOrange'>.</b></h1>
          <h1 className='text-black dark:text-white hidden lg:block text-xl lg:text-5xl mb-1 lg:mb-7 font-poppins font-bold'>MallaReddy students<b className='text-mruOrange'>.</b></h1>
          <p className='text-black dark:text-white font-medium hidden lg:block  font-xl  mb-1 font-poppins'>One stop destination for</p>
          <p className='text-black dark:text-white font-medium hidden lg:block  font-xl font-poppins'><b>Question papers </b><b className='text-mruOrange'>.</b><b> Materials </b><b className='text-mruOrange'>.</b><b> Programs </b><b className='text-mruOrange'>.</b><b> Knowledge share </b><b className='text-mruOrange'>.</b></p>
          <p className='text-black dark:text-white font-medium block lg:hidden font-lg font-poppins'>One stop destination for <b>Question papers </b><b className='text-mruOrange'>.</b><b> Materials </b><b className='text-mruOrange'>.</b><b> Programs </b><b className='text-mruOrange'>.</b><b> Knowledge share </b><b className='text-mruOrange'>.</b></p>
        </div>
      </div>
      <div className="rightcon w-11/12 lg:w-2/5  pl-5 h-96 flex  ">
        <div>
        <div className='div1 w-28 lg:w-48 hover:ml-2 transition-all 0.2s ease bg-black dark:bg-white h-4 lg:h-5  mb-6 rounded-xl'></div>
        <div className='div2 hover:ml-2 transition-all 0.2s ease w-36 lg:w-64 bg-black dark:bg-white h-4 lg:h-5 mb-6 rounded-xl'></div>
        <div className='flex'>
          <div className='div3-1 hover:ml-10 transition-all 0.2s ease ml-8 w-36 lg:w-52 bg-black dark:bg-white h-4 lg:h-5 mb-6 rounded-xl'></div>
          <div className='div3-2 hover:ml-5 transition-all 0.2s ease ml-3 w-12 lg:w-28 bg-mruOrange h-4 lg:h-5 mb-6 rounded-xl'></div>
          <div className='div3-3 hover:ml-5 transition-all 0.2s ease ml-3 w-10 lg:w-20 bg-black dark:bg-white h-4 lg:h-5 mb-6 rounded-xl'></div>
        </div>
        <div className='flex'>
          <div className='div4-1 hover:ml-16 transition-all 0.2s ease ml-14 w-40 lg:w-48 bg-black dark:bg-white h-4 lg:h-5 mb-6 rounded-xl'></div>
          <div className='div4-2 hover:ml-5 transition-all 0.2s ease ml-3 w-14 lg:w-16 bg-black dark:bg-white h-4 lg:h-5 mb-6 rounded-xl'></div>
        </div>
        <div className='flex'>
          <div className='div5-1 hover:ml-2 transition-all 0.2s ease w-36 lg:w-52 bg-mruOrange h-4 lg:h-5 mb-6 rounded-xl'></div>
          <div className='div5-2 hover:ml-5 transition-all 0.2s ease ml-3 w-10 lg:w-16 bg-black dark:bg-white h-4 lg:h-5 mb-6 rounded-xl'></div>
          <div className='div5-3 hover:ml-5 transition-all 0.2s ease ml-3 w-16 lg:w-24 bg-black dark:bg-white h-4 lg:h-5 mb-6 rounded-xl'></div>
        </div>
        <div className='flex'>
          <div className='div6-1 hover:ml-10 transition-all 0.2s ease ml-8 w-14  lg:w-20 bg-black dark:bg-white h-4 lg:h-5 mb-6 rounded-xl'></div>
          <div className='div6-2 hover:ml-5 transition-all 0.2s ease ml-3 w-14 lg:w-20  bg-black dark:bg-white h-4 lg:h-5 mb-6 rounded-xl'></div>
          <div className='div6-3 hover:ml-5 transition-all 0.2s ease ml-3 w-20 lg:w-32 bg-mruOrange h-4 lg:h-5 mb-6 rounded-xl'></div>
        </div>
        <div className='flex'>
          <div className='div7-1 hover:ml-5 transition-all 0.2s ease ml-3 w-24 lg:w-28 bg-mruOrange h-4 lg:h-5 mb-6 rounded-xl'></div>
          <div className='div7-2 hover:ml-5 transition-all 0.2s ease ml-3 w-14 lg:w-16 bg-black dark:bg-white h-4 lg:h-5 mb-6 rounded-xl'></div>
        </div>
        </div>
      </div>
    </div>
  )
}
