import { Metadata } from "next";
import Heading from "./components/Heading";
import Container from "./components/Container";
export const metadata: Metadata = {
  title: 'Dylan Piriou',
  description: 'Dylan Piriou - Web Developer',
}

export default function Home() {
  
  return (
    <div>
      <Heading content="Dylan Piriou" />
      <Container>
        <p>I am a creative and curious french <span>web developer</span> with a strong focus on building modern, minimalist, and user-friendly web experiences. I enjoy working with <span>React</span>, <span>Next.js</span>, <span>WordPress</span>, and headless solutions like <span>Strapi</span>, always looking for ways to make the web more elegant and accessible.</p>
        <br />
        <p>My journey into development started few years ago with a fascination for how things work behind the scenes on the web. Over time, this <span>curiosity</span> turned into a <span>passion</span> and then a <span>career</span>. I started by learning the basics by my self, then I’ve been exploring <span>good practices</span>, <span>frameworks</span>, and constantly experimenting with new tools to refine my approach.</p>
        <br />
        <p>Outside of programming, I’m passionate about <span>history</span> and <span>cinema</span>. I particularly enjoy <span>video games</span>, with a soft spot for strategy games and FPS. <span>Sports</span> also play a big role in my life: I practice running, CrossFit, and swimming to stay active and challenge myself.</p>
      </Container>
    </div>
  );
}
