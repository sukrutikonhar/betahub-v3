import { Link, useLocation } from "react-router-dom";
import { ROUTES, ROUTE_LABELS } from "../router/routes";
import { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";

export default function Header({ bannerVisible = false }: { bannerVisible?: boolean }) {
    const location = useLocation();
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const isHomePage = location.pathname === ROUTES.HOME;

    const isActive = (path: string) => {
        return location.pathname === path;
    };

    const navigationItems = [
        { path: ROUTES.HOME, label: ROUTE_LABELS[ROUTES.HOME] },
        { path: ROUTES.ABOUT, label: ROUTE_LABELS[ROUTES.ABOUT] },
        { path: ROUTES.AGENTS, label: ROUTE_LABELS[ROUTES.AGENTS] },
        { path: ROUTES.PRICING, label: ROUTE_LABELS[ROUTES.PRICING] },
        { path: ROUTES.CONTACT, label: ROUTE_LABELS[ROUTES.CONTACT] },
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close mobile menu when route changes
    useEffect(() => {
        setIsMobileMenuOpen(false);
    }, [location.pathname]);

    // Determine header styling based on page and scroll state
    const getHeaderClasses = () => {
        let baseClasses = "w-full fixed left-0 right-0 z-50 transition-all duration-300";

        // Adjust top position based on banner visibility and scroll state
        if (isHomePage && bannerVisible && !isScrolled) {
            baseClasses += " top-16"; // 64px to account for banner height
        } else {
            baseClasses += " top-0"; // Normal position or sticky position
        }

        if (isHomePage) {
            if (isScrolled) {
                // Sticky header on home page - white background with backdrop blur
                baseClasses += " bg-white/95 backdrop-blur-md shadow-lg";
            } else {
                // Completely transparent header on home page
                baseClasses += " bg-transparent";
            }
        } else {
            // Other pages - always white background
            baseClasses += " bg-white shadow-sm";
        }

        return baseClasses;
    };

    const getNavLinkClasses = (path: string) => {
        const baseClasses = "font-medium transition-colors duration-300";
        const activeClasses = isActive(path) ? "text-muted-purple" : "";

        if (isHomePage && !isScrolled) {
            return `${baseClasses} ${activeClasses || "text-white hover:text-bright-pink"}`;
        }

        return `${baseClasses} ${activeClasses || "text-dark-gray hover:text-core-purple"}`;
    };

    const getNavLinkStyle = (path: string) => {
        if (isHomePage && !isScrolled && !isActive(path)) {
            return {
                textShadow: '0 2px 4px rgba(0,0,0,0.5), 0 0 10px rgba(0,0,0,0.3)'
            };
        }
        return {};
    };

    const toggleMobileMenu = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    return (
        <header className={getHeaderClasses()}>
            <div className="section-container">
                <div className="flex justify-between items-center py-3 sm:py-4">
                    <Link
                        to={ROUTES.HOME}
                        className="transition-all duration-300"
                    >
                        <img
                            src={isHomePage && !isScrolled ? "/logos/logo-white.webp" : "/logos/logo-dark.webp"}
                            alt="Beta Hub Logo"
                            className="w-auto h-8 sm:h-10 lg:h-12 object-contain"
                        />
                    </Link>

                    {/* Desktop Navigation */}
                    <nav className="hidden md:flex gap-4 lg:gap-6">
                        {navigationItems.map(({ path, label }) => (
                            <Link
                                key={path}
                                to={path}
                                className={getNavLinkClasses(path)}
                                style={getNavLinkStyle(path)}
                            >
                                {label}
                            </Link>
                        ))}
                    </nav>

                    {/* Mobile Menu Button */}
                    <button
                        onClick={toggleMobileMenu}
                        className="md:hidden p-2 rounded-lg transition-colors duration-200"
                        style={{
                            color: isHomePage && !isScrolled ? 'white' : '#343f52',
                            textShadow: isHomePage && !isScrolled ? '0 2px 4px rgba(0,0,0,0.5)' : 'none'
                        }}
                    >
                        {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                    </button>
                </div>

                {/* Mobile Navigation Menu */}
                {isMobileMenuOpen && (
                    <div className="md:hidden absolute top-full left-0 right-0 bg-white shadow-lg border-t border-gray-200">
                        <nav className="flex flex-col py-4">
                            {navigationItems.map(({ path, label }) => (
                                <Link
                                    key={path}
                                    to={path}
                                    className={`px-6 py-3 font-medium transition-colors duration-200 ${isActive(path)
                                        ? "text-muted-purple bg-purple-50"
                                        : "text-dark-gray hover:text-core-purple hover:bg-gray-50"
                                        }`}
                                >
                                    {label}
                                </Link>
                            ))}
                        </nav>
                    </div>
                )}
            </div>
        </header>
    );
}