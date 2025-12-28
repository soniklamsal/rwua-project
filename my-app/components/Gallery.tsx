'use client';

import Image from 'next/image';
import Link from 'next/link';

export default function Gallery() {
  return (
    <section className="pt-32 pb-12 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Breadcrumb */}
        <nav className="flex items-center text-sm font-medium text-gray-600 mb-8">
          <Link href="/" className="hover:text-gray-900 flex items-center">
            <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
              <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
            </svg>
            मुख्य पृष्ठ
          </Link>
          <span className="mx-2">/</span>
          <span className="text-gray-900">Gallery</span>
        </nav>

        {/* Gallery Title */}
        <h1 className="text-4xl font-bold text-gray-800 mb-12">Gallery</h1>

        {/* Save The Children Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-lg font-medium text-gray-600 uppercase tracking-wider">SAVE THE CHILDREN</h2>
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {/* First Item */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image 
                src="https://rwua.com.np/wp-content/uploads/2021/10/1.jpg" 
                alt="ग्रामिण नारी उत्थान संघको २९ औं साधारण सभा" 
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight">
                ग्रामिण नारी उत्थान संघको २९ औं साधारण सभा
              </h3>
              <Link 
                href="#" 
                className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
              >
                View Photos
              </Link>
            </div>
          </div>

          {/* Second Item */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image 
                src="https://rwua.com.np/wp-content/uploads/2021/04/11.jpg" 
                alt="वियोन द फिनिस लाईन समावेशी तथा दिगो ग्रामीण खानेपानी सुविधा कार्यक्रम" 
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight">
                वियोन द फिनिस लाईन समावेशी तथा दिगो ग्रामीण खानेपानी सुविधा कार्यक्रम
              </h3>
              <Link 
                href="#" 
                className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
              >
                View Photos
              </Link>
            </div>
          </div>

          {/* Third Item */}
          <div className="bg-white rounded-lg shadow-md overflow-hidden">
            <div className="relative">
              <Image 
                src="https://rwua.com.np/wp-content/uploads/2020/01/13.jpg" 
                alt="न्यानो कम्मल बितरण" 
                width={400}
                height={250}
                className="w-full h-64 object-cover"
              />
            </div>
            <div className="p-6 text-center">
              <div className="text-sm font-medium text-gray-600 uppercase tracking-wider mb-2">
                Save The Children
              </div>
              <h3 className="text-lg font-bold text-gray-800 mb-4 leading-tight">
                न्यानो कम्मल बितरण
              </h3>
              <Link 
                href="#" 
                className="inline-block px-6 py-2 bg-blue-600 text-white font-medium rounded hover:bg-blue-700 transition-colors"
              >
                View Photos
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}