import { X } from 'lucide-react';
import { useState } from 'react';

interface DemoFormProps {
    isOpen: boolean;
    onClose: () => void;
}

export default function DemoForm({ isOpen, onClose }: DemoFormProps) {
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        areaOfInterest: '',
        selectedAgent: ''
    });

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault();
        console.log('Form submitted:', formData);
        onClose();
        setFormData({ firstName: '', lastName: '', email: '', phone: '', areaOfInterest: '', selectedAgent: '' });
    };

    if (!isOpen) return null;

    return (
        <div className="fixed inset-0 bg-black/50 flex items-center justify-center z-50 p-4">
            <div className="bg-white rounded-3xl p-8 max-w-2xl w-full max-h-[90vh] overflow-y-auto">
                <div className="flex justify-between items-center mb-6">
                    <h3 className="text-2xl font-bold" style={{ color: '#343f52' }}>
                        Book a Demo
                    </h3>
                    <button
                        onClick={onClose}
                        className="p-2 hover:bg-gray-100 rounded-full transition-colors"
                    >
                        <X className="w-6 h-6 text-gray-500" />
                    </button>
                </div>

                <form onSubmit={handleSubmit}>
                    {/* 3 Rows x 2 Columns Grid for Desktop */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                First Name *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.firstName}
                                onChange={(e) => setFormData({ ...formData, firstName: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                placeholder="Enter your first name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Last Name *
                            </label>
                            <input
                                type="text"
                                required
                                value={formData.lastName}
                                onChange={(e) => setFormData({ ...formData, lastName: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                placeholder="Enter your last name"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Email *
                            </label>
                            <input
                                type="email"
                                required
                                value={formData.email}
                                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                placeholder="Enter your email address"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Phone *
                            </label>
                            <input
                                type="tel"
                                required
                                value={formData.phone}
                                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                placeholder="Enter your phone number"
                            />
                        </div>

                        <div>
                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                Area of Interest *
                            </label>
                            <select
                                required
                                value={formData.areaOfInterest}
                                onChange={(e) => setFormData({ ...formData, areaOfInterest: e.target.value })}
                                className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                            >
                                <option value="">Select area of interest</option>
                                <option value="agent">Agent</option>
                                <option value="consultation">Consultation</option>
                            </select>
                        </div>

                        {/* Select Agent - appears in the grid when agent is selected */}
                        {formData.areaOfInterest === 'agent' && (
                            <div>
                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                    Select Agent *
                                </label>
                                <select
                                    required={formData.areaOfInterest === 'agent'}
                                    value={formData.selectedAgent}
                                    onChange={(e) => setFormData({ ...formData, selectedAgent: e.target.value })}
                                    className="w-full px-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-purple-500 focus:border-transparent transition-all"
                                >
                                    <option value="">Select an agent</option>
                                    <option value="ProcessFlow AI">ProcessFlow AI</option>
                                    <option value="TestForge AI">TestForge AI</option>
                                    <option value="Fit-Gap AI">Fit-Gap AI</option>
                                    <option value="Config AI">Config AI</option>
                                    <option value="SkillForgeX">SkillForgeX</option>
                                    <option value="RetrievX">RetrievX</option>
                                    <option value="HelpDeskX">HelpDeskX</option>
                                    <option value="CodeDocIQ">CodeDocIQ</option>
                                    <option value="ResolvIQ">ResolvIQ</option>
                                    <option value="FinOptima IQ">FinOptima IQ</option>
                                </select>
                            </div>
                        )}
                    </div>

                    <div className="flex gap-4 pt-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="flex-1 px-6 py-3 border border-gray-300 text-gray-700 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="flex-1 px-6 py-3 text-white rounded-xl font-semibold hover:opacity-90 transition-all cursor-pointer"
                            style={{ background: 'linear-gradient(135deg, #3c1470 0%, #5a2a8a 100%)' }}
                        >
                            Book Demo
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}
