import React from 'react'

export default function contribute() {
  return (
    <div className='w-128 h-screen bg-white dark:bg-black flex flex-col items-center'>
       <div className=' w-4/5'>
       <h1 className='text-black my-6 dark:text-white text-3xl font-bold'>Thanks to all the Contributors for Sharing Resources with MruSpace!</h1>
       </div>
       <div className="w-4/5 flex items-center justify-center flex-col">
        <h1 className='text-black dark:text-white text-2xl font-bold'>Our Contributors</h1>
        <div className='w-48 bg-mruOrange h-1.5'></div>
       </div>
       <div className='w-4/5 mt-5 flex items-center justify-between'>
        <p className='text-black hover:underline dark:text-white text-lg font-medium'>Adhnan Sameer</p>
        <p className='text-black hover:underline dark:text-white text-lg font-medium'>Ellendula Aditya</p>
       </div>
    </div>
  )
}
