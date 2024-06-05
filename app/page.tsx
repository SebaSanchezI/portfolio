import { About, Intro, Projects, Skills } from "@/components"
import { Contact } from "@/components/contact"
import { Experience } from "@/components/experience"
import Footer from "@/components/footer"

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between pt-20 p-6 md:p-14 lg:p-24">
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
