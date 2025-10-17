import { ArrowRight, Check, Star, Zap, Users, Building2, Crown, MessageCircle } from 'lucide-react';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import SEO from '../components/SEO';
import { getSEOConfig } from '../config/seoConfig';
import ReadingProgress from '../components/ReadingProgress';
import DemoForm from '../components/DemoForm';
import commonBgImage from '../assets/banner/comon-bg.webp';

export default function PricingPage() {
    const [showDemoForm, setShowDemoForm] = useState(false);
    const [hoveredPlan, setHoveredPlan] = useState<string | null>(null);
    const navigate = useNavigate();

    const seoData = getSEOConfig('/pricing');

    const pricingPlans = [
        {
            id: 'starter',
            name: 'Starter',
            description: 'Entry-level pack',
            price: '$5',
            period: '',
            credits: '30',
            outputs: '10',
            cta: 'Get Started',
            ctaAction: () => setShowDemoForm(true),
            popular: false,
            icon: Zap,
            features: [
                '30 Credits',
                '10 Outputs'
            ],
            gradient: 'from-purple-500 to-pink-500',
            bgGradient: 'from-purple-50 to-pink-50'
        },
        {
            id: 'growth',
            name: 'Growth',
            description: 'Mid-tier with rollover credits',
            price: '$50',
            period: '',
            credits: '3000',
            outputs: '50',
            cta: 'Get Started',
            ctaAction: () => setShowDemoForm(true),
            popular: true,
            icon: Star,
            features: [
                '3000 Credits',
                '50 Outputs'
            ],
            gradient: 'from-pink-500 to-purple-600',
            bgGradient: 'from-pink-50 to-purple-50'
        },
        {
            id: 'enterprise',
            name: 'Enterprise',
            description: 'Custom pack with volume discounts and SLA',
            price: 'Custom',
            period: '',
            credits: 'Unlimited',
            outputs: 'Unlimited',
            cta: 'Request Quote',
            ctaAction: () => navigate('/contact'),
            popular: false,
            icon: Building2,
            features: [
                'Unlimited credits',
                'Unlimited outputs'
            ],
            gradient: 'from-purple-600 to-indigo-600',
            bgGradient: 'from-purple-50 to-indigo-50'
        }
    ];

    return (
        <div className="flex flex-col items-center">
            <SEO
                title={seoData.title}
                description={seoData.description}
                keywords={seoData.keywords}
                ogImage={seoData.ogImage}
            />

            {/* Hero Section */}
            <section className="w-full relative overflow-hidden" style={{ backgroundImage: `url(${commonBgImage})`, backgroundSize: 'cover', backgroundPosition: 'center' }}>
                <div className="section-container section-padding">
                    <div className="text-center mx-auto">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight">
                            <span className="bg-gradient-to-r from-purple-600 to-purple-800 bg-clip-text text-transparent" style={{ background: 'linear-gradient(135deg, #743CAC 0%, #5a2a8a 100%)', WebkitBackgroundClip: 'text', WebkitTextFillColor: 'transparent' }}>
                                Simple, Transparent
                            </span>
                            <span style={{ color: '#343f52' }}> Pricing</span>
                        </h1>

                        <p className="text-xl lg:text-2xl text-gray-600 mb-12 max-w-5xl mx-auto leading-relaxed">
                            Choose the perfect plan for your enterprise AI journey. Scale as you grow with our flexible pricing options.
                        </p>

                        {/* Trust Indicators */}
                        <div className="flex flex-wrap justify-center gap-8 text-sm text-white/90">
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-400" />
                                <span className="text-gray-600">No setup fees</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-400" />
                                <span className="text-gray-600">Cancel anytime</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <Check className="w-4 h-4 text-green-400" />
                                <span className="text-gray-600">24/7 support</span>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Pricing Cards */}
            <section className="w-full relative overflow-hidden bg-white">
                <div className="section-container py-16 relative z-10">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {pricingPlans.map((plan) => {
                            const IconComponent = plan.icon;
                            const isHovered = hoveredPlan === plan.id;

                            return (
                                <div
                                    key={plan.id}
                                    className={`group relative rounded-3xl overflow-hidden transition-all duration-500 ${plan.popular
                                        ? 'scale-105 shadow-2xl ring-2 ring-pink-500/20'
                                        : 'shadow-lg hover:shadow-2xl'
                                        } ${isHovered ? 'scale-105' : 'scale-100'}`}
                                    onMouseEnter={() => setHoveredPlan(plan.id)}
                                    onMouseLeave={() => setHoveredPlan(null)}
                                >
                                    {/* Background Gradient */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.bgGradient} opacity-50`}></div>

                                    {/* Popular Badge */}
                                    {plan.popular && (
                                        <div className="absolute top-6 right-6 z-10">
                                            <div className="bg-gradient-to-r from-pink-500 to-purple-600 text-white px-3 py-1 rounded-full text-xs font-semibold flex items-center gap-1">
                                                <Star className="w-3 h-3" />
                                                Most Popular
                                            </div>
                                        </div>
                                    )}

                                    {/* Card Content */}
                                    <div className="relative z-10 p-8">
                                        {/* Icon and Title */}
                                        <div className="text-center mb-6">
                                            <div className={`w-16 h-16 mx-auto mb-4 rounded-2xl bg-gradient-to-br ${plan.gradient} flex items-center justify-center group-hover:scale-110 transition-transform duration-300`}>
                                                <IconComponent className="w-8 h-8 text-white" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-gray-900 mb-2">{plan.name}</h3>
                                            <p className="text-gray-600 text-sm">{plan.description}</p>
                                        </div>

                                        {/* Pricing */}
                                        <div className="text-center mb-6">
                                            <div className="flex items-baseline justify-center">
                                                <span className="text-4xl font-bold text-gray-900">{plan.price}</span>
                                                <span className="text-gray-500 ml-1">{plan.period}</span>
                                            </div>
                                        </div>

                                        {/* Credits and Outputs */}
                                        <div className="bg-white/80 backdrop-blur-sm rounded-2xl p-4 mb-6 border border-gray-200">
                                            <div className="grid grid-cols-2 gap-4 text-center">
                                                <div>
                                                    <div className="text-2xl font-bold text-gray-900">{plan.credits}</div>
                                                    <div className="text-sm text-gray-600">AI Credits</div>
                                                </div>
                                                <div>
                                                    <div className="text-2xl font-bold text-gray-900">{plan.outputs}</div>
                                                    <div className="text-sm text-gray-600">Outputs</div>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Features */}
                                        <div className="space-y-3 mb-8">
                                            {plan.features.map((feature, index) => (
                                                <div key={index} className="flex items-center gap-3">
                                                    <Check className="w-4 h-4 text-green-500 flex-shrink-0" />
                                                    <span className="text-sm text-gray-600">{feature}</span>
                                                </div>
                                            ))}
                                        </div>

                                        {/* CTA Button */}
                                        <button
                                            onClick={plan.ctaAction}
                                            className={`w-full py-3 px-6 rounded-xl font-semibold transition-all duration-300 ${plan.popular
                                                ? 'bg-gradient-to-r from-pink-500 to-purple-600 text-white hover:from-pink-600 hover:to-purple-700 shadow-lg hover:shadow-xl'
                                                : 'bg-gray-900 text-white hover:bg-gray-800'
                                                } group-hover:scale-105`}
                                        >
                                            <span className="flex items-center justify-center gap-2">
                                                {plan.cta}
                                                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform duration-300" />
                                            </span>
                                        </button>
                                    </div>

                                    {/* Hover Effect Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-br ${plan.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-500`}></div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </section>


            {/* CTA Section */}
            <section className="w-full relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
                {/* Background Elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-10 right-10 w-32 h-32 bg-gradient-to-br from-pink-500/15 to-purple-500/15 rounded-full blur-2xl"></div>
                    <div className="absolute bottom-10 left-10 w-40 h-40 bg-gradient-to-br from-blue-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
                </div>

                <div className="section-container py-16 relative z-10">
                    <div className="text-center max-w-4xl mx-auto">
                        <div className="w-16 h-16 bg-gradient-to-br from-pink-500 via-purple-500 to-indigo-500 rounded-2xl flex items-center justify-center mx-auto mb-6 shadow-lg">
                            <MessageCircle className="w-8 h-8 text-white" />
                        </div>

                        <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
                            Need Something Custom?
                        </h2>

                        <p className="text-lg text-white/90 mb-8 max-w-2xl mx-auto leading-relaxed">
                            Scale agents as per your requirement. Get a tailored solution that fits your enterprise needs perfectly.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <button
                                onClick={() => setShowDemoForm(true)}
                                className="group bg-white text-gray-900 px-8 py-4 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center"
                            >
                                Book Call
                            </button>

                            <button
                                onClick={() => navigate('/contact')}
                                className="group bg-white/10 backdrop-blur-sm text-white px-8 py-4 rounded-xl font-semibold hover:bg-white/20 transition-all duration-300 flex items-center justify-center border border-white/20"
                            >
                                Contact Sales
                            </button>
                        </div>

                        <p className="text-white/70 text-sm mt-6">
                            *The above pricing applies to Beta Hub's ready-to-use agents. Custom solutions are priced separately based on mutually agreed quotations. All prices are exclusive of applicable taxes.
                        </p>
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
