import { Metadata } from "next";
import Heading from "./components/Heading";
import Container from "./components/Container";
import About from "./data/about.json";

export const metadata: Metadata = {
  title: 'Dylan Piriou',
  description: 'Dylan Piriou - Web Developer',
}

export default function Home() {
  
  return (
    <div>
      <Heading content="Dylan Piriou" />
      <Container>
        <div dangerouslySetInnerHTML={{ __html: About[0].content }} />
      </Container>
    </div>
  );
}
