import React, { useEffect, useState } from 'react';
import PpContent from './PPContent';
import arrowblackopen from "../assests/img/arrow-b-open.png"
import arrowblackclose from "../assests/img/arrow-b-close.png"
import arrowwhiteopen from "../assests/img/arrow-w-open.png"
import arrowwhiteclose from "../assests/img/arrow-w-close.png"
import { useMediaQuery } from 'react-responsive';

export default function PrgmComponent({ subName }) {

  // State to keep track of the currently selected subject and specific of paper selected(ex:mid1)
  const [subject, setSubject] = useState(subName);
  const [specificQn, setSpecificQn] = useState("sumofnum");
  const [showLeftCon,setShowLeftcon] = useState(true);
  const storedThemeColor = localStorage.getItem("theme");
  const isMobile = useMediaQuery({ maxWidth: 768 });

  const toggleLeftCon = () => {
    setShowLeftcon(!showLeftCon);
  }
  
  const [pquery, setPquery] = useState("")
  const getFilteredPrgms = (pquery, items) => {
    if (!pquery) {
      return items
    } else {
      return items.filter((item) => {
        item.toLowerCase().includes(pquery);
      })
    }
  }
  // Update the subject state when the `subName` prop changes
  useEffect(() => {
    setSubject(subName);
    // setShowLeftcon(true)
  }, [subName]);

  // Information about different question papers and their links
  const qnBtninfo = {
    Python_Programming: {
      prgmList: [
      { prgmBtnDisplayList: "sum of 2 numbers", specificQnList: "sumofnum" },
      { prgmBtnDisplayList: "Simple calulator", specificQnList: "simplecalc" },
      { prgmBtnDisplayList: "Relational Operators", specificQnList: "relationoper" },
      { prgmBtnDisplayList: "Logical Operators", specificQnList: "logicoper" },
      { prgmBtnDisplayList: "Swapping of Variables", specificQnList: "swapping" },
      { prgmBtnDisplayList: "Simple Interest", specificQnList: "simpleint" },
      { prgmBtnDisplayList: "Largest Num In given 3 Nums", specificQnList: "largenum" },
      { prgmBtnDisplayList: "List Program", specificQnList: "listwo" },
      { prgmBtnDisplayList: "Tuple Program", specificQnList: "tuple" }
    ]}, // Names of different question papers
    Web_Development: {
      prgmList: [
        { prgmBtnDisplayList: "Text Formatting", specificQnList: "textformat" },
        { prgmBtnDisplayList: "Hyperlinks", specificQnList: "hyperlink" },
        { prgmBtnDisplayList: "Calculator", specificQnList: "calc" },
        { prgmBtnDisplayList: "Comparison Operator", specificQnList: "comparison" },
        { prgmBtnDisplayList: "Current Time & Date", specificQnList: "time" },
        { prgmBtnDisplayList: "Toggle Menu", specificQnList: "togglemenu" },
        { prgmBtnDisplayList: "X5 & X6 in table format", specificQnList: "x5intable" },
        { prgmBtnDisplayList: "Square & Cubes from 1 to 10", specificQnList: "squares" },
        { prgmBtnDisplayList: "Variable Declaration", specificQnList: "variabledec" },
        { prgmBtnDisplayList: "onClick Event", specificQnList: "onclick" },
        { prgmBtnDisplayList: "onSubmit Event", specificQnList: "onsubmit" },
        { prgmBtnDisplayList: "onFocus Event", specificQnList: "onfocus" },
        { prgmBtnDisplayList: "onLoad Event", specificQnList: "onload" },
      ]}, 
      Data_Structures_using_python:{
        prgmList:[
          { prgmBtnDisplayList: "Stack", specificQnList: "dspStack" },
          { prgmBtnDisplayList: "Queue", specificQnList: "dspQueue" },
          { prgmBtnDisplayList: "Linear Search", specificQnList: "dspLinearSearch" },
          { prgmBtnDisplayList: "Binary Search", specificQnList: "dspBinarySearch" },
          { prgmBtnDisplayList: "Insertion in SLL", specificQnList: "dspInsertionSll" },
          { prgmBtnDisplayList: "Deletion in SLL", specificQnList: "dspDeletionSll" },
          { prgmBtnDisplayList: "Insertion in DLL", specificQnList: "dspInsertionDll" },
          { prgmBtnDisplayList: "Deletion in DLL", specificQnList: "dspDeletionDll" },
          { prgmBtnDisplayList: "Abstraction", specificQnList: "dspAbstraction" },
          { prgmBtnDisplayList: "Word Count", specificQnList: "dspWordCount" },
          { prgmBtnDisplayList: "Bubble Sort", specificQnList: "dspBubbleSort" },
          { prgmBtnDisplayList: "Merge Sort", specificQnList: "dspMergeSort" },
          { prgmBtnDisplayList: "Selection Sort", specificQnList: "dspSelectionSort" },
          { prgmBtnDisplayList: "Tree Order", specificQnList: "dspTreeOrder" },
          { prgmBtnDisplayList: "Sort Stds using Bubble Sort", specificQnList: "dspStuBubbleSort" },
          { prgmBtnDisplayList: "Palindrome", specificQnList: "dspPalindrome" },
          { prgmBtnDisplayList: "Depth First Search", specificQnList: "dspDfs" },
          { prgmBtnDisplayList: "Width First Search", specificQnList: "dspBfs" },
        ]
      },
      Java_Programming:{
        prgmList:[
          { prgmBtnDisplayList: "Palindrome", specificQnList: "javapalindrome" },
          { prgmBtnDisplayList: "Fibonacci Series", specificQnList: "javafabonacci" },
          { prgmBtnDisplayList: "Arithmetic", specificQnList: "javaArithmetic" },
          { prgmBtnDisplayList: "StringTokenizer", specificQnList: "javastringtoken" },
          { prgmBtnDisplayList: "Inheritance", specificQnList: "javainheritance" },
          { prgmBtnDisplayList: "Super Keyword", specificQnList: "javasuperkeyword" },
          { prgmBtnDisplayList: "Final Class", specificQnList: "javafinalclass" },
          { prgmBtnDisplayList: "Method Overloading", specificQnList: "javamethodol" },
          { prgmBtnDisplayList: "Method Overriding", specificQnList: "javamethodor" },
          { prgmBtnDisplayList: "Abstract Class", specificQnList: "javaabstactclass" },
          { prgmBtnDisplayList: "Abstraction", specificQnList: "javaaoabstract" },
          { prgmBtnDisplayList: "Interface", specificQnList: "javainterface" },
          { prgmBtnDisplayList: "Inner Class", specificQnList: "javainnerclass" },
          { prgmBtnDisplayList: "Multilevel Inheritance", specificQnList: "javamultilevelinher" },
          { prgmBtnDisplayList: "Default Method", specificQnList: "javadefaultmethods" },
          // { prgmBtnDisplayList: "User-Defined package", specificQnList: "dspPalindrome" },
          // { prgmBtnDisplayList: "Nested Packages", specificQnList: "dspDfs" },
          { prgmBtnDisplayList: "Exception handling", specificQnList: "javaexcepttest" },
          { prgmBtnDisplayList: "Throw Keyword ", specificQnList: "javathrowkey" },
          { prgmBtnDisplayList: "Throws Exception", specificQnList: "javathrows" },
          { prgmBtnDisplayList: "Multi-Catch Blocks", specificQnList: "javamulticatchblocks" },
          { prgmBtnDisplayList: "Random Square Cube", specificQnList: "javasquarethread" },
          { prgmBtnDisplayList: "Multi-Thread", specificQnList: "javathreads" },
          { prgmBtnDisplayList: "Stack using Collection", specificQnList: "javacollectionStack" },
          { prgmBtnDisplayList: "ArrayList using Collection", specificQnList: "javacollectionArrayList" },
          { prgmBtnDisplayList: "Byte Stream Class", specificQnList: "javaByteStreamDemo" },
          { prgmBtnDisplayList: "File Class", specificQnList: "javaFileDemo" },
          { prgmBtnDisplayList: "Character Stream", specificQnList: "javaCharacterStreamDemo" },
          { prgmBtnDisplayList: "Word Line Char count", specificQnList: "javawordlinecount" },
          { prgmBtnDisplayList: "Binary Serach", specificQnList: "javaBinarysearch3" },
          { prgmBtnDisplayList: "Matrix Addition", specificQnList: "javaAddmatrices4" },
          { prgmBtnDisplayList: "Sort strings", specificQnList: "javaSortstrings5" },
          { prgmBtnDisplayList: "Data Arthmetic package", specificQnList: "javaarthmeticpackage9" },
          { prgmBtnDisplayList: "Consumer produce", specificQnList: "javaproducer15" },
        ]
      },
      AI_Programming:{
        prgmList:[
          { prgmBtnDisplayList: "Water Jug", specificQnList: "aiwaterjug" },
          { prgmBtnDisplayList: "Snake & Ladder", specificQnList: "aisnakeladder" },
          { prgmBtnDisplayList: "Tic Tak Toe", specificQnList: "aitixtactoe" },
          { prgmBtnDisplayList: "Box-Line game", specificQnList: "aiboxlinegame" },
          { prgmBtnDisplayList: "TSP Heuristic", specificQnList: "aitspvalue" },
          { prgmBtnDisplayList: "Min Jumps", specificQnList: "aiminjumps" },
          { prgmBtnDisplayList: "TowerOfHanoi", specificQnList: "aitowerofhanoi" },
          { prgmBtnDisplayList: "8Queens using CSP", specificQnList: "aiP2n8queens" },
          { prgmBtnDisplayList: "A* Algorithm", specificQnList: "aiP3astaralgorithm" },
          { prgmBtnDisplayList: "TowerOfHanoi Recurrsion", specificQnList: "aitowerofhanoirecurrsion" },
          { prgmBtnDisplayList: "TowerOfHanoi Iteration", specificQnList: "aiP5towerofiteration" },
          { prgmBtnDisplayList: "4Queens using CSP", specificQnList: "aiP6Q4queens" },
          { prgmBtnDisplayList: "Bayes Theorem", specificQnList: "aiP7bayestheroem" },
          { prgmBtnDisplayList: "P(rain | cloudy)", specificQnList: "aiP8Araincloudy" },
          { prgmBtnDisplayList: "A* for given graph", specificQnList: "aiP9Astarforgivenalgo" },
          { prgmBtnDisplayList: "FOL forward chaining", specificQnList: "aiP10FOLFC" },
          { prgmBtnDisplayList: "FOL", specificQnList: "aiFOLprgm" },
          { prgmBtnDisplayList: "SA algorithm", specificQnList: "aistimulatedannealing" },
          { prgmBtnDisplayList: "Minimun step last index", specificQnList: "aiminstpelastindex" },
          { prgmBtnDisplayList: "Metropolis acceptance in S", specificQnList: "aiSAmetroplis" },
          { prgmBtnDisplayList: "8 puzzle min jumps", specificQnList: "aiminjumps8puzzle" },
        ]}
    // Add more subjects and their corresponding question paper information
  };

  // Get the question programs information for the currently selected subject
  const currentSubject = qnBtninfo[subject];
  //  const filteredPrgms = getFilteredPrgms(pquery,currentSubject.prgmList)

  return (
    <div className='flex h-childBodyH w-screen overflow-auto bg-white text-black dark:bg-black dark:text-white'>
      {/* Left container to display question paper buttons */}
      
      {
      showLeftCon && <div className="leftcon sticky top-50 w-4/5 lg:w-leftcon h-3/4 py-3 overflow-y-auto flex flex-col justify-start text-black items-center bg-slate-200  box-border  dark:text-white dark:bg-mruListConbg">
        {/* <input type="text" name="prgmSerach" className='bg-mruLiteGray w-4/5 ' value={pquery} onChange={(e)=>setPquery(e.target.value.toLowerCase())}/> */}
        {/* Mapping through different question paper names */}
        {currentSubject &&
          //   currentSubject.prgmList
          currentSubject.prgmList.map((e) => (
            <button key={e.specificQnList} className=' flex  py-2 px-6 w-128 text-base' 
            onClick={() => {
              setSpecificQn(e.specificQnList);
            }}
            style={{
              backgroundColor: specificQn === e.specificQnList ? "#F16522" : "",
              color: specificQn === e.specificQnList ? "black dark:white" : "",
            }}
            >
              {e.prgmBtnDisplayList}
            </button>
          ))}
      </div>}
      {
               storedThemeColor === "light" ? ( showLeftCon === true ? <button className='block p-2 pr-1 mt-40 h-24 bg-slate-200 rounded-r-lg' onClick={() => toggleLeftCon()}><img src={arrowblackclose} alt=">" className='w-8' /></button> : <button className='block p-2 pr-0 mt-40 h-24 bg-slate-200 rounded-r-lg' onClick={() => toggleLeftCon()}><img src={arrowblackopen} alt=">" className='w-8' /></button> ): ( showLeftCon === true ? <button className='block p-2 pr-1 mt-40 h-24 bg-mruListConbg rounded-r-lg' onClick={() => toggleLeftCon()}><img src={arrowwhiteclose} alt=">" className='w-8' /></button> : <button className='block p-2  pr-0  mt-40 h-24 bg-mruListConbg rounded-r-lg' onClick={() => toggleLeftCon()}><img src={arrowwhiteopen} alt=">" className='w-8' /></button> )
      }
      {/* Right container */}
      <div className="rightcon w-5/6 lg:w-rightcon bg-white box-border dark:bg-black"
       style={{
          width: isMobile && (showLeftCon === false ? "87%" : "30%"),
        }}
      >
        {/* {specificQn === "MID 1 2023" && <img className='w-3/4 h-3/4' src={currentSubject.links[0]} alt="qn" />}
        {specificQn === "MID 2 2023" && <img className='w-3/4' src={currentSubject.links[1]} alt="qn" />}
        {specificQn === "SEM 2023" && <img className="w-2/4 h-3/4" src={currentSubject.links[2]} alt="qn" />} */}
        <PpContent specificQn={specificQn} subName={subName}/>
        
      </div>
    </div>
  );
}
