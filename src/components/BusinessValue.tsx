import React from 'react';
import { Activity, DollarSign, Users, Clock } from 'lucide-react';

const BusinessValue = () => {
  return (
    <section id="value" className="py-20 relative bg-gray-950">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl"></div>
        <div className="absolute bottom-1/4 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold text-white mb-4">
            Why <span className="text-purple-500">AI Avengers</span> Will Transform Your Business
          </h2>
          <p className="text-gray-300 text-lg">
            Stop wasting money on ineffective marketing. Our AI-powered solutions deliver real results for your business.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all">
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Activity className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Increased Online Visibility</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Most websites are outdated or poorly optimized. Our AI-driven approach ensures your content and keywords (both long and short tail) are perfectly positioned to dominate search results. This foundation sets the tone for everything else.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Improved search engine rankings
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Higher quality website traffic
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Better user engagement metrics
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all">
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <DollarSign className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Better ROI on Marketing Spend</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Businesses waste over $370B annually on ineffective digital marketing. Our targeted approach ensures every dollar spent contributes to lead generation and sales. No more gambling on Google or Facebook ads without results.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Reduced cost per acquisition
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Higher conversion rates
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Measurable return on investment
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all">
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Users className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Targeted Customer Acquisition</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              Our AI tools identify, target, and build strategies for reaching your ideal customers. We don't just increase traffic—we attract the right visitors who are likely to convert into paying customers and become loyal advocates.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Precision audience targeting
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Improved customer quality
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Higher customer lifetime value
              </li>
            </ul>
          </div>
          
          <div className="bg-gray-800/30 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 hover:border-purple-500/30 transition-all">
            <div className="flex items-start mb-6">
              <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4">
                <Clock className="h-6 w-6 text-white" />
              </div>
              <h3 className="text-xl font-bold text-white">Save Time and Resources</h3>
            </div>
            <p className="text-gray-300 mb-6 leading-relaxed">
              The learning curve for effective digital marketing is steep. Our team handles everything while you focus on running your business. We leverage AI to automate processes that would normally require large teams and significant time investment.
            </p>
            <ul className="space-y-2 text-gray-300">
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Streamlined marketing operations
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Reduced need for in-house expertise
              </li>
              <li className="flex items-center">
                <span className="w-2 h-2 bg-purple-500 rounded-full mr-2"></span>
                Faster implementation of strategies
              </li>
            </ul>
          </div>
        </div>
        
        <div className="mt-16 text-center">
          <a 
            href="#contact" 
            className="inline-flex items-center bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white font-bold py-3 px-8 rounded-lg transition-all transform hover:scale-105"
          >
            Start Crushing Your Competition
            <svg className="ml-2 w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7l5 5m0 0l-5 5m5-5H6"></path>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default BusinessValue;