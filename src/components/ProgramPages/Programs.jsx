import React, { useState, useEffect } from 'react';
import PrgmComponent from './PrgmComponent';

export default function Programs() {
  // State to manage the search query and currently selected subject
  const [query, setQuery] = useState("");
  const [selectedSubjectbtn, setSelectedSubjectbtn] = useState("Python_Programming");

 

  // List of subject buttons
  const btns = [
    {key:1,subject:"Data_Structures_using_python" },
    {key:2,subject:"Web_Development"},
    {key:3,subject:"Data_Mining"},
    {key:4,subject:"Java_Programming"},
    {key:5,subject:"AI_Programming"},
    {key:6,subject:"Python_Programming" },
    // ... other subjects
  ];

  // Function to filter subjects based on the search query
  const getFilterSubjects = (query, items) => {
    if (!items) {
      return items; // Return all subjects if query is not available
    } else {
      return btns.filter((item) =>
        item.subject.toLowerCase().includes(query)
      ); // Filter subjects based on query match
    }
  };

  // Get the list of filtered subjects based on the search query
  const filteredSubjects = getFilterSubjects(query, btns);

  return (
    <div>
      <main>
        <div className='flex justify-between w-128 bg-white border-b-2 border-slate-200 dark:bg-black dark:border-stone-900'>
          {/* Subject buttons */}
          <div className='w-auto  h-10 box-border flex lg:scrollbar-thin lg:scrollbar-thumb-slate-300 lg:scrollbar-track-white dark:lg:scrollbar-thumb-gray-500 dark:lg:scrollbar-track-gray-950 overflow-x-auto overflow-y-hidden relative  m-2'>
            {filteredSubjects.map((btn) => (
              <button
                className=' px-4 h-10 mx-2 text-black dark:text-white'
                onClick={() => {
                  setSelectedSubjectbtn(btn.subject);
                }}
                key={btn.key}
                style={{ 
                  backgroundColor: selectedSubjectbtn === btn.subject ? "#F16522" : "",
                  color: selectedSubjectbtn === btn.subject ? "black dark:white" : "",
                }}
              >
                {btn.subject}
              </button>
            ))}
          </div>
          {/* Search input */}
          <div className='w-auto pl-2 pr-1 lg:pr-10 m-2 flex'>
            <input
              type="text"
              name="qnsearch"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              className='w-10 focus:w-36  lg:focus:w-56  h-10 box-border transition-all duration-700 ease-in-out bg-slate-300 rounded-sm px-3 text-black dark:text-white outline-none placeholder:text-black dark:placeholder:text-white dark:bg-mruLiteGray'
              placeholder='🔍 search for subject..'
            />
          </div>
        </div>
        {/* Component to display questions papers based on the selected subject */}
        <PrgmComponent subName={selectedSubjectbtn}/>
      </main>
    </div>
  );
}