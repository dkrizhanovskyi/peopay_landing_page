import { Users, Shield, Globe } from 'lucide-react';

export default function About() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Our Story</h2>
          <p className="mt-2 text-3xl leading-8 font-extrabold tracking-tight text-gray-900 sm:text-4xl">
            Revolutionizing Global Payments
          </p>
          <p className="mt-4 max-w-2xl text-xl text-gray-500 lg:mx-auto">
            PeoPay was founded with a vision to make financial services accessible to everyone, everywhere.
          </p>
        </div>

        <div className="mt-20">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-3">
            <div className="text-center">
              <div className="flex justify-center">
                <Users className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Our Mission</h3>
              <p className="mt-2 text-base text-gray-500">
                To empower individuals and businesses with seamless, secure, and accessible financial solutions.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Shield className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Our Values</h3>
              <p className="mt-2 text-base text-gray-500">
                Security, transparency, and innovation are at the core of everything we do.
              </p>
            </div>

            <div className="text-center">
              <div className="flex justify-center">
                <Globe className="h-12 w-12 text-indigo-600" />
              </div>
              <h3 className="mt-6 text-lg font-medium text-gray-900">Our Impact</h3>
              <p className="mt-2 text-base text-gray-500">
                Serving millions across 150+ countries, making financial inclusion a reality.
              </p>
            </div>
          </div>
        </div>

        <div className="mt-20">
          <img
            className="rounded-lg shadow-xl"
            src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2070&q=80"
            alt="Team collaboration"
          />
        </div>
      </div>
    </div>
  );
}