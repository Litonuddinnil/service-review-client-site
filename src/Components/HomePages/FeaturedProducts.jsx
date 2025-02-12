import React from 'react';
import img1 from "../../assets/images.jpeg"
import img2 from "../../assets/imag2.png"
import img3 from "../../assets/img3.jpeg"
const FeaturedProducts = () => {
    // Sample featured services data
    const featuredServices = [
        {
            id: 1,
            name: "Web Development Services",
            description: "High-quality web development services with modern technologies.",
            rating: 4.8,
            image: img1
        },
        {
            id: 2,
            name: "Graphic Design Solutions",
            description: "Professional graphic design services for branding and marketing.",
            rating: 4.7,
            image: img2
        },
        {
            id: 3,
            name: "SEO & Digital Marketing",
            description: "Boost your online presence with expert SEO strategies.",
            rating: 4.9,
            image: img3
        }
    ];

    return (
        <div className="bg-background max-w-7xl mx-auto p-5 rounded-lg">
         <div className="flex items-center justify-between mb-8">
        <div className="relative flex flex-col justify-end z-10">
          <h2 className="lg:text-4xl md:text-2xl text-xl font-bold mb-6">
            Featured Services
          </h2>
          <div
            className="absolute inset-0 z-[-1] opacity-60 top-5 bg-gradient-to-b from-transparent to-[#ff7f50]"
            style={{ height: "50%" }}
          ></div>
        </div> 
       
      </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                {featuredServices.map(service => (
                    <div key={service.id} className="bg-white p-4 shadow-md rounded-lg">
                        <img src={service.image} alt={service.name} className="w-full h-40 object-cover rounded-md" />
                        <h3 className="text-xl font-semibold mt-2">{service.name}</h3>
                        <p className="text-gray-600 text-sm">{service.description}</p>
                        <p className="text-yellow-500 font-bold mt-2">⭐ {service.rating}</p>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default FeaturedProducts;