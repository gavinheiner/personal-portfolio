import { useParams } from 'react-router-dom';
import { projects } from '../data/projects';

const ProjectDetail = () => {
  const { id } = useParams();
  const project = projects.find(p => p.id === id);
  
  if (!project) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-2xl font-bold mb-4">Project not found.</h2>
        </div>
      </div>
    );
  }
  
  return (
    <div className="max-w-4xl mx-auto px-4 py-8">
      <div className="bg-white rounded-lg shadow-lg overflow-hidden">
        <img 
          src={project.detailedImage} 
          alt={project.title} 
          className={`w-full h-96 object-cover ${project.imageScaling}`}
        />
        
        <div className="p-6">
          <h1 className="text-3xl font-bold mb-2">{project.title}</h1>
          
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.map(tech => (
              <span key={tech} className="px-3 py-1 bg-gray-100 rounded text-sm">
                {tech}
              </span>
            ))}
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Project Overview</h2>
            <p className="text-gray-700 mb-4">{project.detailedDescription}</p>
            
            {!!project.demoLink ? (
              <a 
                href={project.demoLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700 mr-2"
              >
                View Demo
              </a>
            ) : (
              <a 
                href="#" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2 bg-gray-500 text-white rounded mr-2 pointer-events-none"
              >
                Demo Unavailable
              </a>
            )}
            
            {!!project.sourceLink ? (
              <a 
                href={project.sourceLink} 
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2 bg-gray-700 text-white rounded hover:bg-gray-800"
              >
                View Source Code
              </a>
            ) : (
              <a 
                href="#"
                target="_blank" 
                rel="noopener noreferrer" 
                className="inline-block px-4 py-2 bg-gray-500 text-white rounded pointer-events-none"
              >
                Source Code Unavailable
              </a>
            )}
          </div>
          
          <div className="mb-6">
            <h2 className="text-xl font-semibold mb-2">Challenges & Solutions</h2>
            <div className="prose prose-blue max-w-none">
              {project.challenges ? (
                <div dangerouslySetInnerHTML={{ __html: project.challenges }} />
              ) : (
                <p className="text-gray-700">No challenges information available.</p>
              )}
            </div>
          </div>
          
          <div>
            <h2 className="text-xl font-semibold mb-2">Key Takeaways</h2>
            <div className="prose prose-blue max-w-none">
              {project.takeaways ? (
                <div dangerouslySetInnerHTML={{ __html: project.takeaways }} />
              ) : (
                <p className="text-gray-700">No takeaways information available.</p>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail;