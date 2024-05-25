import React, { useEffect, useState } from "react";
import "../style.css";
import pizzaimg from "../assets/icon.webp";
import { useSelector } from "react-redux";
import PizzaItems from "../components/PizzaItems";

const Menu = () => {
  const { items } = useSelector((state) => state.pizza);
  const [property, setProperty] = useState({});

  const handleChange = (e) => {
    setProperty(e.target.name);
  };

  useEffect(() => {
    setProperty("pizza");
  }, []);

  return (
    <>
      <div
        className="text-light"
        style={{
          backgroundImage:
            "url(https://demo.hasthemes.com/restoral/images/bg-menu-7.jpg)",
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="container bg-dark p-3 bg-opacity-75">
          <span
            style={{
              backgroundColor: "rgb(250, 205, 91)",
              width: "260px",
              height: "auto",
              padding: "5px",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              flexDirection: "row",
              marginBlock: "25px",
              borderRight: "25px solid rgb(255, 166, 0)",
            }}
          >
            <img src={pizzaimg} alt="" width={"auto"} height={"auto"} />
            &nbsp;
            <h3
              style={{
                color: "white",
                fontSize: "42px",
              }}
            >
              MENU
            </h3>
          </span>
          <div className="navbar navbar-expand ">
            <ul className="navbar-nav ">
              <li className="nav-item">
                <a
                  href="#"
                  className="nav-link home fw-bold mx-1 "
                  aria-current="page"
                  name="pizza"
                  onClick={(e) => handleChange(e)}
                >
                  PIZZA
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold mx-1"
                  href="#"
                  name="roll"
                  onClick={(e) => handleChange(e)}
                >
                  PIZZA ROLLS
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold mx-1"
                  href="#"
                  name="box"
                  onClick={(e) => handleChange(e)}
                >
                  BOX
                </a>
              </li>
              <li className="nav-item">
                <a
                  className="nav-link fw-bold mx-1"
                  href="#"
                  name="toping"
                  onClick={(e) => handleChange(e)}
                >
                  TOPINGS
                </a>
              </li>
            </ul>
          </div>
          <hr className="border border-warning border-2 opacity-50" />
          <div className="row g-3 p-lg-5 text-center">
            {items
              .filter((item) => item.type === property)
              .map((item) => (
                <PizzaItems key={item.id} item={item} />
              ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Menu;
