import { ProjectInfo, projects } from "../data/projects";
import { Link, useNavigate } from 'react-router-dom';

interface ProjectCardProps {
  project: ProjectInfo;
}

const ProjectCard: React.FC<ProjectCardProps> = ({ project }) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden">
      <div className="relative w-full h-48">
        <img 
          src={project.cardImage} 
          alt={project.title} 
          className={`max-width-768 w-100vw h-50vw object-cover ${project.imageScaling}`}
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-bold mb-2">{project.title}</h3>
        <p className="text-gray-700 mb-4">{project.cardDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.map(tech => (
            <span key={tech} className="px-2 py-1 bg-gray-100 rounded text-xs">
              {tech}
            </span>
          ))}
        </div>
        <Link 
          to={`/project/${project.id}`} 
          className="text-blue-600 hover:text-blue-800 text-sm font-medium"
          onClick={(event) => {
            event.preventDefault();
            navigate(`/project/${project.id}`);

            setTimeout(() => {
              window.scrollTo(0, 0);
            }, 15);
          }}
        >
          View Project →
        </Link>
      </div>
    </div>
  );
};

const Projects: React.FC = () => {
  return (
    <section id="projects" className="mb-16 scroll-mt-16">
      <h2 className="text-3xl font-bold text-gray-800 mb-8">Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {projects.map((project: ProjectInfo) => (
          <ProjectCard key={project.id} project={project} />
        ))}
      </div>
    </section>
  );
};

export default Projects;