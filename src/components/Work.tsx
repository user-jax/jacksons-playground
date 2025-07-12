import React from 'react';

const Work: React.FC = () => {
  return (
    <div className="bg-white rounded-xl shadow-lg p-8 mb-8">
      <h2 className="text-3xl font-bold text-gray-900 mb-6">Work</h2>
      
      <div className="space-y-8">
        <div className="mb-6">
          <p className="text-lg text-gray-700 leading-relaxed">
            Over the past three years, I've contributed to mission-critical software initiatives across government clients including the Veterans Affairs, USPTO, and the Department of Defense.
          </p>
        </div>

        <div className="space-y-6">
          {/* Veterans Affairs */}
          <div className="border-l-4 border-blue-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Veterans Affairs (IHTA)
            </h3>
            <p className="text-gray-700 leading-relaxed">
              As a full-stack developer, I helped lead the modernization of the VA's Integrated Home Telehealth Application. I built scalable microservices in Spring Boot, designed REST APIs with OpenAPI, and developed complex UI components in React TypeScript—including real-time dashboards, form workflows, and email notification systems.
            </p>
          </div>

          {/* USPTO */}
          <div className="border-l-4 border-green-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              USPTO – Trademark System Modernization
            </h3>
            <p className="text-gray-700 leading-relaxed">
              I replaced over a dozen legacy COBOL transactions with modern Java Spring Boot services, translating intricate business logic into efficient backend workflows. I managed SQL-heavy data migration tasks, created robust validation layers, and led defect triage efforts after deployment to stabilize the new system.
            </p>
          </div>

          {/* Army */}
          <div className="border-l-4 border-purple-500 pl-6">
            <h3 className="text-xl font-semibold text-gray-900 mb-2">
              Army – War Game Simulation Platform
            </h3>
            <p className="text-gray-700 leading-relaxed">
              Working on a geospatial war game simulation tool, I built an interactive UI in Angular + Leaflet.js and a backend in Node.js + MongoDB, enabling strategic military scenario planning. I collaborated directly with defense stakeholders and delivered weekly demos as part of an agile 3-person team.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Work; 