import React from "react";
import { Link } from "react-router-dom";

const PizzaItems = ({ item }) => {
  return (
    <>
      <div className="col-sm-6 col-md-9">
        <div className="text-lg-start">
          <Link to={"/pizzas"} className="text-decoration-none">
            <h4 className="fw-bold text-light ">{item.name} </h4>
          </Link>
          <p>{item.description} </p>
        </div>
      </div>
      <div className="col-sm-6 col-md-3">
        <h4 className="text-warning fw-bold"> ₹ {item.price} </h4>
      </div>
    </>
  );
};

export default PizzaItems;
