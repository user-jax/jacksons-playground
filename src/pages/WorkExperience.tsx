import React from 'react';
import Header from '../components/Header';
import Work from '../components/Work';
import Skills from '../components/Skills';

const WorkExperience: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-6">
            Work Experience
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            My professional journey across government and defense sectors
          </p>
        </div>

        <div className="space-y-8">
          <Work />
          <Skills />
        </div>
      </div>
    </div>
  );
};

export default WorkExperience; 