import AboutMe from './components/about-me';
import ContactList from './components/contact/contact-list';
import ContactMeSection from './components/contact-me-section';
import ExperienceList from './components/experience/experience-list';
import Footer from './components/footer';
import Intro from './components/intro';
import Navbar from './components/navbar/navbar';
import ProjectsList from './components/projects/projects-list';
import TechStack from './components/tech-stack';

function App() {
  return (
    <main className="flex flex-col px-4 relative">
      <div className="bg-[#fbe2e3] absolute top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem] sm:w-[68.75rem] dark:bg-[#946263]"></div>
      <div className="bg-[#dbd7fb] absolute top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem] sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem] dark:bg-[#676394]"></div>
      <Navbar />
      <Intro />
      <ContactList />
      <AboutMe />
      <TechStack />
      <ExperienceList />
      <ProjectsList />
      <ContactMeSection />
      <Footer />
    </main>
  );
}

export default App;
