export interface PageSEO {
  title: string;
  description: string;
  keywords: string;
  ogImage?: string;
}

export const seoConfig: Record<string, PageSEO> = {
  "/": {
    title: "Beta Hub - AI Agents for Enterprise Transformation | Autonomous AI Solutions",
    description: "Bridge the gap between AI vision and enterprise execution with Beta Hub. Discover pre-built AI agents for workflow automation, knowledge management, and technical excellence. Transform your business with intelligent, scalable AI solutions.",
    keywords: "AI agents, enterprise AI, artificial intelligence, workflow automation, business automation, AI transformation, autonomous agents, ProcessFlow AI, SkillForgeX, CodeDocIQ, enterprise technology, AI solutions, intelligent automation, digital transformation",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/about": {
    title: "About Beta Hub - Leading AI Innovation & Enterprise Solutions",
    description: "Meet the visionary team behind Beta Hub. Learn about our mission to revolutionize enterprise operations with autonomous AI agents. Founded by industry experts with decades of experience in Microsoft, Amazon, and enterprise technology.",
    keywords: "about Beta Hub, AI company, enterprise AI solutions, AI innovation, technology leadership, Manish Singh, Sudhie Siddautam, AI experts, enterprise transformation team",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/agents": {
    title: "AI Agents - ProcessFlow, SkillForgeX, CodeDocIQ | Beta Hub",
    description: "Explore Beta Hub's comprehensive suite of AI agents for enterprise: ProcessFlow AI for workflow automation, TestForge AI for QA, SkillForgeX for training, CodeDocIQ for documentation, and more. Pre-built solutions for immediate implementation.",
    keywords: "AI agents, ProcessFlow AI, TestForge AI, SkillForgeX, CodeDocIQ, RetrievX, HelpDeskX, ResolvIQ, FinOptima IQ, Fit-Gap AI, Config AI, workflow automation, QA automation, training agents, documentation agents",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/pricing": {
    title: "Pricing - Beta Hub AI Agents | Simple, Transparent Pricing Plans",
    description: "Choose the perfect Beta Hub plan for your enterprise AI journey. Starter ($5), Growth ($50), Enterprise (Custom), and Custom solutions. Scale as you grow with flexible pricing, credit rollover, and dedicated support.",
    keywords: "Beta Hub pricing, AI agent pricing, enterprise AI cost, AI credits pricing, AI agent plans, pricing tiers, custom AI solutions, enterprise AI pricing, AI agent subscription",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/contact": {
    title: "Contact Beta Hub - Get Started with AI Transformation Today",
    description: "Ready to transform your enterprise with AI? Contact Beta Hub for a personalized consultation. Book a demo, schedule a call, or reach out to our team of AI experts. Let's turn your AI vision into measurable results.",
    keywords: "contact Beta Hub, AI consultation, book demo, enterprise AI contact, AI solutions inquiry, schedule demo, get in touch, AI experts contact",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/gartner-2025": {
    title: "Meet Beta Hub at Gartner IT Symposium 2025 Barcelona | Booth 308",
    description: 'Join Beta Hub at Gartner IT Symposium XPO 2025 in Barcelona, November 10-13. Visit Booth 308 to explore AI agents, attend our session "Scaling beyond AI Pilot", and meet our expert team. Book a meeting today!',
    keywords: "Gartner IT Symposium 2025, Gartner Barcelona, AI conference, Beta Hub Gartner, enterprise AI event, IT symposium, AI agents showcase, technology conference, Barcelona tech event",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/privacy-policy": {
    title: "Privacy Policy - Beta Hub Data Protection & Privacy Rights",
    description: "Learn how Beta Hub protects your personal information and privacy rights. Our comprehensive privacy policy covers data collection, usage, sharing, and your rights under GDPR and other privacy laws.",
    keywords: "privacy policy, data protection, GDPR, personal information, privacy rights, data security, Beta Hub privacy, user privacy, data collection, privacy compliance",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/terms-of-service": {
    title: "Terms of Service - Beta Hub Legal Terms & Conditions",
    description: "Read Beta Hub's Terms of Service to understand your rights and obligations when using our AI agent platform. Comprehensive legal terms covering service usage, intellectual property, and user responsibilities.",
    keywords: "terms of service, legal terms, user agreement, service conditions, Beta Hub terms, legal compliance, user obligations, service usage, terms and conditions",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
  "/cookie-policy": {
    title: "Cookie Policy - Beta Hub Cookie Usage & Management",
    description: "Learn about Beta Hub's use of cookies and similar technologies. Our cookie policy explains what cookies we use, how we use them, and how you can manage your cookie preferences.",
    keywords: "cookie policy, cookies, tracking, website analytics, cookie management, Beta Hub cookies, privacy settings, cookie consent, web tracking",
    ogImage: "https://betahub.ai/logos/logo-dark.webp",
  },
};

export function getSEOConfig(pathname: string): PageSEO {
  return seoConfig[pathname] || seoConfig["/"];
}
