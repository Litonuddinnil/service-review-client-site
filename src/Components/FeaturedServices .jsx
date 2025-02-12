import React, { useEffect, useState } from "react";
import axios from "axios";
import { motion } from "framer-motion";
import { Link, useNavigate } from "react-router-dom";

const FeaturedServices = () => {
  const [services, setServices] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const response = await axios.get(
          "https://service-review-system-server-site.vercel.app/servicesLimit"
        );
        setServices(response.data);
      } catch (error) {
        console.error("Error fetching services:", error);
      }
    };
    fetchServices();
  }, []);

  const cardVariants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: { opacity: 1, scale: 1, transition: { duration: 0.3 } },
    hover: { scale: 1.05 },
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <div className="flex items-center justify-between mb-8">
        <div className="relative flex flex-col justify-end z-10">
          <h2 className="lg:text-4xl md:text-2xl text-xl font-bold mb-6">
            Services Post
          </h2>
          <div
            className="absolute inset-0 z-[-1] opacity-60 top-5 bg-gradient-to-b from-transparent to-[#ff7f50]"
            style={{ height: "50%" }}
          ></div>
        </div>

        <button
          onClick={() => navigate("/services")}
          className="btn btn-outline btn-info"
        >
          See More
        </button>
      </div>

      {/* Services Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((service) => (
          <motion.div
            key={service._id}
            className="p-4 border rounded-lg shadow-lg bg-card"
            variants={cardVariants}
            initial="hidden"
            animate="visible"
            whileHover="hover"
          >
            <img
              src={service.image}
              alt={service.title}
              className="w-full h-40 object-cover rounded-md mb-4"
            />
            <h3 className="text-lg font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">
              {service.description.length > 100
                ? `${service.description.substring(0, 100)}...`
                : service.description}
            </p>
            <p className="text-xl font-bold text-blue-600 mb-4">
              ${service.price}
            </p>
            <button
              className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600"
              onClick={() => navigate(`/services/${service._id}`)}
            >
              See Details
            </button>
          </motion.div>
        ))}
      </div>
      <div className="mt-8 flex items-center justify-center">
      <Link to="/services" className="btn text-lg text-accent btn-outline  ">
            Service All...
         </Link>
        </div>
    </div>
  );
};

export default FeaturedServices;
