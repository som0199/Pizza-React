import React from "react";
import { Link } from "react-router-dom";

const AllPizzas = ({ pizza }) => {
  return (
    <>
      <div className="col">
        <div className="card border border-0 shadow rounded-3 transition">
          <img src={pizza.image} alt="404 Image not Found!!" />
          <Link
            to={`/pizzacontainer/${pizza.id}`}
            className="card-body text-decoration-none"
          >
            <h3 className="card-title fw-semibold text-decoration-none">
              {pizza.name}
            </h3>
            <p className="card-text ">{pizza.description}</p>
          </Link>
        </div>
      </div>

      {/* <div className="col">
        <div className="card">
          <img
            src="https://max-themes.net/demos/steweys/upload/from-farm-313x220.jpg"
            alt="..."
          />

          <div className="card-body">
            <h3 className="card-title">FARMER</h3>
            <p className="card-text">
              Fresh mushrooms, fresh green bell peppers, tomatoes, black olives,
              meat, sausages
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://max-themes.net/demos/steweys/upload/napolitana-313x220.jpg"
            alt="..."
          />

          <div className="card-body">
            <h3 className="card-title">NEAPOLITAN</h3>
            <p className="card-text">
              Tomato, oregano, garlic, extra virgin olive oil, pepperoni,
              cheese, red onion, sauce, mushrooms
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://max-themes.net/demos/steweys/upload/hawaii-313x220.jpg"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title">HAWAII</h3>
            <p className="card-text">
              Pineapple, mushrooms, black olives, tomato sauce
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://max-themes.net/demos/steweys/upload/mexican-313x220.jpg"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title">MEXICAN</h3>
            <p className="card-text">
              Refried beans, red enchilada sauce, blend cheese, nacho, corn,
              onion, salsa, chorizo
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://max-themes.net/demos/steweys/upload/freshness-313x220.jpg"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title">FRESHNESS</h3>
            <p className="card-text">
              Fresh tomatoes, garlic, red onion, cheese, minced meat, dandelion,
              olives
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://max-themes.net/demos/steweys/upload/from-sea-313x220.jpg"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title">FROM SEA</h3>
            <p className="card-text">
              Olive, meta, squid, shrimps, fresh mushrooms, fresh red tomatoes,
              cheese
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://max-themes.net/demos/steweys/upload/calzone-313x220.jpg"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title">CALZONE</h3>
            <p className="card-text">
              Cup fresh ricotta, parmesan, chopped basil, pepper, tomato sauce,
              fresh mozzarella
            </p>
          </div>
        </div>
      </div>
      <div className="col">
        <div className="card">
          <img
            src="https://max-themes.net/demos/steweys/upload/classic-313x220.jpg"
            alt="..."
          />
          <div className="card-body">
            <h3 className="card-title">CLASSIC</h3>
            <p className="card-text">
              Pepperoni, cheese, black olives, tomatoe sauce, mushrooms, meat,
              onion, salad
            </p>
          </div>
        </div>
      </div> */}
    </>
  );
};

export default AllPizzas;
