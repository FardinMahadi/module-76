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
  const id = params.id;
  const singleData = data.find((d) => d._id == id);

  return (
    <div>
      <h1>Service Details Page</h1>
      <p className="font-medium text-lg">ID: {id}</p>
      <p>{singleData.title}</p>
      <img src={singleData.service_image} alt={singleData.title} />
    </div>
  );
};

export default ServiceDetailsPage;
