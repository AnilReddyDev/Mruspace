import React, { useState } from 'react'

export default function QuestionPaper() {
  const [showSoe,setShowSoe] = useState(false)
  const [showSas,setShowSas] = useState(false)
  const switchSoeBtn = ()=>{
    if(showSoe===false){
      setShowSoe(true)
      setShowSas(false)
    }else{
      setShowSoe(false)
    }
  }
  const switchSasBtn = ()=>{
    if(showSas===false){
      setShowSas(true)
      setShowSoe(false)
    }else{
      setShowSas(false)
    }
  }

  return (
    <>
      <main className='bg-white h-screen flex flex-col justify-start items-center dark:bg-black'>
        <h1 className='text-black font-bold text-4xl mt-24 mb-10 dark:text-white'>Previous question papers</h1>
        <input type="text" name="qnsearch" className='w-1/2 h-12 outline-none rounded-xl bg-slate-300 text-black placeholder:text-gray-900 dark:bg-mruLiteGray dark:text-white px-9 dark:placeholder:text-white ' placeholder="Search for anything..." />
        <div className='text-white flex justify-center items-center'>
          <button  onClick={switchSoeBtn} className='mx-8 my-12 pb-2 text-2xl text-black font-medium focus:border-b-4 focus:border-mruOrange dark:text-white'>SOE</button>
          <button onClick={switchSasBtn} className='mx-8 my-12 pb-2 text-2xl text-black font-medium focus:border-b-4 focus:border-mruOrange dark:text-white'>SAS</button>
        </div>
        {
          showSoe === true && <div className='flex w-2/3 flex-wrap justify-center items-center'>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Web Dev</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Web Dev</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Web Dev</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Web Dev</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Web Dev</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Web Dev</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Web Dev</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Web Dev</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Web Dev</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Web Dev</button>
        </div>
        }
        {
          showSas === true && <div className='flex w-2/3 flex-wrap justify-center items-center'>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Enatomy</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Enatomy</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Enatomy</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Enatomy</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Enatomy</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Enatomy</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Enatomy</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Enatomy</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Enatomy</button>
          <button className=' m-5 bg-slate-400 px-8 py-4  rounded-xl text-black font-medium text-lg focus:bg-mruOrange dark:focus:bg-mruOrange dark:bg-mruLiteGray dark:text-white'>Enatomy</button>
        </div>
        }

      </main>
    </>
  )
}
