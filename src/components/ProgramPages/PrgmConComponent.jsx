import React, { useState } from 'react'
import copygif from '../assests/gifs/copy.gif'
export default function PrgmConComponent({ propsContent }) {
  const [copyStatus, setCopyStatus] = useState(null);

  const handleCopy = () => {
    navigator.clipboard.writeText(propsContent.code);
    setCopyStatus('Copied!');
    setTimeout(() => setCopyStatus(null), 2000); // clear the message after 2 seconds
  };

  return (
    <div className='lg:my-6 lg:ml-4'>
      <div className="text-black text-xl mx-3 lg:mx-0 lg:w-3/4 font-semibold dark:text-white">
        <p className='leading-relaxed'>{propsContent.heading}</p>
      </div>
      {copyStatus && <div className='absolute top-50 z-10 lg:top-50 right-5'><p style={{ color: "green" }} id="copybtn" className='lg:my-1 font-bold text-xl'>{copyStatus}</p></div>}
      <div className="text-black relative bg-slate-200 lg:w-3/4 mx-3 lg:mx-0 overflow-auto my-5 dark:bg-mruListConbg dark:text-white">
        <button onClick={handleCopy} className='absolute right-0 top-0 mx-4 my-2 flex items-center text-mruOrange '><img src="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAACAAAAAgCAYAAABzenr0AAAACXBIWXMAAAsTAAALEwEAmpwYAAAAVklEQVR4nO2WywkAIAxDM4u7uT+ZQK8eevLTVs2DHgsPkkIBITLCWtrqvCEA5903BLZAQ8C1F8wsgAkkQEVQVcJy6RlyWPxLwEICzBIBo980RgkIgUN0y0/ZUOej5rgAAAAASUVORK5CYII=" alt="copybtn" /> copy</button>
        <div className='h-5'></div>
        <pre className='px-5 py-4'>
          <code>
            {propsContent.code}
          </code>
        </pre>
      </div>
      <div className="text-black text-xl font-semibold mb-4 dark:text-white">
        <p>Output</p>
      </div>
      <div className="text-black bg-slate-200 mx-3 lg:mx-0 lg:w-3/4 overflow-auto dark:text-white dark:bg-mruListConbg">
        <pre className='px-5 py-4'>
          {propsContent.output}
        </pre>
      </div>
    </div>
  )
}
