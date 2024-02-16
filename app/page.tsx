import About from "@/components/About";
import Contact from "@/components/Contact";
import Divider from "@/components/Divider";
import Intro from "@/components/Intro";
import Projects from "@/components/Projects";
import Skills from "@/components/Skills";
import Shapes from "@/components/Shapes";
import Shapes2 from "@/components/Shapes2";
import Shapes4 from "@/components/Shapes4";
import Shapes5 from "@/components/Shapes5";

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4 ">
      <Intro />
      <Shapes />
      <Shapes2 />
      <Shapes4 />
      <Shapes5 />
      <Divider />
      <About />
      <Projects />
      <Skills />

      <Contact />
    </main>
  );
}
