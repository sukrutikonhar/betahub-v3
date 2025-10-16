import { ArrowRight, Bot, Target, TrendingUp, Linkedin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';
import { useState } from 'react';
import DemoForm from '../components/DemoForm';
import SEO from '../components/SEO';
import { getSEOConfig } from '../config/seoConfig';
import ReadingProgress from '../components/ReadingProgress';

export default function AboutPage() {
  const navigate = useNavigate();
  const [showDemoForm, setShowDemoForm] = useState(false);
  const seoData = getSEOConfig('/about');
  const teamMembers = [
    {
      name: "Manish Singh",
      role: "Founder",
      image: "https://arreglio.com/images/team/manish.webp",
      linkedin: "https://www.linkedin.com/in/manish-singh-753b1811/",
      description: "Manish is a seasoned technology leader and co-founder of Beta Hub, known for his Microsoft expertise and leadership par excellence. With a career spanning global enterprises like Scania, KPMG, and Microsoft's partner ecosystem, he has led large-scale Dynamics 365 implementations, built Centers of Excellence, and spearheaded data-driven transformation across industries. A passionate advocate for AI-driven innovation, Manish co-founded Beta Hub to integrate cutting-edge AI into solving real business problems, transforming enterprise operations, accelerating digital adoption, and creating measurable impact. His leadership combines strategic vision, deep domain expertise, and relentless passion for AI, making him a driving force behind Beta Hub's mission to reshape the future of enterprise technology.",
      expertise: "Enterprise Leadership & AI Innovation"
    },
    {
      name: "Sudhie Siddautam",
      role: "Co-Founder",
      image: "https://arreglio.com/images/team/sudhie.webp",
      linkedin: "https://www.linkedin.com/in/sudhiesiddautam/",
      description: "Sudhiendra is a visionary technology entrepreneur and co-founder of Beta Hub, where he is building the future of enterprise AI with autonomous agent platforms. With a career spanning nearly two decades at Microsoft, Amazon, ecoPRISM, and Veridion AI, he has led the architecture of mission-critical systems from Azure Identity and Dynamics CRM Online to Amazon's last-mile delivery optimization - impacting millions worldwide. Renowned for his mastery of agentic AI, generative AI, and enterprise SaaS, Sudhiendra combines deep technical expertise with business acumen, turning advanced technology into measurable impact. At Beta Hub, he is driving a bold vision: to create intelligent, scalable AI systems that redefine how enterprises transform, compete, and grow.",
      expertise: "Agentic AI & Enterprise Architecture"
    }
  ];

  const values = [
    {
      icon: <Bot className="w-8 h-8" />,
      title: "Agents First",
      description: "We're obsessed with intelligent agents that adapt, learn, and embed seamlessly into enterprise workflows."
    },
    {
      icon: <TrendingUp className="w-8 h-8" />,
      title: "Adoption Over Hype",
      description: "Success is not a mere demo. Success is when your entire organization uses agents every day."
    },
    {
      icon: <Target className="w-8 h-8" />,
      title: "Impact That Lasts",
      description: "From faster rollouts to better decisions, our mission is to make AI a long-term growth engine."
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
      <section className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #E8CAF7 0%, #F0D7F9 20%, #F8E4FC 40%, #FCF0FF 60%, #FEF8FF 80%, #FFFFFF 100%)' }}>
        <div className="section-container section-padding">
          <div className="text-center">
            <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
              <span style={{ color: '#343f52' }}>About</span>
              <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #743CAC 0%, #5a2a8a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}> Beta Hub</span>
            </h1>

            <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
              Beta Hub enables enterprises to turn AI vision into reality with a powerful multi-agent platform - helping every team automate repetitive work, accelerate decisions, scale workflows across systems, and build custom agents that deliver long-term business impact.
            </p>
          </div>
        </div>
      </section>


      {/* Why We Exist Section */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
        <div className="section-container section-padding">
          <div className="max-w-4xl mx-auto text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#343f52' }}>
              Why We Exist
            </h2>
            <p className="text-xl text-gray-600 leading-relaxed mb-8">
              Enterprises have invested billions in GenAI, but 95% of projects stall before creating real impact. Why? Because tools alone don't transform businesses—execution does.
            </p>
            <p className="text-xl text-gray-600 leading-relaxed">
              Beta Hub was founded to fix this. We combine ready-to-deploy AI agents with expert services so companies stop experimenting and start winning with AI.
            </p>
          </div>
        </div>
      </section>

      {/* What Drives Us Section */}
      <section className="w-full relative overflow-hidden bg-white">
        <div className="section-container section-padding">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#343f52' }}>
              What Drives Us
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
            {values.map((value, index) => (
              <div key={index} className="group text-center p-8 rounded-3xl bg-gradient-to-br from-purple-50 to-pink-50 hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-purple-100">
                <div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 group-hover:scale-110 transition-transform duration-300" style={{ backgroundColor: '#6B46C1', color: 'white' }}>
                  {value.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4" style={{ color: '#343f52' }}>
                  {value.title}
                </h3>
                <p className="text-lg leading-relaxed" style={{ color: '#60697b' }}>
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Meet the Team Section */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-96 h-96 rounded-full blur-3xl opacity-10" style={{ background: 'linear-gradient(135deg, #E8CAF7 0%, #F0D7F9 100%)' }}></div>
          <div className="absolute bottom-20 left-20 w-80 h-80 rounded-full blur-2xl opacity-15" style={{ background: 'linear-gradient(135deg, #F8BBD9 0%, #EC89DD 100%)' }}></div>
          <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-64 h-64 rounded-full blur-3xl opacity-8" style={{ background: 'linear-gradient(135deg, #D29DDA 0%, #A7439F 100%)' }}></div>
        </div>

        <div className="section-container section-padding relative z-10">
          <div className="text-center mb-20">
            <h2 className="text-4xl lg:text-5xl font-bold mb-8" style={{ color: '#343f52' }}>
              Meet the Founders
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The visionary leaders building the future of enterprise AI
            </p>
          </div>

          <div className="flex justify-center items-center gap-8 max-w-6xl mx-auto">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative group cursor-pointer w-96 h-[28rem]">
                {/* Card container with flip effect */}
                <div className="relative w-full h-full [perspective:1000px]">
                  {/* Front of card - Image with name/role */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl overflow-hidden bg-gray-100 shadow-lg group-hover:shadow-xl transition-all duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
                    {/* Team member image */}
                    <div className="absolute inset-0">
                      <img
                        src={member.image}
                        alt={member.name}
                        className="w-full h-full object-cover"
                      />
                      {/* Dark overlay for text readability */}
                      <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent"></div>
                    </div>

                    {/* Name and role overlay */}
                    <div className="absolute bottom-0 left-0 right-0 p-4">
                      <div className="bg-white/20 backdrop-blur-md rounded-lg p-4 border border-white/30">
                        <div className="flex items-center justify-between">
                          <div>
                            <h3 className="text-xl font-bold mb-1 text-white">
                              {member.name}
                            </h3>
                            <p className="text-base font-medium text-purple-200">
                              {member.role}
                            </p>
                          </div>
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-2 rounded-full bg-purple-600/80 hover:bg-purple-600 transition-all duration-300 hover:scale-110"
                          >
                            <Linkedin className="w-5 h-5 text-white" />
                          </a>
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Back of card - Description */}
                  <div className="absolute inset-0 w-full h-full rounded-2xl bg-gradient-to-br from-purple-50 to-pink-50 shadow-lg group-hover:shadow-xl transition-all duration-500 [transform:rotateY(180deg)] [backface-visibility:hidden] group-hover:[transform:rotateY(0deg)]">
                    <div className="p-6 h-full flex flex-col justify-center">
                      <div className="text-center mb-6">
                        <h3 className="text-2xl font-bold mb-2 text-gray-800">
                          {member.name}
                        </h3>
                        <p className="text-lg font-semibold text-purple-600 mb-4">
                          {member.role}
                        </p>
                        <div className="flex justify-center">
                          <a
                            href={member.linkedin}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="p-3 rounded-full bg-purple-600 hover:bg-purple-700 transition-all duration-300 hover:scale-110 shadow-lg"
                          >
                            <Linkedin className="w-6 h-6 text-white" />
                          </a>
                        </div>
                      </div>
                      <div className="text-center">
                        <p className="text-gray-700 leading-relaxed text-xs">
                          {member.description}
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Vision & Promise Section */}
      <section className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-20 right-20 w-64 h-64 rounded-full blur-3xl opacity-20" style={{ background: 'linear-gradient(135deg, #6B46C1 0%, #DD2BC2 100%)' }}></div>
          <div className="absolute bottom-20 left-20 w-48 h-48 rounded-full blur-2xl opacity-15" style={{ background: 'linear-gradient(135deg, #DD2BC2 0%, #6B46C1 100%)' }}></div>
        </div>

        <div className="section-container section-padding relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343f52' }}>
              Our Foundation
            </h2>
            <p className="text-xl text-gray-600 max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Our Vision Card */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Card gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10" style={{ background: 'linear-gradient(135deg, #6B46C1 0%, #DD2BC2 100%)' }}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ backgroundColor: '#6B46C1' }}>
                      <Target className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#343f52' }}>
                      Our Vision
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    To make AI agents the backbone of every enterprise - agents that eliminate the monotonous, scale intelligent workflows, and create compounding advantages over time.
                  </p>
                </div>
              </div>
            </div>

            {/* Our Promise Card */}
            <div className="group relative">
              <div className="bg-white rounded-3xl p-8 shadow-lg hover:shadow-2xl transition-all duration-500 hover:-translate-y-2 border border-gray-100 relative overflow-hidden">
                {/* Card gradient overlay */}
                <div className="absolute top-0 right-0 w-32 h-32 rounded-full blur-2xl opacity-10" style={{ background: 'linear-gradient(135deg, #DD2BC2 0%, #6B46C1 100%)' }}></div>

                <div className="relative z-10">
                  <div className="flex items-center gap-4 mb-6">
                    <div className="w-16 h-16 rounded-2xl flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg" style={{ backgroundColor: '#6B46C1' }}>
                      <Bot className="w-8 h-8 text-white" />
                    </div>
                    <h3 className="text-2xl lg:text-3xl font-bold" style={{ color: '#343f52' }}>
                      Our Promise
                    </h3>
                  </div>
                  <p className="text-lg text-gray-600 leading-relaxed">
                    We're not just building AI agents. We're building successful AI agentic systems that make enterprises unstoppable in the long haul.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #3c1470 0%, #DD2BC2 100%)' }}>
        {/* Background decorative elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
          <div className="absolute top-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
          <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
        </div>

        <div className="section-container section-padding relative z-10">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Let's build the agents that will power your enterprise success.
            </h2>
            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
              Ready to transform your business with AI agents that actually work?
            </p>

            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button
                onClick={() => navigate('/contact')}
                className="group bg-white text-purple-700 px-10 py-4 rounded-2xl font-semibold hover:shadow-2xl transition-all duration-300 hover:bg-purple-50 hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center cursor-pointer"
              >
                <span>Talk to Us</span>
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
              </button>
              <button
                onClick={() => setShowDemoForm(true)}
                className="group border-2 border-white text-white px-10 py-4 rounded-2xl font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center cursor-pointer"
              >
                <span>Schedule Demo</span>
                <Bot className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
              </button>
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