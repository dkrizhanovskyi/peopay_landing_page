const Footer = () => {
  return (
    <footer className="bg-white border-t mt-auto">
      <div className="max-w-5xl mx-auto px-4 py-8">
        <div className="flex justify-between items-center">
          <div className="text-sm text-gray-500">
            © 2024 PayPeo. All rights reserved.
          </div>
          <div className="flex gap-6">
            <a
              href="https://github.com/dkrizhanovskyi/peopay_landing_page"
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-500 hover:text-gray-900"
            >
              GitHub
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900"
            >
              Documentation
            </a>
            <a
              href="#"
              className="text-gray-500 hover:text-gray-900"
            >
              Contact
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;