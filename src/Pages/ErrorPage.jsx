import React from 'react';
import { useNavigate } from 'react-router-dom';
import gif from "../assets/404.gif"
const ErrorPage = () => {
  const navigate = useNavigate();

  return (
    <div className="min-h-screen flex flex-col items-center justify-center bg-gray-100">
      <h1 className="text-red-600 text-5xl font-bold mb-4">Page Not Found</h1>
      <img src={gif} alt="" /> 
      <button
        onClick={() => navigate('/')}
        className="px-6 py-3 bg-gradient-to-r from-[#00b894] to-[#073132] text-text rounded-lg shadow hover:opacity-90 transition"
      >
        Go to Home Page
      </button>
    </div>
  );
};

export default ErrorPage;