import React from 'react'

export default function Upload() {
  return (
    <div className='w-128 h-bodyH flex flex-col p-5 lg:p-10 bg-white dark:bg-black'>
       <h1 className='block font-poppins lg:hidden lg:w-3/5 lg:text-5xl text-2xl lg:pb-10 font-bold lg:font-semibold text-black  dark:text-mruOrange'>Share your resources and make this space a better one.</h1>
        <h1 className='lg:text-5xl font-poppins hidden lg:block pb-2 text-2xl font-bold lg:font-semibold text-black  dark:text-mruOrange'>Share your resources and make this</h1>
        <h1 className='lg:text-5xl font-poppins hidden lg:block text-2xl lg:pb-10 font-bold lg:font-semibold text-black  dark:text-mruOrange'>space a better one.</h1>
        <p className='lg:text-2xl font-poppins text-lg font-normal dark:text-white text-black pb-1 pt-1'>Upload any <b>Question papers</b> or <b>Materials</b> in <b>PDF</b>, <b>DOCX</b>, <b>PPT</b> format.</p>
        <p className='text-md font-poppins lg:text-2xl lg:pb-3  font-normal dark:text-white text-black'>As a token of appreciation. Your <b>name</b> will be added to the <b>contributors page</b> at <b>mruspace.in</b>.</p>
        <a href='https://docs.google.com/forms/d/e/1FAIpQLSdEaMzGeSvqBH5kIdeVi6altjL38OLhh846INM9DYlEPepgrA/viewform?pli=1' target='_blank' className=' w-64 flex justify-center py-3 text-white text-lg rounded-md font-semibold mt-5 bg-mruOrange'>Contribute to mruspace</a>
    </div>
  )
}
