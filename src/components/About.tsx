import React from 'react';
import { Shield, Zap, Target, TrendingUp } from 'lucide-react';

const About = () => {
  return (
    <section id="about" className="py-20 relative">
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/3 -right-32 w-96 h-96 bg-purple-600/10 rounded-full blur-3xl"></div>
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-3xl sm:text-4xl font-bold text-white mb-6">
              About the <span className="text-purple-500">AI Avengers</span> Team
            </h2>
            
            <p className="text-gray-300 mb-6 leading-relaxed">
              The AI Avengers team, with over 25 years in the industry, has witnessed the evolution of digital marketing from websites to search, emails, social media, videos, podcasts, and beyond. We've identified a consistent theme: most small businesses fail miserably in these areas, wasting over $370B annually.
            </p>
            
            <p className="text-gray-300 mb-8 leading-relaxed">
              There are several reasons for this failure. First is the steep learning curve to set up successful campaigns that generate customer responses. Second, businesses are tired of losing money while tech giants profit from their marketing struggles. AI Avengers is here to change that with precise, improved, and cost-effective solutions!
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Shield className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Expert Team</h3>
                  <p className="text-gray-300">Top professionals in each category with MIT MBAs and Fortune 400 experience.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Zap className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">AI-Powered</h3>
                  <p className="text-gray-300">Using the best AI tools on the planet to deliver results.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <Target className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Results Focused</h3>
                  <p className="text-gray-300">We deliver new leads and sales to your business like no one else.</p>
                </div>
              </div>
              
              <div className="flex items-start">
                <div className="bg-gradient-to-br from-purple-500 to-blue-600 w-12 h-12 rounded-lg flex items-center justify-center mr-4 flex-shrink-0">
                  <TrendingUp className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-white mb-2">Data-Driven</h3>
                  <p className="text-gray-300">Strategies based on analytics and continuous improvement.</p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="relative">
            <div className="absolute inset-0 bg-gradient-to-br from-purple-600/20 to-blue-600/20 rounded-3xl blur-xl"></div>
            <div className="relative bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50">
              <h3 className="text-2xl font-bold text-white mb-6 text-center">The AI Avengers Difference</h3>
              
              <div className="space-y-6">
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl font-bold text-purple-400">1</span>
                  </div>
                  <p className="text-gray-300">We understand that most businesses waste money on ineffective digital marketing.</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl font-bold text-purple-400">2</span>
                  </div>
                  <p className="text-gray-300">Our team has decades of experience working with global brands and Fortune 400 companies.</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl font-bold text-purple-400">3</span>
                  </div>
                  <p className="text-gray-300">We leverage cutting-edge AI tools to identify and target your ideal customers.</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl font-bold text-purple-400">4</span>
                  </div>
                  <p className="text-gray-300">Our integrated approach ensures consistent messaging across all platforms.</p>
                </div>
                
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-purple-500/20 flex items-center justify-center mr-4 flex-shrink-0">
                    <span className="text-xl font-bold text-purple-400">5</span>
                  </div>
                  <p className="text-gray-300">We focus on ROI, ensuring you're not just spending money but making it.</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;