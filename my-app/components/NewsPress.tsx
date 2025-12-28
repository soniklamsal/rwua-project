'use client';

import Image from 'next/image';
import Link from 'next/link';
import SaveTheChildrenSidebar from './SaveTheChildrenSidebar';

export default function NewsPressPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Breadcrumb Section */}
      <section className="py-4 px-0" style={{ background: '#ecf6fe', paddingTop: '15px' }}>
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex items-center justify-end">
            <nav className="flex items-center text-sm text-gray-600 font-poppins">
              <Link href="/" className="hover:text-purple-800 flex items-center">
                <svg className="w-4 h-4 mr-1" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z"></path>
                </svg>
                मुख्य पृष्ठ
              </Link>
              <span className="mx-2">/</span>
              <span className="text-gray-600 font-medium">Save The Children</span>
            </nav>
          </div>
        </div>
      </section>

      {/* Main Content Section */}
      <section className="py-16 overflow-hidden">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-col lg:flex-row gap-8">
            {/* Main Content - Left Column */}
            <div className="flex-1">
              <div className="space-y-8">

                {/* Card 1 */}
                <article className="p-5 mb-16 overflow-hidden bg-white shadow-lg">
                  <div className="mb-5">
                    <Image
                      src="https://rwua.com.np/wp-content/uploads/2025/12/blimket-780x470-1.png"
                      alt="हरिपुरका बिपन्न घरपरिवारलाई न्यानो कम्बल वितरण कार्यक्रम"
                      width={780}
                      height={470}
                      className="max-w-full h-auto align-middle border-0 block"
                    />
                  </div>

                  <div>
                    <h2 className="text-3xl leading-10 font-bold p-0 m-0 mb-5 font-poppins">
                      <Link href="#" className="transition-all duration-300 no-underline" style={{ color: '#422673' }}>
                        हरिपुरका बिपन्न घरपरिवारलाई न्यानो कम्बल वितरण कार्यक्रम ४४२ घरधुरीलाई कम्बल वितरण
                      </Link>
                    </h2>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4 text-sm font-poppins" style={{ color: '#2b99f8' }}>
                      <div className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span className="uppercase">RWUA NEPAL</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>December 27, 2025</span>
                      </div>
                    </div>

                    <p className="text-base text-gray-600 leading-7 mb-5 font-poppins">
                      ग्रामीण नारी उत्थान संघ हरिपुरले बिपन्न घरपरिवारलाई न्यानो कम्बल वितरण गरेको छ । संघले हरिपुर नगरपालिका वडा नं. १, २, ३, ४, ५ र ६ मा रहेका ४४२ घरधुरीलाई कम्बल वितरण गरेको हो। यो कार्यक्रम जाडो मौसममा बिपन्न परिवारहरूलाई सहयोग पुर्याउने उद्देश्यले गरिएको हो।
                    </p>

                    {/* Horizontal Line */}
                    <hr className="border-t border-gray-300 mb-4" />

                    {/* Footer with folder and tag icons */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-poppins">
                      <div className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
                        </svg>
                        <Link href="#" className="no-underline" style={{ color: '#422673' }}>Community Support</Link>
                      </div>
                      <div className="flex items-center gap-1 ml-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5.5 7A1.5 1.5 0 004 5.5 1.5 1.5 0 005.5 4 1.5 1.5 0 007 5.5 1.5 1.5 0 005.5 7zm15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59s1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM5.5 7A1.5 1.5 0 007 5.5 1.5 1.5 0 005.5 4 1.5 1.5 0 004 5.5 1.5 1.5 0 005.5 7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Card 2 */}
                <article className="p-5 mb-16 overflow-hidden bg-white shadow-lg">
                  <div className="mb-5">
                    <Image
                      src="https://rwua.com.np/wp-content/uploads/2025/02/shared-image.jpeg"
                      alt="बिहानको भेलामा पुर्न बालक्लब गठन बालबालिकाको अधिकार बिषयमा छलफल"
                      width={780}
                      height={470}
                      className="max-w-full h-auto align-middle border-0 block"
                    />
                  </div>

                  <div>
                    <h2 className="text-3xl leading-10 font-bold p-0 m-0 mb-5 font-poppins">
                      <Link href="#" className="transition-all duration-300 no-underline" style={{ color: '#422673' }}>
                        बिहानको भेलामा पुर्न बालक्लब गठन बालबालिकाको अधिकार बिषयमा छलफल
                      </Link>
                    </h2>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4 text-sm font-poppins" style={{ color: '#2b99f8' }}>
                      <div className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span className="uppercase">RWUA NEPAL</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>December 15, 2025</span>
                      </div>
                    </div>

                    <p className="text-base text-gray-600 leading-7 mb-5 font-poppins">
                      ग्रामीण नारी उत्थान संघ हरिपुरले बालबालिकाको अधिकार सम्बन्धी छलफल कार्यक्रम गरेको छ। यस कार्यक्रममा बालक्लब गठन र बालबालिकाको अधिकारका बारेमा विस्तृत छलफल भएको थियो। कार्यक्रममा स्थानीय बालबालिकाहरूको सक्रिय सहभागिता रहेको थियो।
                    </p>

                    {/* Horizontal Line */}
                    <hr className="border-t border-gray-300 mb-4" />

                    {/* Footer with folder and tag icons */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-poppins">
                      <div className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
                        </svg>
                        <Link href="#" className="no-underline" style={{ color: '#422673' }}>Child Rights</Link>
                      </div>
                      <div className="flex items-center gap-1 ml-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5.5 7A1.5 1.5 0 004 5.5 1.5 1.5 0 005.5 4 1.5 1.5 0 007 5.5 1.5 1.5 0 005.5 7zm15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59s1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM5.5 7A1.5 1.5 0 007 5.5 1.5 1.5 0 005.5 4 1.5 1.5 0 004 5.5 1.5 1.5 0 005.5 7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>

                {/* Card 3 */}
                <article className="p-5 mb-16 overflow-hidden bg-white shadow-lg">
                  <div className="mb-5">
                    <Image
                      src="https://rwua.com.np/wp-content/uploads/2020/01/13.jpg"
                      alt="न्यानो कम्मल बितरण"
                      width={780}
                      height={470}
                      className="max-w-full h-auto align-middle border-0 block"
                    />
                  </div>

                  <div>
                    <h2 className="text-3xl leading-10 font-bold p-0 m-0 mb-5 font-poppins">
                      <Link href="#" className="transition-all duration-300 no-underline" style={{ color: '#422673' }}>
                        न्यानो कम्मल बितरण
                      </Link>
                    </h2>

                    {/* Meta Info */}
                    <div className="flex items-center gap-4 mb-4 text-sm font-poppins" style={{ color: '#2b99f8' }}>
                      <div className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" />
                          <circle cx="12" cy="7" r="4" />
                        </svg>
                        <span className="uppercase">RWUA NEPAL</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                          <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
                          <line x1="16" y1="2" x2="16" y2="6" />
                          <line x1="8" y1="2" x2="8" y2="6" />
                          <line x1="3" y1="10" x2="21" y2="10" />
                        </svg>
                        <span>January 15, 2020</span>
                      </div>
                    </div>

                    <p className="text-base text-gray-600 leading-7 mb-5 font-poppins">
                      Save The Children संस्थाको सहयोगमा न्यानो कम्बल वितरण कार्यक्रम सम्पन्न भएको छ। यस कार्यक्रममा जरुरतमन्द परिवारहरूलाई न्यानो कम्बल वितरण गरिएको थियो। यो कार्यक्रम जाडो मौसममा बिपन्न परिवारहरूलाई न्यानो राख्न सहयोग पुर्याउने उद्देश्यले गरिएको हो।
                    </p>

                    {/* Horizontal Line */}
                    <hr className="border-t border-gray-300 mb-4" />

                    {/* Footer with folder and tag icons */}
                    <div className="flex items-center gap-2 text-sm text-gray-500 font-poppins">
                      <div className="flex items-center gap-1">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M10 4H4c-1.11 0-2 .89-2 2v12c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2h-8l-2-2z" />
                        </svg>
                        <Link href="#" className="no-underline" style={{ color: '#422673' }}>Save The Children</Link>
                      </div>
                      <div className="flex items-center gap-1 ml-3">
                        <svg width="16" height="16" viewBox="0 0 24 24" fill="currentColor">
                          <path d="M5.5 7A1.5 1.5 0 004 5.5 1.5 1.5 0 005.5 4 1.5 1.5 0 007 5.5 1.5 1.5 0 005.5 7zm15.91 4.58l-9-9C12.05 2.22 11.55 2 11 2H4c-1.1 0-2 .9-2 2v7c0 .55.22 1.05.59 1.41l8.99 9c.37.36.87.59 1.42.59s1.05-.23 1.41-.59l7-7c.37-.36.59-.86.59-1.41s-.23-1.06-.59-1.42zM5.5 7A1.5 1.5 0 007 5.5 1.5 1.5 0 005.5 4 1.5 1.5 0 004 5.5 1.5 1.5 0 005.5 7z" />
                        </svg>
                      </div>
                    </div>
                  </div>
                </article>

              </div>
            </div>

            {/* Sidebar - Right Column */}
            <SaveTheChildrenSidebar />
          </div>
        </div>
      </section>
    </div>
  );
}