import React, { useState } from 'react';
import Header from '../components/Header';
import ImageGenerator from '../components/ImageGenerator';

const SideProjects: React.FC = () => {
  const [activeProject, setActiveProject] = useState('ai-image-generator');

  const projects = [
    {
      id: 'ai-image-generator',
      title: 'AI Image Generator',
      description: 'An interactive AI image generation tool that creates images from text descriptions.',
      technologies: ['React', 'TypeScript', 'AI Integration', 'Tailwind CSS'],
      component: <ImageGenerator />
    },
    {
      id: 'ragdoll-avalanche',
      title: 'Ragdoll Avalanche',
      description: 'A physics-based game where players navigate through an avalanche of ragdoll characters.',
      technologies: ['Unity', 'C#', 'Physics Engine', 'Game Development'],
      component: (
        <div className="bg-white rounded-2xl shadow-xl p-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Ragdoll Avalanche</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              A physics-based game where players navigate through an avalanche of ragdoll characters. 
              Built with Unity and C#, featuring realistic physics simulation and dynamic gameplay.
            </p>
            <div className="flex justify-center gap-4 mt-6">
              <span className="px-3 py-1 bg-blue-100 text-blue-800 rounded-full text-sm font-medium">Unity</span>
              <span className="px-3 py-1 bg-purple-100 text-purple-800 rounded-full text-sm font-medium">C#</span>
              <span className="px-3 py-1 bg-green-100 text-green-800 rounded-full text-sm font-medium">Physics Engine</span>
              <span className="px-3 py-1 bg-yellow-100 text-yellow-800 rounded-full text-sm font-medium">Game Development</span>
            </div>
          </div>
          
          <div className="flex flex-col items-center justify-center min-h-[400px] bg-gradient-to-br from-blue-50 to-purple-50 rounded-xl border-2 border-dashed border-gray-300">
            <div className="text-center">
              <div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14.828 14.828a4 4 0 01-5.656 0M9 10h1m4 0h1m-6 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-gray-700 mb-2">Game Demo Coming Soon</h3>
              <p className="text-gray-500 max-w-md">
                This project is currently in development. The game will feature realistic physics, 
                dynamic ragdoll interactions, and challenging gameplay mechanics.
              </p>
            </div>
          </div>
        </div>
      )
    }
  ];

  const currentProject = projects.find(p => p.id === activeProject);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        {/* Page Header */}
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Side Projects
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto leading-relaxed">
            These projects represent my exploration of new technologies, creative ideas, and personal interests. 
            They're built for learning, experimentation, and pure enjoyment of the development process.
          </p>
        </div>

        {/* Main Content */}
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Side Navigation */}
          <div className="lg:w-80 flex-shrink-0">
            <div className="bg-white rounded-xl shadow-lg p-6 sticky top-8">
              <h2 className="text-xl font-bold text-gray-900 mb-4">Projects</h2>
              <nav className="space-y-2">
                {projects.map((project) => (
                  <button
                    key={project.id}
                    onClick={() => setActiveProject(project.id)}
                    className={`w-full text-left px-4 py-3 rounded-lg transition-all duration-200 ${
                      activeProject === project.id
                        ? 'bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md'
                        : 'text-gray-700 hover:bg-gray-100 hover:text-gray-900'
                    }`}
                  >
                    <div className="font-medium">{project.title}</div>
                    <div className={`text-sm mt-1 ${
                      activeProject === project.id ? 'text-blue-100' : 'text-gray-500'
                    }`}>
                      {project.description}
                    </div>
                  </button>
                ))}
                             </nav>
            </div>
          </div>

          {/* Project Content */}
          <div className="flex-1">
            {currentProject && (
              <div className="space-y-6">
                {currentProject.component}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SideProjects; 