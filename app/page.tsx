import { About, Intro, Projects, SectionDivider, Skills } from "@/components";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <Intro />
      <SectionDivider />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
