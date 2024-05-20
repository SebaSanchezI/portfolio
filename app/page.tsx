import { About, Intro, Projects, SectionDivider, Skills } from "@/components";
import { Experience } from "@/components/experience";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 p-6 md:p-14 lg:p-24">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
    </main>
  );
}
