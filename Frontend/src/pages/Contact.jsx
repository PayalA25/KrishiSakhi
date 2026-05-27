const Contact = () => {
  return (
    <div className="min-h-screen bg-gradient-to-b from-green-50 to-white">
      
      {/* Heading Section */}
      <div className="bg-green-700 text-white py-16 px-6 text-center">
        <h1 className="text-4xl md:text-5xl font-bold">
          Contact KrishiSakhi
        </h1>

        <p className="mt-4 text-green-100 max-w-2xl mx-auto">
          We are here to help farmers with smart agriculture solutions and support.
        </p>
      </div>

      {/* Main Section */}
      <div className="max-w-6xl mx-auto px-6 py-16 grid md:grid-cols-2 gap-10">
        
        {/* Contact Form */}
        <div className="bg-white shadow-xl rounded-3xl p-8 border border-green-100">
          <h2 className="text-3xl font-bold text-green-700 mb-6">
            Send Message
          </h2>

          <form className="space-y-5">
            <div>
              <label className="block mb-2 font-medium">
                Full Name
              </label>

              <input
                type="text"
                placeholder="Enter your name"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Email
              </label>

              <input
                type="email"
                placeholder="Enter your email"
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              />
            </div>

            <div>
              <label className="block mb-2 font-medium">
                Message
              </label>

              <textarea
                rows="5"
                placeholder="Write your message..."
                className="w-full border border-gray-300 rounded-2xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-green-500"
              ></textarea>
            </div>

            <button
              type="submit"
              className="w-full bg-green-700 hover:bg-green-800 text-white py-3 rounded-2xl font-semibold transition"
            >
              Send Message
            </button>
          </form>
        </div>

        {/* Contact Info */}
        <div className="space-y-6">
          
          <div className="bg-white shadow-xl rounded-3xl p-8 border border-green-100">
            <h2 className="text-3xl font-bold text-green-700 mb-6">
              Get In Touch
            </h2>

            <div className="space-y-5">
              
              <div>
                <h3 className="font-semibold text-lg">📍 Address</h3>
                <p className="text-gray-600">
                  Maharashtra, India
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">📞 Phone</h3>
                <p className="text-gray-600">
                  +91 9876543210
                </p>
              </div>

              <div>
                <h3 className="font-semibold text-lg">✉️ Email</h3>
                <p className="text-gray-600">
                  support@krishisakhi.com
                </p>
              </div>
            </div>
          </div>

          {/* Extra Cards */}
          <div className="grid sm:grid-cols-2 gap-5">
            
            <div className="bg-green-700 text-white p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                Farmer Support
              </h3>

              <p className="text-green-100">
                Guidance for crops, soil health, and farming solutions.
              </p>
            </div>

            <div className="bg-yellow-400 p-6 rounded-3xl shadow-lg">
              <h3 className="text-xl font-semibold mb-3">
                24/7 Help
              </h3>

              <p>
                Our support team is always available for farmers.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;