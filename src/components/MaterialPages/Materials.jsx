import React, { useState, useEffect } from 'react';
import MaterialComponent from './MaterialComponent';

export default function Materials() {
  // State to manage the search query and currently selected subject
  const [query, setQuery] = useState("");
  const [subName, setSubName] = useState("Java");

  // List of subject buttons
  const btns = [
    {key:1,subject:"Java" },
  {key:2,subject:"Python" },
  {key:3,subject:"OOSE"},
  {key:4,subject:"DAA"},
  {key:5,subject:"Web Dev"},
  {key:6,subject:"English"},
  {key:7,subject:"BEEE"},
  {key:8,subject:"DV"},
  {key:9,subject:"DM"},
  {key:10,subject:"PS"},
  {key:11,subject:"PS"},
  {key:12,subject:"PS"},
  {key:13,subject:"PS"},
  {key:14,subject:"PS"},
  {key:15,subject:"PS"},
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
        <div className='flex w-128 bg-white border-b-2 border-slate-200 dark:bg-black dark:border-stone-900'>
          {/* Subject buttons */}
          <div className='w-auto  h-10 flex  overflow-auto scrollbar-hide relative  m-2'>
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
          <div className='w-auto pl-2 pr-10 m-2 flex'>
            <input
              type="text"
              name="qnsearch"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              className='w-10 focus:w-56 transition-all duration-700 ease-in-out h-10 box-border bg-slate-300 rounded-sm px-3 text-black outline-none placeholder:text-black dark:placeholder:text-white dark:bg-mruLiteGray'
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