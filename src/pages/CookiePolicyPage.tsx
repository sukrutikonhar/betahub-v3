import React from 'react';
import { Settings, Eye, FileText } from 'lucide-react';
import SEO from '../components/SEO';
import { getSEOConfig } from '../config/seoConfig';
import ReadingProgress from '../components/ReadingProgress';

const CookiePolicyPage: React.FC = () => {
    const seoData = getSEOConfig('/cookie-policy');

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
                            Cookie Policy
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
                                    This Cookie Policy explains what Cookies are and how We use them. You should read this policy so You can understand what type of cookies We use, or the information We collect using Cookies and how that information is used. This Cookie Policy has been created with the help of the TermsFeed Cookie Policy Generator.
                                </p>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    Cookies do not typically contain any information that personally identifies a user, but personal information that we store about You may be linked to the information stored in and obtained from Cookies. For further information on how We use, store and keep your personal data secure, see our Privacy Policy.
                                </p>
                                <p className="text-lg leading-relaxed" style={{ color: '#60697b' }}>
                                    We do not store sensitive personal information, such as mailing addresses, account passwords, etc. in the Cookies We use.
                                </p>
                            </div>

                            {/* Interpretation and Definitions */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#343f52' }}>
                                    <FileText className="w-8 h-8 text-purple-600" />
                                    Interpretation and Definitions
                                </h2>

                                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#343f52' }}>Interpretation</h3>
                                <p className="text-lg leading-relaxed mb-6" style={{ color: '#60697b' }}>
                                    The words of which the initial letter is capitalized have meanings defined under the following conditions. The following definitions shall have the same meaning regardless of whether they appear in singular or in plural.
                                </p>

                                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#343f52' }}>Definitions</h3>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    For the purposes of this Cookie Policy:
                                </p>
                                <ul className="list-disc pl-6 mb-6 space-y-2" style={{ color: '#60697b' }}>
                                    <li><strong>Company</strong> (referred to as either "the Company", "We", "Us" or "Our" in this Cookie Policy) refers to Beta Hub.</li>
                                    <li><strong>Cookies</strong> means small files that are placed on Your computer, mobile device or any other device by a website, containing your browsing history on that website among its many uses.</li>
                                    <li><strong>Website</strong> refers to Beta Hub, accessible from https://www.betahub.ai</li>
                                    <li><strong>You</strong> means the individual accessing or using the Service, or the company, or other legal entity on behalf of which such individual is accessing or using the Service, as applicable.</li>
                                </ul>
                            </div>

                            {/* The use of the Cookies */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#343f52' }}>
                                    <Settings className="w-8 h-8 text-purple-600" />
                                    The use of the Cookies
                                </h2>

                                <h3 className="text-2xl font-semibold mb-4" style={{ color: '#343f52' }}>Type of Cookies We Use</h3>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    Cookies can be "Persistent" or "Session" Cookies. Persistent Cookies remain on your personal computer or mobile device when You go offline, while Session Cookies are deleted as soon as You close Your web browser.
                                </p>
                                <p className="text-lg leading-relaxed mb-6" style={{ color: '#60697b' }}>
                                    We use both session and persistent Cookies for the purposes set out below:
                                </p>

                                <h4 className="text-xl font-semibold mb-4" style={{ color: '#343f52' }}>Necessary / Essential Cookies</h4>
                                <div className="bg-gray-50 rounded-lg p-6 mb-6" style={{ color: '#60697b' }}>
                                    <p><strong>Type:</strong> Session Cookies</p>
                                    <p><strong>Administered by:</strong> Us</p>
                                    <p><strong>Purpose:</strong> These Cookies are essential to provide You with services available through the Website and to enable You to use some of its features. They help to authenticate users and prevent fraudulent use of user accounts. Without these Cookies, the services that You have asked for cannot be provided, and We only use these Cookies to provide You with those services.</p>
                                </div>

                                <h4 className="text-xl font-semibold mb-4" style={{ color: '#343f52' }}>Functionality Cookies</h4>
                                <div className="bg-gray-50 rounded-lg p-6 mb-6" style={{ color: '#60697b' }}>
                                    <p><strong>Type:</strong> Persistent Cookies</p>
                                    <p><strong>Administered by:</strong> Us</p>
                                    <p><strong>Purpose:</strong> These Cookies allow us to remember choices You make when You use the Website, such as remembering your login details or language preference. The purpose of these Cookies is to provide You with a more personal experience and to avoid You having to re-enter your preferences every time You use the Website.</p>
                                </div>
                            </div>

                            {/* Your Choices Regarding Cookies */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6 flex items-center gap-3" style={{ color: '#343f52' }}>
                                    <Eye className="w-8 h-8 text-purple-600" />
                                    Your Choices Regarding Cookies
                                </h2>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    If You prefer to avoid the use of Cookies on the Website, first You must disable the use of Cookies in Your browser and then delete the Cookies saved in your browser associated with this website. You may use this option for preventing the use of Cookies at any time.
                                </p>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    If You do not accept Our Cookies, You may experience some inconvenience in Your use of the Website and some features may not function properly.
                                </p>
                                <p className="text-lg leading-relaxed mb-6" style={{ color: '#60697b' }}>
                                    If You'd like to delete Cookies or instruct Your web browser to delete or refuse Cookies, please visit the help pages of Your web browser.
                                </p>

                                <div className="space-y-4" style={{ color: '#60697b' }}>
                                    <p>For the Chrome web browser, please visit this page from Google: <a href="https://support.google.com/accounts/answer/32050" className="text-purple-600 hover:text-purple-700 underline" target="_blank" rel="noopener noreferrer">https://support.google.com/accounts/answer/32050</a></p>
                                    <p>For the Internet Explorer web browser, please visit this page from Microsoft: <a href="http://support.microsoft.com/kb/278835" className="text-purple-600 hover:text-purple-700 underline" target="_blank" rel="noopener noreferrer">http://support.microsoft.com/kb/278835</a></p>
                                    <p>For the Firefox web browser, please visit this page from Mozilla: <a href="https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored" className="text-purple-600 hover:text-purple-700 underline" target="_blank" rel="noopener noreferrer">https://support.mozilla.org/en-US/kb/delete-cookies-remove-info-websites-stored</a></p>
                                    <p>For the Safari web browser, please visit this page from Apple: <a href="https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac" className="text-purple-600 hover:text-purple-700 underline" target="_blank" rel="noopener noreferrer">https://support.apple.com/guide/safari/manage-cookies-and-website-data-sfri11471/mac</a></p>
                                    <p>For any other web browser, please visit Your web browser's official web pages.</p>
                                </div>
                            </div>

                            {/* Contact Us */}
                            <div className="mb-12">
                                <h2 className="text-3xl font-bold mb-6" style={{ color: '#343f52' }}>
                                    Contact Us
                                </h2>
                                <p className="text-lg leading-relaxed mb-4" style={{ color: '#60697b' }}>
                                    If you have any questions about this Cookie Policy, You can contact us:
                                </p>
                                <div className="bg-gray-50 rounded-lg p-6" style={{ color: '#60697b' }}>
                                    <p><strong>By email:</strong> info@betahub.ai</p>
                                </div>
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

export default CookiePolicyPage;
