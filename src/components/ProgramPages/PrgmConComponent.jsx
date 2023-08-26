import React from 'react'

export default function PrgmConComponent({propsContent}) {
  return (
    <div>
        <div className="text-black">
              <p>{propsContent.heading}</p>
            </div>
            <div className="text-black">
              {/* <Copybtnpp text={text}/> */}
              <pre>
                <code className='text-black'>
                  {propsContent.code}
                </code>
              </pre>
            </div>
            <div className="text-black">
              <p>Output</p>
            </div>
            <div className="text-black">
              <pre className='text-black'>
                {propsContent.output}
              </pre>
            </div>  
                </div>
  )
}
