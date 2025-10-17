import { Link } from "react-router-dom";
import { ROUTES, ROUTE_LABELS } from "../router/routes";
import { Mail, ArrowRight, Linkedin, Send } from "lucide-react";
import { useState } from "react";

export default function Footer() {
    const [email, setEmail] = useState("");
    const [isSubscribed, setIsSubscribed] = useState(false);

    const quickLinks = [
        { path: ROUTES.ABOUT, label: ROUTE_LABELS[ROUTES.ABOUT] },
        { path: ROUTES.AGENTS, label: ROUTE_LABELS[ROUTES.AGENTS] },
        { path: ROUTES.PRICING, label: ROUTE_LABELS[ROUTES.PRICING] },
        { path: ROUTES.CONTACT, label: ROUTE_LABELS[ROUTES.CONTACT] },
    ];

    const legalLinks = [
        { label: "Privacy Policy", path: ROUTES.PRIVACY_POLICY },
        { label: "Terms of Service", path: ROUTES.TERMS_OF_SERVICE },
        { label: "Cookie Policy", path: ROUTES.COOKIE_POLICY },
    ];

    const handleNewsletterSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        if (email) {
            setIsSubscribed(true);
            setEmail("");
            // Here you would typically send the email to your backend
            setTimeout(() => setIsSubscribed(false), 3000);
        }
    };

    return (
        <footer className="w-full relative overflow-hidden" style={{ background: '#1e1e1e' }}>
            {/* Background decorative elements */}
            <div className="absolute inset-0 overflow-hidden">
                <div className="absolute top-10 right-10 w-64 h-64 bg-core-purple/20 rounded-full blur-3xl"></div>
                <div className="absolute bottom-10 left-10 w-80 h-80 bg-bright-pink/20 rounded-full blur-3xl"></div>
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-strong-blue/10 rounded-full blur-3xl"></div>
            </div>

            <div className="section-container section-padding relative z-10">
                {/* Main Footer Content */}
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
                    {/* Company Info - Takes 4 columns */}
                    <div className="lg:col-span-4">
                        <div className="mb-6">
                            <img
                                src="/logos/logo-white.webp"
                                alt="Beta Hub Logo"
                                className="w-auto h-16 object-contain"
                            />
                        </div>

                        <p className="text-white/90 mb-6 text-lg leading-relaxed max-w-md" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                            Building the future with innovative AI solutions and cutting-edge technology. Transform your business with intelligent automation.
                        </p>

                        <div className="flex items-center gap-3">
                            <Linkedin className="w-5 h-5 text-bright-pink" />
                            <a
                                href="https://www.linkedin.com/company/beta-hub-ai/"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-white/90 hover:text-bright-pink transition-colors duration-300"
                                style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}
                            >
                                Follow us on LinkedIn
                            </a>
                        </div>
                    </div>

                    {/* Quick Links - Takes 2 columns */}
                    <div className="lg:col-span-2">
                        <h4 className="text-xl font-bold text-white mb-6" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Quick Links</h4>
                        <ul className="space-y-4">
                            {quickLinks.map(({ path, label }) => (
                                <li key={path}>
                                    <Link
                                        to={path}
                                        className="text-gray-300 hover:text-bright-pink transition-colors duration-300 flex items-center gap-2 group"
                                    >
                                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info - Takes 3 columns */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xl font-bold text-white mb-6" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Get in Touch</h4>
                        <div className="space-y-4">
                            <div className="flex items-center gap-3">
                                <Mail className="w-5 h-5 text-bright-pink flex-shrink-0" />
                                <a href="mailto:info@betahub.ai" className="text-white/90 hover:text-bright-pink transition-colors" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                                    info@betahub.ai
                                </a>
                            </div>
                        </div>
                    </div>

                    {/* Newsletter Subscription - Takes 3 columns */}
                    <div className="lg:col-span-3">
                        <h4 className="text-xl font-bold text-white mb-6" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>Stay Updated</h4>
                        <p className="text-white/90 mb-6 text-sm leading-relaxed" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                            Subscribe to our newsletter for the latest AI insights, product updates, and industry trends.
                        </p>

                        {isSubscribed ? (
                            <div className="bg-green-500/20 border border-green-500/30 rounded-lg p-4 text-center">
                                <p className="text-green-400 font-medium">Thank you for subscribing!</p>
                            </div>
                        ) : (
                            <form onSubmit={handleNewsletterSubmit} className="relative">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="Enter your email id"
                                    className="w-full px-4 py-3 pr-12 rounded-lg bg-white/10 border border-white/20 text-white placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-bright-pink focus:border-transparent"
                                    required
                                />
                                <button
                                    type="submit"
                                    className="absolute right-2 top-1/2 transform -translate-y-1/2 p-2 bg-gradient-to-r from-bright-pink to-core-purple text-white rounded-md hover:shadow-lg transition-all duration-300 flex items-center justify-center group"
                                >
                                    <Send className="w-4 h-4 group-hover:translate-x-0.5 transition-transform" />
                                </button>
                            </form>
                        )}

                        <p className="text-white/70 text-xs mt-3" style={{ textShadow: '0 1px 2px rgba(0,0,0,0.3)' }}>
                            We don't spam. Unsubscribe any time.
                        </p>
                    </div>
                </div>

                {/* Bottom Section */}
                <div className="border-t border-white/20 pt-8">
                    <div className="flex flex-col lg:flex-row justify-between items-center gap-6">
                        <div className="text-gray-400 text-center lg:text-left">
                            <p>&copy; 2025 Beta Hub. All rights reserved.</p>
                        </div>

                        <div className="flex flex-wrap justify-center lg:justify-end gap-6 text-sm">
                            {legalLinks.map(({ path, label }) => (
                                <Link
                                    key={label}
                                    to={path}
                                    className="text-gray-400 hover:text-bright-pink transition-colors"
                                >
                                    {label}
                                </Link>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
}
