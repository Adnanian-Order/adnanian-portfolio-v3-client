import AboutSection from './sections/AboutSection'
import ContactForm from './sections/ContactForm'
import Footer from './navigation/Footer'
import Header from './navigation/Header'
import ProjectsSection from './sections/ProjectsSection'
import SkillsSection from './sections/SkillsSection'
import TopSection from './sections/TopSection'
import { FormspreeProvider } from '@formspree/react'

/**
 * Renders the entry point of the website.
 * 
 * @returns the entry point.
 */
function App() {

  return (
    <FormspreeProvider project={import.meta.env.VITE_FORMSPREE_PROJECT_ID}>
      <Header />
      <main>
        <TopSection />
        <AboutSection />
        <SkillsSection />
        <ProjectsSection />
        <ContactForm />
      </main>
      <Footer />
    </FormspreeProvider>
  )
}

export default App
