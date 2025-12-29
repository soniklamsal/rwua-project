'use client';

import { StoryCardProps } from '@/lib/types';

export default function StoryCard({ story, className = '' }: StoryCardProps) {
  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="text-sm text-gray-500">{story.date}</span>
          {story.author && (
            <span className="text-sm text-purple-600 font-medium">{story.author}</span>
          )}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
          {story.title}
        </h2>
        
        <div className="prose prose-gray max-w-none">
          <p className="text-gray-700 leading-relaxed line-clamp-4">
            {story.description.substring(0, 300)}...
          </p>
        </div>
        
        <div className="mt-6 flex items-center justify-between">
          <button className="text-purple-600 hover:text-purple-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded px-2 py-1">
            पूरा पढ्नुहोस् →
          </button>
          {story.category && (
            <span className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-xs font-medium">
              {story.category}
            </span>
          )}
        </div>
      </div>
    </article>
  );
}