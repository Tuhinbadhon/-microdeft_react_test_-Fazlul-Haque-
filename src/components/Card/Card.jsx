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
            <figure>
              <img src={item.image} alt={item.title} />
            </figure>
            <div className="card-body">
              <h2 className="card-title">
                {item.title}
                <div className="badge badge-secondary">NEW</div>
              </h2>
              <p>{item.description}</p>
              <div className="card-actions justify-end">
                {item.tags?.map((tag, i) => (
                  <div key={i} className="badge badge-outline">
                    {tag}
                  </div>
                ))}
              </div>
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
