'use client';

import { VacancyCardProps } from '@/lib/types';

export default function VacancyCard({ vacancy, className = '' }: VacancyCardProps) {
  return (
    <article className={`bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow ${className}`}>
      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <span className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm font-medium">
            {vacancy.organization}
          </span>
          {vacancy.deadline && (
            <span className="text-sm text-red-600 font-medium">
              Deadline: {vacancy.deadline}
            </span>
          )}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-4 leading-tight">
          {vacancy.title}
        </h2>
        
        <div className="prose prose-gray max-w-none mb-4">
          <p className="text-gray-700 leading-relaxed line-clamp-4">
            {vacancy.description.substring(0, 300)}...
          </p>
        </div>
        
        {vacancy.location && (
          <div className="flex items-center mb-4 text-gray-600">
            <svg className="w-4 h-4 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
            </svg>
            <span className="text-sm">{vacancy.location}</span>
          </div>
        )}
        
        <div className="flex items-center justify-between">
          <button className="bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
            Apply Now
          </button>
          <button className="text-blue-600 hover:text-blue-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded px-2 py-1">
            View Details →
          </button>
        </div>
      </div>
    </article>
  );
}