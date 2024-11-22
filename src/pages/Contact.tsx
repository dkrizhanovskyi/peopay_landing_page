import { Mail, Phone, MapPin } from 'lucide-react';

export default function Contact() {
  return (
    <div className="py-16 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <h2 className="text-base text-indigo-600 font-semibold tracking-wide uppercase">Contact</h2>
          <p className="mt-2 text-3xl font-extrabold text-gray-900 sm:text-4xl">
            Get in touch
          </p>
          <p className="mt-4 text-lg text-gray-500">
            Have questions? We're here to help.
          </p>
        </div>

        <div className="mt-20 grid grid-cols-1 gap-16 lg:grid-cols-3">
          <div className="flex flex-col items-center">
            <Mail className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-6 text-lg font-medium text-gray-900">Email</h3>
            <p className="mt-2 text-base text-gray-500">support@peopay.com</p>
          </div>

          <div className="flex flex-col items-center">
            <Phone className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-6 text-lg font-medium text-gray-900">Phone</h3>
            <p className="mt-2 text-base text-gray-500">+1 (555) 123-4567</p>
          </div>

          <div className="flex flex-col items-center">
            <MapPin className="h-12 w-12 text-indigo-600" />
            <h3 className="mt-6 text-lg font-medium text-gray-900">Office</h3>
            <p className="mt-2 text-base text-gray-500">123 Innovation Street</p>
            <p className="text-base text-gray-500">San Francisco, CA 94103</p>
          </div>
        </div>

        <div className="mt-20">
          <form className="grid grid-cols-1 gap-y-6 sm:grid-cols-2 sm:gap-x-8">
            <div>
              <label htmlFor="first-name" className="block text-sm font-medium text-gray-700">
                First name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div>
              <label htmlFor="last-name" className="block text-sm font-medium text-gray-700">
                Last name
              </label>
              <div className="mt-1">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                Email
              </label>
              <div className="mt-1">
                <input
                  type="email"
                  name="email"
                  id="email"
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <label htmlFor="message" className="block text-sm font-medium text-gray-700">
                Message
              </label>
              <div className="mt-1">
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  className="py-3 px-4 block w-full shadow-sm focus:ring-indigo-500 focus:border-indigo-500 border-gray-300 rounded-md"
                />
              </div>
            </div>
            <div className="sm:col-span-2">
              <button type="submit" className="w-full btn-primary">
                Send message
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}