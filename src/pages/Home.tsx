import React from 'react';
import Header from '../components/Header';
import img5309 from '../assets/IMG_5309.jpg';
import img6106 from '../assets/IMG_6106.jpg';
import img6597 from '../assets/IMG_6597.jpg';
import img7112 from '../assets/IMG_7112.jpg';
import img8045 from '../assets/IMG_8045.jpg';
import img8264 from '../assets/IMG_8264.jpg';

const imageClass =
  "rounded-lg shadow-md h-48 w-48 mb-6 object-cover object-center border border-gray-300 transform transition-transform duration-300 hover:-translate-y-2 hover:shadow-xl";

const Home: React.FC = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      <div className="flex justify-center items-center py-16 px-2 min-h-[80vh]">
        <div className="flex flex-row gap-6 w-full max-w-5xl items-center">
          {/* Left Images */}
          <div className="flex flex-col items-center justify-center">
            <img src={img5309} alt="Personal 1" className={imageClass} />
            <img src={img6106} alt="Personal 2" className={imageClass} />
            <img src={img6597} alt="Personal 3" className={imageClass} />
          </div>

          {/* Center Text Box */}
          <div className="flex-1 bg-gray-200 rounded-lg shadow-lg flex items-center justify-center min-h-[400px] min-w-[300px] max-w-2xl mx-4 p-8">
            <div className="text-center">
              <h1 className="text-2xl md:text-3xl font-bold text-gray-900 mb-6">
                Hi, I'm Jackson Burns
              </h1>
              <div className="w-16 h-1 bg-gradient-to-r from-blue-500 to-purple-600 mx-auto mb-6"></div>
              <p className="text-base md:text-lg text-gray-700 leading-relaxed mb-4">
                Hi, I'm Jackson Burns — a full-stack software developer with a passion for building clean, scalable web applications.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                This site is both a personal portfolio and a technical sandbox. I built it from the ground up using a Java Spring Boot backend and a React TypeScript frontend, styled with Material Tailwind. It showcases the skills I've developed across multiple government projects and serves as a platform to continually push those skills further.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed mb-4">
                I'm also using this site to prototype ideas that integrate emerging AI technologies. I regularly explore tools like ChatGPT, Cursor, and Complexity to stay current with advancements in AI development and AI-powered IDE workflows.
              </p>
              <p className="text-base md:text-lg text-gray-600 leading-relaxed">
                Thanks for stopping by — feel free to browse my work, explore some live projects, or reach out to connect.
              </p>
            </div>
          </div>

          {/* Right Images */}
          <div className="flex flex-col items-center justify-center">
            <img src={img7112} alt="Personal 4" className={imageClass} />
            <img src={img8045} alt="Personal 5" className={imageClass} />
            <img src={img8264} alt="Personal 6" className={imageClass} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home; 