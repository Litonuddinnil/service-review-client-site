import React, { useState, useEffect } from 'react';
import { useLoaderData, useLocation, useNavigate } from 'react-router-dom'; 
import ReactStars from "react-rating-stars-component";
import axios from 'axios';
import useAuth from '../CustomHook/useAuth';
import Swal from 'sweetalert2';
import { Helmet } from 'react-helmet-async';

const ServiceDetails = () => {
  const detailsService = useLoaderData();  
  const navigate = useNavigate();
  const location = useLocation();  
  const { title, image, companyName, website, description, category, price, _id } = detailsService;
  const { user } = useAuth();  
  const [reviews, setReviews] = useState([]);
  const [rating, setRating] = useState(0);
  const [reviewText, setReviewText] = useState('');
  const [currentPage, setCurrentPage] = useState(1);
  const reviewPerPage = 2;

  useEffect(() => {
    axios.get(`https://service-review-system-server-site.vercel.app/services/reviews/${_id}`, { withCredentials: true })
      .then(response => setReviews(response.data))
      .catch(error => console.error("Error fetching reviews:", error));
  }, [_id]);

  const handleReviewSubmit = (e) => {
    e.preventDefault();
    if (!user) {
      Swal.fire({ title: "Error!", text: "You need to log in to leave a review.", icon: "error" });
      return navigate("/login", {state:{from:location.pathname}});
    }
    
    const newReview = {
      userName: user?.displayName,
      userPhoto: user?.photoURL,
      reviewText,
      rating,
      title,
      email: user.email,
      date: new Date().toLocaleDateString(),
      serviceId: _id,
    };

    axios.post(`https://service-review-system-server-site.vercel.app/services/reviews/${_id}`, newReview)
      .then(response => {
        if (response.data) {
          Swal.fire({ title: "Success!", text: "Review Added Successfully!", icon: "success" });
          setReviews([...reviews, response.data]);
          setReviewText('');
          setRating(0);
        }
      })
      .catch(error => {
        console.error(error.message);
        Swal.fire({ title: "Error!", text: "Something went wrong.", icon: "error" });
      });
  }; 
  const totalPages = Math.ceil(reviews.length / reviewPerPage);
 
  const currentReviews = reviews.slice((currentPage - 1) * reviewPerPage, currentPage * reviewPerPage);

  return (
    <div className="container mx-auto px-4 py-8">
      <Helmet><title>Service Details</title></Helmet>
      <div className="service-details flex flex-col md:flex-row bg-white shadow-lg rounded-lg overflow-hidden">
        <div className="service-info flex-1 p-6">
          <img src={image} alt={title} className="w-full h-64 object-cover rounded-lg mb-4" />
          <h1 className="text-3xl font-semibold text-gray-800">{title}</h1>
          <p className="text-lg text-gray-600">{companyName}</p>
          <a href={website} className="text-blue-600 hover:underline text-lg mt-2 block">{website}</a>
          <p className="mt-4 text-gray-500">{description}</p>
          <p className="mt-2 text-gray-700 font-medium">Category: {category}</p>
          <p className="mt-2 text-xl font-semibold text-green-600">Price: ${price}</p>
        </div> 
       <div className='flex items-center flex-col justify-center'>
       <div className="reviews-section flex-1 p-6 bg-gray-50 rounded-lg">
          <h2 className="text-2xl font-semibold text-gray-800">Reviews ({reviews.length})</h2>
          {reviews.length === 0 ? (
            <p className="mt-4 text-gray-500">No reviews yet. Be the first to leave a review!</p>
          ) : (
            currentReviews.map(({ _id, userPhoto, userName, date, rating, title, reviewText }) => (
              <div key={_id} className="review mt-6 border-t pt-4">
                <div className="flex items-center space-x-4">
                  <img src={userPhoto} alt={userName} className="w-10 h-10 object-cover rounded-full" />
                  <div>
                    <h3 className="font-semibold text-gray-800">{userName}</h3>
                    <p className="text-sm text-gray-500">{date}</p>
                  </div>
                </div>
                <ReactStars count={5} value={rating} size={24} edit={false} activeColor="#ffd700" />
                <h4 className="mt-2 text-lg font-semibold text-gray-800">{title}</h4>
                <p className="mt-2 text-gray-700">{reviewText}</p>
              </div>
            ))
          )}
        </div>
        {
            reviews.length > 2 &&  
          <>
           <div className="pagination  p-4 flex gap-2 justify-between items-center mt-6">
          <button 
            onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))}
            disabled={currentPage === 1}
            className="py-2 px-4 bg-primary text-white rounded-md disabled:bg-gray-300"
          >
            Previous
          </button>
          <p className="text-gray-700">Page {currentPage} of {totalPages}</p>
          <button 
            onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))}
            disabled={currentPage === totalPages}
            className="py-2 px-4 bg-accent text-white rounded-md disabled:bg-gray-300"
          >
            Next
          </button>
        </div>
          </>
        } 
       </div>
      </div>
      <div className="add-review-form mt-8 bg-gray-50 p-6 rounded-lg shadow-md">
        <h3 className="text-2xl font-semibold text-gray-800">Add Your Review</h3>
        <form onSubmit={handleReviewSubmit}>
          <textarea
            value={reviewText}
            onChange={(e) => setReviewText(e.target.value)}
            placeholder="Write your review here"
            className="w-full h-40 p-4 mt-4 border border-gray-300 rounded-md resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
            required
          ></textarea>
          <div className="flex items-center gap-3">
            <p className="text-xl text-yellow-500 font-extrabold">Ratings:</p>
            <ReactStars count={5} onChange={setRating} size={24} activeColor="#ffd700" value={rating} className="mt-4" />
          </div>
          <button type="submit" className="w-full py-2 mt-6 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 transition duration-200">
            Add Review
          </button>
        </form>
      </div>
    </div>
  );
};

export default ServiceDetails;
