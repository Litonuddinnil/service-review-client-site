import React from 'react';
import { FaPencilAlt, FaStar } from 'react-icons/fa';
const  features = [
  {
    name: "Support & Update",
    logo: "https://demoapus2.com/landing-page/freelanhub/images/support2.png",
    description:
      "We offer a dedicated & friendly support and regular updates.",
  },
  {
    name: "Customization Services",
    logo: "https://demoapus2.com/landing-page/freelanhub/images/support3.png",
    description:
      "You need customization or add specific functionality services?",
  },
  {
    name: "Detailed Services",
    logo: "https://demoapus2.com/landing-page/freelanhub/images/support1.png",
    description:
      "View all job posts. For any issues, please contact us for assistance.",
  },
  
  
];
console.log(features)
const HowItWorks = () => {
  return (
    <section className="py-8 ">
      <div className="  max-w-7xl  mx-auto text-center">
        <h2 className="text-3xl font-semibold  mb-6">How Can We help you?</h2> 
        <p className='text-lg text-gray-500 '>Find answers to all of your question here.</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Step 1 */}
      {
        features.map(feature =>(
          <div className="card w-full bg-card shadow-xl rounded-md p-6">
          <div className="card-body items-center justify-center text-center">
            <div className="bg-black rounded-md">
              <img src={feature.logo} alt=""/>
            </div>
            <div>
            <h3 className="text-xl font-bold  mb-4">{feature.name}</h3>
            <p className="text-gray-500">
             {feature.description}
            </p>
            </div>
          </div>
        </div>
        ))
      }     
        </div> 
      </div>
    </section>
  );
};

export default HowItWorks;
