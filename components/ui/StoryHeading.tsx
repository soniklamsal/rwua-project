'use client';

import { StoryCardProps } from '@/lib/types';

export default function StoryHeading({ story, className = '' }: StoryCardProps) {
  return (
    <div className={`bg-white rounded-lg shadow-sm border-l-4 border-purple-500 p-4 hover:shadow-md transition-shadow ${className}`}>
      <div className="flex items-center justify-between mb-2">
        <span className="text-xs text-gray-500">{story.date}</span>
        {story.author && (
          <span className="text-xs text-purple-600 font-medium">{story.author}</span>
        )}
      </div>
      
      <h3 className="text-lg font-semibold text-gray-900 leading-tight mb-2">
        {story.title}
      </h3>
      
      <p className="text-gray-600 text-sm line-clamp-2">
        {story.description.substring(0, 150)}...
      </p>
      
      <button className="mt-3 text-purple-600 hover:text-purple-700 font-medium text-xs focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded px-2 py-1">
        पूरा पढ्नुहोस् →
      </button>
    </div>
  );
}