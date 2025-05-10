import AboutSection from './sections/AboutSection'
import ContactForm from './sections/ContactForm'
import Footer from './navigation/Footer'
import Header from './navigation/Header'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import TopSection from './sections/TopSection'

function App() {

  return (
    <>
      <Header />
      <main>
        <TopSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactForm />
        <Footer />
      </main>
      <Footer />
    </>
  )
}

export default App
