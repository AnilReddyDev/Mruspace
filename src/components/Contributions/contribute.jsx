import React from 'react'

export default function contribute() {
  return (
    <div className='w-128 h-bodyH bg-white dark:bg-black flex flex-col items-center'>
       <div className=' w-4/5'>
       <h1 className='text-black my-12 dark:text-white text-xl lg:text-3xl font-bold'>Thanks to all the Contributors for Sharing Resources with MruSpace!</h1>
       </div>
       <div className="w-4/5 flex items-center justify-center flex-col">
        <h1 className='text-black dark:text-white text-xl lg:text-2xl font-bold'>Our Contributors</h1>
        <div className='w-48 bg-mruOrange h-1.5 mb-5 lg:mb-14'></div>
       </div>
       <div className='w-4/5 mt-1 lg:mt-5 flex items-center flex-col lg:flex-row justify-center lg:justify-between'>
        <p className='text-black hover:underline dark:text-white text-lg font-medium'>Adhnan Sameer</p>
        <p className='text-black hover:underline dark:text-white text-lg font-medium'>Ellendula Aditya</p>
       </div>
    </div>
  )
}
