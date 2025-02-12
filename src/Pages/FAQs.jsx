import React from "react";  
import { Helmet } from "react-helmet-async";
const FAQs = () => {
    
  return (
    <div className=" p-5 rounded-md">
      <Helmet>
              <title>Home | FAQs</title>
            </Helmet>
      <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
      
      <div className="space-y-2"> 
        {/* FAQ 1 */}
        <div className="collapse collapse-arrow   shadow-md">
          <input type="radio" name="faq-accordion" className="peer" />
          <div className="collapse-title text-lg font-medium   peer-checked:text-blue-600">
          How do I post a service or find a service provider?
          </div>
          <div className="collapse-content">
          <p className="text-[#67696E]">You can log in to your account and navigate to the 'Add Service' section to post a service. To find service providers, browse through the listed services.</p>
          </div>
        </div>
        
        <div className="collapse collapse-arrow   shadow-md">
          <input type="radio" name="faq-accordion" className="peer" />
          <div className="collapse-title text-lg font-medium   peer-checked:text-blue-600">
            Is there a fee for using your services?
          </div>
          <div className="collapse-content">
            <p className="text-[#67696E]">No, our platform allows users to post and review services for free. However, premium features may be introduced in the future.</p>
          </div>
        </div>
        
        {/* FAQ 3 */}
        <div className="collapse collapse-arrow   shadow-md">
          <input type="radio" name="faq-accordion" className="peer" />
          <div className="collapse-title text-lg font-medium   peer-checked:text-blue-600">
            Can I request advice or support from your team?
          </div>
          <div className="collapse-content">
            <p className="text-[#67696E]">Yes, you can reach out to our support team through the 'Contact Us' page for assistance.</p>
          </div>
        </div>
        
        {/* FAQ 4 */}
        <div className="collapse collapse-arrow   shadow-md">
          <input type="radio" name="faq-accordion" className="peer" />
          <div className="collapse-title text-lg font-medium   peer-checked:text-blue-600">
            How do I pay for the services I hire?
          </div>
          <div className="collapse-content">
            <p className="text-[#67696E]">Currently, payments are handled externally between users. We recommend using secure payment methods.</p>
          </div>
        </div>
        
        {/* FAQ 5 */}
        <div className="collapse collapse-arrow  shadow-md">
          <input type="radio" name="faq-accordion" className="peer" />
          <div className="collapse-title text-lg font-medium   peer-checked:text-blue-600">
            How can I ensure that I receive quality services?
          </div>
          <div className="collapse-content">
            <p className="text-[#67696E]">Read user reviews, check ratings, and communicate with the service provider before hiring.</p>
          </div>
        </div>
        
        {/* FAQ 6 */}
        <div className="collapse collapse-arrow  shadow-md">
          <input type="radio" name="faq-accordion" className="peer" />
          <div className="collapse-title text-lg font-medium   peer-checked:text-blue-600">
            Do I need to log in to access all the features of your website?
          </div>
          <div className="collapse-content">
            <p className="text-[#67696E]">Yes, logging in is required to add services, post reviews, and manage your content.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FAQs;
