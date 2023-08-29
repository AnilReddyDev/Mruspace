import React from 'react'

export default function PrgmConComponent({propsContent}) {
  return (
    <div className='my-6 ml-4'> 
        <div className="text-black text-xl w-3/4 font-semibold dark:text-white">
              <p className='leading-relaxed'>{propsContent.heading}</p>
            </div>
            <div className="text-black bg-slate-200 w-3/4 overflow-auto my-5 dark:bg-mruListConbg dark:text-white">
              {/* <Copybtnpp text={text}/> */} 
              <pre className='px-5 py-4'>
                <code>
                  {propsContent.code}
                </code>
              </pre>
            </div>
            <div className="text-black text-xl font-semibold mb-4 dark:text-white">
              <p>Output</p>
            </div>
            <div className="text-black bg-slate-200 w-3/4 overflow-auto dark:text-white dark:bg-mruListConbg">
              <pre className='px-5 py-4'>
                {propsContent.output}
              </pre>
            </div>  
                </div>
  )
}
