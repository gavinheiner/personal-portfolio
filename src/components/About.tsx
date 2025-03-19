const About: React.FC = () => {
  const skills = ["Python", "Java", "Spring Boot", "React", "TypeScript", "Amazon Web Services"];
  
  return (
    <section id="about" className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">About Me</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <div className="md:col-span-1">
          <img src="/images/me.png" alt="Profile picture" className="rounded-lg shadow-md w-full" />
        </div>
        <div className="md:col-span-2 text-gray-700 space-y-4">
        <p>In May, I will be graduating from Michigan State University with a Bachelor's degree in Computer Science and a minor in Japanese.</p>
        <p>With experience in full-stack and cloud development, I am most comfortable with Java and Spring Boot for the back end and React for the front end.</p>
        <p>When I'm not coding, you can find me playing guitar, doing improvisational comedy, or dying to the same boss 100 times in Elden Ring.</p>
          <div className="pt-4">
            <h3 className="text-xl font-semibold text-gray-800 mb-3">Skills</h3>
            <div className="flex flex-wrap gap-2">
              {skills.map((skill, index) => (
                <span key={index} className="px-3 py-1 bg-gray-200 text-gray-700 rounded-full text-sm">{skill}</span>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;