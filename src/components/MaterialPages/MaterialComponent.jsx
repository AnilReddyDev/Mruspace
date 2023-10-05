import React, { useEffect, useState } from 'react';
import m2mid1 from '../assests/materials/m-2 mid1.46df12c34cac70b8b5e2.pdf'
import m2mid2 from '../assests/materials/m-2 mid2.56fe561344d8aa963086.pdf'
import Aisem from '../assests/materials/AI_SEM_ANS.a2f7288db20651c51498.pdf'
import Aidigital from '../assests/materials/AI-DigitalNotes.90d7d2c113b15c0ab710.pdf'
import PythonQA1 from '../assests/materials/PP Q&A.35ef7e74e5c3159ac7e9-1.pdf'
import PythonQA2 from '../assests/materials/PP Q&A.35ef7e74e5c3159ac7e9.pdf'
import DbmsQA from '../assests/materials/DBMS Q&A.24d90286c11a9e1f89a3.pdf'
import BEEEQA from '../assests/materials/BEEE Q&A.d0e2a0cf4b7a86e2ed93.pdf'
import BEEEPPT from '../assests/materials/BeeePPT.88a39a8454cf4c149819.pdf'
import DvQA from '../assests/materials/DV Q&A.b6b7262d1def369299d3.pdf'
import OOSEQ from '../assests/materials/OOSE.3ae4d50d5efd16a38146.pdf'
import M1QA from '../assests/materials/M1 Q&A.b8f0590a88b710d3b4df.pdf'
import APQNBANK from '../assests/materials/AP QUESTION BANK ANSWERS.77e2dee83f9b2f7764cb.pdf'
import APunit3 from '../assests/materials/AP unit 3 Answers.66438bd6ff9ab7964892.pdf'
import APunit4 from '../assests/materials/AP unit 4 notes.301ce419b0277a471442.pdf'
import APunit5 from '../assests/materials/AP unit 5 Answers.eb6a637e98858acca09a.pdf'
import DAAsem from '../assests/materials/DAA_SEM_ANS.924557225d8a236e3f7b.pdf'

export default function MaterialComponent({ subName }) {
  // State to keep track of the currently selected subject
  const [subject, setSubject] = useState(subName);

  // Update the subject state when the `subName` prop changes
  useEffect(() => {
    setSubject(subName);
  }, [subName]);

  const materialLinks = {
    M2: [{ "M2 Mid 1": m2mid1 }, { "M2 Mid 2": m2mid2 }],
    AI: [{ "Ai Sem": Aisem }, { "Ai Digital": Aidigital }],
    Python: [{ "Python Q&A-1": PythonQA1 }, { "Python Q&A-2": PythonQA2 }],
    BEEE: [{ "BEEE Q&A-1": BEEEQA }, { "BEEE PPT": BEEEPPT }],
    DBMS: [{ "DBMS Q&A-1": DbmsQA }],
    DV: [{ "DV Q&A": DvQA }],
    DAA: [{ "DAA Sem": DAAsem }],
    OOSE: [{ "OOSE Q&A": OOSEQ }],
    M1: [{ "M1 Q&A Notes": M1QA }],
    AP: [{ "AP QN BANK": APQNBANK },{"AP unit3":APunit3},{"AP unit4":APunit4},{"AP unit5":APunit5}],
  };

  const currentSubject = materialLinks[subject];
  console.log(currentSubject);

  return (
    <div className='flex flex-col justify-center items-center h-childBodyH bg-white text-black dark:bg-black dark:text-white'>
      {currentSubject.map((data) => {
        const linkText = Object.keys(data)[0]; // Get the link text
        const linkUrl = data[linkText]; // Get the link URL

        return (
          <a
            key={linkUrl}
            href={linkUrl}
            download
            className='bg-mruOrange py-5 px-10 m-5'
          >
            {linkText}
          </a>
        );
      })}
    </div>
  );
}
