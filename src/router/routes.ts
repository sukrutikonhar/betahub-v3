// Route constants for easy management
export const ROUTES = {
  HOME: "/",
  ABOUT: "/about",
  AGENTS: "/agents",
  PRICING: "/pricing",
  CONTACT: "/contact",
  GARTNER: "/gartner-2025",
  PRIVACY_POLICY: "/privacy-policy",
  TERMS_OF_SERVICE: "/terms-of-service",
  COOKIE_POLICY: "/cookie-policy",
} as const;

// Route labels for navigation
export const ROUTE_LABELS = {
  [ROUTES.HOME]: "Home",
  [ROUTES.ABOUT]: "About",
  [ROUTES.AGENTS]: "Agents",
  [ROUTES.PRICING]: "Pricing",
  [ROUTES.CONTACT]: "Contact",
  [ROUTES.GARTNER]: "Gartner",
  [ROUTES.PRIVACY_POLICY]: "Privacy Policy",
  [ROUTES.TERMS_OF_SERVICE]: "Terms of Service",
  [ROUTES.COOKIE_POLICY]: "Cookie Policy",
} as const;

// Type for route keys
export type RouteKey = keyof typeof ROUTES;
