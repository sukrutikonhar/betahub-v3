import { Bot, Zap, BookOpen, Code, Settings, BarChart3, ArrowRight, Users, Building, TrendingUp, Shield, X } from 'lucide-react';
import { useState } from 'react';
import DemoForm from '../components/DemoForm';
import SEO from '../components/SEO';
import { getSEOConfig } from '../config/seoConfig';
import ReadingProgress from '../components/ReadingProgress';

export default function AgentsPage() {
  const [selectedCategories, setSelectedCategories] = useState<string[]>([]);
  const [selectedIndustries, setSelectedIndustries] = useState<string[]>([]);
  const [selectedTeams, setSelectedTeams] = useState<string[]>([]);
  const [showDemoForm, setShowDemoForm] = useState(false);
  const seoData = getSEOConfig('/agents');

  const agents = [
    // Process Acceleration Agents
    {
      name: "ProcessFlow AI",
      description: "Turn complex business requirements into streamlined BPMN workflows and actionable insights.",
      industries: ["Manufacturing", "Banking", "Insurance", "Healthcare"],
      teams: ["Business Analysts", "Process Owners", "IT Transformation"],
      tags: ["Requirements Gathering", "BPMN process Flow", "Business Analysis"],
      category: "Process Acceleration",
      icon: <Zap className="w-6 h-6" />,
      color: "purple"
    },
    {
      name: "TestForge AI",
      description: "Accelerate testing cycles with AI-powered test case generation and automation.",
      industries: ["Technology", "Retail", "Financial Services", "Telecom"],
      teams: ["QA", "Product Engineering", "DevOps"],
      tags: ["QA Automation", "Test Management", "Test Case Generation"],
      category: "Process Acceleration",
      icon: <Settings className="w-6 h-6" />,
      color: "purple"
    },
    {
      name: "Fit-Gap AI",
      description: "Identify ERP gaps and align processes to maximize system efficiency.",
      industries: ["Manufacturing", "Distribution", "Retail", "Pharma"],
      teams: ["ERP Implementation", "Consulting", "CIO Office"],
      tags: ["ERP Assessment", "Process Alignment", "Gap Analysis"],
      category: "Process Acceleration",
      icon: <BarChart3 className="w-6 h-6" />,
      color: "purple"
    },
    {
      name: "Config AI",
      description: "Simplify Dynamics 365 setup and automate workflows for faster CRM adoption.",
      industries: ["Professional Services", "Retail", "Financial Services"],
      teams: ["CRM Admins", "Sales Ops", "IT Transformation"],
      tags: ["CRM Setup", "Dynamics 365", "Workflow Automation"],
      category: "Process Acceleration",
      icon: <Building className="w-6 h-6" />,
      color: "purple"
    },
    // Knowledge & Training Agents
    {
      name: "SkillForgeX",
      description: "Transform knowledge into engaging, interactive learning experiences.",
      industries: ["Education", "IT Services", "Consulting", "Healthcare"],
      teams: ["HR", "L&D", "Onboarding", "Training Managers"],
      tags: ["Training Documentation", "Knowledge Transfer", "Interactive Learning"],
      category: "Knowledge & Training",
      icon: <BookOpen className="w-6 h-6" />,
      color: "pink"
    },
    {
      name: "RetrievX",
      description: "Deliver instant, context-aware answers with AI-powered knowledge retrieval.",
      industries: ["Legal", "Healthcare", "Consulting", "Support Services"],
      teams: ["Knowledge Management", "AI Ops", "Research", "IT Support"],
      tags: ["Knowledge Base Search", "Contextual AI", "Information Retrieval"],
      category: "Knowledge & Training",
      icon: <Bot className="w-6 h-6" />,
      color: "pink"
    },
    {
      name: "HelpDeskX",
      description: "Automate ticketing, incident management, and support with AI-driven efficiency.",
      industries: ["SaaS", "Telecom", "Retail", "IT Services"],
      teams: ["IT Helpdesk", "Customer Service", "Support Operations"],
      tags: ["Ticket Management", "Incident Resolution", "Support Automation"],
      category: "Knowledge & Training",
      icon: <Users className="w-6 h-6" />,
      color: "pink"
    },
    // Code & Technical Intelligence Agents
    {
      name: "CodeDocIQ",
      description: "Auto-generate documentation and boost developer productivity instantly.",
      industries: ["Software Development", "IT Services", "Startups"],
      teams: ["Developers", "Engineering", "DevOps", "Documentation Teams"],
      tags: ["Auto Documentation", "Developer Productivity", "Code Analysis"],
      category: "Code & Technical",
      icon: <Code className="w-6 h-6" />,
      color: "blue"
    },
    {
      name: "ResolvIQ",
      description: "Turn data into competitive insights with AI-powered market intelligence.",
      industries: ["Consulting", "Financial Services", "Tech", "Market Research"],
      teams: ["Strategy", "Product Marketing", "Business Analysts"],
      tags: ["Market Intelligence", "Competitive Analysis", "Data Insights"],
      category: "Code & Technical",
      icon: <TrendingUp className="w-6 h-6" />,
      color: "blue"
    },
    {
      name: "FinOptima IQ",
      description: "Optimize cloud spend and track budgets with AI-driven financial intelligence.",
      industries: ["SaaS", "Cloud Providers", "FinTech", "Enterprises"],
      teams: ["Finance", "CloudOps", "IT Infrastructure", "CIO Office"],
      tags: ["Cost Optimization", "Budget Tracking", "Financial Analysis"],
      category: "Code & Technical",
      icon: <Shield className="w-6 h-6" />,
      color: "blue"
    }
  ];

  // Get unique categories, industries, and teams for filters
  const allCategories = Array.from(new Set(agents.map(agent => agent.category)));
  const allIndustries = Array.from(new Set(agents.flatMap(agent => agent.industries)));
  const allTeams = Array.from(new Set(agents.flatMap(agent => agent.teams)));

  // Helper functions for checkbox handling
  const handleCategoryChange = (category: string, checked: boolean) => {
    if (checked) {
      setSelectedCategories([...selectedCategories, category]);
    } else {
      setSelectedCategories(selectedCategories.filter(c => c !== category));
    }
  };

  const handleIndustryChange = (industry: string, checked: boolean) => {
    if (checked) {
      setSelectedIndustries([...selectedIndustries, industry]);
    } else {
      setSelectedIndustries(selectedIndustries.filter(i => i !== industry));
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
    const industryMatch = selectedIndustries.length === 0 || agent.industries.some(industry => selectedIndustries.includes(industry));
    const teamMatch = selectedTeams.length === 0 || agent.teams.some(team => selectedTeams.includes(team));
    return categoryMatch && industryMatch && teamMatch;
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
      <section className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E8CAF7 0%, #F0D7F9 20%, #F8E4FC 40%, #FCF0FF 60%, #FEF8FF 80%, #FFFFFF 100%)' }}>
        <div className="section-container section-padding">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span style={{ color: '#343f52' }}>Discover a suite of</span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #743CAC 0%, #5a2a8a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> real agents</span><br />
              <span style={{ color: '#343f52' }}>delivering</span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #743CAC 0%, #5a2a8a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> real results</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
              Each agent is designed to solve specific business challenges. Explore our catalog, pick the agents that match your needs, and configure them to work the way you do.
            </p>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => {
                  const agentSection = document.getElementById('agent-listing');
                  if (agentSection) {
                    agentSection.scrollIntoView({ behavior: 'smooth' });
                  }
                }}
                className="group text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 hover:opacity-90 cursor-pointer"
                style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}
              >
                <span>Explore Agents</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => setShowDemoForm(true)}
                className="group border-2 text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 hover:opacity-90 cursor-pointer"
                style={{ borderColor: '#3c1470', color: '#3c1470' }}
                onMouseEnter={(e) => { e.currentTarget.style.background = 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)'; e.currentTarget.style.color = 'white'; }}
                onMouseLeave={(e) => { e.currentTarget.style.background = 'transparent'; e.currentTarget.style.color = '#3c1470'; }}
              >
                <span>Book a Demo</span>
                <Bot className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
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

                {/* Industry Filter */}
                <div className="mb-8">
                  <h4 className="text-sm font-medium text-gray-700 mb-4">By Industry</h4>
                  <div className="space-y-2 max-h-64 overflow-y-auto">
                    {allIndustries.map((industry) => (
                      <label key={industry} className="flex items-center cursor-pointer">
                        <input
                          type="checkbox"
                          checked={selectedIndustries.includes(industry)}
                          onChange={(e) => handleIndustryChange(industry, e.target.checked)}
                          className="w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-500"
                        />
                        <span className="ml-3 text-sm text-gray-700">{industry}</span>
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
                {(selectedCategories.length > 0 || selectedIndustries.length > 0 || selectedTeams.length > 0) && (
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedIndustries([]);
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

              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                {filteredAgents.map((agent, index) => (
                  <div key={index} className="group rounded-2xl p-6 hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 cursor-pointer relative overflow-hidden" style={{
                    background: 'linear-gradient(135deg, #1e1e1e 0%, #3c1470 50%, #5a2a8a 100%)',
                    boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)'
                  }}>
                    {/* Agent Header */}
                    <div className="mb-4">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-12 h-12 rounded-xl flex items-center justify-center bg-white/20 text-white">
                          {agent.icon}
                        </div>
                        <div>
                          <h3 className="text-lg font-semibold text-white group-hover:text-pink-400 transition-colors">
                            {agent.name}
                          </h3>
                          <p className="text-sm text-white/70">{agent.category}</p>
                        </div>
                      </div>
                      <p className="text-sm text-white/80 leading-relaxed">
                        {agent.description}
                      </p>
                    </div>

                    {/* Tags */}
                    <div className="mb-6">
                      <div className="flex flex-wrap gap-2">
                        {agent.tags.map((tag, idx) => (
                          <span key={idx} className="px-3 py-1 bg-white/20 text-white text-xs rounded-full hover:bg-white/30 transition-all duration-200">
                            {tag}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                ))}
              </div>

              {/* Book a Demo Button */}
              <div className="flex justify-center mt-12">
                <button
                  onClick={() => setShowDemoForm(true)}
                  className="px-8 py-4 bg-gradient-to-r from-purple-600 to-purple-800 text-white font-bold rounded-2xl hover:from-purple-700 hover:to-purple-900 transition-all duration-300 hover:shadow-xl hover:-translate-y-1"
                >
                  Book a Demo
                </button>
              </div>

              {filteredAgents.length === 0 && (
                <div className="text-center py-12">
                  <p className="text-gray-500 text-lg">No agents found matching your filters.</p>
                  <button
                    onClick={() => {
                      setSelectedCategories([]);
                      setSelectedIndustries([]);
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
            <div className="rounded-3xl p-12 text-center relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}>
              {/* Background decorative elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                <div className="absolute top-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
              </div>

              <div className="relative z-10">
                <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 px-20">
                  Can't find the AI agent template you need?
                </h2>
                <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Beta Hub has pre-built 'General Problem Solvers' that can help any business with routine repetitive tasks. Looking for something more specific? Contact us to build custom agents.
                </p>

                <div className="flex justify-center items-center">
                  <button
                    onClick={() => window.location.href = '/contact'}
                    className="group bg-white text-purple-800 px-10 py-4 rounded-2xl font-semibold hover:bg-gray-100 hover:shadow-2xl transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center cursor-pointer"
                  >
                    <span>Contact Sales</span>
                    <Bot className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
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