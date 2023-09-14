import React, { useEffect, useState } from 'react';

export default function MaterialComponent({subName}) {

  // State to keep track of the currently selected subject 
  const [subject, setSubject] = useState(subName);


  // Update the subject state when the `subName` prop changes
  useEffect(() => {
    setSubject(subName);
  }, [subName]);

  const materialLinks = {
    Python:["Python Q & A"],
    Java:["link1","link2"],
    Beee:["link1","link2"]
  }
  const imageUrl = "https://media.istockphoto.com/id/636379014/photo/hands-forming-a-heart-shape-with-sunset-silhouette.jpg?s=612x612&w=0&k=20&c=CgjWWGEasjgwia2VT7ufXa10azba2HXmUDe96wZG8F0="
  
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
