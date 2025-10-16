import React, { useState, useEffect } from 'react';
import { ArrowUp } from 'lucide-react';

interface ReadingProgressProps {
    color?: string;
    size?: 'sm' | 'md' | 'lg';
}

const ReadingProgress: React.FC<ReadingProgressProps> = ({
    color = '#3c1470',
    size = 'md'
}) => {
    const [progress, setProgress] = useState(0);

    useEffect(() => {
        const updateProgress = () => {
            const scrollTop = window.scrollY;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const scrollPercent = (scrollTop / docHeight) * 100;
            setProgress(Math.min(scrollPercent, 100));
        };

        window.addEventListener('scroll', updateProgress);
        return () => window.removeEventListener('scroll', updateProgress);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    const sizeClasses = {
        sm: 'w-12 h-12',
        md: 'w-16 h-16',
        lg: 'w-20 h-20'
    };

    const iconSizeClasses = {
        sm: 'w-4 h-4',
        md: 'w-5 h-5',
        lg: 'w-6 h-6'
    };

    const strokeWidth = size === 'sm' ? 2 : size === 'md' ? 3 : 4;
    const radius = size === 'sm' ? 20 : size === 'md' ? 28 : 36;
    const circumference = 2 * Math.PI * radius;
    const strokeDasharray = circumference;
    const strokeDashoffset = circumference - (progress / 100) * circumference;

    return (
        <div className="fixed bottom-6 right-6 z-50">
            <button
                onClick={scrollToTop}
                className="relative group transition-all duration-300 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-300 focus:ring-opacity-50 rounded-full"
                aria-label="Scroll to top"
            >
                {/* Background Circle */}
                <svg
                    className={`${sizeClasses[size]} transform -rotate-90`}
                    viewBox={`0 0 ${(radius + strokeWidth) * 2} ${(radius + strokeWidth) * 2}`}
                >
                    <circle
                        cx={radius + strokeWidth}
                        cy={radius + strokeWidth}
                        r={radius}
                        stroke="currentColor"
                        strokeWidth={strokeWidth}
                        fill="none"
                        className="text-gray-200"
                    />
                    {/* Progress Circle */}
                    <circle
                        cx={radius + strokeWidth}
                        cy={radius + strokeWidth}
                        r={radius}
                        stroke={color}
                        strokeWidth={strokeWidth}
                        fill="none"
                        strokeDasharray={strokeDasharray}
                        strokeDashoffset={strokeDashoffset}
                        strokeLinecap="round"
                        className="transition-all duration-300 ease-out"
                        style={{
                            strokeDasharray,
                            strokeDashoffset
                        }}
                    />
                </svg>

                {/* Up Arrow Icon */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <ArrowUp
                        className={`${iconSizeClasses[size]} transition-all duration-300 group-hover:scale-110`}
                        style={{ color }}
                    />
                </div>
            </button>
        </div>
    );
};

export default ReadingProgress;
