import { About, Intro, Projects, Skills } from "@/components"
import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex flex-col items-center px-4">
      <Intro />
      <About />
      <Projects />
      <Skills />
      <Experience />
      <Contact />
      <Footer />
    </main>
  );
}
