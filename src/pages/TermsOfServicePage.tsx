import React from 'react';
import { FileText, AlertTriangle, Users, Gavel } from 'lucide-react';
import SEO from '../components/SEO';
import { getSEOConfig } from '../config/seoConfig';
import ReadingProgress from '../components/ReadingProgress';

const TermsOfServicePage: React.FC = () => {
    const seoData = getSEOConfig('/terms-of-service');

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
                <div className="section-container section-padding max-w-6xl mx-auto">
                    <div className="text-center">
                        <h1 className="text-5xl lg:text-6xl font-bold mb-8 leading-tight" style={{ color: '#343f52' }}>
                            Terms of Service
                        </h1>
                        <p className="text-sm text-gray-500">
                            Last updated: {new Date().toLocaleDateString('en-US', { year: 'numeric', month: 'long', day: 'numeric' })}
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="w-full bg-white">
                <div className="section-container section-padding">
                    <div className="max-w-6xl mx-auto">
                        <div className="prose prose-lg max-w-none">

                            {/* Introduction */}
                            <div className="mb-12">
                                <p className="text-lg leading-relaxed mb-6" style={{ color: '#60697b' }}>
                                    Welcome to Beta Hub.ai! These terms and conditions outline the rules and regulations for the use of Beta Hub.ai's Website, located at https://www.betahub.ai.
                                </p>
                                <p className="text-lg leading-relaxed" style={{ color: '#60697b' }}>
                                    By accessing this website we assume you accept these terms and conditions. Do not continue to use Beta Hub.ai if you do not agree to take all of the terms and conditions stated on this page.
                                </p>
                            </div>

                            {/* Cookies */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#343f52' }}>
                                    <FileText className="w-8 h-8 text-purple-600" />
                                    Cookies
                                </h2>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    We employ the use of cookies. By accessing Beta Hub.ai, you agreed to use cookies in agreement with the Beta Hub.ai's Privacy Policy.
                                </p>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    Most interactive websites use cookies to let us retrieve the user's details for each visit. Cookies are used by our website to enable the functionality of certain areas to make it easier for people visiting our website. Some of our affiliate/advertising partners may also use cookies.
                                </p>
                            </div>

                            {/* License */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#343f52' }}>
                                    <Gavel className="w-8 h-8 text-purple-600" />
                                    License
                                </h2>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    Unless otherwise stated, Beta Hub.ai and/or its licensors own the intellectual property rights for all material on Beta Hub.ai. All intellectual property rights are reserved. You may access this from Beta Hub.ai for your own personal use subjected to restrictions set in these terms and conditions.
                                </p>

                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    You must not:
                                </p>
                                <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#60697b' }}>
                                    <li>Republish material from Beta Hub.ai</li>
                                    <li>Sell, rent or sub-license material from Beta Hub.ai</li>
                                    <li>Reproduce, duplicate or copy material from Beta Hub.ai</li>
                                    <li>Redistribute content from Beta Hub.ai</li>
                                </ul>

                                <p className="text-lg leading-relaxed" style={{ color: '#60697b' }}>
                                    This Agreement shall begin on the date hereof.
                                </p>
                            </div>

                            {/* Hyperlinking to our Content */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#343f52' }}>
                                    <Users className="w-8 h-8 text-purple-600" />
                                    Hyperlinking to our Content
                                </h2>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    The following organizations may link to our Website without prior written approval:
                                </p>
                                <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#60697b' }}>
                                    <li>Government agencies;</li>
                                    <li>Search engines;</li>
                                    <li>News organizations;</li>
                                    <li>Online directory distributors may link to our Website in the same manner as they hyperlink to the Websites of other listed businesses; and</li>
                                    <li>System wide Accredited Businesses except soliciting non-profit organizations, charity shopping malls, and charity fundraising groups which may not hyperlink to our Web site.</li>
                                </ul>

                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    These organizations may link to our home page, to publications or to other Website information so long as the link: (a) is not in any way deceptive; (b) does not falsely imply sponsorship, endorsement or approval of the linking party and its products and/or services; and (c) fits within the context of the linking party's site.
                                </p>
                            </div>

                            {/* iFrames */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#343f52' }}>
                                    iFrames
                                </h2>
                                <p className="text-lg leading-relaxed" style={{ color: '#60697b' }}>
                                    Without prior approval and written permission, you may not create frames around our Webpages that alter in any way the visual presentation or appearance of our Website.
                                </p>
                            </div>

                            {/* Content Liability */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#343f52' }}>
                                    Content Liability
                                </h2>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    We shall not be held responsible for any content that appears on your Website. You agree to protect and defend us against all claims that is rising on your Website. No link(s) should appear on any Website that may be interpreted as libelous, obscene or criminal, or which infringes, otherwise violates, or advocates the infringement or other violation of, any third party rights.
                                </p>
                            </div>

                            {/* Reservation of Rights */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#343f52' }}>
                                    Reservation of Rights
                                </h2>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    We reserve the right to request that you remove all links or any particular link to our Website. You approve to immediately remove all links to our Website upon request. We also reserve the right to amen these terms and conditions and its linking policy at any time. By continuously linking to our Website, you agree to be bound to and follow these linking terms and conditions.
                                </p>
                            </div>

                            {/* Removal of links from our website */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#343f52' }}>
                                    Removal of links from our website
                                </h2>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    If you find any link on our Website that is offensive for any reason, you are free to contact and inform us any moment. We will consider requests to remove links but we are not obligated to or so or to respond to you directly.
                                </p>
                                <p className="text-lg leading-relaxed" style={{ color: '#60697b' }}>
                                    We do not ensure that the information on this website is correct, we do not warrant its completeness or accuracy; nor do we promise to ensure that the website remains available or that the material on the website is kept up to date.
                                </p>
                            </div>

                            {/* Disclaimer */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#343f52' }}>
                                    <AlertTriangle className="w-8 h-8 text-purple-600" />
                                    Disclaimer
                                </h2>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    To the maximum extent permitted by applicable law, we exclude all representations, warranties and conditions relating to our website and the use of this website. Nothing in this disclaimer will:
                                </p>
                                <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#60697b' }}>
                                    <li>limit or exclude our or your liability for death or personal injury;</li>
                                    <li>limit or exclude our or your liability for fraud or fraudulent misrepresentation;</li>
                                    <li>limit any of our or your liabilities in any way that is not permitted under applicable law; or</li>
                                    <li>exclude any of our or your liabilities that may not be excluded under applicable law.</li>
                                </ul>

                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    The limitations and prohibitions of liability set in this Section and elsewhere in this disclaimer: (a) are subject to the preceding paragraph; and (b) govern all liabilities arising under the disclaimer, including liabilities arising in contract, in tort and for breach of statutory duty.
                                </p>

                                <p className="text-lg leading-relaxed" style={{ color: '#60697b' }}>
                                    As long as the website and the information and services on the website are provided free of charge, we will not be liable for any loss or damage of any nature.
                                </p>
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

export default TermsOfServicePage;
