import { experiences } from "../data/experiences";

const Experience: React.FC = () => {
  return (
    <section id="experience" className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Work Experience</h2>
      
      <div className="space-y-8">
        {experiences.map((job, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="flex flex-col md:flex-row md:justify-between md:items-start mb-4">
              <div>
                <h3 className="text-xl font-semibold text-gray-800">{job.title}</h3>
                <p className="text-gray-600 font-medium">{job.company}</p>
              </div>
              <div className="mt-2 md:mt-0 text-left md:text-right">
                <p className="text-blue-600 font-medium">{job.period}</p>
                <p className="text-gray-500">{job.location}</p>
              </div>
            </div>
            
            <ul className="mb-4 text-gray-600 space-y-2 pl-5">
              {job.description.map((item, i) => (
                <li key={i} className="relative pl-2">
                  <span className="absolute left-[-0.65rem] top-[0.65rem] w-1 h-1 rounded-full bg-gray-600"></span>
                  {item}
                </li>
              ))}
            </ul>
            
            <div className="flex flex-wrap gap-2">
              {job.technologies.map((tech, i) => (
                <span key={i} className="px-2 py-1 bg-gray-100 text-gray-600 rounded text-xs">
                  {tech}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Experience;