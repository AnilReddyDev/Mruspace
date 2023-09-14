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
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"], // Names of different question papers
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/PP-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/PP-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/PP-SEM-P1.jpg?raw=true",
      ], // Links to question paper resources
    },
    Java: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/JAVA-MID1-P1-1.png?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/JAVA-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/JAVA-SEM23-P1.jpg?raw=true",
      ],
    },
    OOSE: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/OOSE-MID1-P1-1.png?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/OOSE-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/OOSE-SEM23-P1.jpg?raw=true",
      ],
    },
    DAA: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DAA-MID1-P1-1.png?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DAA-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DAA-SEM23-P1.jpg?raw=true",
      ],
    },
    Web_Dev: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/WDD-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/WDD-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/WDD-SEM-P1-1.png?raw=true",
      ],
    },
    English: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/WDD-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/WDD-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/WDD-SEM-P1-1.png?raw=true",
      ],
    },
    // Add more subjects and their corresponding question paper information
  };

  // Get the question paper information for the currently selected subject
  const currentSubject = qnBtninfo[subject];



  return (
    <div className='flex h-screen bg-white text-black dark:bg-black dark:text-white'>
      {/* Left container to display question paper buttons */}
      <div className="leftcon w-leftcon h-3/4 py-3 flex flex-col justify-start text-black items-center bg-slate-100  box-border  dark:text-white dark:bg-mruListConbg">
        {/* Mapping through different question paper names */}
        {currentSubject &&
          currentSubject.diffpapers.map((e) => (
            <button key={e} 
            className='focus:bg-mruOrange flex  py-2 px-6 w-128 text-base'
             onClick={() => setSpecificQn(e)}
             style={{
              backgroundColor: specificQn === e ? "#F16522" : "",
              color: specificQn === e ? "black dark:white" : "",
            }}
             >
              {e}
            </button>
          ))}
      </div>
      {/* Right container */}
      <div className="rightcon w-rightcon flex justify-center items-center bg-white box-border dark:bg-black">
        {specificQn === "MID 1 2023" && <img className='w-3/4 h-3/4' src={currentSubject.links[0]} alt="qn" />}
        {specificQn === "MID 2 2023" && <img className='w-3/4' src={currentSubject.links[1]} alt="qn" />}
        {specificQn === "SEM 2023" && <img className="w-2/4 h-3/4" src={currentSubject.links[2]} alt="qn" />}
      </div>
    </div>
  );
}
