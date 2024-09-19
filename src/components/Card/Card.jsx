import axios from "axios";
import React, { useState, useEffect } from "react";
import Swal from "sweetalert2";

const Card = () => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    axios
      .get("https://react.microhost.one/api/course?email=jjkjh@gmail.com")
      .then((response) => {
        setItems(response.data.data.data);
        console.log(response.data.data.data);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        Swal.fire("Error", "Failed to fetch data", "error");
      });
  }, []);

  return (
    <div className="grid grid-cols-3">
      {items.length > 0 ? (
        items.map((item, index) => (
          <div key={index} className="card bg-base-100 w-96 shadow-xl mb-4">
            <figure className="mt-7">
              <img src={item.image} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                Title:
                {item.title}
                <div className="badge badge-secondary">{item.badge_text}</div>
              </h2>
              <h2 className="card-title"> badge-color: {item.badge_color}</h2>
              <p>{item.description}</p>
              <p>
                instructor-name:{" "}
                <span className="font-semibold">{item.instructor_name}</span>
              </p>
              <p>
                Email: <span className="font-semibold">{item.email}</span>
              </p>
            </div>
          </div>
        ))
      ) : (
        <p>Loading...</p> // Display loading message until data is fetched
      )}
    </div>
  );
};

export default Card;
