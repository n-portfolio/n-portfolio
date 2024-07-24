"use client"

import ProjectCard from '@/components/ProjectCard'
import { Projects } from '@/constants'
import React from 'react'

const Page = () => {
  return (
    <div
    style={{backgroundImage: "url(/mountains.jpg)"}}
     className='w-screen h-screen overflow-auto flex items-center justify-center bg-center bg-cover'>
      <div className='grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-5 max-w-[80%] max-h-[90%] mb-8'>
        {Projects.map((project, index) => (
          <ProjectCard
              key={index}
              title={project.title}
              text={project.text}
              image={project.src}
              href={project.href}
          />
        ))}
          <div className="w-[250px] h-[150px] mb-8"></div>
      </div>

    </div>
  )
}

export default Page
