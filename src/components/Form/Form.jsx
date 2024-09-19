import React, { useState } from "react";
import { Helmet, HelmetProvider } from "react-helmet-async";
import axios from "axios";

import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2";

const Form = () => {
  const [dueDate, setDueDate] = useState(null);
  const helmetContext = {};
  const navigate = useNavigate();

  const handleAddItems = async (event) => {
    event.preventDefault();
    const form = event.target;
    const title = form.title.value;
    const description = form.description.value;
    const badge_color = form.badge_color.value;
    const badge_text = form.badge_text.value;
    const instructor_name = form.instructor_name.value;
    const email = form.email.value;

    const newItem = {
      title,
      badge_text,
      description,
      badge_color,
      instructor_name,
      email,
    };
    console.log(newItem);
    // Send data to the server

    try {
      const response = await axios.post(
        "https://react.microhost.one/api/course",
        newItem
      );
      console.log(response);
      if (response.data.data.id) {
        await Swal.fire({
          title: "Success!",
          text: "Item Added Successfully",
          icon: "success",
          confirmButtonText: "OK",
        });
      }
    } catch (error) {
      Swal.fire({
        title: "Error!",
        text: "There was an issue adding the item.",
        icon: "error",
        confirmButtonText: "OK",
      });
    }
  };

  return (
    <div className="bg-[#F4F3F0] rounded-xl p-5  md:p-10">
      <HelmetProvider context={helmetContext}>
        <Helmet>
          <title>Form</title>
        </Helmet>
      </HelmetProvider>
      <h2
        data-aos="fade-left"
        data-aos-duration="1000"
        className="font-bold text-3xl text-center mb-4"
      >
        Add Your Data here
      </h2>
      <div className="">
        <form
          className=""
          data-aos="fade-up"
          data-aos-duration="1000"
          onSubmit={handleAddItems}
        >
          <div className="md:flex md:mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Title</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="Title"
                  className="input input-bordered w-full"
                  name="title"
                  id=""
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text"> badge_text</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="badge_text"
                  className="input input-bordered w-full"
                  name="badge_text"
                  id=""
                  required
                />
              </label>
            </div>
          </div>
          <div className="md:flex md:mb-6">
            <div className="form-control md:w-1/2">
              <label className="label">
                <span className="label-text">Description</span>
              </label>
              <label className="input-group">
                <textarea
                  type="text"
                  placeholder="Description"
                  className="textarea textarea-bordered w-full"
                  name="description"
                  id=""
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text"> badge_color</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="badge_color"
                  className="input input-bordered w-full"
                  name="badge_color"
                  id=""
                  required
                />
              </label>
            </div>
          </div>
          <div className="md:flex md:mb-6">
            <div className="form-control md:w-1/2 ">
              <label className="label">
                <span className="label-text">instructor_name</span>
              </label>
              <label className="input-group">
                <textarea
                  type="text"
                  placeholder="instructor_name"
                  className=" input input-bordered w-full"
                  name="instructor_name"
                  id=""
                  required
                />
              </label>
            </div>
            <div className="form-control md:w-1/2 md:ml-4">
              <label className="label">
                <span className="label-text"> email</span>
              </label>
              <label className="input-group">
                <input
                  type="text"
                  placeholder="email"
                  className="input input-bordered w-full"
                  name="email"
                  id=""
                  required
                />
              </label>
            </div>
          </div>

          <input
            type="submit"
            value="ADD ITEM"
            className="btn btn-block bg-gray-600 max-[450px]:mt-5 text-white hover:bg-green-600 "
          />
        </form>
      </div>
    </div>
  );
};

export default Form;
