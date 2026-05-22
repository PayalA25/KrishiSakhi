const schemes = [
  {
    id: 1,
    name: "PM-KISAN Scheme",
    description:
      "Provides financial support of ₹6000 per year to eligible farmers.",
    eligibility: "Small and marginal farmers",
    benefit: "Direct bank transfer support",
    link: "https://pmkisan.gov.in/",
  },

  {
    id: 2,
    name: "Soil Health Card Scheme",
    description:
      "Helps farmers know soil quality and improve crop productivity.",
    eligibility: "All farmers",
    benefit: "Free soil testing",
    link: "https://soilhealth.dac.gov.in/",
  },

  {
    id: 3,
    name: "Pradhan Mantri Fasal Bima Yojana",
    description:
      "Crop insurance scheme for protection against natural disasters.",
    eligibility: "Farmers growing notified crops",
    benefit: "Crop loss insurance",
    link: "https://pmfby.gov.in/",
  },

  {
    id: 4,
    name: "Kisan Credit Card (KCC)",
    description:
      "Provides farmers with short-term credit for agriculture needs.",
    eligibility: "Farmers, animal husbandry & fisheries",
    benefit: "Low-interest agricultural loans",
    link: "https://www.myscheme.gov.in/schemes/kcc",
  },

  {
    id: 5,
    name: "PM Krishi Sinchai Yojana",
    description:
      "Improves irrigation facilities and water conservation for farming.",
    eligibility: "All farmers",
    benefit: "Subsidy on irrigation systems",
    link: "https://pmksy.gov.in/",
  },

  {
    id: 6,
    name: "e-NAM",
    description:
      "Online agricultural market platform for better crop selling.",
    eligibility: "Farmers and traders",
    benefit: "Better market prices",
    link: "https://www.enam.gov.in/",
  },

  {
    id: 7,
    name: "National Livestock Mission",
    description:
      "Supports livestock development and animal farming.",
    eligibility: "Livestock farmers",
    benefit: "Financial support for livestock",
    link: "https://dahd.nic.in/",
  },

  {
    id: 8,
    name: "Paramparagat Krishi Vikas Yojana",
    description:
      "Encourages organic farming and sustainable agriculture.",
    eligibility: "Organic farmers",
    benefit: "Organic farming assistance",
    link: "https://pgsindia-ncof.gov.in/",
  },

  {
    id: 9,
    name: "PM KUSUM Scheme",
    description:
      "Provides solar pumps and renewable energy solutions for farmers.",
    eligibility: "Farmers with agricultural land",
    benefit: "Solar pump subsidy",
    link: "https://pmkusum.mnre.gov.in/",
  },

  {
    id: 10,
    name: "Agriculture Infrastructure Fund",
    description:
      "Provides financial support for agriculture infrastructure projects.",
    eligibility: "Farmers and agri-entrepreneurs",
    benefit: "Loan support with interest subsidy",
    link: "https://agriinfra.dac.gov.in/",
  },
];

const About = () => {
  return (
    <div className="min-h-screen bg-green-50 p-8">
      
      {/* Heading */}
      <h1 className="text-4xl font-bold text-center text-green-700 mb-10">
        Government Schemes for Farmers
      </h1>

      {/* Cards */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        
        {schemes.map((scheme) => (
          <div
            key={scheme.id}
            className="bg-white rounded-3xl shadow-lg p-6 hover:shadow-2xl transition duration-300 border border-green-100"
          >
            
            {/* Badge */}
            <div className="flex justify-between items-center mb-4">
              <span className="bg-green-100 text-green-700 px-3 py-1 rounded-full text-sm font-semibold">
                Govt Scheme
              </span>
            </div>

            {/* Title */}
            <h2 className="text-2xl font-bold text-green-800 mb-3">
              {scheme.name}
            </h2>

            {/* Description */}
            <p className="text-gray-600 mb-4">
              {scheme.description}
            </p>

            {/* Eligibility */}
            <div className="mb-3">
              <h3 className="font-semibold text-gray-800">
                Eligibility:
              </h3>

              <p className="text-sm text-gray-600">
                {scheme.eligibility}
              </p>
            </div>

            {/* Benefit */}
            <div className="mb-5">
              <h3 className="font-semibold text-gray-800">
                Benefit:
              </h3>

              <p className="text-sm text-gray-600">
                {scheme.benefit}
              </p>
            </div>

            {/* Button */}
            <a
              href={scheme.link}
              target="_blank"
              rel="noreferrer"
              className="block text-center bg-green-600 hover:bg-green-700 text-white py-2 rounded-xl transition"
            >
              Apply Now
            </a>

          </div>
        ))}

      </div>
    </div>
  );
};

export default About;