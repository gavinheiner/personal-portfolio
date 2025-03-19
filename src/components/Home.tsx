import About from "./About";
import Contact from "./Contact";
import Experience from "./Experience";
import Header from "./Header";
import Projects from "./Projects";

const Home: React.FC = () => {
  return (
    <>
      <Header />
      
      <main className="max-w-4xl mx-auto px-4">
        <About />
        <Experience />
        <Projects />
        <Contact />
      </main>
    </>
  );
};

export default Home;
