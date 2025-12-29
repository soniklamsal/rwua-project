'use client';

import { useState, useEffect } from 'react';
import { Story } from '@/lib/types';
import StoryCard from '@/components/ui/StoryCard';
import StoryHeading from '@/components/ui/StoryHeading';
import SearchSidebar from '@/components/ui/SearchSidebar';

// Success stories data based on rwua.com.np content (modified for copyright compliance)
const successStories: Story[] = [
  {
    id: '1',
    title: 'सफलताको कथा —२ "सृजनशिल महिला सचेतना केन्द्रले दलितमा ल्यायो रौनक"',
    description: `सर्लाही जिल्ला साविक भक्तिपुर गा.वि.स. वडा नं. ६ हाल ईश्वरपुर नगरपालिका वडा नं. १ शंकरगंजमा व्यवस्थित सृजनशिल महिला सचेतना केन्द्र मुसहर टोलमा लगभग ६० घरधुरी दलितहरुको वस्ती रहेको छ। यहांका दलितहरुको चेतनाको स्तर ज्यादै कम तथा राज्यवाट पाउने सेवा सुविधाको वारेमा पनि अनविज्ञ थिए।

तर आज सृजनशिल महिला सचेतना केन्द्रमा आवद्ध भएपछि उनीहरुको जीवन नै परिवर्तन भएको महसुस गर्दछन्। यस टोलमा मुसहर समुदायका व्यक्तिहरुलाई गाउं समुदायले त ध्यान दिएनन् सधैं आफ्नो अधीनमा नै राख्न चाहे भने राज्य पक्षले तथा स्थानीय सरोकारवालाहरुले पनि उचित ध्यान नदिएकाले उनीहरु पछाडि परेका थिए।

जसले गर्दा आफ्नो हात मुख जोड्न समस्या समाधानका लागी उनीहरु एक ठाउंबाट अर्को ठाउंमा भौतारिन बाध्य थिए। यसरी भौतारिने क्रममा उनिहरुका शिक्षाको कमीले छोरीहरु बेचिन पनि पुगे विद्यालय उमेरका बालबालिकाहरु भैंसी चराउने, जंगलमा गएर दाउरा ल्याउने काममा लागेका थिए।

अन्धविश्वास पुराना रीति रिवाज परम्परामा रहेको यस गाउंमा बाल विवाह, छोराले पढ्नु हुन्न कमाउन जानु पर्छ, छोरीले घरको काम घाँस दाउरा सुंगुर चराउनु पर्छ भन्ने मान्यता उनिहरु प्रति शिक्षा र चेतनाको महत्व नै नभएको। यसरी नै उनिहरुको दैनिकी चलिरहेको थियो।`,
    image: '/images/success1.jpg',
    date: '2016-08-13',
    author: 'RWUA NEPAL'
  },
  {
    id: '2',
    title: 'सफलताको कथा — १ "ग्रामीण विकास महिला सचेतना केन्द्रले दलितमा ल्यायो परिवर्तन"',
    description: `सर्लाही जिल्ला ईश्वरपुर नगरपालिका वडा नं. ९ को कुरनिया टोलमा अवस्थित ग्रामीण विकास महिला सचेतना केन्द्र मुसहर टोलमा लगभग ५५ घरधुरी दलितहरुको वस्ती रहेको छ। यहांका दलितहरुको चेतनाको स्तर ज्यादै कम तथा राज्यवाट पाउने सेवा सुविधाको वारेमा पनि अनविज्ञ थिए।

तर आज ग्रामीण विकास महिला सचेतना केन्द्रमा आवद्ध भएपछि उनीहरुको जीवन नै परिवर्तन भएको महसुस गर्दछन्। पहिलेको अवस्था यस टोलमा मुसहर समुदायका व्यक्तिहरुलाई गाउं समुदायले ध्यान दिएनन् सधैं आफ्नो अधीनमा नै राख्न चाहे भने राज्य पक्षले तथा स्थानीय सरोकारवालाहरुले पनि उचित ध्यान नदिएकाले उनीहरु पछाडि परेका थिए।

जसले गर्दा आफ्नो हात मुख जोड्न समस्या समाधानका लागी उनीहरु एक ठाउंबाट अर्को ठाउंमा भौतारिन बाध्य थिए। यसरी भौतारिने क्रममा उनिहरुमा शिक्षाको कमीले छोरीहरु बेचिन पनि पुगे विद्यालय उमेरका बालबालिकाहरु भैंसी चराउने, जंगलमा गएर दाउरा ल्याउने काममा लागेका थिए।

अन्धविश्वास पुराना रीति रिवाज परम्परामा रहेको यस गाउंमा बाल विवाह, छोराले पढ्नु हुन्न कमाउन जानु पर्छ, छोरीले घरको काम घाँस दाउरा सुंगुर चराउनु पर्छ भन्ने मान्यता उनिहरु प्रति शिक्षा र चेतनाको महत्व नै नभएको। यसरी नै उनिहरुको दैनिकी चलिरहेको थियो।`,
    image: '/images/success2.jpg',
    date: '2016-08-13',
    author: 'RWUA NEPAL'
  }
];

export default function SuccessStoryPage() {
  const [searchQuery, setSearchQuery] = useState('');
  const [isLoading, setIsLoading] = useState(true);
  const [stories, setStories] = useState<Story[]>([]);
  
  // Filter stories based on search query
  const filteredStories = stories.filter(story => 
    story.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    story.description.toLowerCase().includes(searchQuery.toLowerCase())
  );

  // Simulate initial data loading
  useEffect(() => {
    const loadStories = async () => {
      setIsLoading(true);
      // Simulate API call delay
      await new Promise(resolve => setTimeout(resolve, 1000));
      setStories(successStories);
      setIsLoading(false);
    };

    loadStories();
  }, []);

  const handleSearch = (query: string) => {
    setSearchQuery(query);
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <div className="container mx-auto px-4 py-6 sm:py-8 lg:py-12">
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            Success Story
          </h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            ग्रामीण महिला उत्थान संघको सफलताका कथाहरू
          </p>
        </div>
        
        {/* Mobile search - show only on small screens */}
        <div className="block lg:hidden mb-8">
          <SearchSidebar 
            onSearch={handleSearch}
            placeholder="कथाहरू खोज्नुहोस्..."
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
                  <p className="text-gray-600">Loading success stories...</p>
                </div>
              </div>
            ) : (
              <>
                {/* Single column layout for stories */}
                <div className="space-y-8" role="feed" aria-label="Success stories">
                  {filteredStories.map((story) => (
                    // Show only headings when searching, full cards when not searching
                    searchQuery.trim() ? (
                      <StoryHeading key={story.id} story={story} />
                    ) : (
                      <StoryCard key={story.id} story={story} />
                    )
                  ))}
                </div>
                
                {/* Empty search results */}
                {filteredStories.length === 0 && searchQuery.trim() && (
                  <div className="text-center py-12">
                    <div className="max-w-md mx-auto">
                      <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.172 16.172a4 4 0 015.656 0M9 12h6m-6-4h6m2 5.291A7.962 7.962 0 0112 15c-2.34 0-4.291-1.007-5.691-2.709M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9" />
                      </svg>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">कुनै कथा फेला परेन</h3>
                      <p className="text-gray-500 mb-4">
                        "{searchQuery}" सँग मिल्ने कुनै कथा फेला परेन। अर्को शब्द प्रयोग गर्नुहोस्।
                      </p>
                      <button
                        onClick={() => handleSearch('')}
                        className="text-purple-600 hover:text-purple-700 font-medium text-sm focus:outline-none focus:ring-2 focus:ring-purple-500 focus:ring-offset-2 rounded px-2 py-1 touch-target-comfortable"
                        aria-label="Clear search and show all stories"
                      >
                        सबै कथाहरू हेर्नुहोस्
                      </button>
                    </div>
                  </div>
                )}
                
                {/* No stories at all */}
                {stories.length === 0 && !searchQuery.trim() && (
                  <div className="text-center py-12">
                    <div className="max-w-md mx-auto">
                      <svg className="mx-auto h-12 w-12 text-gray-400 mb-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                      </svg>
                      <h3 className="text-lg font-medium text-gray-900 mb-2">कुनै सफलताका कथाहरू उपलब्ध छैनन्</h3>
                      <p className="text-gray-500">
                        सफलताका कथाहरू अपडेट भइरहेका छन्। कृपया पछि फेरि हेर्नुहोस्।
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
                placeholder="कथाहरू खोज्नुहोस्..."
              />
              
              {/* Recent Posts section */}
              <div className="bg-white rounded-lg shadow-md p-6">
                <h3 className="text-lg font-semibold text-gray-800 mb-4">Recent Posts</h3>
                <div className="space-y-3">
                  {stories.slice(0, 3).map((story) => (
                    <div key={story.id} className="border-b border-gray-200 pb-3 last:border-b-0">
                      <h4 className="text-sm font-medium text-gray-900 mb-1 line-clamp-2">
                        {story.title}
                      </h4>
                      <p className="text-xs text-gray-500">{story.date}</p>
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