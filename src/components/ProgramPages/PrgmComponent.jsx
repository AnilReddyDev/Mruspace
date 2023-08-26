import React, { useEffect, useState } from 'react';
import PpContent from './PPContent';

export default function PrgmComponent({ subName }) {

  // State to keep track of the currently selected subject and specific of paper selected(ex:mid1)
  const [subject, setSubject] = useState(subName);
  const [specificQn, setSpecificQn] = useState("");

  const [pquery,setPquery] = useState("")
const getFilteredPrgms = (pquery,items)=>{
    if(!pquery){
        return items
    }else{
         return items.filter((item)=>{
            item.toLowerCase().includes(pquery);
        })
    }
}
  // Update the subject state when the `subName` prop changes
  useEffect(() => {
    setSubject(subName);
  }, [subName]);

  // Information about different question papers and their links
  const qnBtninfo = {
    Python_Programming: {
      prgmList: ["sum of 2 numbers", "MID 2 2023", "SEM 2023"], // Names of different question papers
    },
    Web_Development: {
        prgmList: ["web dev", "MID 2 2023", "SEM 2023"],
    },
    // Add more subjects and their corresponding question paper information
  };

  // Get the question paper information for the currently selected subject
  const currentSubject = qnBtninfo[subject];
//  const filteredPrgms = getFilteredPrgms(pquery,currentSubject.prgmList)

  return (
    <div className='flex h-screen bg-white text-black dark:bg-black dark:text-white'>
      {/* Left container to display question paper buttons */}
      <div className="leftcon w-leftcon h-3/4 py-3 flex flex-col justify-start text-black items-center bg-slate-100  box-border  dark:text-white dark:bg-mrulistconbg">
        {/* <input type="text" name="prgmSerach" className='bg-mruLiteGray w-4/5 ' value={pquery} onChange={(e)=>setPquery(e.target.value.toLowerCase())}/> */}
        {/* Mapping through different question paper names */}
        {currentSubject &&
        //   currentSubject.prgmList
          currentSubject.prgmList.map((e) => (
            <button key={e} className='focus:bg-mruOrange flex  py-2 px-6 w-128 text-base' onClick={() => setSpecificQn(e)}>
              {e}
            </button>
          ))}
      </div>
      {/* Right container */}
      <div className="rightcon w-rightcon flex justify-center items-center bg-white box-border dark:bg-black">
        {/* {specificQn === "MID 1 2023" && <img className='w-3/4 h-3/4' src={currentSubject.links[0]} alt="qn" />}
        {specificQn === "MID 2 2023" && <img className='w-3/4' src={currentSubject.links[1]} alt="qn" />}
        {specificQn === "SEM 2023" && <img className="w-2/4 h-3/4" src={currentSubject.links[2]} alt="qn" />} */}
        {currentSubject.prgmList.map((e)=>{
            return specificQn===e && <PpContent />
        })}
      </div>
    </div>
  );
}
