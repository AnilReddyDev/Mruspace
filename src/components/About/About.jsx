import React from 'react'
import Profilecard from './Profilecard'
export default function About() {
  const profiledata = {
    Anil:{
      heading:"AnilReddy.Developer",
      paragraph:"Hi Guys! I am a React web developer, I craft dynamic user interfaces with React and transform ideas into exceptional web experiences using React, HTML, CSS, and JavaScript. With strong problem-solving skills and a dedication to clean, maintainable code.",
      linkedIn:"https://linkedin.com/in/anil-reddy-513866227",
      instagram:"https://instagram.com/i_am_anilreddy",
      x:"https://twitter.com/i_am_anilreddy",
      github:"https://github.com/anilreddydev/",
    },
    Akash:{
      heading:"AkashKalwa.Designer",
      paragraph:"Hi Guys! I am very passionate about graphic designing. I like to make logos conceptual and meaningful. I make concept arts and posters. Minimal and meaningful is my motto. I don’t talk much, but my designs will!!",
      linkedIn:"https://www.linkedin.com/in/akash-kalwa-801780243",
      instagram:"https://www.instagram.com/inst_a_kash",
      x:"https://twitter.com/akash_kalwa",
      github:"",
    },
    Aravind:{
      heading:"Aravind.ManualTester",
      paragraph:"Hi Guys! I am a dedicated manual tester with a sharp focus on quality assurance, I meticulously analyze and test software to ensure flawless functionality and enhance user satisfaction.",
      linkedIn:"",
      instagram:"https://instagram.com/aravind_sagar____",
      x:"",
      github:"",
    },
  }
  return (
    <div className='w-128 h-auto pt-5 lg:pt-0 lg:h-bodyH flex flex-col justify-start items-center bg-white dark:bg-black'>
        <Profilecard profiledata={profiledata.Anil}/>
        <Profilecard profiledata={profiledata.Akash}/>
        <Profilecard profiledata={profiledata.Aravind}/>
    </div>
  )
}
