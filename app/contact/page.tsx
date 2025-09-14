import { Metadata } from 'next'
import React from 'react'
import Heading from "../components/Heading";
import Container from "../components/Container";

export const metadata: Metadata = {
  title: 'Contact',
  description: 'Contact - Dylan Piriou',
}

export default function page() {
  return (
    <div>
        <Heading content="Get in touch" />
        <Container>
          <ul className="flex flex-col gap-2.5 justify-center items-center">
            <li className="flex items-end gap-2.5"><a href="mailto:pirioudylan@gmail.com" target="_blank" className="text-2xl font-bold hover:underline">pirioudylan@gmail.com</a></li>
            <li className="flex items-end gap-2.5"><a href="https://github.com/dylanpiriou" target="_blank" className="text-2xl font-bold hover:underline">github.com/dylanpiriou</a></li>
            <li className="flex items-end gap-2.5"><a href="https://linkedin.com/in/dylanpiriou" target="_blank" className="text-2xl font-bold hover:underline">linkedin.com/in/dylanpiriou</a></li>
          </ul>
        </Container>
    </div>
  )
}
