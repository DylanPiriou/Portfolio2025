import React from 'react'
import { Metadata } from 'next'
import Heading from "../components/Heading";
import Container from "../components/Container";
import projects from '../data/works.json';
import { LuArrowUpRight } from 'react-icons/lu';

export const metadata: Metadata = {
  title: 'Work',
  description: 'Work - Dylan Piriou',
}

export default function page() {
  return (
    <div>
      <Heading content="References" />
      <Container>
        <ul className="flex flex-col gap-2.5 justify-center items-center">
          {projects.map((project, index) => (
            <li key={index} className="flex flex-col gap-2.5 w-full mb-8">
              <h2 className="text-2xl font-bold"><a href={project.live} target="_blank" className="hover:underline">{project.title}</a></h2>
              <p>{project.description}</p>
              <div className="flex gap-2">
                {project.technologies.map((tech, i) => (
                  <span key={i} className="text-sm bg-gray-800 px-2 py-1 rounded">{tech}</span>
                ))}
              </div>
            </li>
          ))}

        </ul>
      </Container>
    </div>
  )
}
