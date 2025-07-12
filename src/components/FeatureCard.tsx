import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  imageUrl: string;
  imageAlt: string;
  gradientFrom: string;
  gradientTo: string;
  actionText: string;
  actionColor: string;
}

const FeatureCard: React.FC<FeatureCardProps> = ({
  title,
  description,
  imageUrl,
  imageAlt,
  gradientFrom,
  gradientTo,
  actionText,
  actionColor
}) => {
  return (
    <div className="bg-white rounded-xl shadow-lg overflow-hidden hover:shadow-xl transition-shadow duration-300">
      <div className={`h-48 bg-gradient-to-br from-${gradientFrom} to-${gradientTo} relative`}>
        <img
          src={imageUrl}
          alt={imageAlt}
          className="h-full w-full object-cover"
        />
      </div>
      <div className="p-6">
        <h3 className="text-xl font-semibold text-gray-900 mb-3">
          {title}
        </h3>
        <p className="text-gray-600 mb-4">
          {description}
        </p>
        <div className="flex items-center justify-between">
          <span className={`text-sm font-medium text-${actionColor}`}>{actionText}</span>
          <span className="text-sm text-gray-500">→</span>
        </div>
      </div>
    </div>
  );
};

export default FeatureCard; 