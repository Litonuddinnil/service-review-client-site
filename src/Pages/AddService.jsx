import { useForm } from "react-hook-form";
import Swal from "sweetalert2";
import useAuth from "../CustomHook/useAuth";
import { Helmet } from "react-helmet-async";

const AddService = () => {
  const { user } = useAuth();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();

  const onSubmit = (data) => {
    fetch("https://service-review-system-server-site.vercel.app/services", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(data),
    })
      .then((res) => res.json())
      .then((result) => {
        if (result.insertedId) {
          Swal.fire({
            position: "top-center",
            icon: "success",
            title: "Service Added!",
            text: "Your service has been successfully added.",
            timer: 2000,
            showConfirmButton: false,
          });
          reset();
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
        <p className="mt-2">Fill in the details below to add your service.</p>
      </div>

      <div className="max-w-2xl mx-auto shadow-xl rounded-md p-8">
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">

          {/* Service Image */}
          <div>
            <label className="text-gray-500 font-medium">Service Image URL</label>
            <input
              type="url"
              {...register("image", {
                required: "Image URL is required",
                pattern: {
                  value: /^(https?:\/\/.*\.(?:png|jpg|jpeg|gif|svg))$/,
                  message: "Enter a valid image URL (jpg, png, gif, svg)",
                },
              })}
              className="input input-bordered w-full mt-2"
              placeholder="Enter image URL"
            />
            {errors.image && <p className="text-red-500">{errors.image.message}</p>}
          </div>

          {/* Service Title */}
          <div>
            <label className="text-gray-500 font-medium">Service Title</label>
            <input
              type="text"
              {...register("title", {
                required: "Title is required",
                minLength: { value: 3, message: "Title must be at least 3 characters" },
              })}
              className="input input-bordered w-full mt-2"
              placeholder="Enter service title"
            />
            {errors.title && <p className="text-red-500">{errors.title.message}</p>}
          </div>

          {/* Company Name */}
          <div>
            <label className="text-gray-500 font-medium">Company Name</label>
            <input
              type="text"
              {...register("companyName", {
                required: "Company name is required",
                minLength: { value: 2, message: "Company name must be at least 2 characters" },
              })}
              className="input input-bordered w-full mt-2"
              placeholder="Enter company name"
            />
            {errors.companyName && <p className="text-red-500">{errors.companyName.message}</p>}
          </div>

          {/* Website */}
          <div>
            <label className="text-gray-500 font-medium">Website</label>
            <input
              type="url"
              {...register("website", {
                required: "Website is required",
                pattern: {
                  value: /^(https?:\/\/[^\s$.?#].[^\s]*)$/,
                  message: "Enter a valid website URL",
                },
              })}
              className="input input-bordered w-full mt-2"
              placeholder="Enter company website"
            />
            {errors.website && <p className="text-red-500">{errors.website.message}</p>}
          </div>

          {/* Description */}
          <div>
            <label className="text-gray-500 font-medium">Description</label>
            <textarea
              {...register("description", {
                required: "Description is required",
                minLength: { value: 10, message: "Description must be at least 10 characters" },
                maxLength: { value: 300, message: "Description cannot exceed 300 characters" },
              })}
              className="textarea textarea-bordered w-full mt-2"
              placeholder="Enter service description"
              rows="3"
            />
            {errors.description && <p className="text-red-500">{errors.description.message}</p>}
          </div>

          {/* Category */}
          <div>
            <label className="text-gray-500 font-medium">Category</label>
            <input
              type="text"
              {...register("category", {
                required: "Category is required",
                minLength: { value: 3, message: "Category must be at least 3 characters" },
              })}
              className="input input-bordered w-full mt-2"
              placeholder="Enter service category"
            />
            {errors.category && <p className="text-red-500">{errors.category.message}</p>}
          </div>

          {/* Price */}
          <div>
            <label className="text-gray-500 font-medium">Price ($)</label>
            <input
              type="number"
              {...register("price", {
                required: "Price is required",
                min: { value: 1, message: "Price must be at least $1" },
              })}
              className="input input-bordered w-full mt-2"
              placeholder="Enter service price"
            />
            {errors.price && <p className="text-red-500">{errors.price.message}</p>}
          </div>

          {/* Added Date */}
          <div>
            <label className="text-gray-500 font-medium">Added Date</label>
            <input
              type="text"
              {...register("addedDate")}
              value={new Date().toLocaleDateString()}
              className="input input-bordered w-full mt-2"
              readOnly
            />
          </div>

          {/* User Email */}
          <div>
            <label className="text-gray-500 font-medium">Your Email</label>
            <input
              type="email"
              {...register("email")}
              value={user?.email || ""}
              className="input input-bordered w-full mt-2"
              readOnly
            />
          </div>

          {/* Submit Button */}
          <button type="submit" className="btn bg-primary text-white w-full text-lg py-3">
            Add Service
          </button>
        </form>
      </div>
    </div>
  );
};

export default AddService;
