import Link from "next/link";

export default function Home() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-rwua-neutral-50 to-rwua-primary/5">
      {/* Hero Section */}
      <section className="relative py-20 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-4xl md:text-6xl font-bold text-rwua-neutral-800 mb-6">
            Rural Upliftment Women Association
          </h1>
          <p className="text-xl md:text-2xl text-rwua-neutral-600 mb-8 max-w-3xl mx-auto">
            Empowering rural women through education, skill development, and sustainable livelihood opportunities across Nepal.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/success-story"
              className="inline-flex items-center px-8 py-3 border border-transparent text-base font-medium rounded-md text-white bg-rwua-primary hover:bg-rwua-primary/90 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rwua-primary transition-colors duration-200 touch-target-comfortable"
            >
              Read Success Stories
            </Link>
            <Link
              href="/contact"
              className="inline-flex items-center px-8 py-3 border border-rwua-primary text-base font-medium rounded-md text-rwua-primary bg-white hover:bg-rwua-neutral-50 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rwua-primary transition-colors duration-200 touch-target-comfortable"
            >
              Get Involved
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-rwua-neutral-800 mb-12">
            What We Do
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center p-6 rounded-lg border border-rwua-neutral-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-rwua-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-rwua-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.746 0 3.332.477 4.5 1.253v13C19.832 18.477 18.246 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-rwua-neutral-800 mb-2">Education</h3>
              <p className="text-rwua-neutral-600">Providing quality education and literacy programs to empower rural women with knowledge and skills.</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-rwua-neutral-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-rwua-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-rwua-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 7.172V5L8 4z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-rwua-neutral-800 mb-2">Skill Development</h3>
              <p className="text-rwua-neutral-600">Training programs in various skills to help women become self-reliant and economically independent.</p>
            </div>
            <div className="text-center p-6 rounded-lg border border-rwua-neutral-200 hover:shadow-lg transition-shadow duration-200">
              <div className="w-16 h-16 bg-rwua-primary/10 rounded-full flex items-center justify-center mx-auto mb-4">
                <svg className="w-8 h-8 text-rwua-primary" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" />
                </svg>
              </div>
              <h3 className="text-xl font-semibold text-rwua-neutral-800 mb-2">Community Support</h3>
              <p className="text-rwua-neutral-600">Building strong communities through collaboration, support networks, and sustainable development initiatives.</p>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-rwua-neutral-50">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl font-bold text-center text-rwua-neutral-800 mb-12">
            Explore Our Work
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <Link
              href="/success-story"
              className="group block p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-rwua-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rwua-primary"
            >
              <h3 className="text-2xl font-semibold text-rwua-neutral-800 mb-4 group-hover:text-rwua-primary transition-colors duration-200">
                Success Stories
              </h3>
              <p className="text-rwua-neutral-600 mb-4">
                Read inspiring stories of women who have transformed their lives through our programs and initiatives.
              </p>
              <span className="inline-flex items-center text-rwua-primary font-medium group-hover:underline">
                Read Stories
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
            <Link
              href="/vacancy"
              className="group block p-8 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-200 border border-rwua-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-rwua-primary"
            >
              <h3 className="text-2xl font-semibold text-rwua-neutral-800 mb-4 group-hover:text-rwua-primary transition-colors duration-200">
                Job Opportunities
              </h3>
              <p className="text-rwua-neutral-600 mb-4">
                Join our team and help make a difference in the lives of rural women across Nepal.
              </p>
              <span className="inline-flex items-center text-rwua-primary font-medium group-hover:underline">
                View Vacancies
                <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                </svg>
              </span>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
