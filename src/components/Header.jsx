import React from "react";
import image from "../assets/image-1.png";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
const Header = () => {
  const { cart } = useSelector((state) => state.cart);
  return (
    <>
      <nav className="navbar navbar-expand-lg bg-dark text-light px-1 shadow-lg  ">
        <div className="container-fluid bg-transparent ">
          <Link
            to={"/"}
            className="text-danger fs-4 font text-decoration-none "
          >
            <img src={image} alt="" />
            <strong style={{ color: "#fab940" }}>Tasty</strong>
            <strong>Slice</strong>
          </Link>
          <button
            className="navbar-toggler bg-warning"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavDropdown"
            aria-controls="navbarNavDropdown"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span class="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse mx-3 "
            id="navbarNavDropdown"
          >
            <ul className="navbar-nav firstSectionFont flex-grow-1  ">
              <Link
                to={"/"}
                className="nav-link nav-item px-lg-4 py-3 h1 "
                aria-current="page"
              >
                Home
              </Link>

              <Link
                to={"/menu"}
                className="nav-link nav-item px-lg-4 py-3 h1"
                href="#"
              >
                menu
              </Link>

              <Link
                to={"/pizzas"}
                className="nav-link nav-item px-lg-4 py-3 h1"
                href="#"
              >
                pizzas
              </Link>

              <Link
                to={"/about"}
                className="nav-link nav-item px-lg-4 py-3 h1"
                href="#"
              >
                about us
              </Link>

              <Link
                to={"/contact"}
                className="nav-link nav-item px-lg-4 py-3 h1"
                href="#"
              >
                contact
              </Link>

              <Link
                to={"blog"}
                className="nav-link nav-item px-lg-4 py-3 h1"
                href="#"
              >
                blog
              </Link>
            </ul>

            <Link
              to={"/cart"}
              className="btn btn-secondary font text-md-center position-relative  "
              // style={{ marginLeft: "150px" }}
            >
              <i class="fa-solid fa-cart-shopping fa-xl"></i>
              <span class="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger">
                {cart.length}
              </span>
            </Link>
          </div>
        </div>
      </nav>
    </>
  );
};

export default Header;

<button type="button" class="btn btn-primary ">
  Inbox
</button>;
