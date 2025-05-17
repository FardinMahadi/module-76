import FuzzyText from "@/app/reactbits";
import React from "react";

const ServiceDetailsPage = ({ params }) => {
  const data = [
    {
      _id: "65f1a2b3c4d5e6f7g8h9i0j1",
      title: "Web Development",
      description: "Custom website development using modern technologies",
      price: 999,
      duration: "2-3 weeks",
      features: ["Responsive Design", "SEO Optimization", "Fast Loading"],
      service_image:
        "https://images.unsplash.com/photo-1547658719-da2b51169166?w=500&auto=format&fit=crop&q=60",
    },
    {
      _id: "65f1a2b3c4d5e6f7g8h9i0j2",
      title: "Mobile App Development",
      description: "Native and cross-platform mobile applications",
      price: 1499,
      duration: "4-6 weeks",
      features: ["iOS & Android", "Push Notifications", "Offline Support"],
      service_image:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=500&auto=format&fit=crop&q=60",
    },
    {
      _id: "65f1a2b3c4d5e6f7g8h9i0j3",
      title: "UI/UX Design",
      description: "Professional user interface and experience design",
      price: 799,
      duration: "1-2 weeks",
      features: ["Wireframing", "Prototyping", "User Testing"],
      service_image:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=500&auto=format&fit=crop&q=60",
    },
    {
      _id: "65f1a2b3c4d5e6f7g8h9i0j4",
      title: "Cloud Solutions",
      description: "Cloud infrastructure and deployment services",
      price: 1299,
      duration: "3-4 weeks",
      features: ["AWS/Azure", "Scalability", "Security"],
      service_image:
        "https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=500&auto=format&fit=crop&q=60",
    },
  ];
  const id = params?.id;
  const singleData = data.find((d) => d._id == id);

  if (singleData) {
    return (
      <div className="max-w-7xl mx-auto p-6">
        <div className="bg-gray-800 rounded-lg shadow-lg overflow-hidden border border-blue-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-2">
            <div className="relative h-96 lg:h-full">
              <img
                src={singleData.service_image}
                alt={singleData.title}
                className="w-full h-full object-cover"
              />
            </div>

            <div className="p-8">
              <h1 className="text-3xl font-bold text-white mb-4 relative">
                <span className="relative z-10">{singleData.title}</span>
                <span className="absolute inset-0 text-blue-400 blur-sm opacity-70">
                  {singleData.title}
                </span>
              </h1>

              <div className="flex items-center gap-4 mb-6">
                <span className="text-2xl font-semibold text-blue-400 relative">
                  <span className="relative z-10">${singleData.price}</span>
                  <span className="absolute inset-0 text-blue-400 blur-sm opacity-70">
                    ${singleData.price}
                  </span>
                </span>
                <span className="text-gray-300">
                  Duration: {singleData.duration}
                </span>
              </div>

              <p className="text-gray-300 text-lg mb-6">
                {singleData.description}
              </p>

              <div className="mb-6">
                <h2 className="text-xl font-semibold text-white mb-3 relative">
                  <span className="relative z-10">Key Features</span>
                  <span className="absolute inset-0 text-blue-400 blur-sm opacity-70">
                    Key Features
                  </span>
                </h2>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {singleData.features.map((feature, index) => (
                    <li key={index} className="flex items-center gap-2">
                      <svg
                        className="w-5 h-5 text-green-400 drop-shadow-[0_0_8px_rgba(74,222,128,0.5)]"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          strokeWidth="2"
                          d="M5 13l4 4L19 7"
                        />
                      </svg>
                      <span className="text-gray-300">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <button className="bg-blue-600 text-white px-6 py-3 rounded-lg font-semibold hover:bg-blue-700 transition-colors relative group">
                <span className="relative z-10">Get Started</span>
                <span className="absolute inset-0 bg-blue-500 rounded-lg blur-md opacity-0 group-hover:opacity-70 transition-opacity"></span>
              </button>
            </div>
          </div>
        </div>
      </div>
    );
  } else
    return (
      <>
        <FuzzyText baseIntensity={0.2} hoverIntensity={0.5} enableHover={true}>
          Not found
        </FuzzyText>
      </>
    );
};

export default ServiceDetailsPage;
