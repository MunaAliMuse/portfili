import { Header } from './components/Header';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Skills } from './components/Skills';
import { Projects } from './components/Projects';
import { ContactSection } from './components/ContactSection';
import { profile } from './data/profile';

function App() {
  return (
    <>
      <Header />
      <main>
        <Hero profile={profile} />
        <About />
        <Skills />
        <Projects />
        <ContactSection />
      </main>
      <footer className="footer">
        © {new Date().getFullYear()} {profile.name}. Full Stack Developer.
      </footer>
    </>
  );
}

export { App };
