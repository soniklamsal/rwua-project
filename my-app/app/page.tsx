'use client';

import { useState, useEffect } from 'react';
import Image from "next/image";
import Link from "next/link";
import { 
  Calendar, 
  Users, 
  Target, 
  Heart, 
  Sparkles, 
  ArrowRight, 
  Play,
  Award,
  TrendingUp,
  Globe,
  BookOpen,
  Quote,
  Eye,
  Shield,
  Briefcase,
  Leaf
} from 'lucide-react';

// Counter Animation Hook
function useCounter(end: number, duration: number = 2000) {
  const [count, setCount] = useState(0);
  
  useEffect(() => {
    let startTime: number;
    let animationFrame: number;
    
    const animate = (currentTime: number) => {
      if (!startTime) startTime = currentTime;
      const progress = Math.min((currentTime - startTime) / duration, 1);
      
      setCount(Math.floor(progress * end));
      
      if (progress < 1) {
        animationFrame = requestAnimationFrame(animate);
      }
    };
    
    animationFrame = requestAnimationFrame(animate);
    
    return () => cancelAnimationFrame(animationFrame);
  }, [end, duration]);
  
  return count;
}

// Impact Counter Component
function ImpactCounter({ value, label, suffix = "" }: { value: number; label: string; suffix?: string }) {
  const count = useCounter(value);
  
  return (
    <div className="text-center">
      <div className="text-6xl font-extrabold text-red-600 mb-2">
        {count.toLocaleString()}{suffix}
      </div>
      <div className="text-slate-600 font-semibold text-lg">{label}</div>
    </div>
  );
}

export default function Home() {
  const [activeTab, setActiveTab] = useState('save-children');

  return (
    <div className="min-h-screen bg-slate-50">
      {/* Hero Section with Background Image */}
      <section className="relative overflow-hidden min-h-screen flex items-center">
        {/* Background Image */}
        <div className="absolute inset-0">
          <Image
            src="/hero-screenshot.jpg"
            alt="RWUA Hero Section"
            fill
            className="object-cover opacity-40"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-br from-purple-900/70 to-slate-900/50"></div>
        </div>
        
        <div className="relative max-w-7xl mx-auto px-6 py-20">
          {/* Pulsating International Women's Day Banner */}
          <div className="mb-12 flex justify-center">
            <div className="bg-purple-600 rounded-[3rem] px-8 py-4 shadow-2xl animate-pulse">
              <div className="text-center">
                <div className="text-white font-extrabold text-xl mb-1">
                  International Women's Day 2025
                </div>
                <div className="text-purple-100 font-semibold text-sm">
                  अन्तर्राष्ट्रिय महिला दिवस २०२५
                </div>
              </div>
            </div>
          </div>

          {/* Bilingual Hero Content */}
          <div className="text-center">
            <h1 className="text-6xl md:text-8xl font-extrabold mb-6 tracking-tight">
              <span className="text-purple-600">ग्रामीण महिला</span>
              <br />
              <span className="text-red-600">उत्थान संस्था</span>
            </h1>
            <h2 className="text-4xl md:text-5xl font-extrabold text-white mb-8 tracking-tight">
              Rural Women Upliftment Association
            </h2>
            <p className="text-xl md:text-2xl text-slate-200 mb-12 max-w-4xl mx-auto leading-relaxed">
              Transforming communities through women's empowerment, sustainable development, and inclusive growth across rural Nepal.
            </p>
            
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-yellow-400 hover:bg-yellow-500 text-purple-900 font-extrabold px-10 py-5 rounded-[3rem] text-xl transition-all duration-300 active:scale-95 shadow-xl hover:shadow-2xl">
                Join Our Mission
              </button>
              <button className="border-3 border-white text-white hover:bg-white hover:text-purple-900 font-bold px-10 py-5 rounded-[3rem] text-xl transition-all duration-300 active:scale-95 flex items-center gap-3">
                <Play className="w-6 h-6" />
                Watch Our Story
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Bento-Style Core Values */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-20">
            <h2 className="text-6xl font-extrabold text-purple-900 mb-6 tracking-tight">
              Our Foundation
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Built on strong values and clear objectives to create lasting change
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Vision Card */}
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-purple-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                  <Target className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-4xl font-extrabold text-purple-900 mb-6 tracking-tight">Vision</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  Establishment of Quality and Equitable and Prosperous Society through rural women empowerment.
                </p>
              </div>
            </div>

            {/* Mission Card */}
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-yellow-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                  <Heart className="w-12 h-12 text-yellow-600" />
                </div>
                <h3 className="text-4xl font-extrabold text-purple-900 mb-6 tracking-tight">Mission</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  To transform the community by mobilizing and empowering the target group, improving economic, social and healthy life.
                </p>
              </div>
            </div>

            {/* Goals Card */}
            <div className="bg-white rounded-[3rem] p-10 shadow-2xl hover:scale-105 transition-all duration-300 group">
              <div className="text-center mb-8">
                <div className="w-24 h-24 bg-red-100 rounded-[2rem] flex items-center justify-center mx-auto mb-6">
                  <TrendingUp className="w-12 h-12 text-red-600" />
                </div>
                <h3 className="text-4xl font-extrabold text-purple-900 mb-6 tracking-tight">Goals</h3>
                <p className="text-lg text-slate-700 leading-relaxed">
                  A dignified life will be built by improving the quality of education, healthy life and income of the Community.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
{/* Strategic Objectives – Nepal NGO Design */}
<section className="py-24 bg-slate-50">
  <div className="max-w-7xl mx-auto px-6">
    
    {/* Section Header */}
    <div className="text-center mb-16">
      <h2 className="text-5xl md:text-6xl font-extrabold text-purple-900 mb-4">
        Strategic Objectives
      </h2>
      <div className="w-24 h-1 bg-gradient-to-r from-red-600 to-purple-600 rounded-full mx-auto mb-6"></div>
      <p className="text-xl text-slate-600 max-w-3xl mx-auto">
        Our focused goals to uplift rural women, children, and communities across Nepal
      </p>
      <p className="text-slate-500 mt-2">
        ग्रामीण महिला, बालबालिका र समुदाय सशक्तिकरणका लागि हाम्रो रणनीतिक उद्देश्य
      </p>
    </div>

    {/* Objectives Grid */}
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
      {[
        {
          icon: Shield,
          text: "Ensure child rights by protecting and promoting children."
        },
        {
          icon: Heart,
          text: "Increase access to basic health and hygiene for the target community."
        },
        {
          icon: Briefcase,
          text: "Improve living standards through income-generating activities."
        },
        {
          icon: Users,
          text: "Promote women empowerment, networking, and community capacity building."
        },
        {
          icon: Globe,
          text: "Strengthen emergency preparedness, response, and recovery efforts."
        },
        {
          icon: Leaf,
          text: "Promote agro-ecological livelihoods, climate resilience, and disaster risk mitigation."
        },
        {
          icon: Target,
          text: "Align programs with Nepal government policies and Sustainable Development Goals."
        }
      ].map((item, index) => (
        <div
          key={index}
          className="bg-white rounded-[2.5rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-1"
        >
          <div className="flex items-start gap-6">
            
            {/* Icon */}
            <div className="w-14 h-14 rounded-2xl bg-red-100 flex items-center justify-center flex-shrink-0">
              <item.icon className="w-7 h-7 text-red-600" />
            </div>

            {/* Text */}
            <p className="text-lg text-slate-700 leading-relaxed font-medium">
              {item.text}
            </p>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>


      {/* About Feature - 2 Column Layout */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            {/* Left: Office Photo with Ring Border */}
            <div className="relative">
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-r from-purple-600 to-yellow-400 rounded-[3rem] opacity-20"></div>
                <div className="relative bg-white p-4 rounded-[3rem] shadow-2xl">
                  <div className="rounded-[2.5rem] overflow-hidden">
                    <Image
                      src="https://rwua.com.np/wp-content/uploads/2014/12/DSC01766.jpg"
                      alt="RWUA Headquarters"
                      width={600}
                      height={400}
                      className="w-full h-96 object-cover"
                    />
                  </div>
                </div>
              </div>
              <div className="absolute -bottom-8 -right-8 bg-yellow-400 rounded-[2rem] p-6 shadow-xl">
                <div className="text-purple-900 font-extrabold text-3xl">25+</div>
                <div className="text-purple-800 font-semibold">Years of Impact</div>
              </div>
            </div>

            {/* Right: Info Card with Bilingual Text */}
            <div className="bg-slate-50 rounded-[3rem] p-12 shadow-xl">
              <h2 className="text-5xl font-extrabold text-purple-900 mb-8 tracking-tight">
                About RWUA
              </h2>
              <div className="space-y-6">
                <p className="text-xl text-slate-700 leading-relaxed">
                  Rural Women Upliftment Association (RWUA) has been working tirelessly since 1999 to empower rural women and transform communities across Nepal.
                </p>
                <p className="text-lg text-slate-600 leading-relaxed">
                  ग्रामीण महिला उत्थान संस्था (RWUA) ले १९९९ देखि नेपालभरका ग्रामीण महिलाहरूलाई सशक्तिकरण गर्न र समुदायहरूलाई रूपान्तरण गर्न अथक प्रयास गरिरहेको छ।
                </p>
                
                {/* Stylized Blockquote */}
                <div className="bg-white rounded-[2rem] p-8 shadow-lg border-l-8 border-red-600 relative">
                  <Quote className="w-8 h-8 text-red-600 absolute -top-2 -left-2 bg-white rounded-full p-1" />
                  <blockquote className="text-lg text-slate-700 italic leading-relaxed">
                    "Empowering women means empowering communities. When we invest in women, we invest in the future of Nepal."
                  </blockquote>
                  <cite className="text-purple-600 font-semibold mt-4 block">- RWUA Leadership Team</cite>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Leadership Profiles - Horizontal Cards */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-6xl font-extrabold text-purple-900 mb-16 text-center tracking-tight">
            Leadership Team
          </h2>
          
          <div className="space-y-8">
            {[
              { 
                name: "गोमा देवी न्यौपाने", 
                nameEn: "", 
                role: "अध्यक्ष, ग्रा.ना.उ.स.", 
                roleEn: "",
                accent: "border-purple-600"
              },
              { 
                name: "बिष्णु प्रसाद चालिसे", 
                nameEn: "", 
                role: "सम्पर्क ब्यक्ती", 
                roleEn: "",
                accent: "border-yellow-500"
              }
            ].map((leader, index) => (
              <div key={index} className="bg-white rounded-[3rem] p-8 shadow-xl hover:shadow-2xl transition-all duration-300 group">
                <div className="flex items-center gap-8">
                  <div className={`w-32 h-32 rounded-2xl ${leader.accent} border-4 overflow-hidden flex-shrink-0`}>
                    <Image
                      src={index === 0 ? "https://rwua.com.np/wp-content/uploads/2014/12/goma.jpg" : "https://rwua.com.np/wp-content/uploads/2023/03/Bishnu-chalise-scaled.jpg"}
                      alt={leader.nameEn}
                      width={128}
                      height={128}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div className="flex-grow">
                    <h3 className="text-4xl font-extrabold text-purple-900 mb-2">{leader.name}</h3>
                    <h4 className="text-2xl font-bold text-slate-600 mb-3">{leader.nameEn}</h4>
                    <div className="flex items-center gap-4">
                      <p className="text-xl text-purple-700 font-semibold">{leader.role}</p>
                      <span className="text-slate-400">•</span>
                      <p className="text-lg text-slate-600">{leader.roleEn}</p>
                    </div>
                    <div className={`w-24 h-1 ${leader.accent.replace('border-', 'bg-')} mt-4 rounded-full`}></div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Tabbed Intelligence - News & Social Proof */}
      <section className="py-24 bg-white">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-extrabold text-purple-900 mb-6 tracking-tight">
              Latest Updates
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Stay informed about our programs, opportunities, and impact
            </p>
          </div>

          {/* Tab Navigation with Top Border Indicator */}
          <div className="flex justify-center mb-12">
            <div className="bg-slate-100 rounded-[3rem] p-2 shadow-lg">
              {[
                { key: 'save-children', label: 'Save The Children' },
                { key: 'latest', label: 'Latest Update' },
                { key: 'vacancy', label: 'Vacancy' }
              ].map((tab) => (
                <button
                  key={tab.key}
                  onClick={() => setActiveTab(tab.key)}
                  className={`relative px-8 py-4 rounded-[2.5rem] font-bold text-lg transition-all duration-300 ${
                    activeTab === tab.key
                      ? 'bg-white text-purple-900 shadow-lg'
                      : 'text-slate-600 hover:text-purple-700'
                  }`}
                >
                  {activeTab === tab.key && (
                    <div className="absolute -top-1 left-1/2 transform -translate-x-1/2 w-16 h-1 bg-purple-600 rounded-full"></div>
                  )}
                  {tab.label}
                </button>
              ))}
            </div>
          </div>

          {/* Tab Content */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[1, 2, 3].map((item) => (
              <div key={item} className="bg-slate-50 rounded-[2rem] p-8 shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 group">
                <div className="w-full h-48 bg-gradient-to-br from-purple-100 to-purple-200 rounded-[1.5rem] mb-6 flex items-center justify-center">
                  <Calendar className="w-12 h-12 text-purple-600" />
                </div>
                <h3 className="text-2xl font-extrabold text-purple-900 mb-4 group-hover:text-purple-700 transition-colors">
                  {activeTab === 'save-children' && `Child Protection Program ${item}`}
                  {activeTab === 'latest' && `Community Workshop ${item}`}
                  {activeTab === 'vacancy' && `Program Officer Position ${item}`}
                </h3>
                <p className="text-slate-600 mb-6 leading-relaxed">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore.
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-purple-600 font-semibold">Dec 28, 2024</span>
                  <button className="opacity-0 group-hover:opacity-100 text-red-600 font-bold flex items-center gap-2 transition-all duration-300">
                    Read More
                    <ArrowRight className="w-4 h-4" />
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery - 3 Column Masonry */}
      <section className="py-24 bg-slate-50">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-6xl font-extrabold text-purple-900 mb-6 tracking-tight">
              Our Impact Gallery
            </h2>
            <p className="text-2xl text-slate-600 max-w-4xl mx-auto">
              Witness the transformation in rural communities across Nepal
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
            {[
              "https://rwua.com.np/wp-content/uploads/2021/04/17.jpg",
              "https://rwua.com.np/wp-content/uploads/2020/01/3.jpg", 
              "https://rwua.com.np/wp-content/uploads/2020/01/11.jpg",
              "https://rwua.com.np/wp-content/uploads/2021/04/17.jpg",
              "https://rwua.com.np/wp-content/uploads/2020/01/3.jpg",
              "https://rwua.com.np/wp-content/uploads/2020/01/11.jpg"
            ].map((imageSrc, index) => (
              <div key={index} className={`rounded-[2rem] overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:scale-105 ${
                index % 3 === 0 ? 'md:row-span-2' : ''
              }`}>
                <Image
                  src={imageSrc}
                  alt={`RWUA Impact Story ${index + 1}`}
                  width={400}
                  height={index % 3 === 0 ? 600 : 300}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>

          <div className="text-center">
            <Link href="/gallery">
              <button className="bg-purple-600 hover:bg-purple-700 text-white font-extrabold px-12 py-6 rounded-[3rem] text-xl transition-all duration-300 active:scale-95 shadow-xl hover:shadow-2xl flex items-center gap-3 mx-auto">
                <Eye className="w-6 h-6" />
                View Gallery
              </button>
            </Link>
          </div>
        </div>
      </section>

      {/* Partner Cloud - Moving Carousel */}
      <section className="py-24 bg-white overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="text-center mb-16">
            <h2 className="text-5xl font-extrabold text-purple-900 mb-6 tracking-tight">
              Trusted Partners
            </h2>
            <p className="text-xl text-slate-600">
              Working together with international organizations for greater impact
            </p>
          </div>

          {/* Moving Partners Carousel */}
          <div className="relative">
            <div className="flex animate-scroll">
              {/* First set of partners */}
              {[
                {
                  name: 'Partner 1',
                  image: 'https://rwua.com.np/wp-content/uploads/2014/12/7y.png'
                },
                {
                  name: 'SNV',
                  image: 'https://rwua.com.np/wp-content/uploads/2024/04/snv.jpg'
                },
                {
                  name: 'World Neighbors',
                  image: 'https://rwua.com.np/wp-content/uploads/2021/04/WN_Logo_Color.jpg'
                },
                {
                  name: 'Partner 4',
                  image: 'https://rwua.com.np/wp-content/uploads/2014/12/Untitled-3.jpg'
                },
                {
                  name: 'UNDP',
                  image: 'https://rwua.com.np/wp-content/uploads/2022/01/undppp.png'
                }
              ].map((partner, index) => (
                <div key={index} className="flex-shrink-0 mx-8">
                  <div className="bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-xl transition-all duration-300 grayscale hover:grayscale-0 group hover:scale-105 w-48 h-32">
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={120}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
              
              {/* Duplicate set for seamless loop */}
              {[
                {
                  name: 'Partner 1',
                  image: 'https://rwua.com.np/wp-content/uploads/2014/12/7y.png'
                },
                {
                  name: 'SNV',
                  image: 'https://rwua.com.np/wp-content/uploads/2024/04/snv.jpg'
                },
                {
                  name: 'World Neighbors',
                  image: 'https://rwua.com.np/wp-content/uploads/2021/04/WN_Logo_Color.jpg'
                },
                {
                  name: 'Partner 4',
                  image: 'https://rwua.com.np/wp-content/uploads/2014/12/Untitled-3.jpg'
                },
                {
                  name: 'UNDP',
                  image: 'https://rwua.com.np/wp-content/uploads/2022/01/undppp.png'
                }
              ].map((partner, index) => (
                <div key={`duplicate-${index}`} className="flex-shrink-0 mx-8">
                  <div className="bg-white rounded-[2rem] p-6 shadow-lg hover:shadow-xl transition-all duration-300 grayscale hover:grayscale-0 group hover:scale-105 w-48 h-32">
                    <div className="w-full h-full flex items-center justify-center">
                      <Image
                        src={partner.image}
                        alt={partner.name}
                        width={120}
                        height={80}
                        className="max-w-full max-h-full object-contain"
                      />
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>

        <style jsx>{`
          @keyframes scroll {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-50%);
            }
          }
          
          .animate-scroll {
            animation: scroll 20s linear infinite;
          }
          
          .animate-scroll:hover {
            animation-play-state: paused;
          }
        `}</style>
      </section>

     


    </div>
  );
}