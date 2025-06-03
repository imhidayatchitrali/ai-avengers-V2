import React from 'react';
import { Search, Users, BarChart, Video, FileText, Database } from 'lucide-react';

interface ServiceCardProps {
    title: string;
    description: string;
    icon: React.ReactNode;
}

const ServiceCard: React.FC<ServiceCardProps> = ({ title, description, icon }) => {
    return (
        <div className="bg-gray-800/50 backdrop-blur-sm rounded-xl p-6 hover:shadow-xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1 border border-gray-700/50 group">
            <div className="flex flex-col h-full">
                <div className="mb-4 p-3 bg-purple-600/20 rounded-lg w-fit group-hover:bg-purple-600/30 transition-colors">
                    {icon}
                </div>
                <h3 className="text-xl font-semibold text-white mb-3">{title}</h3>
                <p className="text-gray-300 flex-grow">{description}</p>
            </div>
        </div>
    );
};

const ServicesNew: React.FC = () => {
    const services = [
        {
            title: "SEO Optimization",
            description: "AI-powered analysis and optimization of your content to improve search rankings and drive organic traffic.",
            icon: <Search className="h-8 w-8 text-purple-400" />
        },
        {
            title: "Social Media Management",
            description: "Automated content creation and scheduling across all social platforms to maintain a consistent, engaging presence.",
            icon: <Users className="h-8 w-8 text-purple-400" />
        },
        {
            title: "Data Analysis & Insights",
            description: "Advanced AI analysis of your customer data to identify patterns and opportunities for growth.",
            icon: <BarChart className="h-8 w-8 text-purple-400" />
        },
        {
            title: "Video Content Creation",
            description: "Transform existing content into engaging video formats optimized for various platforms.",
            icon: <Video className="h-8 w-8 text-purple-400" />
        },
        {
            title: "Content Enhancement",
            description: "AI-powered improvement of your existing content to maximize engagement and conversion rates.",
            icon: <FileText className="h-8 w-8 text-purple-400" />
        },
        {
            title: "Lead Generation & CRM",
            description: "Identify and target potential customers with AI-driven lead generation and management.",
            icon: <Database className="h-8 w-8 text-purple-400" />
        }
    ];

    return (
        <section id="services" className="py-20 bg-gray-900">
            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Services</h2>
                    <div className="w-20 h-1.5 bg-gradient-to-r from-purple-500 to-blue-500 mx-auto mb-6 rounded-full"></div>
                    <p className="text-xl text-gray-300 max-w-3xl mx-auto">
                        Leverage the power of AI to transform your business operations and digital presence.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service, index) => (
                        <ServiceCard
                            key={index}
                            title={service.title}
                            description={service.description}
                            icon={service.icon}
                        />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ServicesNew;