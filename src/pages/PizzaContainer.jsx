import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getPizza } from "../store/PizzaSlice";
import { Link, useParams } from "react-router-dom";
import { addToCart } from "../store/CartSlice";

const PizzaContainer = () => {
  const { item } = useSelector((state) => state.pizza);
  // const topings = items.filter((i) => i?.type === "toping").map((i) => i);
  const [topings, setTopings] = useState("");
  const dispatch = useDispatch();
  const { id } = useParams();

  useEffect(() => {
    dispatch(getPizza(id));
  }, []);

  const handleChange = (e) => {
    setTopings(e.target.value);
  };
  const AddToCart = () => {
    dispatch(addToCart(item[0]));
  };
  let selectedPrice = Number(item[0]?.price) + Number(topings);
  return (
    <div
      style={{
        backgroundImage:
          "url(https://demo.hasthemes.com/restoral/images/home-slide-2-1902x738.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" bg-dark bg-opacity-75 text-light py-5">
        <div className="container row py-lg-5 ">
          <div
            data-uk-slideshow="ratio: 1:1; animation: slide"
            class=" col-md-6 col-sm-12 d-flex align-items-start justify-content-center"
          >
            <img
              src={item[0]?.image}
              alt="404 Image not Found!!"
              className="w-75"
            />
          </div>
          <div className=" col-md-6 col-sm-12 d-flex align-items-start justify-content-start flex-column font">
            <h5 className=" fw-semibold my-3">{item[0]?.name}</h5>
            <h5 className="fs-6 my-2">{item[0]?.description}</h5>
            <h6 className="text-light my-2 text-wrap fs-6 fst-italic font">
              Nutritions: ({item[0]?.nutrition})
            </h6>
            <p className="my-2 text-capitalize ">
              Category :{" "}
              <strong className="text-success">{item[0]?.type}</strong>{" "}
            </p>
            <select
              className="form-select bg-dark-subtle my-3 w-75 font"
              value={topings}
              onChange={handleChange}
            >
              <option className="font" value="" selected>
                --Extra Topings--
              </option>
              <option className="font" value="29">
                Chilli, joghurt, italian, pelati &nbsp; : ₹29
              </option>
              <option className="font" value="35">
                Nacho, cheddar, monterey, brick &nbsp; : ₹35
              </option>
              <option className="font" value="49">
                Rucola, corn, parsley, beans, tomatoes, peppers &nbsp; : ₹49
              </option>
            </select>

            <h5 className=" my-2 font ">
              Price:{" "}
              <strong className="text-danger dancingFont">
                ₹{selectedPrice}
              </strong>
            </h5>
            <Link
              to={"/cart"}
              className="btn btn-lg btn-danger text-light fw-semibold  my-2 rounded-pill"
              onClick={() => AddToCart()}
            >
              Order Now
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PizzaContainer;
