import React from 'react';
import { Calendar, MapPin, Clock, Users, ExternalLink, Award, Building } from 'lucide-react';
import SEO from '../components/SEO';
import { getSEOConfig } from '../config/seoConfig';
import ReadingProgress from '../components/ReadingProgress';

const GartnerPage: React.FC = () => {
    const seoData = getSEOConfig('/gartner-2025');

    const actionCards = [
        {
            icon: Calendar,
            title: "Book a Meeting",
            description: "Walk away with a tailored AI roadmap",
            color: "purple",
            action: "Schedule Now"
        },
        {
            icon: Users,
            title: "Attend Our Session",
            description: "Scaling beyond AI Pilot: Experiment to enterprise impact",
            color: "pink",
            action: "Learn More"
        },
        {
            icon: Building,
            title: "Visit Our Booth",
            description: "Experience hands-on demos and meet our product experts",
            color: "blue",
            action: "Get Directions"
        }
    ];

    const teamMembers = [
        {
            name: "Manish Singh",
            role: "Founder & CEO",
            expertise: "AI Strategy & Leadership",
            image: "/team/manish.webp",
            linkedin: "#"
        },
        {
            name: "Morten Vinge-Maigaard",
            role: "Head of Sales",
            expertise: "Enterprise Solutions",
            image: "/team/morten.webp",
            linkedin: "https://www.linkedin.com/in/mortenvingemaigaard/"
        },
        {
            name: "Kruthik Ramachandar",
            role: "Sales Lead",
            expertise: "Client Relations",
            image: "/team/kruthik.webp",
            linkedin: "https://www.linkedin.com/in/kruthik-ramachandrachar-1044992/"
        },
        {
            name: "Paras Lokhande",
            role: "Customer Head",
            expertise: "Technical Implementation",
            image: "/team/paras.webp",
            linkedin: "https://www.linkedin.com/in/paras-lokhande-4121b593/"
        },
        {
            name: "Susanne Gallo Ravn",
            role: "Sales Director",
            expertise: "Market Development",
            image: "/team/Sussane.webp",
            linkedin: "https://www.linkedin.com/in/susanne-j-gall%C3%B8-ravn-332b406b/"
        }
    ];


    return (
        <div className="min-h-screen bg-gradient-to-br from-gray-50 via-white to-purple-50">
            <SEO
                title={seoData.title}
                description={seoData.description}
                keywords={seoData.keywords}
                ogImage={seoData.ogImage}
            />
            {/* Hero Section */}
            <section className="relative overflow-hidden py-16 sm:py-20 lg:py-24" style={{
                background: 'linear-gradient(135deg, #1a0b2e 0%, #2d1b69 50%, #1a0b2e 100%)'
            }}>
                {/* Abstract Background Pattern */}
                <div className="absolute inset-0 overflow-hidden">
                    {/* Wavy digital patterns */}
                    <div className="absolute top-0 left-0 w-full h-full opacity-30">
                        <svg className="w-full h-full" viewBox="0 0 1200 800" fill="none">
                            <path d="M0,200 Q300,100 600,200 T1200,200 L1200,0 L0,0 Z" fill="url(#gradient1)" />
                            <path d="M0,400 Q400,300 800,400 T1200,400 L1200,200 L0,200 Z" fill="url(#gradient2)" />
                            <path d="M0,600 Q200,500 400,600 T800,600 Q1000,500 1200,600 L1200,400 L0,400 Z" fill="url(#gradient3)" />
                        </svg>
                        <defs>
                            <linearGradient id="gradient1" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#8b5cf6" stopOpacity="0.3" />
                                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
                            </linearGradient>
                            <linearGradient id="gradient2" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#ec4899" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#8b5cf6" stopOpacity="0.1" />
                            </linearGradient>
                            <linearGradient id="gradient3" x1="0%" y1="0%" x2="100%" y2="0%">
                                <stop offset="0%" stopColor="#dc2626" stopOpacity="0.2" />
                                <stop offset="100%" stopColor="#ec4899" stopOpacity="0.1" />
                            </linearGradient>
                        </defs>
                    </div>

                    {/* Digital particles */}
                    <div className="absolute inset-0">
                        {[...Array(50)].map((_, i) => (
                            <div
                                key={i}
                                className="absolute w-1 h-1 bg-white rounded-full opacity-60 animate-pulse"
                                style={{
                                    left: `${Math.random() * 100}%`,
                                    top: `${Math.random() * 100}%`,
                                    animationDelay: `${Math.random() * 3}s`,
                                    animationDuration: `${2 + Math.random() * 2}s`
                                }}
                            />
                        ))}
                    </div>
                </div>

                <div className="w-full max-w-7xl mx-auto px-4 sm:px-6 md:px-8 lg:px-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 items-center">
                        {/* Left Side - Content */}
                        <div className="text-white lg:col-span-3">
                            {/* JOIN US AT THE Box */}
                            <div className="inline-block bg-gradient-to-r from-pink-500 to-purple-600 text-white px-4 py-2 rounded-lg mb-6">
                                <span className="text-sm font-semibold">JOIN US AT THE</span>
                            </div>

                            {/* Main Title */}
                            <div className="mb-6 sm:mb-8 max-w-4xl">
                                <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                                    <span className="text-white">Gartner</span>
                                    <span className="text-white text-sm ml-1">®</span>
                                </h1>
                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-2">
                                    <span className="text-orange-500">IT</span>
                                </h2>
                                <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white">
                                    <span className="text-white">SYMPOSIUM</span>
                                    <span className="text-orange-500 mx-2 sm:mx-4">|</span>
                                    <span className="text-white">Xpo</span>
                                    <span className="text-white text-sm ml-1">™</span>
                                </h3>
                            </div>

                            {/* Event Details and Booth Information */}
                            <div className="flex flex-col sm:flex-row sm:items-center gap-4 sm:gap-6 lg:gap-8 mb-6 sm:mb-8">
                                {/* Date and Location */}
                                <div className="space-y-3 sm:space-y-4">
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <MapPin className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        <div>
                                            <div className="text-lg sm:text-xl font-bold text-white">Nov. 10-13, 2025</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3 sm:gap-4">
                                        <Calendar className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
                                        <div>
                                            <div className="text-lg sm:text-xl font-bold text-white">Barcelona, Spain</div>
                                        </div>
                                    </div>
                                </div>

                                {/* Orange Arrow */}
                                <div className="hidden sm:block w-0 h-0 border-l-8 border-l-orange-500 border-t-4 border-t-transparent border-b-4 border-b-transparent"></div>

                                {/* Booth Information Box */}
                                <div className="border border-white rounded-lg px-4 sm:px-6 py-3 sm:py-4 bg-white/10 backdrop-blur-sm">
                                    <div className="text-sm text-white mb-1">Booth No.</div>
                                    <div className="text-2xl sm:text-3xl font-bold text-orange-500">308</div>
                                </div>
                            </div>

                        </div>

                        {/* Right Side - Floating Robot */}
                        <div className="relative flex justify-center lg:justify-end lg:col-span-2">
                            <div className="relative">
                                {/* Floating Robot Character */}
                                <div className="relative animate-float">
                                    {/* Robot Body */}
                                    <div className="w-48 h-48 sm:w-64 sm:h-64 lg:w-72 lg:h-72 xl:w-80 xl:h-80 bg-white rounded-full relative shadow-2xl">
                                        {/* Robot Ears */}
                                        <div className="absolute -top-6 sm:-top-8 left-1/2 transform -translate-x-1/2 flex gap-3 sm:gap-4">
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full"></div>
                                            <div className="w-6 h-6 sm:w-8 sm:h-8 bg-white rounded-full"></div>
                                        </div>

                                        {/* Robot Arms */}
                                        <div className="absolute top-1/2 -left-6 sm:-left-8 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full"></div>
                                        <div className="absolute top-1/2 -right-6 sm:-right-8 w-12 h-12 sm:w-16 sm:h-16 bg-white rounded-full"></div>

                                        {/* Robot Face Screen */}
                                        <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-36 h-24 sm:w-44 sm:h-28 lg:w-48 lg:h-32 xl:w-56 xl:h-36 bg-black rounded-2xl flex flex-col items-center justify-center">
                                            {/* Eyes */}
                                            <div className="flex gap-6 sm:gap-8 mb-3 sm:mb-4">
                                                <div className="flex gap-1">
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                                </div>
                                                <div className="flex gap-1">
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                                    <div className="w-1.5 h-1.5 sm:w-2 sm:h-2 bg-white rounded-full"></div>
                                                </div>
                                            </div>

                                            {/* Mouth/Nose */}
                                            <div className="w-0 h-0 border-l-3 sm:border-l-4 border-l-transparent border-r-3 sm:border-r-4 border-r-transparent border-t-4 sm:border-t-6 border-t-white"></div>
                                        </div>
                                    </div>

                                    {/* Floating glow effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-purple-400/20 to-pink-400/20 rounded-full blur-3xl scale-150"></div>
                                </div>

                                {/* Additional floating elements */}
                                <div className="absolute -top-8 sm:-top-10 -right-8 sm:-right-10 w-16 h-16 sm:w-20 sm:h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-60 animate-pulse"></div>
                                <div className="absolute -bottom-8 sm:-bottom-10 -left-8 sm:-left-10 w-12 h-12 sm:w-16 sm:h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl opacity-60 animate-pulse" style={{ animationDelay: '1s' }}></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Action Cards Section */}
            <section className="w-full relative overflow-hidden bg-white">
                <div className="section-container section-padding">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#343f52' }}>
                            What You Can Do
                        </h2>
                        <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4" style={{ color: '#60697b' }}>
                            Make the most of your visit with these exclusive opportunities
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
                        {actionCards.map((card, index) => (
                            <div key={index} className="group rounded-2xl sm:rounded-3xl p-6 sm:p-8 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-purple-300/50 relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #DA2CC3 0%, #A022CB 50%, #7B1BF1 100%)' }}>
                                {/* Background decorative element */}
                                <div className="absolute top-0 right-0 w-24 h-24 sm:w-32 sm:h-32 bg-white/20 rounded-full blur-2xl -translate-y-12 sm:-translate-y-16 translate-x-12 sm:translate-x-16"></div>

                                <div className="relative z-10">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4 sm:mb-6 shadow-lg group-hover:scale-110 transition-transform duration-300">
                                        <card.icon className="w-8 h-8 sm:w-10 sm:h-10 text-white" />
                                    </div>

                                    <h3 className="text-xl sm:text-2xl font-bold mb-3 sm:mb-4 text-white">
                                        {card.title}
                                    </h3>

                                    <p className="text-sm sm:text-base leading-relaxed text-white/90">
                                        {card.description}
                                    </p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Meet the Team Section */}
            <section className="w-full relative overflow-hidden bg-white">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-100/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-56 h-56 sm:w-80 sm:h-80 bg-pink-100/20 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#343f52' }}>
                            Meet the Team
                        </h2>
                        <p className="text-lg sm:text-xl max-w-3xl mx-auto px-4" style={{ color: '#60697b' }}>
                            Connect with our experts who will be at the event
                        </p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4 sm:gap-4 mb-12 sm:mb-16">
                        {teamMembers.map((member, index) => (
                            <a
                                key={index}
                                href={member.linkedin}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group bg-white rounded-2xl sm:rounded-3xl p-3 sm:p-4 text-center hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100 relative overflow-hidden cursor-pointer block"
                                title={`Connect with ${member.name} on LinkedIn`}
                            >
                                {/* Top accent line */}
                                <div className={`absolute top-0 left-0 w-full h-1 bg-gradient-to-r ${index % 2 === 0 ? 'from-purple-400 to-purple-600' : 'from-pink-400 to-pink-600'
                                    }`}></div>

                                {/* Profile Image */}
                                <div className="relative mb-4 sm:mb-6">
                                    <div className="w-16 h-16 sm:w-20 sm:h-20 lg:w-24 lg:h-24 mx-auto rounded-full overflow-hidden border-2 sm:border-4 border-white shadow-lg">
                                        <img
                                            src={member.image}
                                            alt={member.name}
                                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-300"
                                        />
                                    </div>
                                </div>

                                {/* Member Info */}
                                <h3 className="text-sm sm:text-md font-semibold mb-1" style={{ color: '#343f52' }}>
                                    {member.name}
                                </h3>

                                <p className="text-xs sm:text-sm font-semibold" style={{ color: '#60697b' }}>
                                    {member.role}
                                </p>
                            </a>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured Session Section */}
            <section className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-48 h-48 sm:w-72 sm:h-72 bg-purple-100/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-56 h-56 sm:w-80 sm:h-80 bg-pink-100/30 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="max-w-6xl mx-auto">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 sm:gap-12 items-center">
                            {/* Left Side - Content */}
                            <div>
                                <div className="inline-flex items-center gap-2 bg-gradient-to-r from-purple-100 to-pink-100 text-purple-700 px-4 py-2 rounded-full mb-6 border border-purple-200">
                                    <Award className="w-4 h-4" />
                                    <span className="text-sm font-semibold">Featured Session</span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 sm:mb-6" style={{ color: '#343f52' }}>
                                    Scaling beyond AI pilot
                                </h2>

                                <h3 className="text-lg sm:text-xl font-semibold text-purple-600 mb-6 sm:mb-8">
                                    Experiment to enterprise impact
                                </h3>

                                <div className="space-y-3 sm:space-y-4 mb-6 sm:mb-8">
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-purple-50 to-purple-200 rounded-full flex items-center justify-center">
                                            <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-purple-600" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm sm:text-base" style={{ color: '#343f52' }}>Tuesday, November 11</div>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 sm:w-10 sm:h-10 bg-gradient-to-br from-pink-100 to-pink-200 rounded-full flex items-center justify-center">
                                            <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-pink-600" />
                                        </div>
                                        <div>
                                            <div className="font-semibold text-sm sm:text-base" style={{ color: '#343f52' }}>3:00 PM - 3:30 PM CET</div>
                                            <div className="text-xs sm:text-sm text-gray-500">7:30 PM - 8:00 PM IST</div>
                                        </div>
                                    </div>
                                </div>

                                <p className="text-sm sm:text-md leading-relaxed mb-6 sm:mb-8" style={{ color: '#60697b' }}>
                                    This session explores a systematic approach to scaling AI from pilots to enterprise-wide platforms. We'll share a four-phase scaling methodology, showcase real use cases and success stories, and feature live demonstrations of AI agents.
                                </p>

                                <div className="flex flex-col sm:flex-row gap-3 sm:gap-4">
                                    <button
                                        onClick={() => window.open('https://www.addevent.com/event/HC26969163', '_blank')}
                                        className="text-white px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:opacity-90 cursor-pointer text-sm sm:text-base"
                                        style={{ background: 'linear-gradient(135deg, #DA2CC3 0%, #A022CB 50%, #7B1BF1 100%)' }}
                                    >
                                        <Calendar className="w-4 h-4 sm:w-5 sm:h-5" />
                                        Add to Calendar
                                    </button>
                                    <button
                                        onClick={() => window.location.href = 'https://www.gartner.com/en/conferences/emea/symposium'}
                                        className="border-2 px-6 sm:px-8 py-3 sm:py-4 rounded-xl sm:rounded-2xl font-semibold transition-all duration-300 flex items-center justify-center gap-2 cursor-pointer text-sm sm:text-base"
                                        style={{ borderColor: '#DA2CC3', color: '#DA2CC3' }}
                                        onMouseEnter={(e) => {
                                            e.currentTarget.style.background = 'linear-gradient(135deg, #DA2CC3 0%, #A022CB 50%, #7B1BF1 100%)';
                                            e.currentTarget.style.color = 'white';
                                        }}
                                        onMouseLeave={(e) => {
                                            e.currentTarget.style.background = 'transparent';
                                            e.currentTarget.style.color = '#DA2CC3';
                                        }}
                                    >
                                        <ExternalLink className="w-4 h-4 sm:w-5 sm:h-5" />
                                        Learn More
                                    </button>
                                </div>
                            </div>

                            {/* Right Side - Speakers */}
                            <div className="relative">
                                <div className="text-center mb-6 sm:mb-8">
                                    <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: '#343f52' }}>Session Speakers</h3>
                                    <div className="w-12 sm:w-16 h-1 bg-gradient-to-r from-purple-400 to-pink-400 mx-auto rounded-full"></div>
                                </div>

                                <div className="space-y-4 sm:space-y-6">
                                    {/* Speaker 1 - Manish Singh */}
                                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-purple-100">
                                                <img
                                                    src="/team/manish.webp"
                                                    alt="Manish Singh"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-base sm:text-lg font-bold" style={{ color: '#343f52' }}>Manish Singh</h4>
                                                <p className="text-xs sm:text-sm font-semibold text-purple-600 mb-1">Founder | Beta Hub</p>
                                                <a
                                                    href="https://www.linkedin.com/in/manish-singh-753b1811/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-200"
                                                >
                                                    <svg className="w-4 h-4 sm:w-5 sm:h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Speaker 2 - Ragnar P */}
                                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-pink-100">
                                                <img
                                                    src="/team/ragnar.webp"
                                                    alt="Ragnar P"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-base sm:text-lg font-bold" style={{ color: '#343f52' }}>Ragnar P</h4>
                                                <p className="text-xs sm:text-sm font-semibold text-pink-600 mb-1">Enterprise AI Architect | Microsoft</p>
                                                <a
                                                    href="https://www.linkedin.com/in/ragnarpitla/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-pink-600 hover:text-pink-800 transition-colors duration-200"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>

                                    {/* Speaker 3 - Paras Lokhande */}
                                    <div className="bg-white rounded-xl sm:rounded-2xl p-4 sm:p-6 shadow-lg border border-gray-100 hover:shadow-xl transition-all duration-300 hover:-translate-y-1">
                                        <div className="flex items-center gap-3 sm:gap-4">
                                            <div className="w-12 h-12 sm:w-16 sm:h-16 rounded-full overflow-hidden border-2 sm:border-4 border-purple-100">
                                                <img
                                                    src="/team/paras.webp"
                                                    alt="Paras Lokhande"
                                                    className="w-full h-full object-cover"
                                                />
                                            </div>
                                            <div className="flex-1">
                                                <h4 className="text-base sm:text-lg font-bold" style={{ color: '#343f52' }}>Paras Lokhande</h4>
                                                <p className="text-xs sm:text-sm font-semibold text-purple-600 mb-1">Customer Head | Beta Hub</p>
                                                <a
                                                    href="https://www.linkedin.com/in/paras-lokhande-4121b593/"
                                                    target="_blank"
                                                    rel="noopener noreferrer"
                                                    className="inline-flex items-center text-purple-600 hover:text-purple-800 transition-colors duration-200"
                                                >
                                                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                                                    </svg>
                                                </a>
                                            </div>
                                        </div>
                                    </div>
                                </div>

                                {/* Floating elements */}
                                <div className="absolute -top-4 -right-4 w-20 h-20 bg-gradient-to-br from-purple-400 to-pink-400 rounded-full blur-xl opacity-60"></div>
                                <div className="absolute -bottom-4 -left-4 w-16 h-16 bg-gradient-to-br from-pink-400 to-purple-400 rounded-full blur-xl opacity-60"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Reading Progress */}
            <ReadingProgress color="#3c1470" size="sm" />
        </div>
    );
};

export default GartnerPage;

