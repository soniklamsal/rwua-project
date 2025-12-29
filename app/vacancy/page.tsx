'use client';

import { useState, useEffect } from 'react';
import { Vacancy } from '@/lib/types';
import VacancyCard from '@/components/ui/VacancyCard';
import SearchSidebar from '@/components/ui/SearchSidebar';

// Vacancy data based on rwua.com.np (modified for copyright compliance)
const vacancyData: Vacancy[] = [
  {
    id: '1',
    title: 'Vacancy for the post of Admin and Finance Coordinator',
    description: `Interested candidates are requested to send their updated CV and a cover letter outlining their suitability for the position for Admin and Finance Coordinator.

The successful candidate will be responsible for:
- Managing administrative operations and financial coordination
- Overseeing budget planning and financial reporting
- Coordinating with various departments and stakeholders
- Ensuring compliance with organizational policies and procedures
- Supporting program implementation and monitoring

Required qualifications:
- Bachelor's degree in Management, Finance, or related field
- Minimum 3 years of experience in administrative and financial management
- Strong analytical and communication skills
- Proficiency in computer applications and financial software
- Experience working with NGOs or development organizations preferred`,
    image: '/images/vacancy1.jpeg',
    deadline: '2025-07-01',
    organization: 'RWUA NEPAL',
    contactEmail: 'ruwaharipur@rwua.org',
    location: 'Haripur, Nepal'
  },
  {
    id: '2',
    title: 'Program Officer - Community Development',
    description: `RWUA Nepal is seeking a dedicated Program Officer for Community Development to join our team in implementing rural development initiatives.

Key responsibilities include:
- Planning and implementing community development programs
- Working directly with rural communities and women's groups
- Monitoring and evaluating program activities
- Preparing reports and documentation
- Coordinating with local government and partner organizations

Requirements:
- Bachelor's degree in Social Work, Development Studies, or related field
- Minimum 2 years of experience in community development
- Strong communication skills in Nepali and English
- Willingness to work in rural areas
- Experience with participatory development approaches`,
    image: '/images/vacancy2.jpeg',
    deadline: '2025-06-15',
    organization: 'RWUA NEPAL',
    contactEmail: 'info@rwua.org',
    location: 'Rural Districts, Nepal'
  },
  {
    id: '3',
    title: 'Field Coordinator - Women Empowerment',
    description: `We are looking for a Field Coordinator to support our women empowerment programs in rural communities.

Main duties:
- Coordinate field activities and program implementation
- Facilitate training sessions and capacity building programs
- Support women's groups and cooperatives
- Maintain program records and prepare reports
- Liaise with community leaders and stakeholders

Qualifications:
- Bachelor's degree in any discipline
- Experience in working with women's groups
- Strong organizational and leadership skills
- Ability to work independently in challenging environments
- Knowledge of local languages and culture`,
    image: '/images/vacancy3.jpg',
    deadline: '2025-06-30',
    organization: 'RWUA NEPAL',
    contactEmail: 'careers@rwua.org',
    location: 'Multiple Districts, Nepal'
  },
  {
    id: '4',
    title: 'Finance Assistant',
    description: `RWUA Nepal requires a Finance Assistant to support financial operations and accounting activities.

Responsibilities:
- Assist in daily financial operations and bookkeeping
- Prepare financial reports and statements
- Support budget preparation and monitoring
- Handle petty cash and expense management
- Assist in audit processes and compliance

Requirements:
- Intermediate or Bachelor's degree in Commerce/Accounting
- Basic knowledge of accounting principles
- Computer literacy with MS Office applications
- Attention to detail and accuracy
- Fresh graduates are encouraged to apply`,
    image: '/images/vacancy1.jpeg',
    deadline: '2025-07-15',
    organization: 'RWUA NEPAL',
    contactEmail: 'finance@rwua.org',
    location: 'Head Office, Nepal'
  }
];

export default function VacancyPage() {
  const [vacancies, setVacancies] = useState<Vacancy[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [searchQuery, setSearchQuery] = useState('');

  // Filter vacancies based on search query
  const filteredVacancies = vacancies.filter(vacancy => 
    vacancy.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    vacancy.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Simulate initial data loading
  useEffect(() => {
    const loadVacancies = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 800));
      setVacancies(vacancyData);
      setIsLoading(false);
    };

    loadVacancies();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            All Vacancy
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Join RWUA Nepal in our mission to empower rural communities. Explore current job opportunities.
          </p>
        </div>
        
        {/* Mobile search - show only on small screens */}
        <div className="block lg:hidden mb-8">
          <SearchSidebar 
            onSearch={handleSearch}
            placeholder="Search vacancies..."
          />
        </div>
        
        {/* Main layout - two columns on desktop */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main content - takes 2/3 of the width on desktop */}
          <div className="lg:col-span-2">
            {/* Loading state */}
            {isLoading ? (
              <div className="flex justify-center items-center py-12">
                <div className="text-center">
                  <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
                  <p className="text-gray-600">Loading job vacancies...</p>
                </div>
              </div>
            ) : (
              <>
                {/* Single column layout for vacancies */}
                <div className="space-y-8" role="feed" aria-label="Job vacancies">
                  {filteredVacancies.map((vacancy) => (
                    <VacancyCard key={vacancy.id} vacancy={vacancy} />
                  ))}
                </div>
                
                {/* Empty search results */}
                {filteredVacancies.length === 0 && searchQuery.trim() && (
                  <div className="text-center py-12">
                    <div className="max-w-md mx-auto">
                      <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.294a23.946 23.946 0 01-4 2.33M6 20h12a2 2 0 002-2V8a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No vacancies found</h3>
                      <p className="text-gray-500 mb-4">
                        No vacancies found matching "{searchQuery}". Try a different search term.
                      </p>
                      <button
                        onClick={() => handleSearch('')}
                        className="text-purple-600 hover:text-purple-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded px-2 py-1 touch-target-comfortable"
                        aria-label="Clear search and show all vacancies"
                      >
                        Show all vacancies
                      </button>
                    </div>
                  </div>
                )}
                
                {/* No vacancies at all */}
                {vacancies.length === 0 && !searchQuery.trim() && (
                  <div className="text-center py-12">
                    <div className="max-w-md mx-auto">
                      <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2-2v2m8 0V6a2 2 0 012 2v6.294a23.946 23.946 0 01-4 2.33M6 20h12a2 2 0 002-2V8a2 2 0 00-2 2v10a2 2 0 002 2z" />
                      </svg>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">No vacancies available</h3>
                      <p className="text-gray-500 mb-4">
                        No vacancies available at the moment. Please check back later for new opportunities.
                      </p>
                      <p className="text-sm text-gray-400">
                        You can also contact us directly to inquire about future openings.
                      </p>
                    </div>
                  </div>
                )}
              </>
            )}
          </div>
          
          {/* Right Sidebar - takes 1/3 of the width on desktop, hidden on mobile */}
          <div className="hidden lg:block lg:col-span-1">
            <div className="sticky top-8 space-y-6">
              {/* Search Section */}
              <SearchSidebar 
                onSearch={handleSearch}
                placeholder="Search vacancies..."
              />
              
              {/* Recent Posts section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Posts</h3>
                <div className="space-y-3">
                  {vacancies.slice(0, 3).map((vacancy) => (
                    <div key={vacancy.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                        {vacancy.title}
                      </h4>
                      <p className="text-xs text-gray-500">{vacancy.deadline}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}