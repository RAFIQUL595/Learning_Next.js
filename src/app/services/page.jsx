import Link from "next/link";
import React from "react";

// Utility to generate slug from service_name
// const slugify = (name) =>
//   name
//     .toLowerCase()
//     .replace(/\s+/g, "-")
//     .replace(/[^\w-]+/g, "");

const ServicesPage = () => {
  const data = [
    {
      _id: "64f9a35bf5d10c001f38c001",
      service_name: "Web Development",
      service_description:
        "We build fast, responsive, and SEO-friendly websites tailored to your needs.",
      services_image: "https://i.ibb.co.com/dxM7B9H/1715058774193.jpg",
    },
    {
      _id: "64f9a35bf5d10c001f38c002",
      service_name: "Graphic Design",
      service_description:
        "Creative design services for branding, marketing materials, and social media.",
      services_image: "https://i.ibb.co.com/8h2z5nL/i-Stock-1191609321-1.jpg",
    },
    {
      _id: "64f9a35bf5d10c001f38c003",
      service_name: "SEO Optimization",
      service_description:
        "Boost your search engine rankings and attract more organic traffic.",
      services_image:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312",
    },
    {
      _id: "64f9a35bf5d10c001f38c004",
      service_name: "Content Writing",
      service_description:
        "Engaging and SEO-friendly content writing for blogs, websites, and ads.",
      services_image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b",
    },
    {
      _id: "64f9a35bf5d10c001f38c005",
      service_name: "Digital Marketing",
      service_description:
        "Effective digital campaigns for social media, email, and PPC advertising.",
      services_image:
        "https://images.unsplash.com/photo-1557804506-669a67965ba0",
    },
  ];

  return (
    <div>
      <p className="font-bold text-3xl mb-6 text-center">Services Page</p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
        {data.map((service) => {
          // const slug = slugify(service?.service_name);
          return (
            <Link
              key={service?._id}
              href={`/services/${service?._id}`}
              className="block border rounded-lg overflow-hidden shadow hover:shadow-lg transition duration-300"
            >
              <img
                src={service?.services_image}
                alt={service?.service_name}
                className="w-full h-48 object-cover"
              />
              <div className="p-4">
                <p className="text-xl font-semibold mb-2">
                  {service?.service_name}
                </p>
              </div>
            </Link>
          );
        })}
      </div>
    </div>
  );
};

export default ServicesPage;
