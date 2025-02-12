import Swal from "sweetalert2";
import useAuth from "../CustomHook/useAuth";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user } = useAuth();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = new FormData(e.target);
    const formObject = Object.fromEntries(formData.entries());

    fetch("https://service-review-system-server-site.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(formObject),
    })
      .then((res) => res.json())
      .then((data) => {
        if (data.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Service Added!",
            text: "Your service has been successfully added.",
            timer: 2000,
            showConfirmButton: false,
          });
        }
      });
  };

  return (
    <div className="container mx-auto py-12 px-6">
      <Helmet>
        <title>Home | Add Service</title>
      </Helmet>
      
      <div className="text-center mb-8">
        <h2 className="text-3xl md:text-4xl font-bold">Add a New Service</h2>
        <p className=" mt-2">Fill in the details below to add your service.</p>
      </div>

      <div className="max-w-2xl mx-auto shadow-xl rounded-md p-8">
        <form onSubmit={handleSubmit} className="space-y-6">
          
          {/* Service Image */}
          <div>
            <label htmlFor="image" className="text-gray-500 font-medium">Service Image URL</label>
            <input
              type="url"
              id="image"
              name="image"
              className="input input-bordered w-full mt-2"
              placeholder="Enter image URL"
              required
            />
          </div>

          {/* Service Title */}
          <div>
            <label htmlFor="title" className="text-gray-500 font-medium">Service Title</label>
            <input
              type="text"
              id="title"
              name="title"
              className="input input-bordered w-full mt-2"
              placeholder="Enter service title"
              required
            />
          </div>

          {/* Company Name */}
          <div>
            <label htmlFor="companyName" className="text-gray-500 font-medium">Company Name</label>
            <input
              type="text"
              id="companyName"
              name="companyName"
              className="input input-bordered w-full mt-2"
              placeholder="Enter company name"
              required
            />
          </div>

          {/* Website */}
          <div>
            <label htmlFor="website" className="text-gray-500 font-medium">Website</label>
            <input
              type="url"
              id="website"
              name="website"
              className="input input-bordered w-full mt-2"
              placeholder="Enter company website"
              required
            />
          </div>

          {/* Description */}
          <div>
            <label htmlFor="description" className="text-gray-500 font-medium">Description</label>
            <textarea
              id="description"
              name="description"
              className="textarea textarea-bordered w-full mt-2"
              placeholder="Enter service description"
              rows="3"
              required
            />
          </div>

          {/* Category */}
          <div>
            <label htmlFor="category" className="text-gray-500 font-medium">Category</label>
            <input
              type="text"
              id="category"
              name="category"
              className="input input-bordered w-full mt-2"
              placeholder="Enter service category"
              required
            />
          </div>

          {/* Price */}
          <div>
            <label htmlFor="price" className="text-gray-500 font-medium">Price</label>
            <input
              type="number"
              id="price"
              name="price"
              className="input input-bordered w-full mt-2"
              placeholder="Enter service price"
              required
            />
          </div>

          {/* Added Date */}
          <div>
            <label htmlFor="addedDate" className="text-gray-500 font-medium">Added Date</label>
            <input
              type="text"
              id="addedDate"
              name="addedDate"
              value={new Date().toLocaleDateString()}
              className="input input-bordered w-full mt-2"
              readOnly
            />
          </div>

          {/* User Email */}
          <div>
            <label htmlFor="userEmail" className="text-gray-500 font-medium">Your Email</label>
            <input
              type="email"
              id="userEmail"
              name="email"
              value={user?.email || ""}
              className="input input-bordered w-full mt-2"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <button
            type="submit"
            className="btn bg-primary text-white w-full text-lg py-3"
          >
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
