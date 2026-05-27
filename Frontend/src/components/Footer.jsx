const Footer = () => {
  return (
    <footer className="bg-green-900 text-white mt-auto">
      
      {/* Main Footer */}
      <div className="max-w-7xl mx-auto px-6 py-12 grid md:grid-cols-3 gap-10">
        
        {/* Brand Section */}
        <div>
          <h2 className="text-3xl font-bold text-yellow-400">
            KrishiSakhi
          </h2>

          <p className="mt-4 text-green-100 leading-relaxed">
            Empowering farmers with smart agriculture solutions,
            crop guidance, and modern technology for better farming.
          </p>
        </div>

        {/* Quick Links */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Quick Links
          </h3>

          <ul className="space-y-3 text-green-100">
            <li className="hover:text-yellow-300 cursor-pointer transition">
              Home
            </li>

            <li className="hover:text-yellow-300 cursor-pointer transition">
              About
            </li>

            <li className="hover:text-yellow-300 cursor-pointer transition">
              Services
            </li>

            <li className="hover:text-yellow-300 cursor-pointer transition">
              Contact
            </li>
          </ul>
        </div>

        {/* Contact Info */}
        <div>
          <h3 className="text-xl font-semibold mb-4">
            Contact Us
          </h3>

          <div className="space-y-3 text-green-100">
            <p>📍 Maharashtra, India</p>
            <p>📞 +91 9876543210</p>
            <p>✉️ support@krishisakhi.com</p>
          </div>
        </div>
      </div>

      {/* Bottom Footer */}
      <div className="border-t border-green-800 py-4 text-center text-green-200 text-sm">
        © 2026 KrishiSakhi. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;