import React from 'react';

const Skills: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">🛠️ Skills</h2>
      
      <div className="space-y-8">
        {/* Languages & Frameworks */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Languages & Frameworks</h3>
          <div className="flex flex-wrap gap-2">
            {['Java', 'JavaScript/TypeScript', 'Python', 'SQL', 'Spring Boot', 'Hibernate', 'React', 'Angular', 'Node.js', 'Express'].map((skill) => (
              <span key={skill} className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Tools & Tech */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Tools & Tech</h3>
          <div className="flex flex-wrap gap-2">
            {['RESTful APIs (OpenAPI/Swagger)', 'Docker', 'Git', 'CI/CD pipelines', 'Agile/Scrum', 'SOAPUI/Postman', 'AWS (basic)'].map((tool) => (
              <span key={tool} className="bg-green-100 text-green-800 px-3 py-1 rounded-full text-sm font-medium">
                {tool}
              </span>
            ))}
          </div>
        </div>

        {/* Databases */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Databases</h3>
          <div className="flex flex-wrap gap-2">
            {['Oracle', 'PostgreSQL', 'MongoDB'].map((db) => (
              <span key={db} className="bg-purple-100 text-purple-800 px-3 py-1 rounded-full text-sm font-medium">
                {db}
              </span>
            ))}
          </div>
        </div>

        {/* Strengths */}
        <div>
          <h3 className="text-xl font-semibold text-gray-900 mb-4">Strengths</h3>
          <ul className="space-y-2 text-gray-700">
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Full-stack development across microservice and monolithic architectures
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Modernizing legacy systems with clean, scalable design
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Data-intensive backend work: SQL optimization, data migration, API integration
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Cross-functional collaboration, agile iteration, and mentoring teammates
            </li>
            <li className="flex items-start">
              <span className="text-blue-500 mr-2">•</span>
              Writing production-grade, testable, and well-documented code
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Skills; 