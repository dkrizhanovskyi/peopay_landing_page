import React from 'react';
import { Github, MessageCircle, Users } from 'lucide-react';

export default function Community() {
  return (
    <section id="community" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-3xl font-bold text-gray-900">Join Our Community</h2>
          <p className="mt-4 text-lg text-gray-600">
            Be part of the PayPeo ecosystem and help shape the future of decentralized payments
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 gap-8 md:grid-cols-3">
          <a
            href="https://github.com/dkrizhanovskyi/peopay_landing_page"
            target="_blank"
            rel="noopener noreferrer"
            className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Github className="h-12 w-12 text-gray-900 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Contribute on GitHub</h3>
            <p className="text-gray-600 text-center">Help us build and improve PayPeo</p>
          </a>

          <a
            href="#"
            className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <MessageCircle className="h-12 w-12 text-gray-900 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Join Discord</h3>
            <p className="text-gray-600 text-center">Connect with other community members</p>
          </a>

          <a
            href="#"
            className="flex flex-col items-center p-6 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors"
          >
            <Users className="h-12 w-12 text-gray-900 mb-4" />
            <h3 className="text-lg font-semibold mb-2">Developer Portal</h3>
            <p className="text-gray-600 text-center">Access documentation and resources</p>
          </a>
        </div>
      </div>
    </section>
  );
}