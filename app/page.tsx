import About from "@/components/About";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Shapes from "@/components/Shapes";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />
      <Shapes />
      <Divider />
      <About />
      <Projects />
      <Skills />
      <Contact />
    </main>
  );
}
