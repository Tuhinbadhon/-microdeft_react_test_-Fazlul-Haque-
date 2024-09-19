import axios from "axios";
import React, { useState } from "react";
import Swal from "sweetalert2";

const Card = () => {
  const [items, setItems] = useState([]);
  axios
    .get("https://react.microhost.one/api/course?email=jjkjh@gmail.com")
    .then((data) => {
      console.log(data);
    });
  return (
    <div className="card bg-base-100 w-96 shadow-xl">
      <figure>
        <img
          src="https://img.daisyui.com/images/stock/photo-1606107557195-0e29a4b5b4aa.webp"
          alt="Shoes"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">
          {}
          <div className="badge badge-secondary">NEW</div>
        </h2>
        <p>If a dog chews shoes whose shoes does he choose?</p>
        <div className="card-actions justify-end">
          <div className="badge badge-outline">Fashion</div>
          <div className="badge badge-outline">Products</div>
        </div>
      </div>
    </div>
  );
};

export default Card;
