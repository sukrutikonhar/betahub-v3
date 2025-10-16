import { Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import { X } from "lucide-react";
import Header from "./Header";
import Footer from "./Footer";
import ScrollToTop from "./ScrollToTop";
import { ROUTES } from "../router/routes";

export default function Layout() {
    const location = useLocation();
    const isHomePage = location.pathname === ROUTES.HOME;
    const [showBanner, setShowBanner] = useState(true);

    return (
        <div className="flex flex-col min-h-screen">
            <ScrollToTop />
            {/* Gartner Banner - Only show on home page */}
            {isHomePage && showBanner && (
                <section className="w-full py-3 relative z-50 bg-blue-900">
                    <div className="section-container">
                        <div className="flex items-center justify-center gap-2 text-sm">
                            <span className="font-medium text-white">Proud Exhibitor at #GartnerSYM | Meet us at the Gartner IT Symposium, Barcelona | 10-13 November, 2025 |</span>
                            <a
                                href="/gartner-2025"
                                className="text-orange-500 underline hover:text-orange-400 transition-colors duration-200 cursor-pointer font-medium"
                            >
                                Learn More
                            </a>
                        </div>
                        <button
                            onClick={() => setShowBanner(false)}
                            className="absolute right-4 top-1/2 transform -translate-y-1/2 text-white hover:text-gray-200 transition-colors duration-200"
                        >
                            <X className="w-5 h-5" />
                        </button>
                    </div>
                </section>
            )}
            <Header bannerVisible={isHomePage && showBanner} />
            <div className={`main-content-wrapper ${isHomePage ? '' : 'pt-20'}`}>
                <main className="flex-1">
                    <Outlet key={location.pathname} />
                </main>
            </div>
            <Footer />
        </div>
    );
}
