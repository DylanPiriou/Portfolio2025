import { Metadata } from 'next'
import React from 'react'
import Heading from "../components/Heading";
import Container from "../components/Container";
import Contact from "../components/Contact";
import contacts from '../data/contacts.json';

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
            {contacts.map((contact, index) => (
              <Contact key={index} contact={contact} index={index} />
            ))}
          </ul>
        </Container>
    </div>
  )
}
