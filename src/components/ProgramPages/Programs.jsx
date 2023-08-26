import React, { useState, useEffect } from 'react';
import PrgmComponent from './PrgmComponent';

export default function Programs() {
  // State to manage the search query and currently selected subject
  const [query, setQuery] = useState("");
  const [subName, setSubName] = useState("Python_Programming");


  // List of subject buttons
  const btns = [
    {key:1,subject:"Python_Programming" },
  {key:2,subject:"Data Structures using python" },
  {key:3,subject:"Web_Development"},
  {key:4,subject:"Java Programming"},
  {key:5,subject:"AI Programming"},
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
        <div className='flex w-128 bg-white dark:bg-black'>
          {/* Subject buttons */}
          <div className='w-3/4  h-10 box-border overflow-y-hidden relative  m-2'>
            {filteredSubjects.map((btn) => (
              <button
                className='focus:bg-mruOrange px-4 h-10 mx-2 text-black dark:text-white'
                onClick={() => setSubName(`${btn.subject}`)}
                key={btn.key}
              >
                {btn.subject}
              </button>
            ))}
          </div>
          {/* Search input */}
          <div className='w-1/4 m-2 flex'>
            <input
              type="text"
              name="qnsearch"
              value={query}
              onChange={(e) => setQuery(e.target.value.toLowerCase())}
              className='w-auto h-10 box-border bg-slate-300 rounded-sm px-3 text-black dark:text-white outline-none placeholder:text-black dark:placeholder:text-white dark:bg-mruLiteGray'
              placeholder='search for subject..'
            />
          </div>
        </div>
        {/* Component to display questions papers based on the selected subject */}
        <PrgmComponent subName={subName}/>
      </main>
    </div>
  );
}