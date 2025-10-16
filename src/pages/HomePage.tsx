import { ArrowRight, Bot, Users, Building2, Rocket, Target, Calendar, Check, Wrench, MessageCircle, Headphones, Workflow, TestTube, Search, GraduationCap, Cog, Upload, Database, HelpCircle, FileText, Lightbulb, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay, Navigation, Pagination } from 'swiper/modules';
import 'swiper/swiper-bundle.css';
import DemoForm from '../components/DemoForm';
import SEO from '../components/SEO';
import { getSEOConfig } from '../config/seoConfig';
import ReadingProgress from '../components/ReadingProgress';
import backgroundImage from '../assets/background.png';

export default function HomePage() {
    const [activeCategory, setActiveCategory] = useState('core');
    const [showDemoForm, setShowDemoForm] = useState(false);
    const navigate = useNavigate();

    const agentCategories = {
        core: {
            title: 'Core Implementation Agents',
            icon: Wrench,
            description: 'Enable faster, smarter project delivery and lifecycle automation.',
            agents: [
                {
                    name: 'Flow Agent',
                    link: '/agents/flow-agent',
                    tags: ['Process Flow', 'Blueprint Generator'],
                    icon: Workflow
                },
                {
                    name: 'TestGen Agent',
                    link: '/agents/testgen-agent',
                    tags: ['Automated Test Case', 'Generator'],
                    icon: TestTube
                },
                {
                    name: 'FitCheck Agent',
                    link: '/agents/fitcheck-agent',
                    tags: ['Fit-Gap', 'Readiness Analyzer'],
                    icon: Search
                },
                {
                    name: 'LearnX Agent',
                    link: '/agents/learnx-agent',
                    tags: ['Training', 'Podcast', 'Gamified Learning'],
                    icon: GraduationCap
                },
                {
                    name: 'Configuration Agent',
                    link: '/agents/configuration-agent',
                    tags: ['Auto-Configurator', 'D365', 'Industry CRM'],
                    icon: Cog
                },
                {
                    name: 'Release Agent',
                    link: '/agents/release-agent',
                    tags: ['Automated Release', 'Regression Framework'],
                    icon: Upload
                },
                {
                    name: 'Data Migration Agent',
                    link: '/agents/data-migration-agent',
                    tags: ['Schema Mapping', 'Migration Accelerator'],
                    icon: Database
                }
            ]
        },
        knowledge: {
            title: 'Knowledge & Support Agents',
            icon: MessageCircle,
            description: 'Transform enterprise knowledge into intelligent conversations.',
            agents: [
                {
                    name: 'AnswerX Agent',
                    link: '/agents/answerx-agent',
                    tags: ['Enterprise Q&A', 'Knowledge Search'],
                    icon: Search
                },
                {
                    name: 'HelpDesk Agent',
                    link: '/agents/helpdesk-agent',
                    tags: ['IT Support', 'Customer Support', 'Chatbot'],
                    icon: HelpCircle
                },
                {
                    name: 'DocuCode Agent',
                    link: '/agents/docucode-agent',
                    tags: ['Technical Documentation', 'Code Companion'],
                    icon: FileText
                },
                {
                    name: 'InsightX Agent',
                    link: '/agents/insightx-agent',
                    tags: ['Analytical', 'Insight Generation'],
                    icon: Lightbulb
                }
            ]
        },
        cx: {
            title: 'CX & Experience Agents',
            icon: Headphones,
            description: 'AI-driven customer and employee experience automation.',
            agents: [
                {
                    name: 'CX & Support Bots',
                    link: '/agents/cx-support-bots',
                    tags: ['Custom Chatbots', 'CX', 'Service', 'IT Helpdesks'],
                    icon: MessageSquare
                }
            ]
        }
    };


    const seoData = getSEOConfig('/');

    return (
        <div className="flex flex-col items-center">
            <SEO
                title={seoData.title}
                description={seoData.description}
                keywords={seoData.keywords}
                ogImage={seoData.ogImage}
            />

            {/* Compact Hero Section */}
            <section className="w-full relative overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src={backgroundImage}
                        alt="Background"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/30"></div>
                </div>

                <div className="section-container pt-32 pb-16 relative z-10">
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                        <div className="lg:col-span-8 lg:pt-4">
                            {/* Clean Typography */}
                            <h1 className="mb-8 leading-tight" style={{ textShadow: '0 4px 8px rgba(0,0,0,0.4)' }}>
                                <div className="text-white font-light text-4xl md:text-5xl lg:text-6xl mb-2">
                                    Bridge the Gap between
                                </div>
                                <div className="font-bold text-4xl md:text-5xl lg:text-6xl mb-2">
                                    <span className="text-pink-500">AI Vision</span>
                                    <span className="text-white"> &</span>
                                </div>
                                <div className="text-pink-500 font-bold text-4xl md:text-5xl lg:text-6xl">
                                    Enterprise Execution
                                </div>
                            </h1>

                            <p className="text-xl text-white mb-8 max-w-2xl leading-relaxed" style={{ textShadow: '0 2px 4px rgba(0,0,0,0.3)' }}>
                                With Beta Hub, enterprises get more than just AI Agents - they get trusted expertise to turn AI investments into ROI.
                            </p>

                            {/* Compact CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-4">
                                <button
                                    onClick={() => setShowDemoForm(true)}
                                    className="group relative text-white px-8 py-3 rounded-xl font-semibold hover:shadow-xl transition-all duration-300 cursor-pointer"
                                    style={{ background: 'linear-gradient(128deg, #FE54FA 0%, #5929F2 100%)' }}
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        Book a Demo
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </button>
                                <button
                                    onClick={() => navigate('/agents')}
                                    className="group bg-white/10 backdrop-blur-sm text-white px-8 py-3 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 cursor-pointer border border-white/20"
                                >
                                    <span className="flex items-center justify-center gap-2">
                                        Explore Agents
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                    </span>
                                </button>
                            </div>
                        </div>

                        {/* Agent Spotlight Panel */}
                        <div className="lg:col-span-4 lg:pt-4">
                            <div className="bg-black/80 backdrop-blur-sm rounded-2xl p-8 border border-gray-700/50 shadow-2xl">
                                <div className="space-y-6">
                                    <div className="text-center">
                                        <h3 className="text-2xl font-bold text-white mb-2">Agent Spotlight</h3>
                                        <p className="text-gray-300 text-sm">
                                            Pre-built agents for immediate implementation
                                        </p>
                                    </div>

                                    <div className="space-y-4">
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#DA2CC3] rounded-full shadow-sm"></div>
                                            <span className="text-white text-sm">ProcessFlow AI - Workflow Automation</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#A022CB] rounded-full shadow-sm"></div>
                                            <span className="text-white text-sm">SkillForgeX - Training & Development</span>
                                        </div>
                                        <div className="flex items-center gap-3">
                                            <div className="w-2 h-2 bg-[#7B1BF1] rounded-full shadow-sm"></div>
                                            <span className="text-white text-sm">CodeDocIQ - Technical Documentation</span>
                                        </div>
                                    </div>

                                    <div className="bg-gradient-to-br from-white/10 to-white/5 rounded-lg p-3 border border-white/20 backdrop-blur-sm">
                                        <div className="text-center mb-2">
                                            <span className="text-white text-sm font-medium">See the results in</span>
                                        </div>

                                        {/* Compact Progress Bar */}
                                        <div className="space-y-2">
                                            <div className="flex items-center justify-between">
                                                <span className="font-semibold text-xs text-white">Weeks</span>
                                                <span className="text-white/60 text-xs">Months</span>
                                            </div>

                                            <div className="relative w-full h-2 bg-gradient-to-r from-gray-700/50 to-gray-600/30 rounded-full overflow-hidden shadow-inner">
                                                <div
                                                    className="absolute top-0 left-0 h-2 rounded-full transition-all duration-3000 ease-in-out"
                                                    style={{
                                                        background: 'linear-gradient(135deg, #DC2BC3 0%, #A022CB 50%, #7B1BF1 100%)',
                                                        width: '25%',
                                                        animation: 'timelineReduction 4s ease-in-out infinite',
                                                        boxShadow: '0 0 6px rgba(220, 43, 195, 0.4)'
                                                    }}
                                                ></div>
                                            </div>

                                            <div className="text-center">
                                                <span
                                                    className="text-xs font-medium transition-all duration-300"
                                                    style={{
                                                        color: '#DA2CC3',
                                                        animation: 'resultMessage 4s ease-in-out infinite'
                                                    }}
                                                >
                                                    Weeks not Months! ⚡
                                                </span>
                                            </div>
                                        </div>

                                        <style>{`
                                            @keyframes timelineReduction {
                                                0% { 
                                                    width: 100%; 
                                                    left: 0%;
                                                }
                                                70% { 
                                                    width: 25%; 
                                                    left: 0%;
                                                }
                                                100% { 
                                                    width: 25%; 
                                                    left: 0%;
                                                }
                                            }
                                            
                                            @keyframes resultMessage {
                                                0% { 
                                                    opacity: 0.8;
                                                    transform: scale(1);
                                                }
                                                70% { 
                                                    opacity: 1;
                                                    transform: scale(1.05);
                                                }
                                                100% { 
                                                    opacity: 1;
                                                    transform: scale(1.05);
                                                }
                                            }
                                        `}</style>
                                    </div>

                                    <button
                                        onClick={() => navigate('/agents')}
                                        className="w-full text-white px-6 py-3 rounded-xl font-semibold shadow-lg hover:shadow-xl transition-all duration-300 cursor-pointer flex items-center justify-center gap-2"
                                        style={{ background: 'linear-gradient(135deg, #DA2CC3 0%, #A022CB 50%, #7B1BF1 100%)' }}
                                    >
                                        <Bot className="w-5 h-5" />
                                        Try Now
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>


            {/* Client Logos Section */}
            <section className="w-full bg-white relative overflow-hidden">
                {/* Glowing Bubbles Background */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 left-10 w-32 h-32 bg-purple-200/30 rounded-full blur-2xl animate-pulse"></div>
                    <div className="absolute top-20 right-20 w-40 h-40 bg-pink-200/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1s' }}></div>
                    <div className="absolute bottom-10 left-1/4 w-28 h-28 bg-blue-200/30 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '2s' }}></div>
                    <div className="absolute bottom-20 right-1/3 w-36 h-36 bg-purple-300/20 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '0.5s' }}></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-pink-300/25 rounded-full blur-2xl animate-pulse" style={{ animationDelay: '1.5s' }}></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center">
                        <div className="flex items-center justify-center mb-8">
                            <div className="flex-1 h-px bg-gradient-to-r from-transparent via-purple-300 to-purple-500"></div>
                            <div className="px-6">
                                <span className="text-purple-800 text-sm font-semibold uppercase tracking-wider">Trusted by Industry Leaders</span>
                            </div>
                            <div className="flex-1 h-px bg-gradient-to-l from-transparent via-purple-300 to-purple-500"></div>
                        </div>

                        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 px-20">
                            {[
                                { name: 'Acumant', logo: '/brands/Logos-01.webp' },
                                { name: 'Orkla', logo: '/brands/Logos-02.webp' },
                                { name: 'BPW', logo: '/brands/Logos-03.webp' },
                                { name: 'Molslinjen', logo: '/brands/Logos-05.webp' }
                            ].map((company) => (
                                <div key={company.name} className="group">
                                    <div className="h-16 flex items-center justify-center">
                                        <img
                                            src={company.logo}
                                            alt={company.name}
                                            className="w-full h-full object-contain scale-125"
                                        />
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Problem Statement Section */}
            <section className="w-full bg-white relative overflow-hidden">
                <div className="section-container section-padding">
                    <div className="grid grid-cols-1 lg:grid-cols-9 gap-16 items-center mb-32 max-w-6xl mx-auto">
                        {/* Left Side - Title and Content (4 columns) */}
                        <div className="lg:col-span-4">
                            <div className="max-w-2xl pr-8 lg:pr-12">
                                <h2 className="text-4xl lg:text-5xl font-bold mb-8 leading-tight" style={{ color: '#343f52' }}>
                                    Solving the AI Value Gap
                                </h2>

                                <p className="text-xl mb-8 leading-relaxed" style={{ color: '#60697b' }}>
                                    Enterprises know AI has potential, but they struggle to move from ideas to impact. Most tools don't integrate, don't adapt, and don't scale.
                                </p>

                                <div className="relative mb-8">
                                    <p className="text-2xl font-bold bg-gradient-to-r from-core-purple to-bright-pink bg-clip-text text-transparent">
                                        Beta Hub was built to solve this.
                                    </p>
                                </div>

                                {/* <div className="flex flex-col sm:flex-row gap-4">
                                    <button className="btn-primary bg-gradient-to-r from-core-purple to-bright-pink hover:from-core-purple/90 hover:to-bright-pink/90 shadow-lg hover:shadow-xl transition-all duration-300">
                                        Learn More
                                    </button>
                                    <button className="btn-secondary border-2 border-gray-300 text-gray-700 hover:border-core-purple hover:text-core-purple hover:bg-core-purple/5 transition-all duration-300">
                                        View Solutions
                                    </button>
                                </div> */}
                            </div>
                        </div>

                        {/* Right Side - Feature Cards (5 columns) */}
                        <div className="lg:col-span-5 space-y-6 pl-8 lg:pl-12">
                            {/* Feature 1 */}
                            <div className="group p-6 rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Building2 className="w-7 h-7 text-bright-pink" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-normal text-dark-gray leading-tight group-hover:text-bright-pink transition-colors">
                                            Proven expertise in enterprise transformation
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 2 */}
                            <div className="group p-6 rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-pink-100 rounded-full flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Rocket className="w-7 h-7 text-bright-pink" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-normal text-dark-gray pe-12 leading-tight group-hover:text-bright-pink transition-colors">
                                            Trusted agents that deliver quick wins
                                        </p>
                                    </div>
                                </div>
                            </div>

                            {/* Feature 3 */}
                            <div className="group p-6 rounded-3xl bg-white transition-all duration-300 hover:-translate-y-1" style={{ boxShadow: 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px' }} onMouseEnter={(e) => e.currentTarget.style.boxShadow = 'rgba(0, 0, 0, 0.35) 0px 5px 15px'} onMouseLeave={(e) => e.currentTarget.style.boxShadow = 'rgba(99, 99, 99, 0.2) 0px 2px 8px 0px'}>
                                <div className="flex items-center gap-4">
                                    <div className="w-14 h-14 bg-pink-100 rounded-xl flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
                                        <Target className="w-7 h-7 text-bright-pink" />
                                    </div>
                                    <div>
                                        <p className="text-xl font-normal text-dark-gray leading-tight group-hover:text-bright-pink transition-colors">
                                            Scalable solutions designed for long-term growth
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Compact Approach Section */}
                    <div className="rounded-2xl p-12 shadow-xl border border-white/20 relative overflow-hidden mt-16 bg-gradient-to-br from-slate-900 via-purple-900 to-indigo-900">
                        {/* Minimal Background Elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-500/20 to-purple-500/20 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-500/15 to-cyan-500/15 rounded-full blur-2xl"></div>
                        </div>

                        <div className="relative z-10">
                            <div className="text-center mb-16">
                                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                                    One Partner. Complete Transformation.
                                </h2>
                                <p className="text-lg text-white/90 max-w-4xl mx-auto leading-relaxed">
                                    Unlike point solutions, Beta Hub combines AI products for speed with services for fit
                                </p>
                            </div>

                            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
                                {/* Products Card with Vector Background */}
                                <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20 overflow-hidden">
                                    {/* Vector Background Elements */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        {/* Geometric Shapes */}
                                        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                                        <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                                        <div className="absolute top-1/2 right-8 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full group-hover:scale-125 transition-transform duration-700"></div>

                                        {/* Abstract Lines */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent group-hover:opacity-60 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-transparent via-purple-400/30 to-transparent group-hover:opacity-60 transition-opacity duration-500"></div>

                                        {/* Floating Dots */}
                                        <div className="absolute top-8 left-8 w-2 h-2 bg-pink-400/40 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                                        <div className="absolute bottom-12 right-12 w-3 h-3 bg-purple-400/30 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                                    </div>

                                    <div className="relative z-10 text-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                                            <Bot className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                                            Ready-to-use Agents
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Seamlessly deployable AI agents that deliver value across all verticals
                                        </p>
                                    </div>
                                </div>

                                {/* Services Card with Vector Background */}
                                <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20 overflow-hidden">
                                    {/* Vector Background Elements */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        {/* Geometric Shapes */}
                                        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                                        <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                                        <div className="absolute top-1/2 right-8 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full group-hover:scale-125 transition-transform duration-700"></div>

                                        {/* Abstract Lines */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent group-hover:opacity-60 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-transparent via-purple-400/30 to-transparent group-hover:opacity-60 transition-opacity duration-500"></div>

                                        {/* Floating Dots */}
                                        <div className="absolute top-8 left-8 w-2 h-2 bg-pink-400/40 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                                        <div className="absolute bottom-12 right-12 w-3 h-3 bg-purple-400/30 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                                    </div>

                                    <div className="relative z-10 text-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                                            <Users className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                                            Expertise
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Strategy, advisory, and tailored integration to embed AI into your workflows.
                                        </p>
                                    </div>
                                </div>

                                {/* Outcomes Card with Vector Background */}
                                <div className="group relative bg-white/95 backdrop-blur-sm rounded-2xl p-8 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border border-white/20 overflow-hidden">
                                    {/* Vector Background Elements */}
                                    <div className="absolute inset-0 overflow-hidden">
                                        {/* Geometric Shapes */}
                                        <div className="absolute top-4 right-4 w-16 h-16 bg-gradient-to-br from-pink-500/10 to-purple-600/10 rounded-lg rotate-45 group-hover:rotate-90 transition-transform duration-500"></div>
                                        <div className="absolute bottom-6 left-6 w-12 h-12 bg-gradient-to-br from-purple-500/15 to-pink-500/15 rounded-full group-hover:scale-110 transition-transform duration-500"></div>
                                        <div className="absolute top-1/2 right-8 w-8 h-8 bg-gradient-to-br from-pink-400/20 to-purple-500/20 rounded-full group-hover:scale-125 transition-transform duration-700"></div>

                                        {/* Abstract Lines */}
                                        <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-pink-400/30 to-transparent group-hover:opacity-60 transition-opacity duration-500"></div>
                                        <div className="absolute bottom-0 right-0 w-1 h-full bg-gradient-to-t from-transparent via-purple-400/30 to-transparent group-hover:opacity-60 transition-opacity duration-500"></div>

                                        {/* Floating Dots */}
                                        <div className="absolute top-8 left-8 w-2 h-2 bg-pink-400/40 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
                                        <div className="absolute bottom-12 right-12 w-3 h-3 bg-purple-400/30 rounded-full group-hover:scale-150 transition-transform duration-700"></div>
                                    </div>

                                    <div className="relative z-10 text-center">
                                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-6 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                                            <Target className="w-8 h-8 text-white" />
                                        </div>
                                        <h3 className="text-xl font-bold mb-4 text-gray-900 group-hover:text-purple-700 transition-colors duration-300">
                                            Outcomes
                                        </h3>
                                        <p className="text-gray-600 leading-relaxed">
                                            Faster time to value, measurable ROI, and a foundation for scaling enterprise AI.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </section>


            {/* Meet the Agents */}
            <section className="w-full relative overflow-hidden bg-gradient-to-br from-white to-slate-50">
                {/* Minimal Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/15 to-cyan-200/15 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container py-16 relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6 text-gray-900">
                            Meet Your AI Workforce
                        </h2>
                        <p className="text-lg max-w-3xl mx-auto text-gray-600 leading-relaxed">
                            Specialized AI agents designed to seamlessly integrate into your enterprise workflows and drive unparalleled efficiency.
                        </p>
                    </div>

                    {/* Category Buttons */}
                    <div className="flex flex-col sm:flex-row gap-4 justify-center mb-16">
                        {Object.entries(agentCategories).map(([key, category]) => {
                            const isActive = activeCategory === key;
                            return (
                                <button
                                    key={key}
                                    onClick={() => setActiveCategory(key)}
                                    className={`group relative px-6 py-3 rounded-xl font-semibold text-base transition-all duration-300 ${isActive
                                        ? 'text-white shadow-lg'
                                        : 'text-gray-700 bg-white border border-gray-200 hover:border-purple-300 hover:text-purple-600 hover:shadow-md'
                                        }`}
                                    style={isActive ? {
                                        background: 'linear-gradient(128deg, #FE54FA 0%, #5929F2 100%)'
                                    } : {}}
                                >
                                    {category.title}
                                </button>
                            );
                        })}
                    </div>

                    {/* Active Category Content */}
                    <div className="">
                        {activeCategory === 'core' ? (
                            /* Core Agents Carousel */
                            <div className="relative px-16">
                                <Swiper
                                    modules={[Autoplay, Navigation, Pagination]}
                                    spaceBetween={24}
                                    slidesPerView={1}
                                    autoplay={{
                                        delay: 3000,
                                        disableOnInteraction: false,
                                        pauseOnMouseEnter: true,
                                    }}
                                    navigation={{
                                        nextEl: '.swiper-button-next-core',
                                        prevEl: '.swiper-button-prev-core',
                                    }}
                                    pagination={{
                                        clickable: true,
                                        el: '.swiper-pagination-core',
                                    }}
                                    breakpoints={{
                                        640: {
                                            slidesPerView: 2,
                                            spaceBetween: 20,
                                        },
                                        1024: {
                                            slidesPerView: 3,
                                            spaceBetween: 24,
                                        },
                                        1280: {
                                            slidesPerView: 4,
                                            spaceBetween: 24,
                                        },
                                    }}
                                    className="pb-12"
                                >
                                    {agentCategories.core.agents.map((agent) => (
                                        <SwiperSlide key={agent.name}>
                                            <div className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-80 w-full border border-gray-100">
                                                {/* Icon */}
                                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                                                    {(() => {
                                                        const IconComponent = agent.icon;
                                                        return <IconComponent className="w-8 h-8 text-white" />;
                                                    })()}
                                                </div>

                                                {/* Title */}
                                                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-700 transition-colors duration-300">
                                                    {agent.name}
                                                </h4>

                                                {/* Feature Tags */}
                                                <div className="space-y-3 flex-grow">
                                                    {agent.tags.map((tag) => (
                                                        <div key={tag} className="flex items-center group/item">
                                                            <div className="w-5 h-5 bg-purple-300 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-purple-400 transition-all duration-300 shadow-sm">
                                                                <Check className="w-3 h-3 text-white" />
                                                            </div>
                                                            <span className="text-gray-600 text-sm font-medium group-hover/item:text-purple-600 transition-colors duration-200">
                                                                {tag}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    ))}
                                </Swiper>

                                {/* Navigation Buttons */}
                                <div className="swiper-button-prev-core absolute left-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                                    <ArrowRight className="w-6 h-6 text-gray-600 rotate-180" />
                                </div>
                                <div className="swiper-button-next-core absolute right-0 top-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:bg-gray-50 transition-colors duration-200">
                                    <ArrowRight className="w-6 h-6 text-gray-600" />
                                </div>

                                {/* Pagination */}
                                <div className="swiper-pagination-core flex justify-center mt-8"></div>
                            </div>
                        ) : (
                            /* Other Categories Grid */
                            <div className="flex justify-center">
                                <div className={`grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 max-w-7xl ${agentCategories[activeCategory as keyof typeof agentCategories].agents.length === 3
                                    ? 'lg:grid-cols-3 lg:justify-center'
                                    : ''
                                    }`}>
                                    {agentCategories[activeCategory as keyof typeof agentCategories].agents.map((agent) => {
                                        return (
                                            <div
                                                key={agent.name}
                                                className="group bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300 hover:-translate-y-1 flex flex-col h-80 w-full border border-gray-100"
                                            >
                                                {/* Icon */}
                                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 to-purple-600 rounded-xl flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300 shadow-lg">
                                                    {(() => {
                                                        const IconComponent = agent.icon;
                                                        return <IconComponent className="w-8 h-8 text-white" />;
                                                    })()}
                                                </div>

                                                {/* Title */}
                                                <h4 className="text-xl font-bold text-gray-900 mb-4 text-center group-hover:text-purple-700 transition-colors duration-300">
                                                    {agent.name}
                                                </h4>

                                                {/* Feature Tags */}
                                                <div className="space-y-3 flex-grow">
                                                    {agent.tags.map((tag) => (
                                                        <div key={tag} className="flex items-center group/item">
                                                            <div className="w-5 h-5 bg-purple-300 rounded-full flex items-center justify-center mr-3 flex-shrink-0 group-hover/item:scale-110 group-hover/item:bg-purple-400 transition-all duration-300 shadow-sm">
                                                                <Check className="w-3 h-3 text-white" />
                                                            </div>
                                                            <span className="text-gray-600 text-sm font-medium group-hover/item:text-purple-600 transition-colors duration-200">
                                                                {tag}
                                                            </span>
                                                        </div>
                                                    ))}
                                                </div>

                                            </div>
                                        );
                                    })}
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Sleek CTA Section */}
                    <div className="text-center pt-20">
                        <div className="relative inline-block group">
                            {/* Glow Effect */}
                            <div className="absolute inset-0 bg-gradient-to-r from-purple-500/40 to-pink-500/40 rounded-2xl blur-xl opacity-0 group-hover:opacity-100 transition-opacity duration-500 scale-110"></div>

                            {/* Main Button */}
                            <button
                                onClick={() => setShowDemoForm(true)}
                                className="relative text-white px-10 py-4 rounded-2xl font-semibold text-lg hover:shadow-2xl transition-all duration-300 shadow-lg hover:scale-105 cursor-pointer overflow-hidden"
                                style={{
                                    background: 'linear-gradient(128deg, #FE54FA 0%, #5929F2 100%)',
                                    boxShadow: '0 10px 30px rgba(254, 84, 250, 0.25)'
                                }}
                            >
                                {/* Shimmer Effect */}
                                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000"></div>

                                <span className="relative z-10 flex items-center gap-2">
                                    Book a Demo
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-300" />
                                </span>
                            </button>
                        </div>

                        <p className="text-gray-500 text-base mt-6 max-w-2xl mx-auto leading-relaxed">
                            Ready to transform your enterprise with AI? Schedule a personalized demo and see how our agents can accelerate your business.
                        </p>
                    </div>
                </div>
            </section>

            {/* Upcoming Events */}
            <section className="w-full relative overflow-hidden">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-10 w-64 h-64 bg-core-purple/10 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-10 left-10 w-80 h-80 bg-bright-pink/10 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-strong-blue/5 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343f52' }}>Upcoming Events</h2>
                        <p className="text-xl max-w-3xl mx-auto" style={{ color: '#60697b' }}>
                            Join us at industry-leading events and discover how AI agents are transforming enterprise operations.
                        </p>
                    </div>

                    <div className="flex justify-center">
                        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 max-w-4xl">
                            {/* Microsoft Event */}
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                {/* Event Image */}
                                <div className="relative h-48 overflow-hidden" style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>

                                <div className="p-6">
                                    <div className="text-center mb-4">
                                        <h3 className="text-xl font-bold group-hover:text-core-purple transition-colors mb-2" style={{ color: '#343f52' }}>
                                            Reimagine Dynamics Implementations
                                        </h3>
                                    </div>

                                    <div className="flex flex-col items-center gap-3 mb-6">
                                        <div className="flex items-center gap-2" style={{ color: '#60697b' }}>
                                            <Building2 className="w-4 h-4" />
                                            <span className="text-sm font-medium">Microsoft HQ, Stockholm</span>
                                        </div>
                                        <div className="flex items-center gap-2" style={{ color: '#60697b' }}>
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">Oct 30, 2025</span>
                                        </div>
                                    </div>

                                    <a
                                        href="https://www.acumant.com/events/microsoft-x-acumant-ai-powered-dynamics-365-event/"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mx-auto text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:opacity-90 cursor-pointer"
                                        style={{ background: 'linear-gradient(128deg, #FE54FA 0%, #5929F2 100%)' }}
                                    >
                                        Learn More
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>

                            {/* Gartner Event */}
                            <div className="group bg-white rounded-3xl overflow-hidden shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 border border-gray-100">
                                {/* Event Image */}
                                <div className="relative h-48 overflow-hidden" style={{
                                    backgroundImage: 'url("https://images.unsplash.com/photo-1539037116277-4db20889f2d4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80")',
                                    backgroundSize: 'cover',
                                    backgroundPosition: 'center'
                                }}>
                                    <div className="absolute inset-0 bg-black/20"></div>
                                </div>

                                <div className="p-6">
                                    <div className="text-center mb-4">
                                        <h3 className="text-xl font-bold group-hover:text-core-purple transition-colors mb-2" style={{ color: '#343f52' }}>
                                            Gartner<br />IT Symposium
                                        </h3>
                                    </div>

                                    <div className="flex flex-col items-center gap-3 mb-6">
                                        <div className="flex items-center gap-2" style={{ color: '#60697b' }}>
                                            <Building2 className="w-4 h-4" />
                                            <span className="text-sm font-medium">Barcelona</span>
                                        </div>
                                        <div className="flex items-center gap-2" style={{ color: '#60697b' }}>
                                            <Calendar className="w-4 h-4" />
                                            <span className="text-sm">Nov 10-13, 2025</span>
                                        </div>
                                    </div>

                                    <a
                                        href="/gartner-2025"
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="mx-auto text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:opacity-90 cursor-pointer"
                                        style={{ background: 'linear-gradient(128deg, #FE54FA 0%, #5929F2 100%)' }}
                                    >
                                        Learn More
                                        <ArrowRight className="w-5 h-5" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section >

            {/* Sleek CTA */}
            <section className="w-full relative overflow-hidden bg-gradient-to-br from-slate-50 to-white">
                {/* Minimal Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-64 h-64 bg-gradient-to-br from-purple-200/20 to-pink-200/20 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-gradient-to-br from-blue-200/15 to-cyan-200/15 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container py-16 relative z-10">
                    {/* Sleek CTA Block */}
                    <div className="rounded-2xl p-10 relative overflow-hidden shadow-xl max-w-4xl mx-auto bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900 border border-white/10">
                        {/* Minimal Background Elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-500/15 to-purple-500/15 rounded-full blur-2xl"></div>
                            <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
                        </div>

                        <div className="relative z-10 text-center">
                            {/* Minimal Icon */}
                            <div className="flex justify-center mb-6">
                                <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center shadow-lg">
                                    <Bot className="w-8 h-8 text-white" />
                                </div>
                            </div>

                            {/* Minimal Heading */}
                            <h3 className="text-3xl lg:text-4xl font-bold text-white mb-4 leading-tight">
                                Let's get you started
                            </h3>

                            {/* Minimal Paragraph */}
                            <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                                Empower your enterprise with AI agents engineered for precision, scale, and impact.
                            </p>

                            {/* Minimal Button */}
                            <div className="flex justify-center">
                                <button
                                    onClick={() => navigate('/contact')}
                                    className="group bg-white text-gray-900 px-8 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center gap-2 cursor-pointer"
                                >
                                    <Users className="w-4 h-4 group-hover:scale-110 transition-transform duration-300" />
                                    Talk to Us
                                    <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                </button>
                            </div>

                            {/* <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-white/80">
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                    <span className="font-medium">No Setup Fees</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                    <span className="font-medium">30-Day Free Trial</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <CheckCircle className="w-5 h-5 text-white" />
                                    <span className="font-medium">24/7 Support</span>
                                </div>
                            </div> */}
                        </div>
                    </div>
                </div>
            </section >

            {/* Demo Form Popup */}
            <DemoForm isOpen={showDemoForm} onClose={() => setShowDemoForm(false)} />

            {/* Reading Progress */}
            <ReadingProgress color="#3c1470" size="sm" />
        </div >
    );
}
