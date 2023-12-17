import React, { useState, useEffect } from 'react';
import MaterialComponent from './MaterialComponent';

export default function Materials() {
  // State to manage the search query and currently selected subject
  const [query, setQuery] = useState("");
  const [subName, setSubName] = useState("M2");

  // List of subject buttons
  const btns = [
    {key:1,subject:"M2" },
  {key:2,subject:"AI" },
  {key:3,subject:"Python"},
  {key:4,subject:"DBMS"},
  {key:5,subject:"BEEE"},
  {key:6,subject:"DV"},
  {key:7,subject:"OOSE"},
  {key:8,subject:"M1"},
  {key:9,subject:"AP"},
  {key:10,subject:"DAA"},
  {key:11,subject:"WDD"},
  {key:12,subject:"IOT"},
  {key:13,subject:"CN"},
  {key:14,subject:"FAM"},
  {key:15,subject:"EVS"},

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
        <div className='flex w-128 justify-between bg-white border-b-2 border-slate-200 dark:bg-black dark:border-stone-900'>
          {/* Subject buttons */}
          <div className='w-auto h-childHeaderH flex lg:scrollbar-thin lg:scrollbar-thumb-slate-300 lg:scrollbar-track-white dark:lg:scrollbar-thumb-gray-500 dark:lg:scrollbar-track-gray-950  overflow-x-auto overflow-y-hidden relative  m-2'>
            {filteredSubjects.map((btn) => (
              <button
                className='focus:bg-mruOrange whitespace-nowrap px-5 h-10 mx-3 text-black dark:text-white'
                onClick={() => setSubName(`${btn.subject}`)}
                key={btn.key}
                style={{
                  backgroundColor: subName === btn.subject ? "#F16522" : "",
                  color: subName === btn.subject ? "black dark:white" : "",
                }}
              >
                {btn.subject}
              </button>
            ))}
          </div>
          {/* Search input */}
          <div className=' w-auto pl-2 pr-1 lg:pr-10 m-2 flex'>
            <input
              type="text"
              name="qnsearch"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              className='w-10 dark:text-white focus:w-36  lg:focus:w-56 transition-all duration-700 ease-in-out h-10 box-border bg-slate-300 rounded-sm px-3 text-black outline-none placeholder:text-black dark:placeholder:text-white dark:bg-mruLiteGray'
              placeholder='🔍 search for subject..'
            />
          </div>
        </div>
        {/* Component to display questions papers based on the selected subject */}
        <MaterialComponent subName={subName}/>
      </main>
    </div>
  );
}