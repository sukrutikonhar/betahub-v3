import { Mail, Phone, Clock, ArrowRight, CheckCircle, AlertCircle } from 'lucide-react';
import { useState } from 'react';
import DemoForm from '../components/DemoForm';
import SEO from '../components/SEO';
import { getSEOConfig } from '../config/seoConfig';
import ReadingProgress from '../components/ReadingProgress';
import { WEB3FORMS_CONFIG } from '../config/web3forms';

export default function ContactPage() {
    const seoData = getSEOConfig('/contact');
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        companyName: '',
        areaOfInterest: '',
        message: '',
        phoneNumber: '',
        acceptTerms: false
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');
    const [showDemoForm, setShowDemoForm] = useState(false);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
        const { name, value, type } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: type === 'checkbox' ? (e.target as HTMLInputElement).checked : value
        }));
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setIsSubmitting(true);
        setSubmitStatus('idle');

        try {
            const response = await fetch(WEB3FORMS_CONFIG.API_URL, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_CONFIG.CONTACT_FORM_ACCESS_KEY,
                    subject: 'Contact Form Submission - Beta Hub',
                    from_name: `${formData.firstName} ${formData.lastName}`,
                    from_email: formData.email,
                    company_name: formData.companyName,
                    phone: formData.phoneNumber,
                    area_of_interest: formData.areaOfInterest,
                    message: formData.message,
                    replyto: formData.email,
                }),
            });

            const result = await response.json();

            if (result.success) {
                setSubmitStatus('success');
                setFormData({
                    firstName: '',
                    lastName: '',
                    email: '',
                    companyName: '',
                    areaOfInterest: '',
                    message: '',
                    phoneNumber: '',
                    acceptTerms: false
                });
                setTimeout(() => {
                    setSubmitStatus('idle');
                }, 5000);
            } else {
                setSubmitStatus('error');
            }
        } catch (error) {
            console.error('Form submission error:', error);
            setSubmitStatus('error');
        } finally {
            setIsSubmitting(false);
        }
    };
    return (
        <div className="flex flex-col items-center">
            <SEO
                title={seoData.title}
                description={seoData.description}
                keywords={seoData.keywords}
                ogImage={seoData.ogImage}
            />
            {/* Hero Section */}
            <section className="w-full relative overflow-hidden bg-gradient-to-br from-gray-50 via-white to-purple-50">
                {/* Background decorative elements */}
                <div className="absolute inset-0 overflow-hidden">
                    <div className="absolute top-20 right-20 w-72 h-72 bg-purple-100/30 rounded-full blur-3xl"></div>
                    <div className="absolute bottom-20 left-20 w-80 h-80 bg-pink-100/30 rounded-full blur-3xl"></div>
                    <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-blue-100/20 rounded-full blur-3xl"></div>
                </div>

                <div className="section-container section-padding relative z-10">
                    <div className="text-center mb-16">
                        <h1 className="text-4xl lg:text-5xl font-bold mb-6" style={{ color: '#343f52' }}>
                            How can we help?
                        </h1>
                        <p className="text-xl max-w-3xl mx-auto" style={{ color: '#60697b' }}>
                            Get in touch with our team to learn how Beta Hub can transform your enterprise with AI agents.
                        </p>
                    </div>

                    {/* Contact Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
                        {/* Contact Sales */}
                        <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #DA2CC3 0%, #A022CB 50%, #7B1BF1 100%)' }}>
                                <Phone className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: '#343f52' }}>Contact Sales</h3>
                            <p className="text-sm mb-6" style={{ color: '#60697b' }}>
                                Provide your contact info and a sales representative will reach out to you shortly.
                            </p>
                            <button
                                onClick={() => window.location.href = 'mailto:sales@betahub.com'}
                                className="w-full text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 shadow-lg hover:opacity-90 cursor-pointer"
                                style={{ background: 'linear-gradient(135deg, #DA2CC3 0%, #A022CB 50%, #7B1BF1 100%)' }}
                            >
                                Contact Sales
                            </button>
                        </div>

                        {/* Watch Product Tour */}
                        <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #DA2CC3 0%, #A022CB 50%, #7B1BF1 100%)' }}>
                                <ArrowRight className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: '#343f52' }}>Watch Product Tour</h3>
                            <p className="text-sm mb-6" style={{ color: '#60697b' }}>
                                Experience the many capabilities of Beta Hub's AI agent platform in our product tour.
                            </p>
                            <button
                                onClick={() => window.location.href = '/agents'}
                                className="w-full border-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
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
                                Watch Product Tour
                            </button>
                        </div>

                        {/* Book a Demo */}
                        <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #DA2CC3 0%, #A022CB 50%, #7B1BF1 100%)' }}>
                                <Clock className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: '#343f52' }}>Book a Demo</h3>
                            <p className="text-sm mb-6" style={{ color: '#60697b' }}>
                                Schedule a personalized demo to learn more about Beta Hub AI agents.
                            </p>
                            <button
                                onClick={() => setShowDemoForm(true)}
                                className="w-full text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300 shadow-lg hover:opacity-90 cursor-pointer"
                                style={{ background: 'linear-gradient(135deg, #DA2CC3 0%, #A022CB 50%, #7B1BF1 100%)' }}
                            >
                                Book a Demo
                            </button>
                        </div>

                        {/* Get Support */}
                        <div className="group bg-white rounded-2xl p-8 border-2 border-gray-200 hover:border-purple-300 transition-all duration-300 hover:-translate-y-2 hover:shadow-xl text-center">
                            <div className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-6" style={{ background: 'linear-gradient(135deg, #DA2CC3 0%, #A022CB 50%, #7B1BF1 100%)' }}>
                                <Mail className="w-8 h-8 text-white" />
                            </div>
                            <h3 className="text-xl font-bold mb-4" style={{ color: '#343f52' }}>Get Support</h3>
                            <p className="text-sm mb-6" style={{ color: '#60697b' }}>
                                Email our Support Team to request additional customizations or to resolve issues.
                            </p>
                            <button
                                onClick={() => window.location.href = 'mailto:support@betahub.com'}
                                className="w-full border-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 cursor-pointer"
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
                                Get Support
                            </button>
                        </div>
                    </div>

                    {/* Contact Form */}
                    <div className="max-w-4xl mx-auto mb-16">
                        <div className="bg-white rounded-3xl p-8 shadow-xl border border-gray-100">
                            <div className="text-center mb-8">
                                <h3 className="text-2xl font-bold mb-2" style={{ color: '#343f52' }}>
                                    Get in Touch
                                </h3>
                                <p className="text-lg" style={{ color: '#60697b' }}>
                                    Fill out the form below and we'll get back to you within 24 hours.
                                </p>
                            </div>

                            <form onSubmit={handleSubmit} className="space-y-6">
                                {/* Name Fields */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            id="firstName"
                                            name="firstName"
                                            value={formData.firstName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
                                            placeholder="First Name *"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="text"
                                            id="lastName"
                                            name="lastName"
                                            value={formData.lastName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
                                            placeholder="Last Name *"
                                        />
                                    </div>
                                </div>

                                {/* Email and Phone */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="email"
                                            id="email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
                                            placeholder="Email Address *"
                                        />
                                    </div>
                                    <div>
                                        <input
                                            type="tel"
                                            id="phoneNumber"
                                            name="phoneNumber"
                                            value={formData.phoneNumber}
                                            onChange={handleInputChange}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
                                            placeholder="Phone Number"
                                        />
                                    </div>
                                </div>

                                {/* Company and Area of Interest */}
                                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                    <div>
                                        <input
                                            type="text"
                                            id="companyName"
                                            name="companyName"
                                            value={formData.companyName}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
                                            placeholder="Company Name *"
                                        />
                                    </div>
                                    <div>
                                        <select
                                            id="areaOfInterest"
                                            name="areaOfInterest"
                                            value={formData.areaOfInterest}
                                            onChange={handleInputChange}
                                            required
                                            className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-300 focus:border-transparent transition-all duration-200"
                                        >
                                            <option value="">Select an area of interest</option>
                                            <option value="process-acceleration">Process Acceleration</option>
                                            <option value="knowledge-training">Knowledge & Training</option>
                                            <option value="code-technical">Code & Technical</option>
                                            <option value="general-inquiry">General Inquiry</option>
                                            <option value="partnership">Partnership</option>
                                            <option value="support">Support</option>
                                        </select>
                                    </div>
                                </div>

                                {/* Message */}
                                <div>
                                    <textarea
                                        id="message"
                                        name="message"
                                        value={formData.message}
                                        onChange={handleInputChange}
                                        required
                                        rows={5}
                                        className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all duration-200 resize-none"
                                        placeholder="Message * - Tell us about your project or how we can help you..."
                                    />
                                </div>

                                {/* Terms Acceptance */}
                                <div className="flex items-start space-x-3">
                                    <input
                                        type="checkbox"
                                        id="acceptTerms"
                                        name="acceptTerms"
                                        checked={formData.acceptTerms}
                                        onChange={handleInputChange}
                                        required
                                        className="mt-1 w-4 h-4 text-purple-600 border-gray-300 rounded focus:ring-purple-300"
                                    />
                                    <label htmlFor="acceptTerms" className="text-sm" style={{ color: '#60697b' }}>
                                        I agree to the{' '}
                                        <a href="/privacy-policy" className="text-purple-600 hover:text-purple-700 font-semibold">
                                            Privacy Policy
                                        </a>{' '}
                                        and{' '}
                                        <a href="/terms-of-service" className="text-purple-600 hover:text-purple-700 font-semibold">
                                            Terms of Service
                                        </a>
                                        . By submitting this form, I consent to Beta Hub contacting me about their products and services.
                                    </label>
                                </div>

                                {/* Status Messages */}
                                {submitStatus === 'success' && (
                                    <div className="mb-4 p-4 bg-green-50 border border-green-200 rounded-xl flex items-center gap-3">
                                        <CheckCircle className="w-5 h-5 text-green-600 flex-shrink-0" />
                                        <p className="text-green-800 font-medium">Message sent successfully! We'll get back to you soon.</p>
                                    </div>
                                )}

                                {submitStatus === 'error' && (
                                    <div className="mb-4 p-4 bg-red-50 border border-red-200 rounded-xl flex items-center gap-3">
                                        <AlertCircle className="w-5 h-5 text-red-600 flex-shrink-0" />
                                        <p className="text-red-800 font-medium">Failed to send message. Please try again or contact us directly.</p>
                                    </div>
                                )}

                                {/* Submit Button */}
                                <div className="text-center pt-4">
                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className="text-white px-8 py-4 rounded-2xl font-semibold hover:shadow-lg transition-all duration-300 flex items-center justify-center gap-2 mx-auto shadow-lg hover:opacity-90 disabled:opacity-50 disabled:cursor-not-allowed"
                                        style={{ background: 'linear-gradient(135deg, #DA2CC3 0%, #A022CB 50%, #7B1BF1 100%)' }}
                                    >
                                        {isSubmitting ? (
                                            <>
                                                <div className="w-4 h-4 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                                                Sending...
                                            </>
                                        ) : (
                                            <>
                                                Send Message
                                                <ArrowRight className="w-5 h-5" />
                                            </>
                                        )}
                                    </button>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>

                {/* CTA Block */}
                <div className="max-w-5xl mx-auto mt-16">
                    <div className="rounded-3xl p-12 text-center relative overflow-hidden bg-gradient-to-br from-purple-900 via-purple-800 to-indigo-900">
                        {/* Background decorative elements */}
                        <div className="absolute inset-0 overflow-hidden">
                            <div className="absolute top-10 left-10 w-32 h-32 bg-white/10 rounded-full blur-2xl"></div>
                            <div className="absolute top-20 right-20 w-40 h-40 bg-white/5 rounded-full blur-3xl"></div>
                            <div className="absolute bottom-10 left-1/4 w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
                        </div>

                        <div className="relative z-10">
                            <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                                Ready to Transform Your Business?
                            </h2>
                            <p className="text-xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                                Join thousands of companies already using Beta Hub to transform their business with AI agents.
                                Start your journey today and see the difference AI can make.
                            </p>

                            {/* Enhanced CTA Buttons */}
                            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
                                <button
                                    onClick={() => setShowDemoForm(true)}
                                    className="group bg-white text-purple-700 px-10 py-3 rounded-xl font-semibold hover:shadow-2xl transition-all duration-300 hover:bg-purple-50 hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center cursor-pointer"
                                >
                                    <span>Start Free Trial</span>
                                    <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform duration-200" />
                                </button>
                                <button
                                    onClick={() => window.location.href = 'mailto:sales@betahub.com'}
                                    className="group border-2 border-white text-white px-10 py-3 rounded-xl font-semibold hover:bg-white hover:text-purple-700 transition-all duration-300 hover:-translate-y-1 flex items-center gap-3 min-w-[200px] justify-center cursor-pointer"
                                >
                                    <span>Contact Sales</span>
                                    <Phone className="w-5 h-5 group-hover:scale-110 transition-transform duration-200" />
                                </button>
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