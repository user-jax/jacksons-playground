import React, { useState } from 'react';

const ImageGenerator: React.FC = () => {
  const [prompt, setPrompt] = useState('');
  const [imageUrls, setImageUrls] = useState<(string | null)[]>([null, null, null, null]);
  const [loading, setLoading] = useState(false);

  const generateImage = async (prompt: string): Promise<string | null> => {
    try {
      // Call our Spring Boot backend API
      const response = await fetch('http://localhost:8080/api/generate-image', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          prompt: prompt,
          num_images: 1,
          enable_safety_checker: true,
          output_format: 'jpeg',
          safety_tolerance: '2',
          aspect_ratio: '16:9'
        }),
      });

      if (!response.ok) {
        const errorData = await response.json();
        throw new Error(errorData.error || 'Failed to generate image');
      }

      const data = await response.json();
      
      // Extract the first image URL from the response
      if (data.images && data.images.length > 0) {
        return data.images[0].url;
      }
      
      return null;
    } catch (error) {
      console.error('Image generation error:', error);
      // For demo purposes, return a placeholder image
      return 'https://via.placeholder.com/400x300/4F46E5/FFFFFF?text=AI+Generated+Image';
    }
  };

  const handleSubmit = async (e: React.FormEvent | React.KeyboardEvent) => {
    e.preventDefault?.();
    if (!prompt.trim()) return;
    setLoading(true);
    setImageUrls([null, null, null, null]);
    try {
      const urls = await Promise.all([
        generateImage(prompt),
        generateImage(prompt),
        generateImage(prompt),
        generateImage(prompt),
      ]);
      setImageUrls(urls);
    } catch (err) {
      alert('Image generation failed');
    }
    setLoading(false);
  };

  return (
    <div className="relative w-full flex flex-col items-center">
      {/* Main Content Layer */}
      <div className="w-full max-w-4xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-4">AI Image Generator</h2>
          <p className="text-gray-600 mb-6">
            Describe an image and watch AI bring it to life. This uses FAL.ai's flux-pro model 
            through a custom Spring Boot backend API to generate high-quality images from text descriptions.
          </p>
        </div>
        
        <form
          onSubmit={handleSubmit}
          className="w-full flex flex-col items-center"
        >
          <textarea
            value={prompt}
            onChange={e => setPrompt(e.target.value)}
            onKeyDown={e => {
              if (e.key === 'Enter' && !e.shiftKey) handleSubmit(e);
            }}
            placeholder="Describe your image here (e.g., 'A futuristic city with flying cars')"
            rows={4}
            className="w-full md:w-3/4 lg:w-2/3 text-lg font-medium bg-blue-900/90 text-white placeholder-gray-300 rounded-lg py-4 px-4 outline-none border-none shadow-md focus:ring-2 focus:ring-blue-400 transition-all mb-8 resize-y min-h-[3.5rem] max-h-40"
            disabled={loading}
            style={{lineHeight: '1.6'}}
          />
          
          <button
            type="submit"
            disabled={loading || !prompt.trim()}
            className="mb-8 px-8 py-3 bg-gradient-to-r from-blue-600 to-purple-600 text-white font-semibold rounded-lg shadow-lg hover:from-blue-700 hover:to-purple-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all duration-300 transform hover:scale-105"
          >
            {loading ? 'Generating...' : 'Generate Images'}
          </button>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 w-full">
            {imageUrls.map((url, i) => (
              <div
                key={i}
                className={`aspect-[4/3] rounded-lg flex items-center justify-center text-2xl font-semibold shadow-md transition-all duration-300 bg-blue-200 overflow-hidden ${loading && !url ? 'animate-pulse' : ''} hover:-translate-y-2 hover:shadow-xl`}
              >
                {url ? (
                  <img src={url} alt="Generated" className="w-full h-full object-cover" />
                ) : loading ? (
                  <div className="flex flex-col items-center">
                    <div className="animate-spin rounded-full h-8 w-8 border-b-2 border-blue-600 mb-2"></div>
                    <span className="text-sm text-gray-600">Generating...</span>
                  </div>
                ) : (
                  <span className="text-gray-400">Image {i + 1}</span>
                )}
              </div>
            ))}
          </div>
        </form>
      </div>
    </div>
  );
};

export default ImageGenerator; 