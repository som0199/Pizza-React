import React, { useState } from "react";
import {
  addToCart,
  decrementQty,
  incrementQty,
  removeFromCart,
} from "../store/CartSlice";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

const CartContainer = ({ i }) => {
  const { items } = useSelector((state) => state.pizza);
  let { name, image, id, price, qty } = i;
  const dispatch = useDispatch();

  const handleRemove = (id) => {
    dispatch(removeFromCart(id));
    toast.info(` 😞 ${name} Remove your Item`);
  };

  const handleAdd = (i) => {
    dispatch(addToCart(i));
  };

  const handleIncrement = (id) => {
    dispatch(incrementQty(id));
  };

  const handleDecrement = (id) => {
    qty > 1 ? dispatch(decrementQty(id)) : (qty = 0);
  };

  let Total = price * qty;

  console.log(i);
  return (
    <>
      <tr>
        <th
          scope="row "
          style={{
            backgroundImage:
              "url(https://jthemes.net/themes/html/testo/assests/images/bg-01.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
          }}
        >
          <button className="btn btn-danger" onClick={() => handleRemove(i.id)}>
            <i className="fa-regular fa-trash-can fa-xl"></i>
          </button>
        </th>

        <td
          style={{
            backgroundImage:
              "url(https://jthemes.net/themes/html/testo/assests/images/bg-01.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
          }}
        >
          <img src={image} alt="" className="w-50" />
          {/* <h5 className=" text-secondary">{i.name}</h5> */}
        </td>
        <td
          style={{
            backgroundImage:
              "url(https://jthemes.net/themes/html/testo/assests/images/bg-01.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
          }}
        >
          <p className="fs-lg-5 fw-semibold font">₹ {price}</p>
        </td>
        <td
          style={{
            backgroundImage:
              "url(https://jthemes.net/themes/html/testo/assests/images/bg-01.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
          }}
        >
          <div className=" d-flex align-items-center justify-content-center flex-row ">
            <button
              className="btn btn-sm rounded border text-light"
              onClick={() => handleDecrement(id)}
            >
              -
            </button>
            <h6 className="fs-lg-5 fw-semibold font my-1 mx-2">{qty}</h6>
            <button
              className="btn btn-sm rounded border text-light"
              onClick={() => handleIncrement(id)}
            >
              +
            </button>
          </div>
        </td>
        <td
          style={{
            backgroundImage:
              "url(https://jthemes.net/themes/html/testo/assests/images/bg-01.jpg)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            color: "white",
          }}
          className="fs-lg-5 fw-semibold font"
        >
          ₹ {Total}
        </td>
      </tr>
    </>
  );
};

export default CartContainer;
