import React, { useState } from 'react';
import { Search, Sparkles } from 'lucide-react';
const Hero = () => {
  const [website, setWebsite] = useState('');
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [showForm, setShowForm] = useState(false);
  // const [facebook, setFacebook] = useState('');
  // const [instagram, setInstagram] = useState('');
  // const [tiktok, setTiktok] = useState('');
  // const [linkedin, setLinkedin] = useState('');
  // const [twitter, setTwitter] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!website) {
      setShowForm(true);
      return;
    }

    // Only proceed if all fields are filled when form is shown
    if (showForm && (!name || !email || !phone)) {
      alert('Please fill in all fields to complete your FREE AI audit');
      return;
    }

    // Form submission logic would go here
    alert('Thank you! Your AI audit request has been submitted.');
    setWebsite('');
    setName('');
    setEmail('');
    setPhone('');
    setShowForm(false);
  };

  return (
    <div className="relative  pb-16 sm:pt-24 sm:pb-24 overflow-hidden">
      {/* Background Elements */}
      <section className="flex flex-col md:flex-row items-center justify-between px-8 py-10 bg-white">
        {/* <!-- Left content (optional text) --> */}
        <div className="md:w-1/2 mb-10 md:mb-0">
          {/* <h1 className="text-4xl font-bold mb-4">Your Hero Title</h1>
           */}

          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              SuperCharge
            </span>{' '}
            your business with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              AI Avengers
            </span>
          </h1>
          <p className="text-lg text-gray-600">
            In today's competitive world, AI is eliminating thousands of jobs daily. Will your business be crushing it or getting crushed? Let our team of AI experts take your business to another level.
          </p>

        </div>

        {/* <!-- Right imasge --> */}
        <div className="md:w-1/3 flex justify-center">
          <img src="/characters/hero1.png" alt="Hero" className="w-full max-w-xl h-auto object-contain" />
        </div>
      </section>
      <div >
        <div className="absolute  -left-32 w-96 h-96 bg-purple-600/20 rounded-full blur-3xl"></div>
        <div className="absolute  -right-32 w-96 h-96 bg-blue-600/20 rounded-full blur-3xl"></div>
      </div>

      <div className="relative container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center mb-16">
          <div className="flex justify-center mb-6">
          </div>
          <h1 className=" sm:text-5xl md:text-1xl font-bold text-white mb-6 leading-tight">
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              Get Your Free AI Audit Today
            </span>{' '}
            your business with{' '}
            <span className="bg-clip-text text-transparent bg-gradient-to-r from-purple-400 to-blue-500">
              AI Avengers
            </span>
          </h1>
          <p className="text-neutral-5 mb-8 max-w-2xl mx-auto">
            Don't get left behind. Let our expert team analyze your website and show you how AI can automate, optimize, and scale your operations.
            {/* In today's competitive world, AI is eliminating thousands of jobs daily. Will your business be crushing it or getting crushed? Let our team of AI experts take your business to another level. */}
          </p>

          <div className="max-w-2xl mx-auto">
            <form onSubmit={handleSubmit} className="space-y-4">
              <div className="relative">
                <div className="flex">
                  <div className="relative flex-grow">
                    <Search className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Add website to get FREE AI audit"
                      value={website}
                      onChange={(e) => setWebsite(e.target.value)}
                      className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-l-md focus:outline-none focus:ring-2 focus:ring-purple-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-r-md transition-colors flex items-center"
                  >
                    <span>Get Audit</span>
                    <Sparkles className="ml-2 h-4 w-4" />
                  </button>
                </div>
              </div>
              {showForm && (
  <div className="space-y-4 animate-fadeIn">
    {/* Existing personal info fields */}
    <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
      <input
        type="text"
        placeholder="Your Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
      <input
        type="email"
        placeholder="Email Address"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
      <input
        type="tel"
        placeholder="Phone Number"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
        className="w-full px-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        required
      />
    </div>

    {/* Social Media Fields */}
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z" clipRule="evenodd" />
          </svg>
        </div>
        <input
          type="url"
          placeholder="Facebook URL"
          className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
          </svg>
        </div>
        <input
          type="url"
          placeholder="Instagram URL"
          className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
          </svg>
        </div>
        <input
          type="url"
          placeholder="Twitter URL"
          className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
          </svg>
        </div>
        <input
          type="url"
          placeholder="LinkedIn URL"
          className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>

      <div className="relative">
        <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
          <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
            <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
          </svg>
        </div>
        <input
          type="url"
          placeholder="TikTok URL"
          className="w-full pl-10 pr-4 py-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-purple-500"
        />
      </div>
    </div>

    {/* Existing submit button */}
    <button
      type="submit"
      className="w-full bg-purple-600 hover:bg-purple-700 text-white px-6 py-3 rounded-md transition-colors flex items-center justify-center"
    >
      <span>Complete FREE AI Audit</span>
      <Sparkles className="ml-2 h-4 w-4" />
    </button>
  </div>
)}

            </form>
          </div>
        </div>

        <div className="relative">
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="w-full h-64 bg-gradient-to-r from-purple-600/20 to-blue-600/20 blur-3xl rounded-full"></div>
          </div>
          <div className="relative grid grid-cols-1 md:grid-cols-3 gap-8 text-center">
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 transform transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-2">20+ Years</h3>
              <p className="text-gray-300">Experience in the online space</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 transform transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-2">Fortune 400</h3>
              <p className="text-gray-300">Companies as our clients</p>
            </div>
            <div className="bg-gray-800/50 backdrop-blur-sm p-8 rounded-xl border border-gray-700/50 transform transition-transform hover:scale-105">
              <h3 className="text-2xl font-bold text-white mb-2">MIT MBAs</h3>
              <p className="text-gray-300">On our expert team</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;