import React from "react";
import "../style.css";
import slide5 from "../assets/slide5.jpg";
import slider from "../assets/slider.png";
import seprator1 from "../assets/seprator-1.png";
import services from "../assets/services.png";
import gallery1 from "../assets/gallery-1.jpg";
import gallery2 from "../assets/gallery-2.jpg";
import gallery3 from "../assets/gallery-3.jpg";
import gallery4 from "../assets/gallery-4.jpg";
import gallery5 from "../assets/gallery-5.jpg";
import gallery6 from "../assets/gallery-6.jpg";
import featureTop from "../assets/features-top-img.png";
import featureBottom from "../assets/features-bottom-img.png";
import ic1 from "../assets/ic-1.png";
import ic2 from "../assets/ic-2.png";
import ic3 from "../assets/ic-3.png";
const SecondSection = () => {
  return (
    <div>
      <div class=" position-relative">
        <img alt="slider" src={slide5} className="w-100 " />
        <div class="carousel-caption my-md-5">
          <img src={slider} alt="slider-ic" className="w-25 " />
          <h3 className="dancingFont my-lg-5">
            Pizza reminds that anything is possible.
          </h3>
          {/* <div className="d-md-none text-dark">
            <img src={seprator1} alt="section-seprator" />
            <p className="font mt-2">
              The one day when the lady met this fellow and they knew it was
              much more than a hunch the first mate and his Skipper too will do
              their comfortable knew it hunch the first mate.
            </p>
          </div> */}
        </div>
      </div>

      {/* -------------container-1--------------- */}

      <div class="position-relative  pt-5">
        <div class="py-5"></div>
        <div class="position-absolute top-0 start-0">
          <img src={featureTop} alt="features-top-img" className="w-50" />
        </div>
        <div class="container row text-center pt-md-5">
          <div class=" mb-3">
            <h3 className="dancingFont text-warning">Our Spicy Creature</h3>
            <h6 className="my-3 fs-5">Features</h6>
            <img src={seprator1} alt="section-seprator" />
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <div class="features-content my-2">
              <img src={ic1} alt="features-ic" className="w-25" />
              <h6 className="text-uppercase fw-bold my-3">delicious receipe</h6>
              <p>
                The one day when the lady met this fellow and they knew it was
                much more than a hunch the first mate and his Skipper.
              </p>
              <a
                href="#"
                title="Read More"
                className="btn rounded-pill border border-3 border-warning"
              >
                Read More
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <div class="features-content my-3">
              <img src={ic2} alt="features-ic" className="w-25 " />
              <h6 className="text-uppercase fw-bold my-4">global flavours</h6>
              <p>
                The one day when the lady met this fellow and they knew it was
                much more than a hunch the first mate and his Skipper.
              </p>
              <a
                href="#"
                title="Read More"
                className="btn rounded-pill border border-3 border-warning"
              >
                Read More
              </a>
            </div>
          </div>
          <div class="col-md-4 col-sm-6 col-xs-6">
            <div class="features-content my-2">
              <img src={ic3} alt="features-ic" className="w-25" />
              <h6 className="text-uppercase fw-bold my-3">delightful taste</h6>
              <p>
                The one day when the lady met this fellow and they knew it was
                much more than a hunch the first mate and his Skipper.
              </p>
              <a
                href="#"
                title="Read More"
                className="btn rounded-pill border border-3 border-warning"
              >
                Read More
              </a>
            </div>
          </div>
        </div>
        <div class="py-5"></div>
        <div
          style={{
            position: "absolute",
            bottom: "0px",
            right: "0px",
            textAlign: "right",
          }}
        >
          <img src={featureBottom} alt="features-bottom-img" className="w-25" />
        </div>
      </div>

      {/* ------------------quote-section---------- */}

      <div className="quotes-section text-light">
        <div class=" bg-dark bg-opacity-75">
          <div class="py-5"></div>
          <div class="container">
            <div
              class="my-3 text-center"
              style={{ fontFamily: '"Yellowtail", cursive' }}
            >
              <h5 className="mb-5 fs-1 cursiveFont">
                Everybody likes Pizza! It's a Quick and Easy Clean-Up Meal.
              </h5>
              <img
                src="https://demoxml.com/html/pizzakitchen/images/quote-ic-1.png"
                alt="quote-ic"
              />
              <h6 className="text-warning d-inline mx-2">Buddy Valastro</h6>
              <img
                src="https://demoxml.com/html/pizzakitchen/images/quote-ic-2.png"
                alt="quote-ic"
              />
            </div>
          </div>
          <div class="py-5"></div>
        </div>
      </div>

      {/* ------------container-2--------------- */}
      <div>
        <div class="container  row py-5">
          <div class="section-header text-center mb-5">
            <h3 className="dancingFont text-warning">Our Friendly Care</h3>
            <h6 className="my-3 fs-5">SERVICES</h6>
            <img src={seprator1} alt="section-seprator" />
          </div>
          <div class="col-md-11 col-lg-3 col-sm-12 text-lg-end  ">
            <div class="services-box ">
              <i class="fa-solid fa-xl fa-user-large text-warning"></i>
              <h6 className="fs-lg-3">SMILING SERVICES</h6>
              <p>
                The one day when lady met fellow and they knew it was much more
                than a hunch the first mate and his Skipper.
              </p>
            </div>
            <div class="services-box mt-4">
              <i class="fa-solid fa-xl fa-ranking-star text-warning"></i>
              <h6 className="fs-lg-3">BEST QUALITY</h6>
              <p>
                The one day when lady met fellow and they knew it was much more
                than a hunch the first mate and his Skipper.
              </p>
            </div>
            <div class="services-box mt-4">
              <i class="fa-solid fa-xl fa-layer-group text-warning"></i>
              <h6 className="fs-lg-3">GLOBAL FLAVOURS</h6>
              <p>
                The one day when lady met fellow and they knew it was much more
                than a hunch the first mate and his Skipper.
              </p>
            </div>
          </div>

          <div class="col-lg-6 col-md-9 col-sm-12 text-center">
            <img src={services} alt="services" className="w-100" />
          </div>

          <div class="col-lg-3 col-md-11 col-sm-12 ">
            <div class="services-box ">
              <i class="fa-solid fa-xl fa-earth-europe text-warning"></i>
              <h6 className="fs-lg-3">GREAT ATMOSHPERE</h6>
              <p>
                The one day when lady met fellow and they knew it was much more
                than a hunch the first mate and his Skipper.
              </p>
            </div>
            <div class="services-box mt-4">
              <i class="fa-solid fa-xl fa-pizza-slice text-warning"></i>
              <h6 className="fs-lg-3">FRESHLY MADE</h6>
              <p>
                The one day when lady met fellow and they knew it was much more
                than a hunch the first mate and his Skipper.
              </p>
            </div>
            <div class="services-box mt-4">
              <i class="fa-solid fa-xl fa-droplet text-warning"></i>
              <h6 className="fs-lg-3">NATURAL INGREDIENTS</h6>
              <p>
                The one day when lady met fellow and they knew it was much more
                than a hunch the first mate and his Skipper.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* ---------------section--------------- */}
      <section
        class="py-5 bg-dark text-light"
        style={{
          background:
            "url(	https://modinatheme.com/html/foodking-html/assets/img/shape/food-shape-2.png)",
          backgroundPosition: "center",
          backgroundSize: "contain",
        }}
      >
        <div class="container">
          <div class="row">
            <div class="col-md-4 col-lg-4">
              <div class="text-center mb-40">
                <div class=" my-4 text-warning">
                  <i class="fa-solid fa-ranking-star fa-2xl"></i>
                </div>

                <h5 class="h5-lg fw-bold">Original Recipes</h5>

                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor tempus feugiat dolor impedit felis magna dolor
                  vitae
                </p>
              </div>
            </div>

            <div class="col-md-4 col-lg-4">
              <div class="text-center mb-40">
                <div class=" my-4 text-warning">
                  <i class="fa-solid fa-bowl-food fa-2xl"></i>
                </div>

                <h5 class="h5-lg fw-bold">Quality Foods</h5>

                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor tempus feugiat dolor impedit felis magna dolor
                  vitae
                </p>
              </div>
            </div>

            <div class="col-md-4 col-lg-4">
              <div class="text-center mb-40">
                <div class=" my-4 text-warning">
                  <i class="fa-solid fa-person-biking fa-2xl"></i>
                </div>

                <h5 class="h5-lg fw-bold">Fastest Delivery</h5>

                <p>
                  Porta semper lacus cursus, feugiat primis ultrice in ligula
                  risus auctor tempus feugiat dolor impedit felis magna dolor
                  vitae
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ---------container-3----------- */}
      <div class="section text-center container-fluid pt-4 ">
        <div class="my-lg-3">
          <h3 className="dancingFont text-warning">Our Pizza Stuffs</h3>
          <h5>GALLERY</h5>
          <img src={seprator1} alt="section-seprator" />
          <p>
            The one day when the lady met this fellow and they knew it was much
            more than a hunch the first mate and his Skipper too will do their
            comfortable
          </p>
        </div>
        <ul class=" row list-unstyled ">
          <li class="col-md-3 col-sm-4 col-xs-6 ">
            <div class="content-image-block">
              <a href=".#">
                <img src={gallery1} alt="gallery" className="w-100" />
              </a>
            </div>
          </li>
          <li class="col-md-6 col-sm-8 col-xs-6 ">
            <div class="content-image-block">
              <a href=".#">
                <img src={gallery2} alt="gallery" className="w-100" />
              </a>
              {/* <div class="content-block-hover">
                <a href="#" title="Search">
                  <i class="icon icon-Search"></i>
                </a>
                <a href="gallery-single.html" title="Link">
                  <i class="icon icon-FullScreen"></i>
                </a>
                <h3>PIZZA MANIA</h3>
                <p>
                  The one day when the lady met this fellow and they knew it was
                  much more than a hunch
                </p>
              </div> */}
            </div>
          </li>
          <li class="col-md-3 col-sm-4 col-xs-6 ">
            <div class="content-image-block">
              <a href=".#">
                <img src={gallery3} alt="gallery" className="w-100" />
              </a>
              {/* <div class="content-block-hover">
                <a href="#" title="Search">
                  <i class="icon icon-Search"></i>
                </a>
                <a href="gallery-single.html" title="Link">
                  <i class="icon icon-FullScreen"></i>
                </a>
                <h3>PIZZA MANIA</h3>
                <p>
                  The one day when the lady met this fellow and they knew it was
                  much more than a hunch
                </p>
              </div> */}
            </div>
          </li>
          <li class="col-md-3 col-sm-4 col-xs-6">
            <div class="content-image-block">
              <a href=".#">
                <img src={gallery4} alt="gallery" className="w-100" />
              </a>
              {/* <div class="content-block-hover">
                <a href="#" title="Search">
                  <i class="icon icon-Search"></i>
                </a>
                <a href="gallery-single.html" title="Link">
                  <i class="icon icon-FullScreen"></i>
                </a>
                <h3>PIZZA MANIA</h3>
                <p>
                  The one day when the lady met this fellow and they knew it was
                  much more than a hunch
                </p>
              </div> */}
            </div>
          </li>
          <li class="col-md-3 col-sm-4 col-xs-6 ">
            <div class="content-image-block">
              <a href=".#">
                <img src={gallery5} alt="gallery" className="w-100" />
              </a>
              {/* <div class="content-block-hover">
                <a href="#" title="Search">
                  <i class="icon icon-Search"></i>
                </a>
                <a href="gallery-single.html" title="Link">
                  <i class="icon icon-FullScreen"></i>
                </a>
                <h3>PIZZA MANIA</h3>
                <p>
                  The one day when the lady met this fellow and they knew it was
                  much more than a hunch
                </p>
              </div> */}
            </div>
          </li>
          <li class="col-md-6 col-sm-8 col-xs-6 ">
            <div class="content-image-block">
              <a href=".#">
                <img src={gallery6} alt="gallery" className="w-100" />
              </a>
              {/* <div class="content-block-hover">
                <a href="#" title="Search">
                  <i class="icon icon-Search"></i>
                </a>
                <a href="gallery-single.html" title="Link">
                  <i class="icon icon-FullScreen"></i>
                </a>
                <h3>PIZZA MANIA</h3>
                <p>
                  The one day when the lady met this fellow and they knew it was
                  much more than a hunch
                </p>
              </div> */}
            </div>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default SecondSection;
