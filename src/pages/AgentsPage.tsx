import { Bot, ArrowRight, X, Workflow, TestTube, Search, GraduationCap, Cog, Upload, Database, HelpCircle, FileText, Lightbulb, MessageSquare } from 'lucide-react';
import { useState } from 'react';
import DemoForm from '../components/DemoForm';
import SEO from '../components/SEO';
import { getSEOConfig } from '../config/seoConfig';
import ReadingProgress from '../components/ReadingProgress';
import agentBgImage from '../assets/banner/agent-bg-2.webp';
import commonBgImage from '../assets/banner/comon-bg.webp';

export default function AgentsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const seoData = getSEOConfig('/agents');

  const agents = [
    // Core Implementation Agents
    {
      name: "Flow Agent",
      description: "Automate complex business processes with intelligent workflow design and optimization.",
      industries: ["Manufacturing", "Banking", "Insurance", "Healthcare", "Professional Services"],
      teams: ["Business Analysts", "Process Owners", "IT Transformation", "Operations"],
      tags: ["Process Flow", "Blueprint Generator"],
      category: "Core Implementation",
      icon: <Workflow className="w-6 h-6" />,
      color: "purple"
    },
    {
      name: "TestGen Agent",
      description: "Generate comprehensive test cases automatically and accelerate your testing cycles.",
      industries: ["Technology", "Retail", "Financial Services", "Telecom", "SaaS"],
      teams: ["QA", "Product Engineering", "DevOps", "Testing Teams"],
      tags: ["Automated Test Case", "Generator"],
      category: "Core Implementation",
      icon: <TestTube className="w-6 h-6" />,
      color: "purple"
    },
    {
      name: "FitCheck Agent",
      description: "Analyze system readiness and identify gaps for seamless enterprise implementations.",
      industries: ["Manufacturing", "Distribution", "Retail", "Pharma", "Financial Services"],
      teams: ["ERP Implementation", "Consulting", "CIO Office", "IT Strategy"],
      tags: ["Fit-Gap", "Readiness Analyzer"],
      category: "Core Implementation",
      icon: <Search className="w-6 h-6" />,
      color: "purple"
    },
    {
      name: "LearnX Agent",
      description: "Create engaging learning experiences with gamified training and podcast content.",
      industries: ["Education", "IT Services", "Consulting", "Healthcare", "Corporate Training"],
      teams: ["HR", "L&D", "Onboarding", "Training Managers", "Content Teams"],
      tags: ["Training", "Podcast", "Gamified Learning"],
      category: "Core Implementation",
      icon: <GraduationCap className="w-6 h-6" />,
      color: "purple"
    },
    {
      name: "Configuration Agent",
      description: "Automate system configuration for D365 and industry-specific CRM solutions.",
      industries: ["Professional Services", "Retail", "Financial Services", "Healthcare", "Manufacturing"],
      teams: ["CRM Admins", "Sales Ops", "IT Transformation", "System Administrators"],
      tags: ["Auto-Configurator", "D365", "Industry CRM"],
      category: "Core Implementation",
      icon: <Cog className="w-6 h-6" />,
      color: "purple"
    },
    {
      name: "Release Agent",
      description: "Streamline deployment processes with automated release management and regression testing.",
      industries: ["Technology", "SaaS", "Financial Services", "Healthcare", "E-commerce"],
      teams: ["DevOps", "Release Management", "QA", "Engineering"],
      tags: ["Automated Release", "Regression Framework"],
      category: "Core Implementation",
      icon: <Upload className="w-6 h-6" />,
      color: "purple"
    },
    {
      name: "Data Migration Agent",
      description: "Seamlessly migrate data between systems with intelligent schema mapping and validation.",
      industries: ["Technology", "Financial Services", "Healthcare", "Manufacturing", "Retail"],
      teams: ["Data Engineering", "IT Infrastructure", "Database Administrators", "Migration Teams"],
      tags: ["Schema Mapping", "Migration Accelerator"],
      category: "Core Implementation",
      icon: <Database className="w-6 h-6" />,
      color: "purple"
    },
    // Knowledge & Support Agents
    {
      name: "AnswerX Agent",
      description: "Provide instant, accurate answers from your enterprise knowledge base with AI-powered search.",
      industries: ["Legal", "Healthcare", "Consulting", "Support Services", "Financial Services"],
      teams: ["Knowledge Management", "AI Ops", "Research", "IT Support", "Customer Service"],
      tags: ["Enterprise Q&A", "Knowledge Search"],
      category: "Knowledge & Support",
      icon: <Search className="w-6 h-6" />,
      color: "pink"
    },
    {
      name: "HelpDesk Agent",
      description: "Automate IT support and customer service with intelligent ticketing and resolution systems.",
      industries: ["SaaS", "Telecom", "Retail", "IT Services", "Healthcare"],
      teams: ["IT Helpdesk", "Customer Service", "Support Operations", "Technical Support"],
      tags: ["IT Support", "Customer Support", "Chatbot"],
      category: "Knowledge & Support",
      icon: <HelpCircle className="w-6 h-6" />,
      color: "pink"
    },
    {
      name: "DocuCode Agent",
      description: "Generate comprehensive technical documentation and provide intelligent code assistance.",
      industries: ["Software Development", "IT Services", "Startups", "Technology", "Consulting"],
      teams: ["Developers", "Engineering", "DevOps", "Documentation Teams", "Technical Writers"],
      tags: ["Technical Documentation", "Code Companion"],
      category: "Knowledge & Support",
      icon: <FileText className="w-6 h-6" />,
      color: "pink"
    },
    {
      name: "InsightX Agent",
      description: "Transform data into actionable business insights with advanced analytics and reporting.",
      industries: ["Consulting", "Financial Services", "Tech", "Market Research", "Healthcare"],
      teams: ["Strategy", "Product Marketing", "Business Analysts", "Data Science", "Research"],
      tags: ["Analytical", "Insight Generation"],
      category: "Knowledge & Support",
      icon: <Lightbulb className="w-6 h-6" />,
      color: "pink"
    },
    // CX & Experience Agents
    {
      name: "CX & Support Bots",
      description: "Create custom chatbots and support solutions tailored to your customer experience needs.",
      industries: ["E-commerce", "Retail", "Financial Services", "Healthcare", "SaaS"],
      teams: ["Customer Experience", "Marketing", "Support Operations", "Product Teams"],
      tags: ["Custom Chatbots", "CX", "Service", "IT Helpdesks"],
      category: "CX & Experience",
      icon: <MessageSquare className="w-6 h-6" />,
      color: "blue"
    }
  ];

  // Get unique categories, industries, and teams for filters
  const allCategories = Array.from(new Set(agents.map(agent => agent.category)));
  const allTeams = Array.from(new Set(agents.flatMap(agent => agent.teams)));

  // Helper functions for checkbox handling
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };


  const handleTeamChange = (team: string, checked: boolean) => {
    if (checked) {
      setSelectedTeams([...selectedTeams, team]);
    } else {
      setSelectedTeams(selectedTeams.filter(t => t !== team));
    }
  };

  // Filter agents based on selected filters
  const filteredAgents = agents.filter(agent => {
    const categoryMatch = selectedCategories.length === 0 || selectedCategories.includes(agent.category);
    const teamMatch = selectedTeams.length === 0 || agent.teams.some(team => selectedTeams.includes(team));
    return categoryMatch && teamMatch;
  });

  return (
    <div className="min-h-screen bg-white">
      <SEO
        title={seoData.title}
        description={seoData.description}
        keywords={seoData.keywords}
        ogImage={seoData.ogImage}
      />
      {/* Hero Section */}
      <section className="w-full relative overflow-hidden" style={{ backgroundImage: `url(${commonBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
        <div className="section-container section-padding">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span style={{ color: '#343f52' }}>Discover a suite of</span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #743CAC 0%, #5a2a8a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> real agents</span><br />
              <span style={{ color: '#343f52' }}>delivering</span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #743CAC 0%, #5a2a8a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> real results</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-800 mb-12 max-w-5xl mx-auto leading-relaxed">
              Each agent is designed to solve specific business challenges. Explore our catalog, pick the agents that match your needs, and configure them to work the way you do.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => setShowDemoForm(true)}
                className="group relative px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 cursor-pointer border-2 border-purple-600 hover:border-purple-700"
              >
                <span className="text-purple-600 group-hover:text-purple-700 transition-colors duration-300">Book a Demo</span>
                <Bot className="w-5 h-5 text-purple-600 group-hover:text-purple-700 group-hover:scale-110 transition-all duration-300" />
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content with Sidebar */}
      <section id="agent-listing" className="w-full bg-white">
        <div className="section-container section-padding">
          <div className="flex gap-8">
            {/* Left Sidebar - Filters */}
            <div className="w-80 flex-shrink-0">
              <div className="sticky top-8">
                <h3 className="text-lg font-semibold text-gray-900 mb-6">Filter</h3>

                {/* Category Filter */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-700 mb-4">By Category</h4>
                  <div className="space-y-2">
                    {allCategories.map((category) => (
                      <label key={category} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedCategories.includes(category)}
                          onChange={(e) => handleCategoryChange(category, e.target.checked)}
                          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{category}</span>
                      </label>
                    ))}
                  </div>
                </div>


                {/* Team Filter */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-700 mb-4">By Teams</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {allTeams.map((team) => (
                      <label key={team} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedTeams.includes(team)}
                          onChange={(e) => handleTeamChange(team, e.target.checked)}
                          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{team}</span>
                      </label>
                    ))}
                  </div>
                </div>

                {/* Clear Filters */}
                {(selectedCategories.length > 0 || selectedTeams.length > 0) && (
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedTeams([]);
                    }}
                    className="flex items-center gap-2 px-4 py-2 text-sm text-gray-600 hover:text-gray-800 transition-colors border border-gray-300 rounded-lg hover:bg-gray-50 cursor-pointer"
                  >
                    <X className="w-4 h-4" />
                    Clear Filters
                  </button>
                )}
              </div>
            </div>

            {/* Right Content - Agents Grid */}
            <div className="flex-1">
              <div className="flex justify-between items-center mb-6">
                <h2 className="text-2xl font-bold text-gray-900">Agent Templates</h2>
                <div className="text-sm text-gray-500">
                  {filteredAgents.length} agent{filteredAgents.length !== 1 ? 's' : ''} found
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {filteredAgents.map((agent, index) => (
                  <div key={index} className="group rounded-2xl overflow-hidden hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative">
                    {/* Background Image */}
                    <div className="absolute inset-0 bg-cover bg-center opacity-100" style={{ backgroundImage: `url(${agentBgImage})` }}></div>

                    {/* Full card shimmer effect on hover */}
                    <div className="absolute inset-0 overflow-hidden opacity-0 group-hover:opacity-100 transition-opacity duration-700 pointer-events-none z-30">
                      <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/8 to-transparent -translate-x-full -translate-y-full group-hover:translate-x-full group-hover:translate-y-full transition-transform duration-2500 ease-in-out"></div>
                    </div>

                    {/* Content Section */}
                    <div className="p-6 relative z-10">
                      {/* Agent Header */}
                      <div className="flex flex-col items-start mb-3">
                        <div className="w-14 h-14 rounded-xl flex items-center justify-center bg-white/20 text-white mb-3 group-hover:scale-110 transition-transform duration-300">
                          {agent.icon}
                        </div>
                        <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
                          {agent.name}
                        </h3>
                        <p className="text-sm text-white/70 mb-2">{agent.category}</p>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed mb-3">
                        {agent.description}
                      </p>

                      {/* Tags */}
                      <div className="flex flex-col gap-2 items-start">
                        {agent.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/20 text-white text-xs rounded-full hover:bg-white/30 transition-all duration-200 inline-block">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {filteredAgents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No agents found matching your filters.</p>
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedTeams([]);
                    }}
                    className="mt-4 text-purple-600 hover:text-purple-700 font-medium"
                  >
                    Clear all filters
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full relative overflow-hidden bg-white">
        <div className="section-container section-padding">
          <div className="max-w-5xl mx-auto">
            <div className="rounded-3xl p-12 text-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute top-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 px-20">
                  Can't find the agent you need?
                </h2>
                <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  We can help you build the perfect agent for your needs.
                </p>

                <div className="flex justify-center items-center">
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="group bg-white text-gray-900 px-10 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center cursor-pointer hover:bg-gray-50"
                  >
                    <span>Contact Sales</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Demo Form Popup */}
      <DemoForm isOpen={showDemoForm} onClose={() => setShowDemoForm(false)} />

      {/* Reading Progress */}
      <ReadingProgress color="#3c1470" size="sm" />
    </div>
  );
}