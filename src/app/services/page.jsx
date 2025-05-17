import Link from "next/link";

const ServicesPage = () => {
  const neonColors = [
    "from-purple-400 via-pink-500 to-red-500",
    "from-blue-400 via-cyan-500 to-teal-500",
    "from-green-400 via-emerald-500 to-teal-500",
    "from-yellow-400 via-orange-500 to-red-500",
    "from-indigo-400 via-purple-500 to-pink-500",
    "from-pink-400 via-rose-500 to-red-500",
  ];

  const shadowColors = [
    "purple",
    "blue",
    "green",
    "yellow",
    "indigo",
    "pink",
    "cyan",
    "emerald",
    "rose",
    "violet",
  ];

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

  return (
    <div className="min-h-screen">
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center mb-12 text-white">
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 animate-pulse">
            Our Services
          </span>
        </h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {data.map((d) => {
            return (
              <div
                key={d._id}
                className="bg-gray-800 rounded-lg overflow-hidden transition-colors duration-200 border border-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.3)] hover:shadow-[0_8px_30px_rgba(0,0,0,0.5)] hover:bg-gray-700/50 hover:border-gray-500"
              >
                <Link href={`/services/${d._id}`}>
                  <div className="relative h-48 group">
                    <img
                      src={d.service_image}
                      alt={d.title}
                      className="w-full h-full object-cover transition-colors duration-200 group-hover:brightness-75"
                    />
                  </div>
                  <div className="p-6">
                    <h2 className="text-xl font-semibold text-white mb-2 group-hover:text-gray-200 transition-colors duration-200">
                      {d.title}
                    </h2>
                    <p className="text-gray-400 mb-4 line-clamp-2 group-hover:text-gray-300 transition-colors duration-200">
                      {d.description}
                    </p>
                    <div className="flex justify-between items-center">
                      <span className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
                        ${d.price}
                      </span>
                      <span className="text-sm text-gray-400 group-hover:text-gray-300 transition-colors duration-200">
                        {d.duration}
                      </span>
                    </div>
                  </div>
                </Link>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export default ServicesPage;
