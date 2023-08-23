import React, { useState } from 'react'

export default function QuestionPaper() {
  const [query,setQuery] = useState("")
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
    {key:10,subject:"PS"}
  ]
  const getFilterSubjects = (query,items)=>{
    if(!items){
      return items
    }else{
      return btns.filter((item)=> item.subject.toLowerCase().includes(query))
    }
  }
  const filteredSubjects = getFilterSubjects(query,btns)
  return (
    <div>
      <main>
        <div className='flex w-128 bg-white'>
          <div className='w-1/4'>
            <input type="text" name="qnsearch" value={query} onChange={(e)=>setQuery(e.target.value.toLowerCase())} className=' w-auto h-10 box-border bg-slate-300 rounded-sm px-3 text-black outline-none placeholder:text-black' placeholder='search for subject..'/>
          </div>
          <div className='w-3/4 bg-white h-10 box-border overflow-y-hidden relative'>
            {
              filteredSubjects.map((btn) => {
                return <button className='bg-mruOrange w-28 h-10 mx-3' key={btn.key}>{btn.subject}</button>
              })
            }
          </div>
        </div>
        <div className='flex'>
          {/* container which is holding the left and right containers */}
          <div className="leftcon w-1/4  h-screen bg-white border-4 box-border border-black">

          </div>
          <div className="rightcon w-3/4 h-5 bg-white border-4 box-border border-black">

          </div>
        </div>
      </main>
    </div>
  )
}
