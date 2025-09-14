import React from 'react'
import { Metadata } from 'next'
import Heading from "../components/Heading";
import Container from "../components/Container";
import projects from '../data/works.json';
import Project from '../components/Project';

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
            <Project key={index} project={project} index={index} />
          ))}

        </ul>
      </Container>
    </div>
  )
}
