import React from 'react';
import FeatureCard from './FeatureCard';

const FeatureCards: React.FC = () => {
  const features = [
    {
      title: "Feature One",
      description: "Experience the power of modern web development with our cutting-edge features and beautiful design system.",
      imageUrl: "https://images.unsplash.com/photo-1540553016722-983e48a2cd10?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Feature One",
      gradientFrom: "blue-400",
      gradientTo: "purple-500",
      actionText: "Learn More",
      actionColor: "blue-600"
    },
    {
      title: "Feature Two",
      description: "Build responsive and accessible applications with our comprehensive component library and design guidelines.",
      imageUrl: "https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Feature Two",
      gradientFrom: "green-400",
      gradientTo: "blue-500",
      actionText: "Explore",
      actionColor: "green-600"
    },
    {
      title: "Feature Three",
      description: "Leverage the power of TypeScript for type-safe development and better developer experience.",
      imageUrl: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&q=80",
      imageAlt: "Feature Three",
      gradientFrom: "purple-400",
      gradientTo: "pink-500",
      actionText: "Discover",
      actionColor: "purple-600"
    }
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
      {features.map((feature, index) => (
        <FeatureCard
          key={index}
          title={feature.title}
          description={feature.description}
          imageUrl={feature.imageUrl}
          imageAlt={feature.imageAlt}
          gradientFrom={feature.gradientFrom}
          gradientTo={feature.gradientTo}
          actionText={feature.actionText}
          actionColor={feature.actionColor}
        />
      ))}
    </div>
  );
};

export default FeatureCards; 