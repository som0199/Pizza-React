import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <>
      <div class=" bg-dark text-light p-5">
        <div class="container">
          <div class="row subscribe-content px-lg-5">
            <h4 className="fs-5 mb-3 ">SIGNUP TO OUR NEWSLETTER</h4>
            <div class=" col-sm-12 col-md-8 input-group border-0 ">
              <input
                type="text"
                placeholder="Enter Your Email"
                class="form-control bg-dark-subtle rounded rounded-pill "
              />
              <span class="input-group-btn mx-2 py-1 col-12 col-md-4 ">
                <button
                  type="button"
                  title="Sign Up"
                  class="btn btn-warning  rounded rounded-pill  text-wrap"
                >
                  Subscribe
                </button>
              </span>
            </div>
          </div>
        </div>
      </div>
      <footer class="bg-dark text-light pt-3">
        <hr class="mb-5" />
        <div class="container">
          <div class="row">
            <div class="col-md-3">
              <h5>Navigation</h5>
              <ul class="list-unstyled  ">
                <li className="pt-2">
                  <Link className="text-decoration-none logo" to={"/"}>
                    Home
                  </Link>
                </li>
                <li className="pt-2">
                  <Link to={"/about"} className="text-decoration-none logo">
                    About
                  </Link>
                </li>
                <li className="pt-2">
                  <Link to={"/blog"} className="text-decoration-none logo">
                    Blog
                  </Link>
                </li>
                <li className="pt-2">
                  <Link to={"/contact"} className="text-decoration-none logo">
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>Legal</h5>
              <ul class="list-unstyled">
                <li className="pt-2">
                  <a href="#" className="text-decoration-none logo">
                    Terms and Conditions
                  </a>
                </li>
              </ul>
            </div>
            <div class="col-md-3">
              <h5>Follow On</h5>
              <ul className="list-unstyled d-flex justify-content-around  flex-row mt-3 ">
                <li className="list-group-item  border-0 rounded-circle">
                  <a href="https://www.facebook.com/soham.gurjar.710">
                    <i class="fa-brands fa-facebook-f fa-xl logo"></i>
                  </a>
                </li>
                <li className="list-group-item  border-0">
                  <a href="https://github.com/som0199">
                    <i class="fa-brands fa-github fa-xl logo"></i>
                  </a>
                </li>
                <li className="list-group-item  border-0">
                  <a href="https://www.linkedin.com/in/soham-bijghawne-09969023a?lipi=urn%3Ali%3Apage%3Ad_flagship3_profile_view_base_contact_details%3BbE1iWhqXRTS3sXrHZroe1w%3D%3D">
                    <i class="fa-brands fa-linkedin fa-xl logo "></i>
                  </a>
                </li>
                <li className="list-group-item  border-0">
                  <a href="https://join.skype.com/invite/vi42vG4Nc35A">
                    <i class="fa-brands fa-skype fa-xl logo"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>

          {/* <p class="text-center">
            &copy; 2024 Your Company. All rights reserved.
          </p> */}
        </div>
        {/* <hr class="my-1" /> */}

        <div className="d-flex bg-secondary align-items-center justify-content-around flex-row flex-wrap pt-2">
          <p className=" pt-2 mx-2 ">
            © 2024 Tasty-Slice™. &nbsp;{" "}
            <strong className="rights fw-light">All Rights Reserved.</strong>
            || Made with ❤️ by Mr.Gurjar
          </p>

          {/* <hr class="border border-warning border-1 opacity-75" /> */}
        </div>
      </footer>
    </>
  );
};

export default Footer;
