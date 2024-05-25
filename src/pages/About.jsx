import React from "react";
import pizzaimg from "../assets/icon.webp";
import chef1 from "../assets/01.jpg";
import chef2 from "../assets/02.jpg";
import chef3 from "../assets/03.jpg";
import vegies from "../assets/vegies.jpg";
const About = () => {
  return (
    <div
      style={{
        backgroundImage:
          "url(https://images.unsplash.com/photo-1571997478779-2adcbbe9ab2f?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTR8fHBpenphfGVufDB8fDB8fHww)",
        backgroundPosition: "start",
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
      }}
    >
      <div className=" container py-3">
        <span
          style={{
            backgroundColor: "#868686",
            width: "280px",
            height: "auto",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginBlock: "25px",
            borderRight: "25px solid rgb(60, 60, 60)",
          }}
        >
          <img src={pizzaimg} alt="" width={"auto"} height={"auto"} />
          &nbsp;
          <h3
            style={{
              color: "white",
              fontSize: "38px",
            }}
          >
            ABOUT
          </h3>
        </span>
        <div class="container bg-dark text-light text-center ">
          <div class="py-3  text-center">
            <h5
              class=" text-danger"
              // style="visibility: visible; animation-name: fadeInUp;"
            >
              ABOUT OUR TEAM
            </h5>

            <h2
              class="my-2"
              data-wow-delay=".3s"
              // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
            >
              MEET OUR EXPERT CHEFS
            </h2>
          </div>
          <div class="row pt-4">
            <div
              class="col-sm-12 col-lg-4 col-md-6 "
              data-wow-delay=".3s"
              // style="visibility: visible; animation-delay: 0.3s; animation-name: fadeInUp;"
            >
              <div class="position-relative">
                <img src={chef1} alt="team-img" className="w-75" />
                <div class="social-link">
                  <a href="#" className="text-light">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-light">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-light">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-light">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div class="text-center my-3">
                <p className="text-success text-capitalize">head chef</p>
                <h4>Leslie Alexander</h4>
              </div>
            </div>
            <div
              class="col-sm-12 col-lg-4 col-md-6 "
              data-wow-delay=".5s"
              // style="visibility: visible; animation-delay: 0.5s; animation-name: fadeInUp;"
            >
              <div class="position-relative">
                <img src={chef2} alt="team-img" className="w-75" />
                <div class="social-link">
                  <a href="#" className="text-light">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-light">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-light">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-light">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div class="text-center my-3">
                <p className="text-success text-capitalize">sr table manager</p>
                <h4>Henry Lucas</h4>
              </div>
            </div>
            <div
              class="col-sm-12 col-lg-4 col-md-6 "
              data-wow-delay=".7s"
              // style="visibility: visible; animation-delay: 0.7s; animation-name: fadeInUp;"
            >
              <div class="position-relative">
                <img src={chef3} alt="team-img" className="w-75" />
                <div class="social-link">
                  <a href="#" className="text-light">
                    <i class="fab fa-facebook-f"></i>
                  </a>
                  <a href="#" className="text-light">
                    <i class="fab fa-twitter"></i>
                  </a>
                  <a href="#" className="text-light">
                    <i class="fab fa-linkedin-in"></i>
                  </a>
                  <a href="#" className="text-light">
                    <i class="fab fa-youtube"></i>
                  </a>
                </div>
              </div>
              <div class="text-center my-3">
                <p className="text-success text-capitalize">senior cooker</p>
                <h4>Mateo Levi</h4>
              </div>
            </div>
          </div>
          <div className=" px-lg-5 py-5  flex align-items-start justify-content-center flex-col">
            <div>
              <h5 className="my-2 text-danger">ABOUT OUR FOOD</h5>
              <h3 className="mb-4 text-center text-success">
                WE USE FRESH INGREDIENTS. WHY IS THAT?
              </h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
              <p>
                Excepteur sint occaecat cupidatat non proident, sunt in culpa
                qui officia deserunt mollit anim id est laborum. Lorem ipsum
                dolor sit amet, consectetur adipiscing elit, sed do eiusmod
                tempor incididunt ut labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="text-center pb-5">
            <img src={vegies} width={260} alt="404 Not Found!!" />
          </div>
        </div>
      </div>

      {/* <div>
      <div className="container p-4">
        <span
          // style={{
            backgroundColor: "#545454",
            width: "280px",
            height: "auto",
            padding: "5px",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            flexDirection: "row",
            marginBlock: "25px",
            borderRight: "25px solid rgb(0, 0, 0)",
          }}
        >
          <img src={pizzaimg} alt="" width={"auto"} height={"auto"} />
          &nbsp;
          <h3
            // style={{
              color: "white",
              fontSize: "42px",
            }}
          >
            ABOUT
          </h3>
        </span>
        <div
          className="py-5"
          // style={{
            backgroundImage:
              "url(https://modinatheme.com/html/foodking-html/assets/img/banner/burger-bg.png)",
            backgroundPosition: "center",
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
          }}
        >
          <div className=" px-lg-5 mx-5  flex align-items-start justify-content-center flex-col">
            <div>
              <h3 className="my-2">WE USE FRESH INGREDIENTS. WHY IS THAT?</h3>
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut
                enim ad minim veniam, quis nostrud exercitation ullamco laboris
                nisi ut aliquip ex ea commodo consequat.
              </p>
              <p>
                Duis aute irure dolor in reprehenderit in voluptate velit esse
                cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
                cupidatat non proident, sunt in culpa qui officia deserunt
                mollit anim id est laborum. Lorem ipsum dolor sit amet,
                consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
                labore et dolore magna aliqua.
              </p>
            </div>
          </div>
          <div className="text-center">
            <img src={vegies} width={270} alt="404 Not Found!!" />
          </div>
          <div className="px-5 m-lg-5">
            
            <p>
              Excepteur sint occaecat cupidatat non proident, sunt in culpa qui
              officia deserunt mollit anim id est laborum. Lorem ipsum dolor sit
              amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </div>
          <div className="text-center">
            <img src={team} width={270} alt="404 Not Found!!" />
          </div>
        </div>
      </div>
    </div> */}
    </div>
  );
};

export default About;
