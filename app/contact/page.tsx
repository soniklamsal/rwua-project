'use client';

import { useState, useEffect } from 'react';
import { ContactFormData, ContactInfo } from '@/lib/types';
import ContactForm from '@/components/ui/ContactForm';

// Contact information for RWUA Nepal
const contactInfo: ContactInfo = {
  address: "Haripur, Sarlahi District, Madhesh Province, Nepal",
  phone: "046-411109",
  email: "ruwaharipur@rwua.org",
  workingHours: "Sun-Fri: 10am - 5pm",
  socialLinks: {
    facebook: "https://facebook.com/rwuanepal",
    website: "https://rwua.com.np"
  }
};

export default function ContactPage() {
  const [isLoading, setIsLoading] = useState(true);

  // Simulate initial page loading
  useEffect(() => {
    const loadPage = async () => {
      await new Promise(resolve => setTimeout(resolve, 500));
      setIsLoading(false);
    };

    loadPage();
  }, []);

  const handleFormSubmit = async (formData: ContactFormData) => {
    // In a real application, this would send the data to a backend API
    console.log('Form submitted:', formData);
    
    // Simulate API call delay
    await new Promise(resolve => setTimeout(resolve, 1000));
  };

  return (
    <div className="min-h-screen bg-gray-50 py-6 sm:py-8 lg:py-12">
      <div className="container mx-auto px-4">
        {/* Page Header */}
        <div className="text-center mb-8 sm:mb-12">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">Contact Us</h1>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            Get in touch with Rural Women Upliftment Association Nepal. We're here to help and answer any questions about our programs and services.
          </p>
        </div>

        {/* Loading state */}
        {isLoading ? (
          <div className="flex justify-center items-center py-12">
            <div className="text-center">
              <div className="animate-spin rounded-full h-12 w-12 border-b-2 border-purple-600 mx-auto mb-4"></div>
              <p className="text-gray-600">Loading contact information...</p>
            </div>
          </div>
        ) : (
          <div className="max-w-6xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                {/* Contact Information */}
                <div className="space-y-6">
                  <div className="bg-white rounded-lg shadow-md p-6">
                    <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
                    
                    <div className="space-y-6">
                      {/* Address */}
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-purple-100 rounded-full flex items-center justify-center mt-1">
                          <svg className="w-5 h-5 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1 text-base">Address</h3>
                          <p className="text-gray-600 text-sm leading-relaxed break-words">{contactInfo.address}</p>
                        </div>
                      </div>

                      {/* Phone */}
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-green-100 rounded-full flex items-center justify-center mt-1">
                          <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1 text-base">Phone</h3>
                          <p className="text-gray-600 text-sm">
                            <a 
                              href={`tel:${contactInfo.phone}`} 
                              className="hover:text-purple-600 transition-colors"
                            >
                              {contactInfo.phone}
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Email */}
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-blue-100 rounded-full flex items-center justify-center mt-1">
                          <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1 text-base">Email</h3>
                          <p className="text-gray-600 text-sm">
                            <a 
                              href={`mailto:${contactInfo.email}`} 
                              className="hover:text-purple-600 transition-colors break-all"
                            >
                              {contactInfo.email}
                            </a>
                          </p>
                        </div>
                      </div>

                      {/* Working Hours */}
                      <div className="flex items-start space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 bg-orange-100 rounded-full flex items-center justify-center mt-1">
                          <svg className="w-5 h-5 text-orange-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                          </svg>
                        </div>
                        <div className="min-w-0 flex-1">
                          <h3 className="font-semibold text-gray-800 mb-1 text-base">Working Hours</h3>
                          <p className="text-gray-600 text-sm">{contactInfo.workingHours}</p>
                        </div>
                      </div>
                    </div>

                    {/* Social Links */}
                    {contactInfo.socialLinks && (
                      <div className="mt-8 pt-6 border-t border-gray-200">
                        <h3 className="font-semibold text-gray-800 mb-4 text-base">Follow Us</h3>
                        <div className="flex flex-wrap gap-4">
                          {contactInfo.socialLinks.facebook && (
                            <a
                              href={contactInfo.socialLinks.facebook}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-blue-600 hover:bg-blue-700 text-white rounded-full flex items-center justify-center transition-colors"
                              aria-label="Follow us on Facebook"
                            >
                              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                              </svg>
                            </a>
                          )}
                          {contactInfo.socialLinks.website && (
                            <a
                              href={contactInfo.socialLinks.website}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="w-10 h-10 bg-gray-600 hover:bg-gray-700 text-white rounded-full flex items-center justify-center transition-colors"
                              aria-label="Visit our website"
                            >
                              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                              </svg>
                            </a>
                          )}
                        </div>
                      </div>
                    )}
                  </div>
                </div>

              {/* Contact Form */}
              <div>
                <ContactForm onSubmit={handleFormSubmit} />
              </div>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}