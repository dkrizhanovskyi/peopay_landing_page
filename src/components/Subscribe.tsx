import React, { useState } from 'react';
import { Send, CheckCircle, XCircle } from 'lucide-react';

export default function Subscribe() {
  const [email, setEmail] = useState('');
  const [status, setStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;
    
    // Simulate API call
    setStatus('success');
    setEmail('');
    setTimeout(() => setStatus('idle'), 3000);
  };

  return (
    <section id="subscribe" className="py-20 bg-gradient-to-b from-white to-indigo-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-900">Stay Updated</h2>
          <p className="mt-4 text-lg text-gray-600">
            Subscribe to our newsletter for the latest updates and announcements
          </p>
          
          <form onSubmit={handleSubmit} className="mt-8">
            <div className="flex max-w-md mx-auto">
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter your email"
                className="flex-1 min-w-0 px-4 py-2 text-base text-gray-900 placeholder-gray-500 bg-white border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-indigo-600 focus:border-transparent"
                required
              />
              <button
                type="submit"
                className="inline-flex items-center px-4 py-2 border border-transparent text-base font-medium rounded-r-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              >
                <Send className="h-5 w-5" />
              </button>
            </div>
          </form>
          
          {status === 'success' && (
            <div className="mt-4 flex items-center justify-center text-green-600">
              <CheckCircle className="h-5 w-5 mr-2" />
              <span>Thank you for subscribing!</span>
            </div>
          )}
          
          {status === 'error' && (
            <div className="mt-4 flex items-center justify-center text-red-600">
              <XCircle className="h-5 w-5 mr-2" />
              <span>Something went wrong. Please try again.</span>
            </div>
          )}
        </div>
      </div>
    </section>
  );
}