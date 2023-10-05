import React, { useEffect, useState } from 'react';
import rightarrowblack from "../assests/img/right-arrow-black.png"
import rightarrowwhite from "../assests/img/right-arrow-white.png"
export default function QnComponent({ subName }) {

  // State to keep track of the currently selected subject and specific of paper selected(ex:mid1)
  const [subject, setSubject] = useState(subName);
  const [specificQn, setSpecificQn] = useState("");
  const [showLeftCon,setShowLeftcon] = useState(true);
  const storedThemeColor = localStorage.getItem("theme");

  const toggleLeftCon = () => {
    setShowLeftcon(!showLeftCon);
  }
  // Update the subject state when the `subName` prop changes
  useEffect(() => {
    setSubject(subName);
    setShowLeftcon("true");
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
    BEEE: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/BEEE-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/BEEE-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/BEEE-SEM-P1.jpg?raw=true",
      ],
    },
    DV: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DV-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DV-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DV-SEM-P1.jpg?raw=true",
      ],
    },
    DSP: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DSP-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DSP-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DSP-SEM-P1.jpg?raw=true",
      ],
    },
    DBMS: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DBMS-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DBMS-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DBMS-SEM-P1.jpg?raw=true",
      ],
    },
    AI: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/AI-MID1-P1-1.png?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/AI-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/AI-SEM23-P1.jpg?raw=true",
      ],
    },
    FIMS: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/FIMS-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/FIMS-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/FIMS-SEM-P1.jpg?raw=true",
      ],
    },
    FAM: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/FAM-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/FAM-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/FAM-SEM-P1.jpg?raw=true",
      ],
    },
    CAEG: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/CAEG-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/CAEG-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/CAEG-SEM-P1.jpg?raw=true",
      ],
    },




    English: {
      diffpapers: ["MID 1 2023", "MID 2 P2 2023", "SEM P2 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/ENG-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/ENG-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/ENG-SEM-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/ENG--MID2-P2.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/ENG-SEM-P2.jpg?raw=true",
      ],
    },
    DM: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM P2 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DM-MID1-P1-1.png?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DM-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DM-SEM23-P1.jpg?raw=true",
        "pass_link",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/DM-SEM23-P2.jpg?raw=true",
      ],
    },
    PS: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM P2 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/PS-MID1-P1.png?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/PS-MID2-P1.png?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/PS-SEM-P1.jpg?raw=true",
        "pass_link",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/PS-SEM-P2.jpg?raw=true",
      ],
    },
    M1: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM P2 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/M1-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/M1-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/M1-SEM-P1.jpg?raw=true",
        "pass_link",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/M1-SEM-P2.jpg?raw=true",
      ],
    },
    M2: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM P2 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/M2-MID1-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/M2-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/M2-SEM-P1.jpg?raw=true",
        "pass_link",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/M2-SEM-P2.jpg?raw=true",
      ],
    },
    OS: {
      diffpapers: ["MID 1 2023", "MID 2 2023", "SEM P2 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/OS-MID1-P1-1.png?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/OS-MID2-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/OS-SEM23-P1.jpg?raw=true",
        "pass_link",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/OS-SEM23-P2.jpg?raw=true",
      ],
    },

    AP: {
      diffpapers: ["SEM 2023"],
      links: [
        "pass-mid1",
        "pass-mid2",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/AP-SEM-P1.jpg?raw=true",
      ]
    },
    CN: {
      diffpapers: ["SEM 2023"],
      links: [
        "pass-mid1",
        "pass-mid2",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/CN-SEM-P1-1.png?raw=true",
      ]
    },
    CCS: {
      diffpapers: ["SEM 2023"],
      links: [
        "pass-mid1",
        "pass-mid2",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/CCS-SEM-P1-1.png?raw=true",
      ]
    },
    SM: {
      diffpapers: ["SEM 2023"],
      links: [
        "pass-mid1",
        "pass-mid2",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/SM-SEM-P1-1.png?raw=true",
      ]
    },
    EVS: {
      diffpapers: ["SEM 2023"],
      links: [
        "pass-mid1",
        "pass-mid2",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/EVS-SEM-P1.jpg?raw=true",
      ]
    },
    HVPE: {
      diffpapers: ["MID 1 2023","SEM 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/HVPE-MID1-P1.jpg?raw=true",
        "pass-mid2",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/HVPE-SEM-P1.jpg?raw=true",
      ]
    },




    MLDS: {
      diffpapers: ["MID 2 2023", "SEM 2023"],
      links: [
        "pass-mid1",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/MLDS-MID2-P1-1.png?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/MLDS-SEM-P1-1.png?raw=true",
      ]
    },


    TCSS: {
      diffpapers: ["LAB INTERNAL", "LAB EXTERNAL"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/TCSS-LAB-IN.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/TCSS-LAB-EX.jpg?raw=true",
      ]
    },


    FRENCH: {
      diffpapers: ["SEM P5 2023"],
      links: [
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/FRENCH-SEM-P1.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/FRENCH-SEM-P2.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/FRENCH-SEM-P3.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/FRENCH-SEM-P4.jpg?raw=true",
        "https://github.com/CatsOnTree/MruImgs/blob/main/QnImgs/FRENCH-SEM-P5.jpg?raw=true",
      ]
    }
    // Add more subjects and their corresponding question paper information
  };

  // Get the question paper information for the currently selected subject
  const currentSubject = qnBtninfo[subject];



  return (
    <div className='flex items-start h-childBodyH box-border bg-white text-black dark:bg-black dark:text-white'>
      {/* Left container to display question paper buttons */}
     {
      showLeftCon &&  <div className="leftcon w-4/5 lg:block lg:w-leftcon h-3/4 py-3 flex flex-col justify-start text-black items-center bg-slate-100  box-border  dark:text-white dark:bg-mruListConbg">
      {/* Mapping through different question paper names */}
      {currentSubject &&
        currentSubject.diffpapers.map((e) => (
          <button key={e}
            className='focus:bg-mruOrange flex  py-2 px-6 w-128 text-base'
            onClick={() => {setSpecificQn(e); toggleLeftCon()}}
            style={{
              backgroundColor: specificQn === e ? "#F16522" : "",
              color: specificQn === e ? "black dark:white" : "",
            }}
            
          >
            {e}
          </button>
        ))}
    </div>
     }
      {
        storedThemeColor === "light" ? <button className='block ml-3  mt-10' onClick={() => toggleLeftCon()}><img src={rightarrowblack} alt=">" className='w-10' /></button> : <button className='block ml-3 mt-10' onClick={()=>toggleLeftCon()}><img src={rightarrowwhite} alt=">" className='w-10' /></button>
      }
      {/* Right container */}
      <div className="rightcon w-rightcon h-5/6 flex justify-center items-center bg-white box-border dark:bg-black">
        {specificQn === ("MID 1 2023") && <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[0]} alt="qn" />}
        {specificQn === ("LAB INTERNAL") && <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[0]} alt="qn" />}
        {specificQn === ("MID 2 2023") && <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[1]} alt="qn" />}
        {specificQn === ("LAB EXTERNAL") && <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[1]} alt="qn" />}
        {specificQn === "MID 2 P2 2023" && <div className=' w-128 lg:w-3/4 h-full overflow-y-auto'>  <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[1]} alt="qn" /> <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[3]} alt="qn" /> </div>}
        {specificQn === "SEM 2023" && <img className=" w-128 lg:w-3/4 h-full border-2 border-slate-500" src={currentSubject.links[2]} alt="qn" />}
        {specificQn === "SEM P2 2023" && <div className=' w-128 lg:w-3/4 h-full overflow-y-auto'>  <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[2]} alt="qn" /> <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[4]} alt="qn" /> </div>}
        {specificQn === "SEM P5 2023" && <div className=' w-128 lg:w-3/4 h-full overflow-y-auto'>  <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[0]} alt="qn" /> <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[1]} alt="qn" /> <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[2]} alt="qn" /> <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[3]} alt="qn" /> <img className=' w-128 lg:w-3/4 h-full border-2 border-slate-500' src={currentSubject.links[4]} alt="qn" /></div>}
      </div>
    </div>
  );
}
