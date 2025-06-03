import React from 'react';
import { Globe, Search, Mail, FileText, Video, MessageSquare, BrainCircuit, Database } from 'lucide-react';

const ServiceCard = ({ icon: Icon, title, description }: { icon: React.ElementType, title: string, description: string }) => (
  <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 transition-all hover:bg-gray-800/80 hover:border-purple-500/50 group">
    <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-16 h-16 rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
      <Icon className="h-8 w-8 text-white" />
    </div>
    <h3 className="text-xl font-bold text-white mb-3">{title}</h3>
    <p className="text-gray-300 leading-relaxed">{description}</p>
  </div>
);

const Services = () => {
  const services = [
    {
      icon: Globe,
      title: "Website Development",
      description: "The foundation of your online presence. We create modern, optimized websites that convert visitors into customers."
    },
    {
      icon: Search,
      title: "AI-Powered Search",
      description: "Dominate Google and other search channels with our AI-optimized content and search strategies."
    },
    {
      icon: FileText,
      title: "Content Creation",
      description: "AI Avengers uses top tools to improve your content constantly, increasing visibility to new clients and sales."
    },
    {
      icon: Mail,
      title: "Email Marketing",
      description: "When done properly, emails work. We use your existing content to create effective email campaigns."
    },
    {
      icon: Video,
      title: "Video Marketing",
      description: "We enhance existing videos and create new ones using AI to connect with clients across all media channels."
    },
    {
      icon: MessageSquare,
      title: "SMS Marketing",
      description: "The most opened form of communication. Let us increase your texting business to create new sales daily."
    },
    {
      icon: Database,
      title: "CRM Integration",
      description: "The brains of the operation. Collect data, track sales, and retarget clients through an integrated system."
    },
    {
      icon: BrainCircuit,
      title: "AI Strategy",
      description: "Custom AI solutions tailored to your specific business needs for maximum growth and efficiency."
    }
  ];

  return (
    <section id="services" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Our AI-Powered <span className="text-purple-500">Services</span>
          </h2>
          <p className="text-gray-300 text-lg">
            From search to social, we identify, target, build, and implement strategies to grow your business like no other company in the world.
          </p>
        </div>
        
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <ServiceCard 
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services;