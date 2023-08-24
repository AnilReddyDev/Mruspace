import React, { useEffect, useState } from 'react';

export default function QnComponent({ subName }) {

  // State to keep track of the currently selected subject and specific of paper selected(ex:mid1)
  const [subject, setSubject] = useState(subName);
  const [specificQn, setSpecificQn] = useState("");

  // Update the subject state when the `subName` prop changes
  useEffect(() => {
    setSubject(subName);
  }, [subName]);

  // Information about different question papers and their links
  const qnBtninfo = {
    Python: {
      diffpapers: ["mid-1", "mid-2", "sem"], // Names of different question papers
      links: [
        "https://mruspace.in/static/media/PP-MID1-P1.5e349ceacffd22c1d041.jpg",
        "https://mruspace.in/static/media/PP-MID2-P1.84d52f7b5e1a98a0d1e6.jpg",
        "https://mruspace.in/static/media/PP-SEM-P1.58a0c570dbb5d3eb0998.jpg",
      ], // Links to question paper resources
    },
    Java: {
      diffpapers: ["mid-1", "mid-2", "sem"],
      links: [
        "https://mruspace.in/static/media/JAVA-MID1-P1-1.3d335cd628d4ae4c7e18.png",
        "https://mruspace.in/static/media/JAVA-MID2-P1.ce5e35b0553e0ef458c3.jpg",
        "https://mruspace.in/static/media/JAVA-SEM23-P1.f5c6e558a0fb903635dc.jpg",
      ],
    },
    // Add more subjects and their corresponding question paper information
  };

  // Get the question paper information for the currently selected subject
  const currentSubject = qnBtninfo[subject];



  return (
    <div className='flex'>
      {/* Left container to display question paper buttons */}
      <div className="leftcon w-1/4 h-screen bg-white border-4 box-border border-black">
        {/* Mapping through different question paper names */}
        {currentSubject &&
          currentSubject.diffpapers.map((e) => (
            <button key={e} className='bg-mruOrange p-5 m-2' onClick={() => setSpecificQn(e)}>
              {e}
            </button>
          ))}
      </div>
      {/* Right container */}
      <div className="rightcon w-3/4 h-auto flex justify-center items-center bg-white border-4 box-border border-black">
        {specificQn === "mid-1" && <img className='w-3/4' src={currentSubject.links[0]} alt="qn" />}
        {specificQn === "mid-2" && <img className='w-3/4' src={currentSubject.links[1]} alt="qn" />}
        {specificQn === "sem" && <img className="w-2/4 h-3/4" src={currentSubject.links[2]} alt="qn" />}
      </div>
    </div>
  );
}

