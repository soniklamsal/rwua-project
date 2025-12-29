'use client';

import { useState } from 'react';
import { ChevronLeft, Search, FileText, Download } from 'lucide-react';
import Link from 'next/link';

interface Document {
  id: string;
  title: string;
  category: string;
  fileType: string;
  fileSize: string;
  publishDate: string;
  downloadUrl: string;
}

const mockDocuments: Document[] = [
  {
    id: '1',
    title: 'Annual Impact Report 2024',
    category: 'REPORTS',
    fileType: 'PDF',
    fileSize: '2.4 MB',
    publishDate: 'Dec 15, 2024',
    downloadUrl: '#'
  },
  {
    id: '2',
    title: 'Community Water Access Guidelines',
    category: 'GUIDELINES',
    fileType: 'PDF',
    fileSize: '1.8 MB',
    publishDate: 'Nov 28, 2024',
    downloadUrl: '#'
  },
  {
    id: '3',
    title: 'Financial Transparency Statement',
    category: 'FINANCIAL',
    fileType: 'PDF',
    fileSize: '956 KB',
    publishDate: 'Nov 20, 2024',
    downloadUrl: '#'
  },
  {
    id: '4',
    title: 'Volunteer Training Manual',
    category: 'TRAINING',
    fileType: 'PDF',
    fileSize: '3.2 MB',
    publishDate: 'Oct 15, 2024',
    downloadUrl: '#'
  },
  {
    id: '5',
    title: 'Project Implementation Framework',
    category: 'GUIDELINES',
    fileType: 'PDF',
    fileSize: '1.5 MB',
    publishDate: 'Sep 30, 2024',
    downloadUrl: '#'
  }
];

const categories = ['ALL', 'REPORTS', 'GUIDELINES', 'FINANCIAL', 'TRAINING', 'POLICIES'];

export default function DownloadsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [activeCategory, setActiveCategory] = useState('ALL');

  const filteredDocuments = mockDocuments.filter(doc => {
    const matchesSearch = doc.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
                         doc.category.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = activeCategory === 'ALL' || doc.category === activeCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Glassmorphism */}
      <div className="relative overflow-hidden" style={{ backgroundColor: '#6b21a8' }}>
        {/* Glassmorphism overlay */}
        <div className="absolute inset-0 bg-white/5 backdrop-blur-sm"></div>
        
        <div className="relative max-w-6xl mx-auto px-6 py-16">
          {/* Back to Home Button */}
          <Link 
            href="/"
            className="inline-flex items-center gap-2 text-white/90 hover:text-white transition-all duration-300 mb-8 group"
          >
            <ChevronLeft className="w-5 h-5 group-hover:-translate-x-1 transition-transform duration-300" />
            <span className="font-medium">Back to Home</span>
          </Link>

          {/* Page Title */}
          <div className="text-center mb-12">
            <h1 className="text-5xl font-bold text-white mb-4">Downloads</h1>
            <p className="text-xl text-white/80 max-w-2xl mx-auto">
              Access our latest reports, guidelines, and resources to stay informed about our mission and impact.
            </p>
          </div>

          {/* Search Bar */}
          <div className="max-w-2xl mx-auto">
            <div className="relative">
              <div className="absolute inset-y-0 left-0 pl-6 flex items-center pointer-events-none">
                <Search className="h-6 w-6 text-slate-400" />
              </div>
              <input
                type="text"
                placeholder="Search documents..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-16 pr-6 py-5 bg-white/20 backdrop-blur-md border border-white/30 rounded-2xl text-white placeholder-white/60 focus:outline-none focus:ring-2 focus:border-transparent transition-all duration-300 focus:ring-yellow-400"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Main Content */}
      <div className="max-w-6xl mx-auto px-6 py-12">
        {/* Category Filters */}
        <div className="mb-12">
          <div className="flex gap-3 overflow-x-auto pb-2 scrollbar-hide">
            {categories.map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-3 rounded-full font-semibold text-sm whitespace-nowrap transition-all duration-300 ${
                  activeCategory === category
                    ? 'scale-105 shadow-lg'
                    : 'bg-white text-slate-600 shadow-md hover:shadow-lg hover:scale-102'
                }`}
                style={activeCategory === category ? { backgroundColor: '#4c1d95', color: '#fbbf24' } : {}}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Documents List */}
        <div className="bg-white rounded-[2.5rem] shadow-xl p-8">
          {filteredDocuments.length > 0 ? (
            <div className="space-y-6">
              {filteredDocuments.map((doc) => (
                <div
                  key={doc.id}
                  className="flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6 p-6 rounded-2xl hover:bg-slate-50 transition-all duration-300 group"
                >
                  {/* File Icon */}
                  <div className="flex-shrink-0">
                    <div className="w-16 h-16 bg-purple-100 rounded-xl flex items-center justify-center">
                      <FileText className="w-8 h-8 text-purple-600" />
                    </div>
                  </div>

                  {/* Document Info */}
                  <div className="flex-grow min-w-0 w-full sm:w-auto">
                    {/* Metadata Row */}
                    <div className="flex items-center gap-4 mb-2">
                      <span className="text-xs font-bold text-slate-500 uppercase tracking-wider">
                        {doc.category}
                      </span>
                      <span className="text-sm text-slate-400">
                        {doc.publishDate}
                      </span>
                    </div>

                    {/* Document Title */}
                    <h3 className="text-xl font-bold mb-2 group-hover:opacity-90 transition-all duration-300" style={{ color: '#4c1d95' }}>
                      {doc.title}
                    </h3>

                    {/* File Specs */}
                    <div className="flex items-center gap-4 text-sm text-slate-500 mb-4 sm:mb-0">
                      <span className="font-medium">{doc.fileType}</span>
                      <span>•</span>
                      <span>{doc.fileSize}</span>
                    </div>
                  </div>

                  {/* Download Button */}
                  <div className="flex-shrink-0 w-full sm:w-auto">
                    <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 active:scale-95 shadow-lg hover:shadow-xl">
                      <Download className="w-5 h-5" />
                      <span>Download</span>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            /* No Results State */
            <div className="text-center py-16">
              <div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-6">
                <FileText className="w-12 h-12 text-slate-400" />
              </div>
              <h3 className="text-2xl font-bold text-slate-700 mb-4">No documents found</h3>
              <p className="text-slate-500 mb-8 max-w-md mx-auto">
                We couldn't find any documents matching your search criteria. Try adjusting your search terms or category filter.
              </p>
              <button
                onClick={() => {
                  setSearchTerm('');
                  setActiveCategory('ALL');
                }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-purple-600 hover:bg-purple-700 text-white font-semibold rounded-xl transition-all duration-300 active:scale-95"
              >
                Clear Filters
              </button>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}