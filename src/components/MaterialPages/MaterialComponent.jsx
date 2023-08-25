import React, { useEffect, useState } from 'react';

export default function MaterialComponent({subName}) {

  // State to keep track of the currently selected subject 
  const [subject, setSubject] = useState(subName);


  // Update the subject state when the `subName` prop changes
  useEffect(() => {
    setSubject(subName);
  }, [subName]);

  const materialLinks = {
    Python:["link1","link2"],
    Java:["link1","link2"],
    Beee:["link1","link2"]
  }

  const currentSubject = materialLinks[subject];
  console.log(currentSubject)
  return (
    <div className='flex flex-col justify-center items-center h-screen bg-white text-black dark:bg-black dark:text-white'>
        {currentSubject.map((data)=>{
            return <>
            <button key={data} className='bg-mruOrange py-5 px-10 m-5'>{data}</button>
            </>
        })}

    </div>
  )
}
