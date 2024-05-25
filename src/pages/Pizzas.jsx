import React from "react";
import AllPizzas from "../components/AllPizzas";
import pizza from "../assets/icon.webp";
import { useSelector } from "react-redux";
const Pizzas = () => {
  const { items } = useSelector((state) => state.pizza);

  return (
    <div
      style={{
        backgroundImage:
          "url(https://jthemes.net/themes/html/testo/assests/images/bg-01.jpg)",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className="container p-3">
        <span
          style={{
            backgroundColor: "#d8252f",
            width: "280px",
            height: "auto",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginBlock: "25px",
            borderRight: "25px solid #b11f27",
          }}
        >
          <img src={pizza} alt="" width={"auto"} height={"auto"} />
          &nbsp;
          <h3
            style={{
              color: "white",
              fontSize: "42px",
            }}
          >
            PIZZAS
          </h3>
        </span>

        <div className="container-1 pb-5 px-4 shadow-lg ">
          <div className="row row-cols-1 row-cols-md-2 row-cols-lg-3 g-5 px-4">
            {items
              .filter((pizza) => pizza.type === "pizza")
              .map((pizza) => (
                <AllPizzas key={pizza.id} pizza={pizza} />
              ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Pizzas;
